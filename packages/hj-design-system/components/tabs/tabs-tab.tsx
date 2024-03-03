import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ComponentProps, ElementType, forwardRef, useContext } from "react";
import { TabsContext, TabsProvider } from "./tabs-context";

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

  const tabsContext = useContext(TabsContext);

  const Component = as || "button";

  if (!tabsContext) {
    throw new Error("Tabs.Tab must be rendered within a Tabs.Root.");
  }

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
