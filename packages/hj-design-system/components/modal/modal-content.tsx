import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef } from "react";

type ModalContentProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

export const ModalContent = forwardRef(function ModalContent<
  C extends ElementType = "div",
>(props: ModalContentProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, ...rest } = props;
  const Component = as || "div";

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});
