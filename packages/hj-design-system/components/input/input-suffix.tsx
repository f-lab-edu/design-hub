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

type InputSuffixProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

const InputSuffix = forwardRef(function InputSuffix<
  C extends ElementType = "div",
>(props: InputSuffixProps<C>, ref?: PolymorphicRef<C>) {
  const { as, style, children, ...rest } = props;
  const Component = as || "div";

  const inputContext = useContext(InputContext);
  const suffixStyles = css({
    borderLeft: "none",
    borderTopRightRadius: "6px",
    borderBottomRightRadius: "6px",
  });

  const getSuffixBorderStyles = (hasAddonAfter?: boolean) => {
    if (hasAddonAfter) {
      return css({
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
      });
    }
  };

  const styles = useMemo(
    () => [
      inputAffixBaseStyle,
      suffixStyles,
      getAffixSizeStyles(inputContext?.size),
      getAffixVariantStyles(inputContext?.variant),
      getSuffixBorderStyles(inputContext?.hasAddonAfter),
      style,
    ],
    [
      suffixStyles,
      style,
      inputContext?.size,
      inputContext?.variant,
      inputContext?.hasAddonAfter,
    ]
  );

  useEffect(() => {
    inputContext?.setHasSuffix(Boolean(children));
    return () => inputContext?.setHasSuffix(false);
  }, [children, inputContext]);

  return (
    <Component css={styles} ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default InputSuffix;
