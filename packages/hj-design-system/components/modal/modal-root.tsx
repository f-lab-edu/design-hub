import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, ReactElement, ReactNode, forwardRef } from "react";
import { useScrollLock } from "../../hooks/use-scroll-lock";
import { Portal } from "../portal";

type ModalRootProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      /**
       * If `true`, the modal will be open.
       */
      isOpen: boolean;
      /**
       * The wrapper element to render the modal into.
       * @default component/Portal
       */
      wrapper?: (children: ReactNode) => ReactElement;
    }
  >;

export const ModalRoot = forwardRef(function ModalRoot<
  C extends ElementType = "div",
>(props: ModalRootProps<C>, ref?: PolymorphicRef<C>) {
  const {
    as,
    children,
    isOpen,
    wrapper = (children) => <Portal>{children}</Portal>,
    ...rest
  } = props;
  const Component = as || "div";

  useScrollLock(isOpen);

  const modalRoot = (
    <Component role="dialog" ref={ref} {...rest}>
      {isOpen && children}
    </Component>
  );

  return wrapper(modalRoot);
});
