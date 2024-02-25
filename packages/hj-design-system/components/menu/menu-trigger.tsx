/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef, useContext, useMemo, useRef } from "react";
import { MenuContext } from "./menu-context";
import { triggerBaseStyle } from "./styles/menu-trigger";
import { useClickOutSide } from "../../hooks/use-click-outside";

type MenuTriggerProps<C extends ElementType = "button"> =
  PolymorphicComponentPropsWithRef<C>;

export const MenuTrigger = forwardRef(function MenuTrigger<
  C extends ElementType = "button",
>(props: MenuTriggerProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, onClick, style, ...rest } = props;

  const menuContext = useContext(MenuContext);

  const menuTriggerRef = ref ? ref : useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    onClick?.();
    if (menuContext) {
      menuContext.toggle();
    }
  };

  const combinedStyle = useMemo(() => {
    return style ? [triggerBaseStyle, style] : triggerBaseStyle;
  }, [style, triggerBaseStyle]);

  useClickOutSide({
    targetRef: menuTriggerRef,
    onClickOutside: () => menuContext?.toggle(),
  });

  if (!menuContext) {
    throw new Error("MenuTrigger should be used within a MenuRoot");
  }

  const Component = as || "button";
  return (
    <Component
      ref={menuTriggerRef}
      onClick={handleClick}
      css={combinedStyle}
      {...rest}
    >
      {children}
    </Component>
  );
});
