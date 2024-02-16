import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef } from "react";

type ModalRootProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

export const ModalRoot = forwardRef(function ModalRoot<
  C extends ElementType = "div",
>(props: ModalRootProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, ...rest } = props;
  const Component = as || "div";

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});
