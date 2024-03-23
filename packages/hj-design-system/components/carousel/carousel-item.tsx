import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, HTMLAttributes, forwardRef } from "react";
import { useCarousel } from "./carousel-context";

type CarouselItemProps<C extends ElementType = "div"> = HTMLAttributes<C> &
  PolymorphicComponentPropsWithRef<
    C,
    {
      /**
       * The index of the item.
       */
      index?: number;
    }
  >;

export const CarouselItem = forwardRef(function CarouselItem<
  C extends ElementType = "div",
>(props: CarouselItemProps<C>, ref?: PolymorphicRef<C>) {
  const { index, ...rest } = props;

  const context = useCarousel();

  return (
    <div
      aria-roledescription="slide"
      role="tabpanel"
      aria-label={index}
      ref={ref}
      {...rest}
    />
  );
});
