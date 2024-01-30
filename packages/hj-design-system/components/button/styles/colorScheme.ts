import { css, type SerializedStyles } from "@emotion/react";

import { foundations } from "../../../theme/foundations";
import {
  type ButtonColorScheme,
  type ButtonProps,
  type ButtonVariants,
} from "../types";

type ColorSchemeWithVariant = {
  [variant in ButtonVariants]: SerializedStyles;
};

const BUTTON_COLOR_SCHEME_MAP: Record<
  ButtonColorScheme,
  ColorSchemeWithVariant
> = {
  blue: {
    solid: css({
      color: foundations.colors.white,
      border: "none",
      backgroundColor: foundations.colors.blue[500],
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          backgroundColor: foundations.colors.blue[600],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.blue[700],
      },
    }),
    outline: css({
      color: foundations.colors.blue[500],
      border: `1px solid ${foundations.colors.blue[500]}`,
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.white,
          backgroundColor: foundations.colors.blue[500],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.blue[600],
      },
    }),
    ghost: css({
      color: foundations.colors.blue[600],
      border: "none",
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.teal[500],
          backgroundColor: foundations.colors.blue[50],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.blue[100],
      },
    }),
    link: css({
      color: foundations.colors.blue[500],
      border: "none",
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.blue[600],
          textDecoration: "underline",
        },
      },
      ":active:enabled": {
        color: foundations.colors.blue[700],
      },
    }),
  },
  gray: {
    solid: css({
      color: foundations.colors.white,
      border: "none",
      backgroundColor: foundations.colors.gray[500],
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          backgroundColor: foundations.colors.gray[600],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.gray[700],
      },
    }),
    outline: css({
      color: foundations.colors.gray[500],
      border: `1px solid ${foundations.colors.gray[500]}`,
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.white,
          backgroundColor: foundations.colors.gray[500],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.gray[600],
      },
    }),
    ghost: css({
      color: foundations.colors.gray[600],
      border: "none",
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.gray[500],
          backgroundColor: foundations.colors.gray[50],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.gray[100],
      },
    }),
    link: css({
      color: foundations.colors.gray[500],
      border: "none",
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.gray[600],
          textDecoration: "underline",
        },
      },
      ":active:enabled": {
        color: foundations.colors.gray[700],
      },
    }),
  },
  teal: {
    solid: css({
      color: foundations.colors.white,
      border: "none",
      backgroundColor: foundations.colors.teal[500],
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          backgroundColor: foundations.colors.teal[600],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.teal[700],
      },
    }),
    outline: css({
      color: foundations.colors.teal[500],
      border: `1px solid ${foundations.colors.teal[500]}`,
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.white,
          backgroundColor: foundations.colors.teal[500],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.teal[600],
      },
    }),
    ghost: css({
      color: foundations.colors.teal[600],
      border: "none",
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.teal[500],
          backgroundColor: foundations.colors.teal[50],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.teal[100],
      },
    }),
    link: css({
      color: foundations.colors.teal[500],
      border: "none",
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.teal[600],
          textDecoration: "underline",
        },
      },
      ":active:enabled": {
        color: foundations.colors.teal[700],
      },
    }),
  },
  red: {
    solid: css({
      color: foundations.colors.white,
      border: "none",
      backgroundColor: foundations.colors.red[500],
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          backgroundColor: foundations.colors.red[600],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.red[700],
      },
    }),
    outline: css({
      color: foundations.colors.red[500],
      border: `1px solid ${foundations.colors.red[500]}`,
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.white,
          backgroundColor: foundations.colors.red[500],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.red[600],
      },
    }),
    ghost: css({
      color: foundations.colors.red[600],
      border: "none",
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.red[500],
          backgroundColor: foundations.colors.red[50],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.red[100],
      },
    }),
    link: css({
      color: foundations.colors.red[500],
      border: "none",
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.red[600],
          textDecoration: "underline",
        },
      },
      ":active:enabled": {
        color: foundations.colors.red[700],
      },
    }),
  },
  orange: {
    solid: css({
      color: foundations.colors.white,
      border: "none",
      backgroundColor: foundations.colors.orange[500],
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          backgroundColor: foundations.colors.orange[600],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.orange[700],
      },
    }),
    outline: css({
      color: foundations.colors.orange[500],
      border: `1px solid ${foundations.colors.orange[500]}`,
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      backgroundColor: "transparent",
      disalbed: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.white,
          backgroundColor: foundations.colors.orange[500],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.orange[600],
      },
    }),
    ghost: css({
      color: foundations.colors.orange[600],
      border: "none",
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.orange[500],
          backgroundColor: foundations.colors.orange[50],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.orange[100],
      },
    }),
    link: css({
      color: foundations.colors.orange[500],
      border: "none",
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.orange[600],
          textDecoration: "underline",
        },
      },
      ":active:enabled": {
        color: foundations.colors.orange[700],
      },
    }),
  },
  yellow: {
    solid: css({
      color: foundations.colors.white,
      border: "none",
      backgroundColor: foundations.colors.yellow[500],
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          backgroundColor: foundations.colors.yellow[600],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.yellow[700],
      },
    }),
    outline: css({
      color: foundations.colors.yellow[500],
      border: `1px solid ${foundations.colors.yellow[500]}`,
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.white,
          backgroundColor: foundations.colors.yellow[500],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.yellow[600],
      },
    }),
    ghost: css({
      color: foundations.colors.yellow[600],
      border: "none",
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.yellow[500],
          backgroundColor: foundations.colors.yellow[50],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.yellow[100],
      },
    }),
    link: css({
      color: foundations.colors.yellow[500],
      border: "none",
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.yellow[600],
          textDecoration: "underline",
        },
      },
      ":active:enabled": {
        color: foundations.colors.yellow[700],
      },
    }),
  },
  pink: {
    solid: css({
      color: foundations.colors.white,
      border: "none",
      backgroundColor: foundations.colors.pink[500],
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          backgroundColor: foundations.colors.pink[600],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.pink[700],
      },
    }),
    outline: css({
      color: foundations.colors.pink[500],
      border: `1px solid ${foundations.colors.pink[500]}`,
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.white,
          backgroundColor: foundations.colors.pink[500],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.pink[600],
      },
    }),
    ghost: css({
      color: foundations.colors.pink[600],
      border: "none",
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.pink[500],
          backgroundColor: foundations.colors.pink[50],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.pink[100],
      },
    }),
    link: css({
      color: foundations.colors.pink[500],
      border: "none",
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.pink[600],
          textDecoration: "underline",
        },
      },
      ":active:enabled": {
        color: foundations.colors.pink[700],
      },
    }),
  },
  purple: {
    solid: css({
      color: foundations.colors.white,
      border: "none",
      backgroundColor: foundations.colors.purple[500],
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          backgroundColor: foundations.colors.purple[600],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.purple[700],
      },
    }),
    outline: css({
      color: foundations.colors.purple[500],
      border: `1px solid ${foundations.colors.purple[500]}`,
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled:enabled": {
          color: foundations.colors.white,
          backgroundColor: foundations.colors.purple[500],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.purple[600],
      },
    }),
    ghost: css({
      color: foundations.colors.purple[600],
      border: "none",
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.purple[500],
          backgroundColor: foundations.colors.purple[50],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.purple[100],
      },
    }),
    link: css({
      color: foundations.colors.purple[500],
      border: "none",
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.purple[600],
          textDecoration: "underline",
        },
      },
      ":active:enabled": {
        color: foundations.colors.purple[700],
      },
    }),
  },
  green: {
    solid: css({
      color: foundations.colors.white,
      border: "none",
      backgroundColor: foundations.colors.green[500],
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          backgroundColor: foundations.colors.green[600],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.green[700],
      },
    }),
    outline: css({
      color: foundations.colors.green[500],
      border: `1px solid ${foundations.colors.green[500]}`,
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.white,
          backgroundColor: foundations.colors.green[500],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.green[600],
      },
    }),
    ghost: css({
      color: foundations.colors.green[600],
      border: "none",
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.green[500],
          backgroundColor: foundations.colors.green[50],
        },
      },
      ":active:enabled": {
        backgroundColor: foundations.colors.green[100],
      },
    }),
    link: css({
      color: foundations.colors.green[500],
      border: "none",
      backgroundColor: "transparent",
      ":disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "@media(hover:hover)": {
        "&:hover:enabled": {
          color: foundations.colors.green[600],
          textDecoration: "underline",
        },
      },
      ":active:enabled": {
        color: foundations.colors.green[700],
      },
    }),
  },
};

export const getColorScheme = (
  colorScheme: Pick<ButtonProps, "colorScheme">["colorScheme"] = "blue",
  variant: Pick<ButtonProps, "variant">["variant"] = "solid",
) => BUTTON_COLOR_SCHEME_MAP[colorScheme][variant];
