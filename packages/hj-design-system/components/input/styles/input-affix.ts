import { css } from "@emotion/react";

import { foundations } from "../../../theme/foundations";
import { type InputSizeSet } from "../types";

export const inputAffixBaseStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "100%",
  objectFit: "contain",
  border: `1px solid ${foundations.colors.gray[100]}`,
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  svg: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export const getAffixSizeStyles = (size: InputSizeSet = "md") => {
  const height = HEIGHT_MAP[size];
  const padding = PADDING_MAP[size];
  return css({
    height,
    padding,
  });
};

const HEIGHT_MAP: Record<InputSizeSet, string> = {
  xs: foundations.space[6],
  sm: foundations.space[8],
  md: foundations.space[10],
  lg: foundations.space[12],
};

const PADDING_MAP: Record<InputSizeSet, string> = {
  xs: `0 ${foundations.space[2]}`,
  sm: `0 ${foundations.space[3]}`,
  md: `0 ${foundations.space[4]}`,
  lg: `0 ${foundations.space[5]}`,
};
