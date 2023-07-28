import { useState } from "react";

const useHold = (
  setHeartVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [isHolding, setIsHolding] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsHolding(true);
  };
  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsHolding(false);
    setHeartVisible(true);
  };
  const handleTouchStart = () => {
    setIsHolding(true);
  };
  const handleTouchEnd = () => {
    setIsHolding(false);
    setHeartVisible(true);
  };

  return {
    isHolding,
    handleMouseDown,
    handleMouseUp,
    handleTouchStart,
    handleTouchEnd,
  };
};

export default useHold;
