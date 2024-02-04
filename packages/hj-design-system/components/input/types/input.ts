import { type CSSProperties, type ElementType, type ReactNode } from "react";

import { type PolymorphicComponentPropsWithRef } from "components/polymorphic";

export type InputSizeSet = "xs" | "sm" | "md" | "lg";
export type InputVariant = "outline" | "filled" | "flushed" | "unstyled";
export type InputColorSheme =
  | "blue"
  | "gray"
  | "teal"
  | "red"
  | "orange"
  | "yellow"
  | "pink"
  | "purple"
  | "green";

export type InputProps<C extends ElementType = "input"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      /**
       * The color scheme of the input.
       * @default blue
       */
      colorScheme?: InputColorSheme;
      /**
       * The size of the input.
       * @default md
       */
      size?: InputSizeSet;
      /**
       * The variant of the input.
       * @default outline
       */
      variant?: InputVariant;
      /**
       * The styles of the input.
       */
      styles?: CSSProperties;
      /**
       * The prefix of the input.
       * @type ReactNode
       */
      prefix?: ReactNode;
      /**
       * The suffix of the input.
       * @type ReactNode
       */
      suffix?: ReactNode;
    }
  >;
