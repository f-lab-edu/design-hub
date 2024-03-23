import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { useCarousel } from "./carousel-context";

type ControlType = "prev" | "next";

type CarouselTriggerProps = HTMLAttributes<HTMLButtonElement> & {
  type: ControlType;
};

export const CarouselTrigger = forwardRef(function CarouselTrigger(
  props: CarouselTriggerProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const { type, ...rest } = props;

  const context = useCarousel();

  return <button ref={ref} {...rest} />;
});
