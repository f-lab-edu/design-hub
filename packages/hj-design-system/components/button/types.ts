import { type ElementType, type ReactElement } from "react";

export type ButtonSizeSet = "xs" | "sm" | "md" | "lg";
export type ButtonVariants = "solid" | "outline";
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button style to use.
   * @default "solid"
   * */
  variant?: "solid" | "outline";
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
   * The left icon to display in the button.
   * */
  leftIcon?: ReactElement;
  /**
   * The right icon to display in the button.
   * */
  rightIcon?: ReactElement;
  /**
   * The space between the button icon and label.
   * @default foundations.space[1]
   * */
  iconSpacing?: number;
  /**
   * The component used for the root node.
   * @default "button"
   * */
  as?: ElementType;
  /**
   * The width of the button.
   * @default 'auto'
   * */
  width?: "auto" | "full" | number;
}
