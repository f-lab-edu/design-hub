import { css } from "@emotion/react";

import { foundations } from "../../../theme/foundations";
import {
  type InputColorSheme,
  type InputSizeSet,
  type InputVariant,
} from "../Input";

const baseStyles = css({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: "0",
  ":disabled": {
    opacity: 0.4,
    cursor: "not-allowed",
  },
});

const createOutlineStyles = (color: InputColorSheme) => {
  return css({
    borderRadius: foundations.radii.md,
    paddingInlineStart: foundations.space[4],
    paddingInlineEnd: foundations.space[4],
    border: `2px solid ${foundations.colors[color][500]}`,
    outline: "transparent 2px solid",
  });
};

const createFilledStyles = (color: InputColorSheme) => {
  return css({
    borderRadius: foundations.radii.md,
    paddingInlineStart: foundations.space[4],
    paddingInlineEnd: foundations.space[4],
    borderWidth: "2px",
    borderColor: "transparent",
    backgroundColor: foundations.colors[color][100],
    ":focus": {
      backgroundColor: "transparent",
      outlinle: `${foundations.colors[color][500]} 2px solid`,
    },
  });
};

const createFlushedStyles = (color: InputColorSheme) => {
  return css({
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: 0,
    outlineOffset: "2px",
    outline: "none",
    borderWidth: "2px",
    border: "none",
    borderBottom: `2px solid ${foundations.colors[color][500]}`,
    backgroundColor: "transparent",
    ":focus": {
      borderRadius: foundations.radii.md,
      boxShadow: `0 0 0 2px ${foundations.colors[color][100]}`,
      borderBottom: "none",
    },
  });
};

export const getVariantColorStyles = (
  variant: InputVariant,
  colorScheme: InputColorSheme,
) => {
  const VARIANT_COLOR_MAP = {
    outline: createOutlineStyles(colorScheme),
    filled: createFilledStyles(colorScheme),
    flushed: createFlushedStyles(colorScheme),
    unstyled: baseStyles,
  };
  return css(baseStyles, VARIANT_COLOR_MAP[variant]);
};

export const getSizeStyles = (size: InputSizeSet) => {
  const SIZE_MAP = {
    xs: {
      height: foundations.space[6],
      fontSize: foundations.fontSizes.xs,
    },
    sm: {
      height: foundations.space[8],
      fontSize: foundations.fontSizes.sm,
    },
    md: {
      height: foundations.space[10],
      fontSize: foundations.fontSizes.md,
    },
    lg: {
      height: foundations.space[12],
      fontSize: foundations.fontSizes.lg,
    },
  };
  return css(SIZE_MAP[size]);
};
