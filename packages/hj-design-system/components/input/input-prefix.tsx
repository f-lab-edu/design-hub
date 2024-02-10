/** @jsxImportSource @emotion/react */

import {
  type ElementType,
  forwardRef,
  useContext,
  useEffect,
  useMemo,
} from "react";

import { css } from "@emotion/react";
import {
  type PolymorphicComponentPropsWithRef,
  type PolymorphicRef,
} from "components/polymorphic";

import { InputContext } from "./input-context";
import {
  getAffixSizeStyles,
  getAffixVariantStyles,
  inputAffixBaseStyle,
} from "./styles";

type InputPrefixProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

const InputPrefix = forwardRef(function InputPrefix<
  C extends ElementType = "div",
>(props: InputPrefixProps<C>, ref?: PolymorphicRef<C>) {
  const { as, style, children, ...rest } = props;
  const Component = as || "div";

  const inputContext = useContext(InputContext);

  const prefixStyles = css({
    borderRight: "none",
    borderTopLeftRadius: "6px",
    borderBottomLeftRadius: "6px",
  });

  const getPrefixBorderStyles = (hasAddonBefore?: boolean) => {
    if (hasAddonBefore) {
      return css({
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
      });
    }
  };

  const styles = useMemo(
    () => [
      inputAffixBaseStyle,
      prefixStyles,
      getAffixSizeStyles(inputContext?.size),
      getAffixVariantStyles(inputContext?.variant),
      getPrefixBorderStyles(inputContext?.hasAddonBefore),
      style,
    ],
    [
      prefixStyles,
      style,
      inputContext?.size,
      inputContext?.variant,
      inputContext?.hasAddonBefore,
    ]
  );

  useEffect(() => {
    inputContext?.setHasPrefix(Boolean(children));
    return () => inputContext?.setHasPrefix(false);
  }, [children, inputContext]);

  return (
    <Component css={styles} ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default InputPrefix;
