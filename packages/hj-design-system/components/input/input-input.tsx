import { type ElementType, forwardRef } from "react";

import {
  type PolymorphicComponentProp,
  type PolymorphicRef,
} from "components/polymorphic";

type InputProps<C extends ElementType> = PolymorphicComponentProp<C>;

const InputInput = forwardRef(function InputInput<
  C extends ElementType = "input",
>(props: InputProps<C>, ref?: PolymorphicRef<C>) {
  const Component = props.as || "input";
  return <Component ref={ref} {...props} />;
});

export default InputInput;
