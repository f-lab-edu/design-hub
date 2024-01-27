import { type ElementType, type ReactElement } from "react";

import styled from "@emotion/styled";

import { foundations } from "../../theme/foundations";
import { SIZE_MAP } from "./styles";
import { type ButtonSizeSet } from "./types";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variants?: "solid" | "outline";
  /*
   * The variant of the button.
   */
  size?: ButtonSizeSet;
  /*
   * The size of the button.
   */
  colorScheme?: "primary" | "secondary" | "danger";
  /*
   * The color scheme of the button.
   */
  leftIcon?: ReactElement;
  /*
   * If added, the icon will appear on the left.
   */
  rightIcon?: ReactElement;
  /*
   * If added, the icon will appear on the right.
   */
  as?: ElementType;
}

const Button = ({ variants = "solid", size, children }: Props) => {
  return <StyledButton size={size}>{children}</StyledButton>;
};

const StyledButton = styled.button<Props>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${foundations.radii.md};
  background-color: ${foundations.colors.blue[500]};
  padding-inline-start: ${foundations.space[4]};
  padding-inline-end: ${foundations.space[4]};
  color: ${foundations.colors.white};
  font-weight: ${foundations.fontWeights.semibold};

  ${({ size = "md" }) => SIZE_MAP[size]};
`;

export default Button;
