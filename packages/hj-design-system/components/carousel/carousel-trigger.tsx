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
  const { type, onClick, ...rest } = props;

  const context = useCarousel();

  const handleClick = () => {
    if (type === "prev") {
      context.changeCurrent(Math.max(0, context.current - 1));
    } else {
      context.changeCurrent(Math.min(context.total - 1, context.current + 1));
    }
  };

  return (
    <button
      ref={ref}
      onClick={(e) => {
        handleClick();
        if (onClick) {
          onClick(e);
        }
      }}
      {...rest}
    />
  );
});
