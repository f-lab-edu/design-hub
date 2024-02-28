/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { Children, ElementType, forwardRef, useMemo } from "react";
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

const MINIMUM_CHILDREN_COUNT = 2;

export const MenuRoot = forwardRef(function MenuRoot<
  C extends ElementType = "div",
>(props: MenuRootProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, style, direction = "vertical", ...rest } = props;
  const Component = as || "div";

  const combinedStyle = useMemo(() => {
    const baseStyles = [rootBaseStyles, getDirectionStyles(direction)];
    return style ? [baseStyles, style] : baseStyles;
  }, [style, rootBaseStyles, direction]);

  if (Children.count(children) < MINIMUM_CHILDREN_COUNT) {
    throw new Error(
      `MenuRoot should have at least ${MINIMUM_CHILDREN_COUNT} children. Did you forget to add MenuTrigger, MenuList?`
    );
  }

  return (
    <MenuProvider direction={direction}>
      <Component ref={ref} css={combinedStyle} {...rest}>
        {children}
      </Component>
    </MenuProvider>
  );
});
