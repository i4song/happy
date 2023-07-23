import { AdvancedBloomFilter } from "@pixi/filter-advanced-bloom";
import { Container, Sprite, withFilters, useTick } from "@pixi/react";
import love from "../assets/love.png";
import { useState } from "react";

const Heart = ({ isHolding, width }: { isHolding: boolean; width: number }) => {
  const [bloom, setBloom] = useState(0.1);
  const [blur, setBlur] = useState(0.1);
  const [threshold, setThreshold] = useState(0.9);
  const Filters = withFilters(Container, {
    bloom: AdvancedBloomFilter,
  });

  useTick(() => {
    if (isHolding) {
      setBloom((bloom) => {
        if (bloom < 2) return bloom + 0.03;
        else return bloom;
      });
      setBlur((blur) => {
        if (blur < 16) return blur + 0.1;
        else return blur;
      });
      setThreshold((threshold) => {
        if (threshold > 0.1) return threshold - 0.005;
        else return threshold;
      });
    } else {
      setBloom(0);
      setBlur(0);
      setThreshold(0.9);
    }
  });
  return (
    <Filters
      scale={3}
      width={width}
      height={width}
      bloom={{ bloomScale: bloom, blur: blur, threshold: threshold }}
    >
      <Sprite image={love} width={width} height={width} />
    </Filters>
  );
};

export default Heart;
