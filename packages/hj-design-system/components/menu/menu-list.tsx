/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { AnimatePresence, motion } from "framer-motion";
import {
  Children,
  ComponentProps,
  ElementType,
  ReactElement,
  cloneElement,
  forwardRef,
  useContext,
  useMemo,
} from "react";
import { defaultAnimationVariants } from "../../theme/foundations/animation";
import { MenuContext } from "./menu-context";
import { listBaseStyles, navBaseStyles } from "./styles/menu-list";

type AnimatePresenceProps = ComponentProps<typeof AnimatePresence>;

type MenuListProps<C extends ElementType = "ul"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      /**
       * whether to disable animation
       * @default false
       */
      disableAnimation?: boolean;
      /**
       * @description AnimatePresence props
       */
      animatePresenceProps?: AnimatePresenceProps;
    }
  >;

export const MenuList = forwardRef(function MenuList<
  C extends ElementType = "ul",
>(props: MenuListProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, disableAnimation, style, ...rest } = props;

  const menuContext = useContext(MenuContext);

  const Component = disableAnimation ? as || "ul" : motion(as || "ul");

  const combinedStyle = useMemo(() => {
    return style ? [listBaseStyles, style] : listBaseStyles;
  }, [style, listBaseStyles]);

  if (!menuContext) {
    throw new Error("MenuList should be used within a MenuRoot");
  }

  return (
    <>
      {menuContext?.isOpen && (
        <nav css={navBaseStyles}>
          <Component
            role="menu"
            animate={!disableAnimation ? "animate" : undefined}
            exit={!disableAnimation ? "exit" : undefined}
            initial={!disableAnimation ? "initial" : undefined}
            variants={!disableAnimation ? defaultAnimationVariants : undefined}
            css={combinedStyle}
            ref={ref}
            {...rest}
          >
            {Children.map(children, (child, idx) => {
              return cloneElement(child as ReactElement, {
                onClick: () => menuContext.changeActiveItemIdx(idx),
                isSelected: menuContext.activeItemIdx === idx,
              });
            })}
          </Component>
        </nav>
      )}
    </>
  );
});
