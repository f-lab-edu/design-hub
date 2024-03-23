import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { useCarousel } from "./carousel-context";

type CarouselControlProps = HTMLAttributes<HTMLDivElement>;

export const CarouselControl = forwardRef(function CarouselControl(
  props: CarouselControlProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const context = useCarousel();

  return <div ref={ref} {...props} />;
});
