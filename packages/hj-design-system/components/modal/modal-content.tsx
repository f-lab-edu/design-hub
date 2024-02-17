/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef, useContext, useEffect } from "react";
import { getSizeStyles, modalContentBaseStyle } from "./styles/modal-content";
import { ModalSizeSet } from "./types";
import { ModalContext } from "./modal-context";

type ModalContentProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      size?: ModalSizeSet;
    }
  >;

export const ModalContent = forwardRef(function ModalContent<
  C extends ElementType = "div",
>(props: ModalContentProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, size = "md", ...rest } = props;
  const Component = as || "div";

  const modalContentStyles = [modalContentBaseStyle, getSizeStyles(size)];

  const modalContext = useContext(ModalContext);

  useEffect(() => {
    modalContext?.setSize(size);
  }, [size]);

  if (!modalContext)
    throw new Error("Modal.Content must be rendered within a Modal.Root.");

  return (
    <Component ref={ref} css={modalContentStyles} {...rest}>
      {children}
    </Component>
  );
});
