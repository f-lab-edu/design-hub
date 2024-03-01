import { css } from "@emotion/react";
import { foundations } from "../../../theme/foundations";

export const navBaseStyles = css({
    position: 'absolute',
    top: '100%',
    zIndex: foundations.zIndices.dropdown,
    margin: '4px 0',
    maxWidth: 'max-content',
})

export const listBaseStyles = css({
    listStyle: 'none',
    margin:0,
    paddingLeft: 0,
    borderRadius:foundations.radii.md,
    border: `1px solid ${foundations.colors.gray[300]}`,
})