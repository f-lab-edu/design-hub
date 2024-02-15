import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef } from "react";

type ModalHeaderProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

export const ModalHeader = forwardRef(function ModalHeader<
  C extends ElementType = "div",
>(props: ModalHeaderProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, ...rest } = props;
  const Component = as || "div";

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});
