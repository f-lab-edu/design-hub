import { css, type SerializedStyles } from "@emotion/react";

import { foundations } from "../../../theme/foundations";
import { type InputSizeSet } from "../types";

export const affixDefaultStyles = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export const AFFIX_SIZE: Record<InputSizeSet, SerializedStyles> = {
  xs: css`
    width: ${foundations.space[6]};
    height: ${foundations.space[6]};
    > svg {
      width: ${foundations.space[4]};
      height: ${foundations.space[4]};
    }
  `,
  sm: css`
    width: ${foundations.space[8]};
    height: ${foundations.space[8]};
    > svg {
      width: ${foundations.space[5]};
      height: ${foundations.space[5]};
    }
  `,
  md: css`
    width: ${foundations.space[10]};
    height: ${foundations.space[10]};
    > svg {
      width: ${foundations.space[6]};
      height: ${foundations.space[6]};
    }
  `,
  lg: css`
    width: ${foundations.space[12]};
    height: ${foundations.space[12]};
    > svg {
      width: ${foundations.space[7]};
      height: ${foundations.space[7]};
    }
  `,
};
