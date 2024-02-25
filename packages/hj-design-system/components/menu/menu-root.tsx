/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef, useMemo } from "react";
import { MenuProvider } from "./menu-context";
import { getDirectionStyles, rootBaseStyles } from "./styles/menu-root";

export type Direction = "vertical" | "horizontal";

type MenuRootProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      direction?: Direction;
    }
  >;

export const MenuRoot = forwardRef(function MenuRoot<
  C extends ElementType = "div",
>(props: MenuRootProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, style, direction = "horizontal", ...rest } = props;
  const Component = as || "div";

  const combinedStyle = useMemo(() => {
    const baseStyles = [rootBaseStyles, getDirectionStyles(direction)];
    return style ? [baseStyles, style] : baseStyles;
  }, [style, rootBaseStyles, direction]);

  return (
    <MenuProvider>
      <Component ref={ref} css={combinedStyle} {...rest}>
        {children}
      </Component>
    </MenuProvider>
  );
});
