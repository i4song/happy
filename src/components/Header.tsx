import { motion, AnimatePresence } from "framer-motion";

import code from "../assets/code.png";
import velog from "../assets/velog.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";
import { useState } from "react";

const ImageDiv = (
  props: React.HTMLAttributes<HTMLDivElement> & { url: string }
) => {
  return (
    <div
      className="mr-3 w-6 h-6"
      key={props.url}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <img src={props.url} alt={props.url} />
    </div>
  );
};

const MotionSpan = ({ children }: { children: string }) => (
  <AnimatePresence>
    <motion.span
      className="mr-3 text-white overflow-hidden whitespace-nowrap text-clip"
      key={children}
      initial={{ width: 0 }}
      animate={{ width: "auto" }}
    >
      {children}
    </motion.span>
  </AnimatePresence>
);

const Header = () => {
  const [showCode, setShowCode] = useState(false);
  const [showVelog, setShowVelog] = useState(false);
  const [showInstagram, setShowInstagram] = useState(false);
  const [showLinkedin, setShowLinkedin] = useState(false);
  const [showMail, setShowMail] = useState(false);

  return (
    <div className="fixed top-6 flex flex-row sm:left-12 left-6  w-full justify-start">
      <a href="https://github.com/i4song" target="_blank">
        <ImageDiv
          url={code}
          onMouseEnter={() => {
            setShowCode(true);
          }}
          onMouseLeave={() => {
            setShowCode(false);
          }}
        />
      </a>

      {showCode && <MotionSpan>View Code</MotionSpan>}
      <a href="https://velog.io/@dnr6054" target="_blank">
        <ImageDiv
          url={velog}
          onMouseEnter={() => {
            setShowVelog(true);
          }}
          onMouseLeave={() => {
            setShowVelog(false);
          }}
        />
      </a>

      {showVelog && <MotionSpan>Visit Blog</MotionSpan>}
      <a href="https://www.instagram.com/odo_orr/" target="_blank">
        <ImageDiv
          url={instagram}
          onMouseEnter={() => {
            setShowInstagram(true);
          }}
          onMouseLeave={() => {
            setShowInstagram(false);
          }}
        />
      </a>
      {showInstagram && <MotionSpan>@odo_orr</MotionSpan>}
      <a href="https://www.linkedin.com/in/i4song/" target="_blank">
        <ImageDiv
          url={linkedin}
          onMouseEnter={() => {
            setShowLinkedin(true);
          }}
          onMouseLeave={() => {
            setShowLinkedin(false);
          }}
        />
      </a>
      {showLinkedin && <MotionSpan>Visit LinkedIn</MotionSpan>}
      <a href="mailto:i4song.dev@gmail.com" target="_blank">
        <ImageDiv
          url={mail}
          onMouseEnter={() => {
            setShowMail(true);
          }}
          onMouseLeave={() => {
            setShowMail(false);
          }}
        />
      </a>
      {showMail && <MotionSpan>Say Hi</MotionSpan>}
    </div>
  );
};

export default Header;
