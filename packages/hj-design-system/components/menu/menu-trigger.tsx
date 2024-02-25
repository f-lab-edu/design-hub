/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef, useContext } from "react";
import { MenuContext } from "./menu-context";

type MenuTriggerProps<C extends ElementType = "button"> =
  PolymorphicComponentPropsWithRef<C>;

export const MenuTrigger = forwardRef(function MenuTrigger<
  C extends ElementType = "button",
>(props: MenuTriggerProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, onClick, ...rest } = props;

  const menuContext = useContext(MenuContext);

  const handleClick = () => {
    onClick?.();
    if (menuContext) {
      menuContext.toggle();
    }
  };

  if (!menuContext) {
    throw new Error("MenuTrigger should be used within a MenuRoot");
  }

  const Component = as || "button";
  return (
    <Component ref={ref} onClick={handleClick} {...rest}>
      {children}
    </Component>
  );
});
