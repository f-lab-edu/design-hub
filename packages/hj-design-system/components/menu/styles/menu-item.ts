import { css } from "@emotion/react";
import { foundations } from "../../../theme/foundations";

export const itemBaseStyles = css({
    paddingInlineStart: foundations.space[4],
    paddingInlineEnd: foundations.space[4],
    paddingTop: foundations.space[1.5],
    paddingBottom: foundations.space[1.5],
    userSelect: "none",
})