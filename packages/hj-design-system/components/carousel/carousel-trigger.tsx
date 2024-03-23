import { ForwardedRef, HTMLAttributes, forwardRef } from "react";

type ControlType = "prev" | "next";

type CarouselTriggerProps = HTMLAttributes<HTMLButtonElement> & {
  type: ControlType;
};

export const CarouselTrigger = forwardRef(function CarouselTrigger(
  props: CarouselTriggerProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const { type, ...rest } = props;

  return <button ref={ref} {...rest} />;
});
