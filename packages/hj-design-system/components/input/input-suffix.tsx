/** @jsxImportSource @emotion/react */

import { type ElementType, forwardRef, useContext, useMemo } from "react";

import { css } from "@emotion/react";
import {
  type PolymorphicComponentPropsWithRef,
  type PolymorphicRef,
} from "components/polymorphic";

import { InputContext } from "./input-context";
import { getAffixSizeStyles, inputAffixBaseStyle } from "./styles";

type InputSuffixProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

const InputSuffix = forwardRef(function InputSuffix<
  C extends ElementType = "div",
>(props: InputSuffixProps<C>, ref?: PolymorphicRef<C>) {
  const { as, style, ...rest } = props;
  const Component = as || "div";

  const inputContext = useContext(InputContext);

  const suffixStyles = css({
    borderLeft: "none",
  });

  const styles = useMemo(
    () => [
      inputAffixBaseStyle,
      suffixStyles,
      getAffixSizeStyles(inputContext?.size),
      style,
    ],
    [style, inputContext?.size]
  );

  return <Component css={css(styles)} ref={ref} {...rest} />;
});

export default InputSuffix;
