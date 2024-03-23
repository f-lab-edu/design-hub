import { ForwardedRef, HTMLAttributes, forwardRef } from "react";

type CarouselItemGroupProps = HTMLAttributes<HTMLDivElement>;

export const CarouselItemGroup = forwardRef(function CarouselItemGroup(
  props: CarouselItemGroupProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  return <div ref={ref} {...props} />;
});
