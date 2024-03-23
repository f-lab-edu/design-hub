import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { CarouselProvider } from "./carousel-context";

type CarouselRootProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * The current index of the carousel.
   */
  current?: number;
};

export const CarouselRoot = forwardRef(function CarouselRoot(
  props: CarouselRootProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const { children, current, ...rest } = props;

  return (
    <CarouselProvider current={current}>
      <div ref={ref} aria-roledescription="carousel" {...rest}>
        {children}
      </div>
    </CarouselProvider>
  );
});
