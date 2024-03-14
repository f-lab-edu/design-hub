import { ForwardedRef, HTMLAttributes, forwardRef, useContext } from "react";
import { ComboboxContext } from "./combobox-context";

type ComboboxInput = HTMLAttributes<HTMLInputElement>;

export const ComboboxInput = forwardRef(function ComboboxInput(
  props: ComboboxInput,
  ref: ForwardedRef<HTMLInputElement>
) {
  const comboboxContext = useContext(ComboboxContext);

  if (!comboboxContext) {
    throw new Error("Combobox.Input should be used within a Combobox.Root");
  }

  return (
    <input
      {...props}
      ref={ref}
      role="combobox"
      onFocus={() => comboboxContext.changeIsOpen(true)}
      aria-expanded={comboboxContext.isOpen}
      value={comboboxContext.current}
    />
  );
});
