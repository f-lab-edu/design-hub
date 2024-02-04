/** @jsxImportSource @emotion/react */

import { cloneElement, type FC } from "react";

import { css } from "@emotion/react";

import { foundations } from "../../theme/foundations";
import { type BaseInputProps } from "./types";

const BaseInput: FC<BaseInputProps> = (props) => {
  const { value, children, prefix, suffix, styles } = props;

  const hasAffix = Boolean(prefix) || Boolean(suffix);

  const element = cloneElement(children, {
    value,
  });

  const prefixStyle = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    width: ${foundations.space[10]};
    height: ${foundations.space[10]};
    > svg {
      width: 1em;
      height: 1em;
    }
  `;

  const suffixStyle = css`
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 8px;
    width: ${foundations.space[10]};
    height: ${foundations.space[10]};
    > svg {
      width: 1em;
      height: 1em;
    }
  `;

  if (hasAffix) {
    return (
      <span css={styles}>
        {prefix && <span css={prefixStyle}>{prefix}</span>}
        {element}
        {suffix && <span css={suffixStyle}>{suffix}</span>}
      </span>
    );
  }

  return element;
};

export default BaseInput;
