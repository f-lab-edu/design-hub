/** @jsxImportSource @emotion/react */


import { type ElementType, forwardRef, useMemo } from "react";

import { css } from "@emotion/react";
import {
  type PolymorphicComponentPropsWithRef,
  type PolymorphicRef,
} from "components/polymorphic";

import { inputAffixBaseStyle } from "./styles";

type InputPrefixProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;
export const InputPrefix = forwardRef(function InputPrefix<
  C extends ElementType = "div",
>(props: InputPrefixProps<C>, ref?: PolymorphicRef<C>) {
  const { as, style, ...rest } = props;
  const Component = as || "div";

  const placement = css({
    left: 0,
  });

  const prefixStyles = useMemo(
    () => [inputAffixBaseStyle, placement, style],
    [style, placement],
  );

  return <Component css={css(prefixStyles)} ref={ref} {...rest} />;
});
