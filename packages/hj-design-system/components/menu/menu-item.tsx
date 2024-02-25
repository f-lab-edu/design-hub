import { PolymorphicComponentPropsWithRef } from "components/polymorphic";
import { ElementType, forwardRef, useContext } from "react";
import { MenuContext } from "./menu-context";

type MenuItemProps<C extends ElementType = "li"> =
  PolymorphicComponentPropsWithRef<C>;

export const MenuItem = forwardRef(function MenuItem<
  C extends ElementType = "li",
>(props: MenuItemProps<C>) {
  const { as, children, ...rest } = props;

  const menuContext = useContext(MenuContext);

  const Component = as || "li";

  if (!menuContext) {
    throw new Error("MenuItem should be used within a MenuRoot");
  }

  return <Component {...rest}>{children}</Component>;
});
