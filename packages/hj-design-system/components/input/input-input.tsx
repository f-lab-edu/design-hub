/** @jsxImportSource @emotion/react */

import { type ElementType, forwardRef, type InputHTMLAttributes } from "react";

import { css } from "@emotion/react";
import {
  type PolymorphicComponentPropsWithRef,
  type PolymorphicRef,
} from "components/polymorphic";

import { baseStyle, getSizeStyles } from "./styles";
import { type InputSizeSet } from "./types";

type CustomInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  inputSize?: InputSizeSet;
};

type InputProps<C extends ElementType = "input"> = CustomInputProps &
  PolymorphicComponentPropsWithRef<C>;

const InputInput = forwardRef(function InputInput<
  C extends ElementType = "input",
>(props: InputProps<C>, ref?: PolymorphicRef<C>) {
  const { size: inputSize } = props;

  return (
    <input
      ref={ref}
      css={css(baseStyle, getSizeStyles(inputSize))}
      {...props}
    />
  );
});

export default InputInput;
