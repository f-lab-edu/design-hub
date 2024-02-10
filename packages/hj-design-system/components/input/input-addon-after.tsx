/** @jsxImportSource @emotion/react */

import { type ElementType, forwardRef, useContext, useMemo } from "react";

import { css } from "@emotion/react";
import {
  type PolymorphicComponentPropsWithRef,
  type PolymorphicRef,
} from "components/polymorphic";

import { getAddonSizeStyles, inputAddonBaseStyle } from "./styles/input-addon";
import { InputContext } from "./input-context";

type InputAddonAfterProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

const InputAddonAfter = forwardRef(function InputAddonAfter<
  C extends ElementType = "div",
>(props: InputAddonAfterProps<C>, ref?: PolymorphicRef<C>) {
  const { as, style, ...rest } = props;
  const Component = as || "div";

  const inputContext = useContext(InputContext);

  const addonBeforeStyle = css({
    borderRadius: "0 6px 6px 0",
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

export default InputAddonAfter;
