import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ComponentProps, ElementType, forwardRef } from "react";
import { TabsProvider } from "./tabs-context";

type TabChangeHandler = ComponentProps<typeof TabsProvider>["onChangeCurrent"];

type TabsTabProps<C extends ElementType = "button"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      handleChange?: TabChangeHandler;
      index: number;
    }
  >;

export const TabsTab = forwardRef(function TabsTab<
  C extends ElementType = "button",
>(props: TabsTabProps<C>, ref?: PolymorphicRef<C>) {
  const { as, handleChange, index, onClick, ...rest } = props;

  const Component = as || "button";

  return (
    <Component
      ref={ref}
      onClick={() => {
        handleChange?.(index);
        onClick?.();
      }}
      {...rest}
    />
  );
});
