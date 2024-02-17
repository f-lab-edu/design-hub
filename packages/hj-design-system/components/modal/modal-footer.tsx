import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef } from "react";

type ModalFooterProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

export const ModalFooter = forwardRef(function ModalFooter<
  C extends ElementType = "div",
>(props: ModalFooterProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, ...rest } = props;
  const Component = as || "div";

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});