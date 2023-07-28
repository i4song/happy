import { useEffect, useState } from "react";

const useInnerWidth = () => {
  const [width, setWidth] = useState(600);
  useEffect(() => {
    if (window.innerWidth < 640) {
      setWidth(300);
    } else {
      setWidth(600);
    }
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
  return width;
};

export default useInnerWidth;
