import { type CSSProperties } from "react";

import { css, type SerializedStyles } from "@emotion/react";
import { type ButtonSizeSet } from "components/button/types";

const XSmallSize = css({
  width: "12px",
  height: "12px",
});

const SmallSize = css({
  width: "16px",
  height: "16px",
});

const MediumSize = css({
  width: "1.5rem",
  height: "1.5rem",
});

const LargeSize = css({
  width: "24px",
  height: "24px",
});

const SIZE_MAP: Record<ButtonSizeSet, SerializedStyles> = {
  xs: XSmallSize,
  sm: SmallSize,
  md: MediumSize,
  lg: LargeSize,
};

const getSize = (size?: ButtonSizeSet) => (size ? SIZE_MAP[size] : MediumSize);

export const combineStyles = (
  size?: ButtonSizeSet,
  addonStyles?: CSSProperties,
) => {
  return addonStyles
    ? [getSize(size), css({ ...addonStyles })]
    : [getSize(size)];
};
