/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import {
  ElementType,
  ReactNode,
  forwardRef,
  useContext,
  useMemo,
  useRef,
} from "react";
import { MenuContext } from "./menu-context";
import { triggerBaseStyle } from "./styles/menu-trigger";
import { useClickOutSide } from "../../hooks/use-click-outside";

type MenuTriggerProps<C extends ElementType = "button"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      /**
       * right addon
       */
      rightAddon?: ReactNode;
    }
  >;

export const MenuTrigger = forwardRef(function MenuTrigger<
  C extends ElementType = "button",
>(props: MenuTriggerProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, onClick, style, rightAddon, ...rest } = props;

  const menuContext = useContext(MenuContext);

  const originalRef = useRef<HTMLButtonElement>(null);

  const menuTriggerRef = ref ? ref : originalRef;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick?.();
    if (menuContext) {
      menuContext.toggle();
    }
  };

  const combinedStyle = useMemo(() => {
    return style ? [triggerBaseStyle, style] : triggerBaseStyle;
  }, [style, triggerBaseStyle]);

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
      {rightAddon}
    </Component>
  );
});
