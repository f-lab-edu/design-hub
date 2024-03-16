/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef, useContext, useMemo } from "react";
import { ComboboxContext } from "./combobox-context";
import { optionBaseStyle } from "./styles/combobox-option";

type ComboboxOptionProps<C extends ElementType = "li"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      /**
       * The value of the option
       */
      value: string;
      /**
       * change handler
       */
      handleChange?: (index: string) => void;
    }
  >;

export const ComboboxOption = forwardRef(function ComboboxOption<
  C extends ElementType = "li",
>(props: ComboboxOptionProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, handleChange, onClick, value, index, style, ...rest } =
    props;
  const Component = as || "li";
  const comboboxContext = useContext(ComboboxContext);

  const combinedStyles = useMemo(() => {
    return style ? [optionBaseStyle, style] : optionBaseStyle;
  }, [optionBaseStyle, style]);

  if (!comboboxContext) {
    throw new Error("Combobox.Item should be used within a Combobox.Root");
  }

  return (
    <Component
      ref={ref}
      role="option"
      onClick={(e) => {
        handleChange?.(value);
        onClick?.(e);
        comboboxContext.changeIsOpen(false);
      }}
      tabIndex={-1}
      css={combinedStyles}
      {...rest}
    >
      {value}
      {children}
    </Component>
  );
});
