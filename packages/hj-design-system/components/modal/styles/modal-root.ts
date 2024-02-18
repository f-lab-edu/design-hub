import { css } from "@emotion/react";
import { Variants } from "framer-motion";
import  zIndices  from '../../../theme/foundations/z-index';

const defaultEasing = [0.4, 0, 0.6, 1];

export const dimVariants: Variants = {
    animate: {
      opacity: 1,
      transition: { duration: 0.2, ease: defaultEasing },
      willChange: 'opacity',
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2, ease: defaultEasing },
      willChange: 'opacity',
    },
    initial: {
      opacity: 0,
      transition: { duration: 0.2, ease: defaultEasing },
      willChange: 'opacity',
    },
  };

export const dimmedStyle = css({
    position: 'fixed',
    zIndex: zIndices.modal,
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0 0 0 / 75%)',
});