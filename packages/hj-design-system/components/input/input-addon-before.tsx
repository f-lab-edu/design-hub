/** @jsxImportSource @emotion/react */

import { type ElementType, forwardRef } from "react";

import { css } from "@emotion/react";
import {
  type PolymorphicComponentPropsWithRef,
  type PolymorphicRef,
} from "components/polymorphic";

type InputAddonBeforeProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

const InputAddonBefore = forwardRef(function InputAddonBefore<
  C extends ElementType = "div",
>(props: InputAddonBeforeProps<C>, ref?: PolymorphicRef<C>) {
  const { as, style, ...rest } = props;
  const Component = as || "div";

  const addonBaseStyle = css({
    flex: "0 0 auto",
    width: "auto",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
  });

  return <Component css={css(addonBaseStyle, style)} ref={ref} {...rest} />;
});

export default InputAddonBefore;
