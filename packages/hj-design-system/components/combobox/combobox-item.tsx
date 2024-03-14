import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef, useContext } from "react";
import { ComboboxContext } from "./combobox-context";

type ComboboxItemProps<C extends ElementType = "li"> =
  PolymorphicComponentPropsWithRef<C>;

export const ComboboxItem = forwardRef(function ComboboxItem<
  C extends ElementType = "li",
>(props: ComboboxItemProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, handleChange, onClick, index, ...rest } = props;
  const Component = as || "li";

  const comboboxContext = useContext(ComboboxContext);

  if (!comboboxContext) {
    throw new Error("Combobox.Item should be used within a Combobox.Root");
  }

  return (
    <Component
      ref={ref}
      role="option"
      onClick={() => {
        handleChange();
        comboboxContext.changeIsOpen(false);
        onClick?.();
      }}
      aria-selectd={comboboxContext.current === index}
      {...rest}
    >
      {children}
    </Component>
  );
});
