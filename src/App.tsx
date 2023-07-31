import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import Footer from "./components/Footer";
import "./App.css";
import Heart from "./components/Heart";
import { AnimatePresence, motion } from "framer-motion";
import motionVariants from "./components/motionVariants";
import { Stage } from "@pixi/react";
import useInnerWidth from "./components/useInnerWidth";
import useHold from "./components/useHold";
import { useRef, useState } from "react";
import ProfileImg from "./assets/profile.png";

function App() {
  const [heartVisible, setHeartVisible] = useState(true);
  const {
    isHolding,
    handleMouseDown,
    handleMouseUp,
    handleTouchStart,
    handleTouchEnd,
  } = useHold(setHeartVisible);
  const width = useInnerWidth();

  const holdingTimeRef = useRef(0);

  holdingTimeRef.current = 0;

  return (
    <>
      <div
        className="w-full h-full flex flex-col items-center"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Header />
        <MainLayout>
          <AnimatePresence mode="popLayout">
            {heartVisible && (
              <motion.p
                className="text-white text-3xl sm:mt-32 mt-8"
                key="title-key"
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 2 }}
                transition={{ duration: 0.2 }}
              >
                Hi, I'm Pposong
              </motion.p>
            )}
          </AnimatePresence>
          <AnimatePresence mode="popLayout">
            {heartVisible && (
              <motion.div
                className="w-full flex h-60 place-content-center sm:-mt-20 mt-8 -z-10"
                key="heart-key"
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.5 }}
                transition={{ duration: 0.2 }}
              >
                {isHolding ? (
                  <motion.div variants={motionVariants} animate="shake">
                    <Stage width={width} height={width}>
                      <Heart
                        isHolding={isHolding}
                        width={width}
                        setHeartVisible={setHeartVisible}
                        holdingTimeRef={holdingTimeRef}
                      />
                    </Stage>
                  </motion.div>
                ) : (
                  <motion.div variants={motionVariants} animate="jump">
                    <Stage width={width} height={width}>
                      <Heart
                        isHolding={isHolding}
                        width={width}
                        setHeartVisible={setHeartVisible}
                        holdingTimeRef={holdingTimeRef}
                      />
                    </Stage>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="popLayout">
            {!heartVisible && (
              <motion.img
                className="w-80 ml-auto mr-auto mt-12 sm:mt-40 -z-10"
                src={ProfileImg}
                key="profile-key"
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </MainLayout>

        <Footer isHolding={isHolding} />
        <div className="fixed w-full h-full -z-20" />
      </div>
    </>
  );
}

export default App;
