import {
  Children,
  ForwardedRef,
  HTMLAttributes,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
} from "react";
import { useCarousel } from "./carousel-context";

type CarouselItemGroupProps = HTMLAttributes<HTMLDivElement>;

export const CarouselItemGroup = forwardRef(function CarouselItemGroup(
  props: CarouselItemGroupProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const { children, ...rest } = props;

  const context = useCarousel();

  return (
    <div ref={ref} {...rest}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return null;
        }
        return cloneElement(child as ReactElement, {
          index,
        });
      })}
    </div>
  );
});
