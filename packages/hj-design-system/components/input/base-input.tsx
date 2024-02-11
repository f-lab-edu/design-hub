/** @jsxImportSource @emotion/react */

import {
  type ElementType,
  forwardRef,
  type InputHTMLAttributes,
  type ReactElement,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
} from "react";

import { css } from "@emotion/react";
import {
  type PolymorphicComponentPropsWithRef,
  type PolymorphicRef,
} from "components/polymorphic";

import { InputContext } from "./input-context";
import {
  baseStyle,
  getSizeStyles,
  getVariantStyles,
  styleWithAddon,
  styleWithAffix,
} from "./styles";
import { type InputSizeSet, type InputVariant } from "./types";

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
  variant?: InputVariant;
  suffix?: ReactElement;
  prefix?: ReactElement;
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
};

type InputProps<C extends ElementType = "input"> =
  PolymorphicComponentPropsWithRef<C, CustomInputProps>;

const BaseInput = forwardRef(function BaseInput<
  C extends ElementType = "input",
>(props: InputProps<C>, ref?: PolymorphicRef<C>) {
  const {
    size: inputSize,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    variant = "outline",
    style,
    ...rest
  } = props;

  const inputContext = useContext(InputContext);

  const affix = useMemo(() => ({ prefix, suffix }), [prefix, suffix]);
  const addon = useMemo(
    () => ({ before: addonBefore, after: addonAfter }),
    [addonBefore, addonAfter],
  );

  const styles = useMemo(() => {
    const combiendStyles = [
      baseStyle,
      getSizeStyles(inputSize),
      getVariantStyles(variant),
      styleWithAffix(affix),
      styleWithAddon(addon),
    ];
    if (!style) return combiendStyles;
    return [...combiendStyles, css({ ...style })];
  }, [inputSize, style, addon, affix, variant]);

  useEffect(() => {
    inputContext?.setSize(inputSize);
    inputContext?.setVariant(variant);
  }, [inputSize, inputContext, variant]);

  return (
    <>
      {addonBefore && addonBefore}
      {prefix && prefix}
      <input ref={ref} css={styles} {...rest} />
      {suffix && suffix}
      {addonAfter && addonAfter}
    </>
  );
});

export default BaseInput;
