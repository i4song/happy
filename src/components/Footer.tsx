import { AnimatePresence, motion } from "framer-motion";

const Line = () => (
  <AnimatePresence>
    <motion.div
      key="progress-bar"
      className={`h-[2px] bg-white`}
      initial={{ width: 0 }}
      animate={{ width: 300 }}
      transition={{ duration: 2 }}
    />
  </AnimatePresence>
);

const LinePlaceholder1 = () => {
  return <div className="h-[2px] w-[300px] mt-[-2px] bg-gray-800 -z-10"></div>;
};

const LinePlaceholder2 = () => {
  return <div className="h-[2px] w-[300px] bg-gray-800 -z-10"></div>;
};

const Footer = ({ isHolding }: { isHolding: boolean }) => {
  return (
    <div className="absolute bottom-0 flex flex-col items-center sm:w-[480px] w-[300px] h-20 mt-90">
      <p className="text-white text-sm mb-3 select-none">
        {isHolding ? "Keep Holding" : "Click & Hold"}
      </p>
      {isHolding ? (
        <>
          <Line />
          <LinePlaceholder1 />
        </>
      ) : (
        <LinePlaceholder2 />
      )}
    </div>
  );
};

export default Footer;
