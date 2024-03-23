import { ForwardedRef, HTMLAttributes, forwardRef } from "react";

type CarouselControlProps = HTMLAttributes<HTMLDivElement>;

export const CarouselControl = forwardRef(function CarouselControl(
  props: CarouselControlProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  return <div ref={ref} {...props} />;
});
