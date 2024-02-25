import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef } from "react";
import { MenuProvider } from "./menu-context";

type MenuRootProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

export const MenuRoot = forwardRef(function MenuRoot<
  C extends ElementType = "div",
>(props: MenuRootProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, ...rest } = props;
  const Component = as || "div";

  return (
    <MenuProvider>
      <Component ref={ref} {...rest}>
        {children}
      </Component>
    </MenuProvider>
  );
});
