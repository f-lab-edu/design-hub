/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import {
  ElementType,
  ReactElement,
  forwardRef,
  useContext,
  useMemo,
} from "react";
import {
  closeButtonBoxStyles,
  modalHeaderBaseStyle,
} from "./styles/modal-header";
import { ModalContext } from "./modal-context";
import { css } from "@emotion/react";

type ModalHeaderProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      closeButton?: ReactElement;
    }
  >;

export const ModalHeader = forwardRef(function ModalHeader<
  C extends ElementType = "div",
>(props: ModalHeaderProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, style, closeButton, ...rest } = props;
  const Component = as || "div";

  const modalContext = useContext(ModalContext);

  const combinedStyles = useMemo(() => {
    if (style) return [modalHeaderBaseStyle, style];
    return modalHeaderBaseStyle;
  }, [style]);

  const closeElement = closeButton || (
    <CloseButton onClose={modalContext?.onClose} />
  );

  if (!modalContext)
    throw new Error("Modal.Header must be rendered within a Modal.Root.");

  return (
    <Component ref={ref} css={combinedStyles} {...rest}>
      {children}
      {closeElement}
    </Component>
  );
});

const CloseButton = ({ onClose }: { onClose?: () => void }) => {
  return (
    <button onClick={onClose} css={css(closeButtonBoxStyles)}>
      <svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 13L13 5M5 5L13 13" stroke="#343A40" />
      </svg>
    </button>
  );
};
