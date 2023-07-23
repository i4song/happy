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
    <div className="fixed top-0 flex flex-row pl-12 pt-6 w-full justify-start">
      <ImageDiv
        url={code}
        onMouseEnter={() => {
          setShowCode(true);
        }}
        onMouseLeave={() => {
          setShowCode(false);
        }}
      />
      {showCode && <MotionSpan>View Code</MotionSpan>}
      <ImageDiv
        url={velog}
        onMouseEnter={() => {
          setShowVelog(true);
        }}
        onMouseLeave={() => {
          setShowVelog(false);
        }}
      />
      {showVelog && <MotionSpan>Visit Blog</MotionSpan>}
      <ImageDiv
        url={instagram}
        onMouseEnter={() => {
          setShowInstagram(true);
        }}
        onMouseLeave={() => {
          setShowInstagram(false);
        }}
      />
      {showInstagram && <MotionSpan>@odo_orr</MotionSpan>}
      <ImageDiv
        url={linkedin}
        onMouseEnter={() => {
          setShowLinkedin(true);
        }}
        onMouseLeave={() => {
          setShowLinkedin(false);
        }}
      />
      {showLinkedin && <MotionSpan>Visit LinkedIn</MotionSpan>}
      <ImageDiv
        url={mail}
        onMouseEnter={() => {
          setShowMail(true);
        }}
        onMouseLeave={() => {
          setShowMail(false);
        }}
      />
      {showMail && <MotionSpan>Say Hi</MotionSpan>}
    </div>
  );
};

export default Header;
