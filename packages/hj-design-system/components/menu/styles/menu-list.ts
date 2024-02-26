import { css } from "@emotion/react";
import { foundations } from "../../../theme/foundations";

export const navBaseStyles = css({
    maxWidth: 'max-content',
})

export const listBaseStyles = css({
    listStyle: 'none',
    margin:0,
    paddingLeft: 0,
    borderRadius:foundations.radii.md,
    border: `1px solid ${foundations.colors.gray[300]}`,
})