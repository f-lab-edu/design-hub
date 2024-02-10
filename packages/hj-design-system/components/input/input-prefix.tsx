/** @jsxImportSource @emotion/react */

import { type ElementType, forwardRef, useContext, useMemo } from "react";

import { css } from "@emotion/react";
import {
  type PolymorphicComponentPropsWithRef,
  type PolymorphicRef,
} from "components/polymorphic";

import { InputContext } from "./input-context";
import { getAffixSizeStyles, inputAffixBaseStyle } from "./styles";

type InputPrefixProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

const InputPrefix = forwardRef(function InputPrefix<
  C extends ElementType = "div",
>(props: InputPrefixProps<C>, ref?: PolymorphicRef<C>) {
  const { as, style, ...rest } = props;
  const Component = as || "div";

  const inputContext = useContext(InputContext);

  const prefixStyles = css({
    borderRight: "none",
  });

  const styles = useMemo(
    () => [
      inputAffixBaseStyle,
      prefixStyles,
      getAffixSizeStyles(inputContext?.size),
      style,
    ],
    [style, inputContext?.size]
  );

  return <Component css={styles} ref={ref} {...rest} />;
});

export default InputPrefix;
