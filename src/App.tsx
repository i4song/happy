import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import Footer from "./components/Footer";
import "./App.css";
import Heart from "./components/Heart";
import { useState } from "react";
import { motion } from "framer-motion";
import motionVariants from "./components/motionVariants";
import { Stage } from "@pixi/react";

function App() {
  const [isHolding, setIsHolding] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsHolding(!isHolding);
  };
  const handleClickMobile = () => {
    setIsHolding(!isHolding);
  };
  return (
    <>
      <div
        className="w-full h-full flex flex-col justify-center items-center"
        onMouseDown={handleClick}
        onMouseUp={handleClick}
        onTouchStart={handleClickMobile}
        onTouchEnd={handleClickMobile}
      >
        <Header />
        <MainLayout>
          <p className="text-white text-3xl sm:mt-32 mt-8">Hi, I'm Pposong</p>
          {isHolding ? (
            <motion.div
              className="w-full flex h-60 place-content-center sm:mt-20 mt-8"
              variants={motionVariants}
              animate="shake"
            >
              <Stage width={300} height={300}>
                <Heart isHolding={isHolding} />
              </Stage>
            </motion.div>
          ) : (
            <motion.div
              className="w-full flex h-60 place-content-center sm:mt-20 mt-8"
              variants={motionVariants}
              animate="jump"
            >
              <Stage width={300} height={300}>
                <Heart isHolding={isHolding} />
              </Stage>
            </motion.div>
          )}
        </MainLayout>
        <Footer isHolding={isHolding} />
      </div>
    </>
  );
}

export default App;
