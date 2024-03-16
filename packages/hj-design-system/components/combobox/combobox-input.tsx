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
    if (e.key === "ArrowDown")
      comboboxContext?.changeCurrentIndex(comboboxContext.currentIndex + 1);
    else if (e.key === "ArrowUp")
      comboboxContext?.changeCurrentIndex(comboboxContext.currentIndex - 1);
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
