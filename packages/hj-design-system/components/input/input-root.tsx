/** @jsxImportSource @emotion/react */

import { type ElementType, forwardRef } from "react";

import {
  type PolymorphicComponentProp,
  type PolymorphicRef,
} from "components/polymorphic";

import { rootBaseStyles } from "./styles";

type InputRootProps<C extends ElementType> = PolymorphicComponentProp<C>;

const InputRoot = forwardRef(function InputRoot<C extends ElementType = "div">(
  props: InputRootProps<C>,
  ref?: PolymorphicRef<C>,
) {
  const Component = props.as || "div";
  return <Component ref={ref} css={rootBaseStyles} {...props} />;
});

export default InputRoot;
