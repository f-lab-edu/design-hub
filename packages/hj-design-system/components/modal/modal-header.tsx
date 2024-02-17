/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef, useContext } from "react";
import { modalHeaderBaseStyle } from "./styles/modal-header";
import { ModalContext } from "./modal-context";

type ModalHeaderProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

export const ModalHeader = forwardRef(function ModalHeader<
  C extends ElementType = "div",
>(props: ModalHeaderProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, ...rest } = props;
  const Component = as || "div";

  const modalContext = useContext(ModalContext);

  if (!modalContext)
    throw new Error("Modal.Header must be rendered within a Modal.Root.");

  return (
    <Component ref={ref} css={modalHeaderBaseStyle} {...rest}>
      {children}
    </Component>
  );
});
