import { AnimatePresence, motion } from "framer-motion";

const Line = () => (
  <AnimatePresence>
    <motion.div
      key="progress-bar"
      className={`h-[2px] bg-white`}
      initial={{ width: 0 }}
      animate={{ width: 360 }}
      transition={{ duration: 2 }}
    />
  </AnimatePresence>
);
const Footer = ({ isHolding }: { isHolding: boolean }) => {
  return (
    <div className="flex flex-col items-center w-[480px] h-20">
      <p className="text-white text-sm mb-3 select-none">
        {isHolding ? "Keep Holding" : "Click & Hold"}
      </p>
      {isHolding && <Line />}
    </div>
  );
};

export default Footer;
