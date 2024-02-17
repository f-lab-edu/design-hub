/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef } from "react";
import { modalHeaderBaseStyle } from "./styles/modal-header";

type ModalHeaderProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

export const ModalHeader = forwardRef(function ModalHeader<
  C extends ElementType = "div",
>(props: ModalHeaderProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, ...rest } = props;
  const Component = as || "div";

  return (
    <Component ref={ref} css={modalHeaderBaseStyle} {...rest}>
      {children}
    </Component>
  );
});
