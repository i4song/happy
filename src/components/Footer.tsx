import { AnimatePresence, Variants, motion } from "framer-motion";

const LineVariants: Variants = {
  line: {
    width: [0, 300],
    transition: {
      duration: 2,
    },
  },
  lineExit: {
    width: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Line = () => {
  return (
    <>
      <motion.div
        key="progress-bar"
        className={`h-[2px] bg-white mb-[-2px]`}
        variants={LineVariants}
        animate="line"
        exit="lineExit"
      />
    </>
  );
};

const Footer = ({ isHolding }: { isHolding: boolean }) => {
  return (
    <div className="absolute bottom-0 flex flex-col items-center sm:w-[480px] w-[300px] h-20 mt-90">
      <p className="text-white text-sm mb-3 select-none">
        {isHolding ? "Keep Holding" : "Click & Hold"}
      </p>
      <AnimatePresence>{isHolding ? <Line /> : null}</AnimatePresence>
      <div
        key="progress-placeholder1"
        className="h-[2px] w-[300px] bg-gray-800 -z-10"
      />
    </div>
  );
};

export default Footer;
