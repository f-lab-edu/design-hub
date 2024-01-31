/** @jsxImportSource @emotion/react */

import {
  type ElementType,
  forwardRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from "react";

import {
  type PolymorphicComponentPropsWithRef,
  type PolymorphicRef,
} from "components/polymorphic";

import { base, getColorScheme, getSize, getWidth } from "./styles";
import { type ButtonProps } from "./types";

type ButtonType<C extends ElementType = "button"> = ForwardRefExoticComponent<
  PolymorphicComponentPropsWithRef<C, ButtonProps<C>> & RefAttributes<C>
>;

const Button: ButtonType = forwardRef(function Button<
  C extends ElementType = "button",
>(
  {
    variant = "solid",
    size,
    children,
    width,
    colorScheme,
    as,
    leftAddon,
    rightAddon,
    addonStyles,
    onClick,
    disabled,
    ...rest
  }: ButtonProps<C>,
  ref?: PolymorphicRef<C>
) {
  const contentProps = { leftAddon, rightAddon, addonStyles, children, ref };

  const Component = as || "button";

  const buttonStyle = [
    base,
    getSize(size),
    getWidth(width),
    getColorScheme(colorScheme, variant),
    disabled && { cursor: "not-allowed" },
  ];

  return (
    <Component
      css={buttonStyle}
      ref={ref}
      as={as}
      size={size}
      variant={variant}
      width={width}
      colorScheme={colorScheme}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <ButtonContent {...contentProps} />
    </Component>
  );
});

type ButtonContentProps = Pick<
  ButtonProps<ElementType>,
  "leftAddon" | "rightAddon" | "children" | "addonStyles"
>;

const ButtonContent = (props: ButtonContentProps) => {
  const { leftAddon, rightAddon, children, addonStyles } = props;

  return (
    <>
      {leftAddon && <span style={{ ...addonStyles }}>{leftAddon}</span>}
      {children}
      {rightAddon && <span style={{ ...addonStyles }}>{rightAddon}</span>}
    </>
  );
};

export default Button;
