/** @jsxImportSource @emotion/react */

import { type ElementType, forwardRef, useMemo } from "react";

import { css } from "@emotion/react";
import {
  type PolymorphicComponentPropsWithRef,
  type PolymorphicRef,
} from "components/polymorphic";

import { inputAffixBaseStyle } from "./styles";

type InputSuffixProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

export const InputSuffix = forwardRef(function InputSuffix<
  C extends ElementType = "div",
>(props: InputSuffixProps<C>, ref?: PolymorphicRef<C>) {
  const { as, style, ...rest } = props;
  const Component = as || "div";

  const placement = css({
    right: 0,
  });

  const suffixStyles = useMemo(
    () => [inputAffixBaseStyle, placement, style],
    [style, placement],
  );

  return <Component css={css(suffixStyles)} ref={ref} {...rest} />;
});
