import { css, type SerializedStyles } from "@emotion/react";

import { foundations } from "../../theme/foundations";
import { type ButtonSizeSet } from "./types";

export const buttonSizeSet: ButtonSizeSet[] = ["xs", "sm", "md", "lg"];

export const base = css({
  position: "relative",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: foundations.radii.md,
  backgroundColor: foundations.colors.blue[500],
  paddingInlineStart: foundations.space[4],
  paddingInlineEnd: foundations.space[4],
  color: foundations.colors.white,
  fontWeight: foundations.fontWeights.semibold,
});

const XsmallSize = css({
  fontSize: foundations.fontSizes.xs,
  paddingBlockStart: foundations.space[1],
  paddingBlockEnd: foundations.space[1],
});

const SmallSize = css({
  fontSize: foundations.fontSizes.sm,
  paddingBlockStart: foundations.space[2],
  paddingBlockEnd: foundations.space[2],
});

const MediumSize = css({
  fontSize: foundations.fontSizes.md,
  paddingBlockStart: foundations.space[3],
  paddingBlockEnd: foundations.space[3],
});

const LargeSizes = css({
  fontSize: foundations.fontSizes.lg,
  paddingBlockStart: foundations.space[4],
  paddingBlockEnd: foundations.space[4],
});

export const SIZE_MAP: Record<ButtonSizeSet, SerializedStyles> = {
  xs: XsmallSize,
  sm: SmallSize,
  md: MediumSize,
  lg: LargeSizes,
};

const SolidVariant = css({
  ...base,
  border: "none",
  "&:hover": {
    backgroundColor: foundations.colors.blue[600],
  },
});

const OutlineVariant = css({
  ...base,
  border: `1px solid ${foundations.colors.blue[500]}`,
  backgroundColor: foundations.colors.blue[500],
  "&:hover": {
    backgroundColor: foundations.colors.blue[50],
  },
});

export const VARIANT_MAP = {
  solid: SolidVariant,
  outline: OutlineVariant,
};
