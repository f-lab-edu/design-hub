/** @jsxImportSource @emotion/react */

import {
  type CSSProperties,
  type ElementType,
  forwardRef,
  useMemo,
} from "react";

import { css } from "@emotion/react";
import {
  type PolymorphicComponentPropsWithRef,
  type PolymorphicRef,
} from "components/polymorphic";

import { getSizeStyles, getVariantColorStyles } from "./styles";

export type InputSizeSet = "xs" | "sm" | "md" | "lg";
export type InputVariant = "outline" | "filled" | "flushed" | "unstyled";
export type InputColorSheme =
  | "blue"
  | "gray"
  | "teal"
  | "red"
  | "orange"
  | "yellow"
  | "pink"
  | "purple"
  | "green";

type InputProps<C extends ElementType = "input"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      /**
       * The color scheme of the input.
       * @default blue
       */
      colorScheme?: InputColorSheme;
      /**
       * The size of the input.
       * @default md
       */
      size?: InputSizeSet;
      /**
       * The variant of the input.
       * @default outline
       */
      variant?: InputVariant;
      /**
       * The styles of the input.
       */
      styles?: CSSProperties;
    }
  >;

const Input = forwardRef(function Input<C extends ElementType = "input">(
  {
    colorScheme = "blue",
    size = "md",
    variant = "outline",
    styles,
    disabled,
    ...rest
  }: InputProps<C>,
  ref: PolymorphicRef<C>
) {
  const inputStyles = useMemo(() => {
    const defaultStyles = [
      getSizeStyles(size),
      getVariantColorStyles(variant, colorScheme),
    ];

    return styles ? [defaultStyles, css({ ...styles })] : defaultStyles;
  }, [colorScheme, styles, variant]);

  return <input ref={ref} css={inputStyles} disabled={disabled} {...rest} />;
});

export default Input;
