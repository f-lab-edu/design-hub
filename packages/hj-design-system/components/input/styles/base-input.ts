import { css } from "@emotion/react";

import { foundations } from "../../../theme/foundations";
import { type InputSizeSet } from "../types";

export const baseStyle = css({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  width: "100%",
  minWidth: "0",
  ":disabled": {
    opacity: 0.4,
    cursor: "not-allowed",
  },
  border: `1px solid ${foundations.colors.gray[100]}`,
});

export const getSizeStyles = (size: InputSizeSet = "md") => {
  const height = HEIGHT_MAP[size];
  const fontSize = FONT_SIZE_MAP[size];
  const padding = PADDING_MAP[size];
  return css({
    height,
    fontSize,
    padding,
  });
};

const HEIGHT_MAP: Record<InputSizeSet, string> = {
  xs: foundations.space[6],
  sm: foundations.space[8],
  md: foundations.space[10],
  lg: foundations.space[12],
};

const FONT_SIZE_MAP: Record<InputSizeSet, string> = {
  xs: foundations.fontSizes.xs,
  sm: foundations.fontSizes.sm,
  md: foundations.fontSizes.md,
  lg: foundations.fontSizes.lg,
};

const PADDING_MAP: Record<InputSizeSet, string> = {
  xs: `0 ${foundations.space[2]}`,
  sm: `0 ${foundations.space[3]}`,
  md: `0 ${foundations.space[4]}`,
  lg: `0 ${foundations.space[5]}`,
};
