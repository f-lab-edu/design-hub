import styled from "@emotion/styled";

import { foundations } from "../../theme/foundations";
import { getColorScheme, getWidth, SIZE_MAP } from "./styles";
import { type ButtonProps } from "./types";

const Button = ({
  variant = "solid",
  size,
  children,
  width,
  colorScheme,
  as,
  leftIcon,
  rightIcon,
  iconSpacing,
  onClick,
}: ButtonProps) => {
  const contentProps = { leftIcon, rightIcon, iconSpacing, children };

  return (
    <StyledButton
      as={as}
      size={size}
      variant={variant}
      width={width}
      colorScheme={colorScheme}
      onClick={onClick}
    >
      <ButtonContent {...contentProps} />
    </StyledButton>
  );
};

type ButtonContentProps = Pick<
  ButtonProps,
  "leftIcon" | "rightIcon" | "children" | "iconSpacing"
>;

const ButtonContent = (props: ButtonContentProps) => {
  const { leftIcon, rightIcon, children, iconSpacing } = props;
  return (
    <>
      {leftIcon && (
        <span style={{ marginRight: foundations.space[1] || iconSpacing }}>
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span style={{ marginLeft: foundations.space[1] || iconSpacing }}>
          {rightIcon}
        </span>
      )}
    </>
  );
};

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${foundations.radii.md};

  padding-inline-start: ${foundations.space[4]};
  padding-inline-end: ${foundations.space[4]};
  color: ${foundations.colors.white};
  font-weight: ${foundations.fontWeights.semibold};

  ${({ size = "md" }) => SIZE_MAP[size]};

  ${({ width = "auto" }) => getWidth(width)};

  ${({ colorScheme = "blue", variant = "solid" }) =>
    getColorScheme(colorScheme, variant)};

  cursor: pointer;
`;

export default Button;
