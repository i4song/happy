import { AdvancedBloomFilter } from "@pixi/filter-advanced-bloom";
import { Container, Sprite, withFilters, useTick } from "@pixi/react";
import love from "../assets/love.png";
import { useState } from "react";

const Heart = ({ isHolding }: { isHolding: boolean }) => {
  const [bloom, setBloom] = useState(0.1);
  const [blur, setBlur] = useState(0.1);
  const Filters = withFilters(Container, {
    bloom: AdvancedBloomFilter,
  });
  useTick(() => {
    if (isHolding) {
      setBloom((bloom) => {
        if (bloom < 2) return bloom + 0.01;
        else return bloom;
      });
      setBlur((blur) => {
        if (blur < 10) return blur + 0.1;
        else return blur;
      });
    } else {
      setBloom(0);
      setBlur(0);
    }
  });
  return (
    <Filters
      scale={2}
      width={300}
      height={300}
      bloom={{ bloomScale: bloom, blur: blur }}
    >
      <Sprite image={love} width={250} height={250} x={25} y={25} />
    </Filters>
  );
};

export default Heart;
