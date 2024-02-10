import { css } from "@emotion/react";

import { foundations } from "../../../theme/foundations";
import { type InputSizeSet } from "../types";

export const inputAddonBaseStyle = css({
  flex: "0 0 auto",
  width: "auto",
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap",
  background: foundations.colors.gray[100],
});

export const getAddonSizeStyles = (size: InputSizeSet = "md") => {
  const height = HEIGHT_MAP[size];
  const padding = PADDING_MAP[size];
  const fontSize = FONT_SIZE_MAP[size];
  return css({
    height,
    padding,
    fontSize,
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
