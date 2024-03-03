import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef, useContext } from "react";
import { TabsContext } from "./tabs-context";

type TabsPanelProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      id?: string;
      index?: number;
    }
  >;

export const TabsPanel = forwardRef(function TabsPanel<
  C extends ElementType = "div",
>(props: TabsPanelProps<C>, ref?: PolymorphicRef<C>) {
  const tabsContext = useContext(TabsContext);

  const { as, id, index, ...rest } = props;

  const Component = as || "div";

  if (!tabsContext) {
    throw new Error("Tabs.Panel must be rendered within a Tabs.Root.");
  }

  return (
    <>
      {tabsContext.current === index && (
        <Component
          id={id}
          ref={ref}
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={`tab-${index}`}
          {...rest}
        />
      )}
    </>
  );
});
