import { type ElementType, type ReactElement } from "react";

import styled from "@emotion/styled";
import { type PolymorphicComponentProp } from "components/polymorphic";

import { foundations } from "../../theme/foundations";
import { base, getColorScheme, getWidth, SIZE_MAP } from "./styles";
import { type ButtonProps } from "./types";

type ButtonType = <C extends ElementType = "button">(
  props: PolymorphicComponentProp<C, ButtonProps<C>>
) => ReactElement | null;

const Button: ButtonType = <C extends ElementType = "button">({
  variant = "solid",
  size,
  children,
  width,
  colorScheme,
  as,
  leftAddon,
  rightAddon,
  iconSpacing,
  onClick,
  disabled,
  ...rest
}: ButtonProps<C>) => {
  const contentProps = { leftAddon, rightAddon, iconSpacing, children };

  return (
    <StyledButton
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
    </StyledButton>
  );
};

type ButtonContentProps = Pick<
  ButtonProps<ElementType>,
  "leftAddon" | "rightAddon" | "children" | "iconSpacing"
>;

const ButtonContent = (props: ButtonContentProps) => {
  const { leftAddon, rightAddon, children, iconSpacing } = props;
  return (
    <>
      {leftAddon && (
        <span style={{ marginRight: foundations.space[1] || iconSpacing }}>
          {leftAddon}
        </span>
      )}
      {children}
      {rightAddon && (
        <span style={{ marginLeft: foundations.space[1] || iconSpacing }}>
          {rightAddon}
        </span>
      )}
    </>
  );
};

const StyledButton = styled.button<ButtonProps<ElementType>>`
  ${base};

  ${({ size = "md" }) => SIZE_MAP[size]};

  ${({ width = "auto" }) => getWidth(width)};

  ${({ colorScheme = "blue", variant = "solid" }) =>
    getColorScheme(colorScheme, variant)};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export default Button;
