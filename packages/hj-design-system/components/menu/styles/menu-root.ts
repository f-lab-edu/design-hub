import { css } from "@emotion/react";
import { type Direction } from "../menu-root";

export const rootBaseStyles = css({
    maxWidth: 'max-content',
    display: 'flex',
    gap: '4px',
})

export const getDirectionStyles = (direction: Direction) => direction === 'vertical' ? css({flexDirection: 'column'}) : css({flexDirection: 'row'})