/** @jsxImportSource @emotion/react */

import { type ElementType, forwardRef, useContext, useMemo } from "react";

import { css } from "@emotion/react";
import {
  type PolymorphicComponentPropsWithRef,
  type PolymorphicRef,
} from "components/polymorphic";

import { getAddonSizeStyles, inputAddonBaseStyle } from "./styles/input-addon";
import { InputContext } from "./input-context";

type InputAddonBeforeProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

const InputAddonBefore = forwardRef(function InputAddonBefore<
  C extends ElementType = "div",
>(props: InputAddonBeforeProps<C>, ref?: PolymorphicRef<C>) {
  const { as, style, ...rest } = props;
  const Component = as || "div";

  const inputContext = useContext(InputContext);

  const addonBeforeStyle = css({
    borderRadius: "6px 0 0 6px",
  });

  const styles = useMemo(
    () => [
      inputAddonBaseStyle,
      addonBeforeStyle,
      getAddonSizeStyles(inputContext?.size),
      style,
    ],
    [style, inputContext?.size]
  );

  return <Component css={styles} ref={ref} {...rest} />;
});

export default InputAddonBefore;
