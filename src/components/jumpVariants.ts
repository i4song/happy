import { Variants } from "framer-motion";

const jumpVariants: Variants = {
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
};

export default jumpVariants;
