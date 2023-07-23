import { Variants } from "framer-motion";

const motionVariants: Variants = {
  jump: {
    y: [0, -30],
    x: [0, 0],
    transition: {
      duration: 0.6,
      ease: ["easeOut"],

      repeat: Infinity,
      repeatType: "reverse",
    },
  },
  jumpBlur: {
    opacity: [1, 0.5],
    scale: [1, 1.5],
    transition: {
      duration: 0.6,
      ease: ["easeOut"],

      repeat: Infinity,
      repeatType: "reverse",
    },
  },
  shake: {
    x: [0, Math.random() * 50 - 25],
    transition: {
      duration: 0.1,

      repeat: Infinity,
      repeatType: "reverse",
    },
  },
  reset: {
    x: 0,
    y: 0,
  },
};

export default motionVariants;
