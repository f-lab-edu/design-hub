/** @jsxImportSource @emotion/react */

import {
  ForwardedRef,
  HTMLAttributes,
  KeyboardEvent,
  forwardRef,
  useContext,
  useMemo,
} from "react";
import { ComboboxContext } from "./combobox-context";
import { inputBaseStyle } from "./styles/combobox-input";
import { css } from "@emotion/react";

type ComboboxInput = HTMLAttributes<HTMLInputElement>;

export const ComboboxInput = forwardRef(function ComboboxInput(
  props: ComboboxInput,
  ref: ForwardedRef<HTMLInputElement>
) {
  const { style, ...rest } = props;

  const comboboxContext = useContext(ComboboxContext);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!comboboxContext) return;
    const inputTarget = e.target as HTMLInputElement;
    if (!inputTarget.nextSibling) return;
    const optionsLength = (inputTarget.nextSibling as HTMLElement).children
      .length;

    if (e.key === "ArrowDown") {
      const nextIndex = (comboboxContext.currentIndex + 1) % optionsLength;
      comboboxContext?.changeCurrentIndex(nextIndex);
    } else if (e.key === "ArrowUp") {
      if (comboboxContext.currentIndex === 0) {
        comboboxContext?.changeCurrentIndex(optionsLength - 1);
      } else {
        comboboxContext?.changeCurrentIndex(comboboxContext.currentIndex - 1);
      }
    }
  };

  const styles = useMemo(() => {
    return style ? [inputBaseStyle, css({ ...style })] : inputBaseStyle;
  }, [style, inputBaseStyle]);

  if (!comboboxContext) {
    throw new Error("Combobox.Input should be used within a Combobox.Root");
  }

  return (
    <input
      {...rest}
      ref={ref}
      role="combobox"
      onFocus={() => comboboxContext.changeIsOpen(true)}
      onChange={(e) => comboboxContext.changeCurrent(e.target.value)}
      onKeyDown={handleKeyDown}
      aria-expanded={comboboxContext.isOpen}
      value={comboboxContext.current}
      css={styles}
    />
  );
});
