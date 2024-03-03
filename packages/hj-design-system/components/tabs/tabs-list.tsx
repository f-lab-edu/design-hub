import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import {
  Children,
  ElementType,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
  useContext,
} from "react";
import { TabsContext } from "./tabs-context";

type TabsListProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

export const TabsList = forwardRef(function TabsList<
  C extends ElementType = "div",
>(props: TabsListProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, ...rest } = props;

  const tabsContext = useContext(TabsContext);

  const Component = as || "div";

  if (!tabsContext) {
    throw new Error("Tabs.List must be rendered within a Tabs.Root.");
  }

  return (
    <Component ref={ref} role="tablist" {...rest}>
      {Children.map(children, (child, idx) => {
        if (!isValidElement(child)) return child;
        return cloneElement(child as ReactElement, {
          handleChange: () => {
            if (tabsContext?.onChangeCurrent) tabsContext?.onChangeCurrent(idx);
          },
          index: idx,
        });
      })}
    </Component>
  );
});
