import { PolymorphicComponentPropsWithRef } from "components/polymorphic";
import { AnimatePresence, motion } from "framer-motion";
import { ComponentProps, ElementType, forwardRef, useContext } from "react";
import { defaultAnimationVariants } from "../../theme/foundations/animation";
import { MenuContext } from "./menu-context";

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
>(props: MenuListProps<C>) {
  const { as, children, disableAnimation, ...rest } = props;

  const menuContext = useContext(MenuContext);

  const Component = disableAnimation ? as || "ul" : motion(as || "ul");

  return (
    <>
      {menuContext?.isOpen && (
        <nav>
          <Component
            role="menu"
            animate={!disableAnimation ? "animate" : undefined}
            exit={!disableAnimation ? "exit" : undefined}
            initial={!disableAnimation ? "initial" : undefined}
            variants={!disableAnimation ? defaultAnimationVariants : undefined}
            {...rest}
          >
            {children}
          </Component>
        </nav>
      )}
    </>
  );
});
