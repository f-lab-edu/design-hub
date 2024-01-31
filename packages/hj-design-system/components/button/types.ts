import { type ElementType, type ReactElement } from "react";

import { type PolymorphicComponentProp } from "components/polymorphic";

export type ButtonSizeSet = "xs" | "sm" | "md" | "lg";
export type ButtonVariants = "solid" | "outline" | "ghost" | "link";
export type ButtonColorScheme =
  | "blue"
  | "gray"
  | "teal"
  | "red"
  | "orange"
  | "yellow"
  | "pink"
  | "purple"
  | "green";

export type ButtonProps<C extends ElementType> = PolymorphicComponentProp<
  C,
  {
    /**
     * The variant of the button style to use.
     * @default "solid"
     * */
    variant?: ButtonVariants;
    /**
     * The size of the button.
     * @default "md"
     * */
    size?: ButtonSizeSet;
    /**
     * The color scheme of the button.
     * @default "blue"
     * */
    colorScheme?: ButtonColorScheme;
    /**
     * The left add-on to display in the button.
     * */
    leftAddon?: ReactElement;
    /**
     * The right add-on to display in the button.
     * */
    rightAddon?: ReactElement;
    /**
     * The space between the button icon and label.
     * @default foundations.space[1]
     * */
    iconSpacing?: number;
    /**
     * The width of the button.
     * @default 'auto'
     * */
    width?: "auto" | "full" | number;
  }
>;
