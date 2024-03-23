import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { useCarousel } from "./carousel-context";

type CarouselViewportProps = HTMLAttributes<HTMLDivElement>;

export const CarouselViewport = forwardRef(function CarouselViewport(
  props: CarouselViewportProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const context = useCarousel();

  return <div ref={ref} {...props} />;
});
