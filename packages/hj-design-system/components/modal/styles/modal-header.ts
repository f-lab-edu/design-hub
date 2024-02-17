import { SerializedStyles, css } from "@emotion/react";
import { foundations } from "../../../theme/foundations";
import { ModalSizeSet } from "../types";

export const modalHeaderBaseStyle = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: foundations.fontSizes.xl,
   fontWeight: foundations.fontWeights.semibold,
});