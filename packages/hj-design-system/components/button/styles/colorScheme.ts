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

const ButtonColorScheme: Record<ButtonColorScheme, ColorSchemeWithVariant> = {
  blue: {
    solid: css({
      color: foundations.colors.white,
      backgroundColor: foundations.colors.blue[500],
      "@media(hover:hover)": {
        "&:hover": {
          backgroundColor: foundations.colors.blue[600],
        },
      },
      ":active": {
        backgroundColor: foundations.colors.blue[700],
      },
    }),
    outline: css({
      color: foundations.colors.blue[500],
      border: `1px solid ${foundations.colors.blue[500]}`,
      backgroundColor: "transparent",
      "@media(hover:hover)": {
        "&:hover": {
          color: foundations.colors.white,
          backgroundColor: foundations.colors.blue[500],
        },
      },
      ":active": {
        backgroundColor: foundations.colors.blue[600],
      },
    }),
  },
  gray: {
    solid: css({
      color: foundations.colors.white,
      backgroundColor: foundations.colors.gray[500],
      "@media(hover:hover)": {
        "&:hover": {
          backgroundColor: foundations.colors.gray[600],
        },
      },
      ":active": {
        backgroundColor: foundations.colors.gray[700],
      },
    }),
    outline: css({
      color: foundations.colors.gray[500],
      border: `1px solid ${foundations.colors.gray[500]}`,
      backgroundColor: "transparent",
      "@media(hover:hover)": {
        "&:hover": {
          color: foundations.colors.white,
          backgroundColor: foundations.colors.gray[500],
        },
      },
      ":active": {
        backgroundColor: foundations.colors.gray[600],
      },
    }),
  },
  teal: {
    solid: css({
      color: foundations.colors.white,
      backgroundColor: foundations.colors.teal[500],
      "@media(hover:hover)": {
        "&:hover": {
          backgroundColor: foundations.colors.teal[600],
        },
      },
      ":active": {
        backgroundColor: foundations.colors.teal[700],
      },
    }),
    outline: css({
      color: foundations.colors.teal[500],
      border: `1px solid ${foundations.colors.teal[500]}`,
      backgroundColor: "transparent",
      "@media(hover:hover)": {
        "&:hover": {
          color: foundations.colors.white,
          backgroundColor: foundations.colors.teal[500],
        },
      },
      ":active": {
        backgroundColor: foundations.colors.teal[600],
      },
    }),
  },
  red: {
    solid: css({
      color: foundations.colors.white,
      backgroundColor: foundations.colors.red[500],
      "@media(hover:hover)": {
        "&:hover": {
          backgroundColor: foundations.colors.red[600],
        },
      },
      ":active": {
        backgroundColor: foundations.colors.red[700],
      },
    }),
    outline: css({
      color: foundations.colors.red[500],
      border: `1px solid ${foundations.colors.red[500]}`,
      backgroundColor: "transparent",
      "@media(hover:hover)": {
        "&:hover": {
          color: foundations.colors.white,
          backgroundColor: foundations.colors.red[500],
        },
      },
      ":active": {
        backgroundColor: foundations.colors.red[600],
      },
    }),
  },
  orange: {
    solid: css({
      color: foundations.colors.white,
      backgroundColor: foundations.colors.orange[500],
      "@media(hover:hover)": {
        "&:hover": {
          backgroundColor: foundations.colors.orange[600],
        },
      },
      ":active": {
        backgroundColor: foundations.colors.orange[700],
      },
    }),
    outline: css({
      color: foundations.colors.orange[500],
      border: `1px solid ${foundations.colors.orange[500]}`,
      backgroundColor: "transparent",
      "@media(hover:hover)": {
        "&:hover": {
          color: foundations.colors.white,
          backgroundColor: foundations.colors.orange[500],
        },
      },
      ":active": {
        backgroundColor: foundations.colors.orange[600],
      },
    }),
  },
  yellow: {
    solid: css({
      color: foundations.colors.white,
      backgroundColor: foundations.colors.yellow[500],
      "@media(hover:hover)": {
        "&:hover": {
          backgroundColor: foundations.colors.yellow[600],
        },
      },
      ":active": {
        backgroundColor: foundations.colors.yellow[700],
      },
    }),
    outline: css({
      color: foundations.colors.yellow[500],
      border: `1px solid ${foundations.colors.yellow[500]}`,
      backgroundColor: "transparent",
      "@media(hover:hover)": {
        "&:hover": {
          color: foundations.colors.white,
          backgroundColor: foundations.colors.yellow[500],
        },
      },
      ":active": {
        backgroundColor: foundations.colors.yellow[600],
      },
    }),
  },
  pink: {
    solid: css({
      color: foundations.colors.white,
      backgroundColor: foundations.colors.pink[500],
      "@media(hover:hover)": {
        "&:hover": {
          backgroundColor: foundations.colors.pink[600],
        },
      },
      ":active": {
        backgroundColor: foundations.colors.pink[700],
      },
    }),
    outline: css({
      color: foundations.colors.pink[500],
      border: `1px solid ${foundations.colors.pink[500]}`,
      backgroundColor: "transparent",
      "@media(hover:hover)": {
        "&:hover": {
          color: foundations.colors.white,
          backgroundColor: foundations.colors.pink[500],
        },
      },
      ":active": {
        backgroundColor: foundations.colors.pink[600],
      },
    }),
  },
  purple: {
    solid: css({
      color: foundations.colors.white,
      backgroundColor: foundations.colors.purple[500],
      "@media(hover:hover)": {
        "&:hover": {
          backgroundColor: foundations.colors.purple[600],
        },
      },
      ":active": {
        backgroundColor: foundations.colors.purple[700],
      },
    }),
    outline: css({
      color: foundations.colors.purple[500],
      border: `1px solid ${foundations.colors.purple[500]}`,
      backgroundColor: "transparent",
      "@media(hover:hover)": {
        "&:hover": {
          color: foundations.colors.white,
          backgroundColor: foundations.colors.purple[500],
        },
      },
      ":active": {
        backgroundColor: foundations.colors.purple[600],
      },
    }),
  },
  green: {
    solid: css({
      color: foundations.colors.white,
      backgroundColor: foundations.colors.green[500],
      "@media(hover:hover)": {
        "&:hover": {
          backgroundColor: foundations.colors.green[600],
        },
      },
      ":active": {
        backgroundColor: foundations.colors.green[700],
      },
    }),
    outline: css({
      color: foundations.colors.green[500],
      border: `1px solid ${foundations.colors.green[500]}`,
      backgroundColor: "transparent",
      "@media(hover:hover)": {
        "&:hover": {
          color: foundations.colors.white,
          backgroundColor: foundations.colors.green[500],
        },
      },
      ":active": {
        backgroundColor: foundations.colors.green[600],
      },
    }),
  },
};

export const getColorScheme = (
  colorScheme: Pick<ButtonProps, "colorScheme">["colorScheme"] = "blue",
  variant: Pick<ButtonProps, "variant">["variant"] = "solid",
) => ButtonColorScheme[colorScheme][variant];
