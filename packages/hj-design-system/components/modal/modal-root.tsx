/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import {
  ComponentProps,
  ElementType,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  forwardRef,
} from "react";
import { useScrollLock } from "../../hooks/use-scroll-lock";
import { Portal } from "../portal";
import { AnimatePresence, motion } from "framer-motion";
import { dimVariants, dimmedStyle } from "./styles/modal-root";
import { ModalProvider } from "./modal-context";
import { useKeyDown } from "../../hooks/use-key-down";

type AnimatePresenceMode = ComponentProps<typeof AnimatePresence>;

type ModalRootProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      /**
       * The children to render into the `container`.
       * @default document.body
       */
      portalContainer?: Element | DocumentFragment | null;
      /**
       * If `true`, the children will be rendered in place instead of being portaled.
       */
      disablePortal?: boolean;
      /**
       * If `true`, the modal will be open.
       */
      isOpen: boolean;
      /**
       * The wrapper element to render the modal into.
       * @default component/Portal
       */
      wrapper?: (children: ReactNode) => ReactElement;
      /**
       * @description AnimatePresence props
       * @default { mode: 'wait' }
       */
      animatePresenceProps?: AnimatePresenceMode;
      /**
       * whether to close the modal when dim is clicked
       */
      closeOnClickDim?: boolean;
      /**
       * @description Callback when dim is clicked
       */
      onClose: () => void;
    }
  >;

export const ModalRoot = forwardRef(function ModalRoot<
  C extends ElementType = "div",
>(props: ModalRootProps<C>, ref?: PolymorphicRef<C>) {
  const {
    as,
    children,
    isOpen,
    animatePresenceProps,
    closeOnClickDim = true,
    onClose,
    portalContainer,
    disablePortal,
    ...rest
  } = props;

  const Component = motion(as || "div");

  useScrollLock(isOpen);

  useKeyDown({ callBackFn: onClose });

  const onClickDimDefault: MouseEventHandler = (e): void => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <Portal portalContainer={portalContainer} disablePortal={disablePortal}>
      {isOpen && (
        <ModalProvider onClose={onClose}>
          <AnimatePresence {...animatePresenceProps}>
            <Component
              role="dialog"
              animate="animate"
              exit="exit"
              initial="initial"
              css={dimmedStyle}
              variants={dimVariants}
              ref={ref}
              onClick={onClickDimDefault}
              {...rest}
            >
              {children}
            </Component>
          </AnimatePresence>
        </ModalProvider>
      )}
    </Portal>
  );
});
