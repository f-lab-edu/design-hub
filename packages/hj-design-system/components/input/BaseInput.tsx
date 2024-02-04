/** @jsxImportSource @emotion/react */

import { cloneElement, type FC, useMemo } from "react";

import { AFFIX_SIZE, affixDefaultStyles } from "./styles/base-input";
import { type BaseInputProps } from "./types";

const BaseInput: FC<BaseInputProps> = (props) => {
  const { size = "md", value, children, prefix, suffix, styles } = props;

  const hasAffix = Boolean(prefix) || Boolean(suffix);

  const element = cloneElement(children, {
    value,
  });

  const affixStyles = useMemo(() => {
    return [affixDefaultStyles, AFFIX_SIZE[size]];
  }, [size]);

  if (hasAffix) {
    return (
      <span css={styles}>
        {prefix && <span css={affixStyles}>{prefix}</span>}
        {element}
        {suffix && <span css={affixStyles}>{suffix}</span>}
      </span>
    );
  }

  return element;
};

export default BaseInput;
