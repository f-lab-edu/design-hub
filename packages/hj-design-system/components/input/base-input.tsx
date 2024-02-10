/** @jsxImportSource @emotion/react */

import {
  type ElementType,
  forwardRef,
  type InputHTMLAttributes,
  type ReactElement,
  type ReactNode,
  useContext,
  useEffect,
} from "react";

import { css } from "@emotion/react";
import {
  type PolymorphicComponentPropsWithRef,
  type PolymorphicRef,
} from "components/polymorphic";

import { InputContext } from "./input-context";
import { baseStyle, getSizeStyles } from "./styles";
import { type InputSizeSet } from "./types";

export interface InputAffixProps {
  suffix?: ReactElement;
  prefix?: ReactElement;
}

export interface InputAddonProps {
  before?: ReactNode;
  after?: ReactNode;
}

type CustomInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  inputSize?: InputSizeSet;
} & InputAffixProps &
  InputAddonProps;

type InputProps<C extends ElementType = "input"> =
  PolymorphicComponentPropsWithRef<C, CustomInputProps>;

const BaseInput = forwardRef(function BaseInput<
  C extends ElementType = "input",
>(props: InputProps<C>, ref?: PolymorphicRef<C>) {
  const { size: inputSize, affix, addon, ...rest } = props;

  const inputContext = useContext(InputContext);

  useEffect(() => {
    if (inputSize) {
      inputContext?.setSize(inputSize);
    }
  }, [inputSize, inputContext]);

  return (
    <>
      {addon?.before && addon.before}
      {affix?.prefix && affix.prefix}
      <input
        ref={ref}
        css={css(baseStyle, getSizeStyles(inputSize))}
        {...rest}
      />
      {affix?.suffix && affix.suffix}
      {addon?.after && addon.after}
    </>
  );
});

export default BaseInput;
