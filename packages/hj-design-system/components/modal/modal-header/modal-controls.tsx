/** @jsxImportSource @emotion/react */

import { PolymorphicComponentPropsWithRef } from "components/polymorphic";
import {
  ElementType,
  Fragment,
  ReactElement,
  forwardRef,
  useContext,
  useMemo,
} from "react";
import { ModalContext } from "../modal-context";
import { css } from "@emotion/react";
import {
  closeButtonBoxStyles,
  modalControlBaseStyle,
} from "../styles/modal-control";

type ModalControlsProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      controlElement?: ReactElement[];
    }
  >;

export const ModalControls = forwardRef(function ModalControls<
  C extends ElementType = "div",
>(props: ModalControlsProps<C>) {
  const { as, children, controlElement, style, ...rest } = props;

  const modalContext = useContext(ModalContext);

  const elementList: ReactElement[] = controlElement
    ? [<CloseButton onClose={modalContext?.onClose} />, ...controlElement]
    : [<CloseButton onClose={modalContext?.onClose} />];

  const Component = as || "div";

  const combinedStyles = useMemo(() => {
    const baseStyles = [modalControlBaseStyle];
    return style ? [baseStyles, style] : baseStyles;
  }, [style]);

  return (
    <Component css={combinedStyles} {...rest}>
      {elementList.map((el, idx) => (
        <Fragment key={idx}>{el}</Fragment>
      ))}
    </Component>
  );
});

const CloseButton = ({ onClose }: { onClose?: () => void }) => {
  return (
    <button onClick={onClose} aria-label="닫기" css={css(closeButtonBoxStyles)}>
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
