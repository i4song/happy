import { AdvancedBloomFilter } from "@pixi/filter-advanced-bloom";
import { Container, Sprite, withFilters, useTick } from "@pixi/react";
import love from "../assets/love.png";
import { useState } from "react";

const Heart = ({
  isHolding,
  width,
  setHeartVisible,
  holdingTimeRef,
}: {
  isHolding: boolean;
  width: number;
  setHeartVisible: React.Dispatch<React.SetStateAction<boolean>>;
  holdingTimeRef: React.MutableRefObject<number>;
}) => {
  const [bloom, setBloom] = useState(0.1);
  const [blur, setBlur] = useState(0.1);
  const [threshold, setThreshold] = useState(0.9);
  const Filters = withFilters(Container, {
    bloom: AdvancedBloomFilter,
  });

  useTick(() => {
    if (isHolding) {
      if (bloom < 2) setBloom((bloom) => bloom + 0.005);
      if (blur < 10) setBlur((blur) => blur + 0.2);
      if (threshold > 0.1) setThreshold((threshold) => threshold - 0.02);
      holdingTimeRef.current += 1;
      if (holdingTimeRef.current > 120) setHeartVisible(false);
    } else {
      holdingTimeRef.current = 0;
      setHeartVisible(true);
      if (bloom > 0) setBloom((bloom) => bloom - 0.03);
      if (blur > 0) setBlur((blur) => blur - 0.1);
      if (threshold < 0.9) setThreshold((threshold) => threshold + 0.05);

      // setBloom(0);
      // setBlur(0);
      // setThreshold(0.9);
    }
  });
  return (
    <Filters
      scale={2}
      width={width}
      height={width}
      bloom={{ bloomScale: bloom, blur: blur, threshold: threshold }}
    >
      <Sprite image={love} width={width} height={width} />
    </Filters>
  );
};

export default Heart;
