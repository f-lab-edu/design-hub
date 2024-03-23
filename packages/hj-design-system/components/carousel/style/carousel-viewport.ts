import { css } from "@emotion/react";

export const viewportBaseStyle = css({
    position: "relative",
    boxSizing: "border-box",
    overflowX: "hidden",
    scrollSnapType: "x mandatory",
    '-webkit-overflow-scrolling': 'touch',  
    scrollbarWidth: 'none',
})