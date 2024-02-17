import { css } from "@emotion/react";
import { foundations } from "../../../theme/foundations";

export const modalHeaderBaseStyle = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: foundations.fontSizes.xl,
   fontWeight: foundations.fontWeights.semibold,
});

export const closeButtonBoxStyles = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: '24px',
    height: '24px',
    padding: foundations.space[2],
    cursor: "pointer",
    borderRadius: foundations.radii.md,
    transition: "background-color 0.2s",
    "&:hover": {
        backgroundColor: foundations.colors.gray[100],
    },
});