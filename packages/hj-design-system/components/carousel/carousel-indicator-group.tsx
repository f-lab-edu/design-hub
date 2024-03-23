import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { useCarousel } from "./carousel-context";

type CarouselIndicatorGroupProps = HTMLAttributes<HTMLDivElement>;

export const CarouselIndicatorGroup = forwardRef(
  function CarouselIndicatorGroup(
    props: CarouselIndicatorGroupProps,
    ref?: ForwardedRef<HTMLDivElement>
  ) {
    const context = useCarousel();

    return <div ref={ref} {...props} />;
  }
);
