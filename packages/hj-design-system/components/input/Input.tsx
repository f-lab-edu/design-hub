/** @jsxImportSource @emotion/react */

import { type ElementType, forwardRef, useMemo } from "react";

import { css } from "@emotion/react";
import { type PolymorphicRef } from "components/polymorphic";

import BaseInput from "./BaseInput";
import { getSizeStyles, getVariantColorStyles } from "./styles";
import { type InputProps } from "./types";

const Input = forwardRef(function Input<C extends ElementType = "input">(
  {
    colorScheme = "blue",
    size = "md",
    variant = "outline",
    styles,
    disabled,
    prefix,
    suffix,
    ...rest
  }: InputProps<C>,
  ref: PolymorphicRef<C>,
) {
  const inputStyles = useMemo(() => {
    const defaultStyles = [
      getSizeStyles(size),
      getVariantColorStyles(variant, colorScheme),
    ];

    return styles ? [defaultStyles, css({ ...styles })] : defaultStyles;
  }, [size, colorScheme, styles, variant]);

  const inputStyle = !prefix && !suffix ? inputStyles : null;

  return (
    <BaseInput
      size={size}
      prefix={prefix}
      suffix={suffix}
      styles={css(inputStyles)}
      {...rest}
    >
      <input ref={ref} disabled={disabled} css={inputStyle} {...rest} />
    </BaseInput>
  );
});

export default Input;
