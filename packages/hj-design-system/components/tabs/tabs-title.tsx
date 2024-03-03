import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef } from "react";

type TabsTitleProps<C extends ElementType = "h3"> =
  PolymorphicComponentPropsWithRef<C>;

export const TabsTitle = forwardRef(function TabsTitle<
  C extends ElementType = "h3",
>(props: TabsTitleProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, ...rest } = props;

  const Component = as || "h3";

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});
