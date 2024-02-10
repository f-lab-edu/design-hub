/** @jsxImportSource @emotion/react */

import { type ElementType, forwardRef } from "react";

import {
  type PolymorphicComponentProp,
  type PolymorphicRef,
} from "components/polymorphic";

import { rootBaseStyles } from "./styles";

type InputGroupProps<C extends ElementType> = PolymorphicComponentProp<C>;

const InputGroup = forwardRef(function InputGroup<
  C extends ElementType = "div",
>(props: InputGroupProps<C>, ref?: PolymorphicRef<C>) {
  const Component = props.as || "div";
  return <Component ref={ref} css={rootBaseStyles} {...props} />;
});

export default InputGroup;
