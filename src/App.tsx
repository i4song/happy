import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import Footer from "./components/Footer";
import "./App.css";
import Heart from "./components/Heart";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import motionVariants from "./components/motionVariants";
import { Stage } from "@pixi/react";

function App() {
  const [isHolding, setIsHolding] = useState(false);
  const [width, setWidth] = useState(600);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 640) {
        setWidth(300);
      } else {
        setWidth(600);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth < 640) {
          setWidth(300);
        } else {
          setWidth(600);
        }
      });
    };
  }, []);
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsHolding(true);
  };
  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsHolding(false);
  };
  const handleTouchStart = () => {
    setIsHolding(true);
  };
  const handleTouchEnd = () => {
    setIsHolding(false);
  };
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
          <p className="text-white text-3xl sm:mt-32 mt-8">Hi, I'm Pposong</p>
          {isHolding ? (
            <motion.div
              className="w-full flex h-60 place-content-center sm:-mt-20 mt-8 -z-10"
              variants={motionVariants}
              animate="shake"
            >
              <Stage width={width} height={width}>
                <Heart isHolding={isHolding} width={width} />
              </Stage>
            </motion.div>
          ) : (
            <motion.div
              className="w-full flex h-60 place-content-center sm:-mt-20 mt-8 -z-10"
              variants={motionVariants}
              animate="jump"
            >
              <Stage width={width} height={width}>
                <Heart isHolding={isHolding} width={width} />
              </Stage>
            </motion.div>
          )}
        </MainLayout>
        <Footer isHolding={isHolding} />
        <div className="fixed w-full h-full -z-20" />
      </div>
    </>
  );
}

export default App;
