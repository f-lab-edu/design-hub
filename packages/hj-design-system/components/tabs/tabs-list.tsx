/** @jsxImportSource @emotion/react */

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import {
  Children,
  ComponentProps,
  ElementType,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
  useContext,
  useMemo,
} from "react";
import { TabsContext } from "./tabs-context";
import { TabsTab } from "./tabs-tab";
import { listBaseStyle } from "./styles/tabs-list";
import { css } from "@emotion/react";

type TabsTab = ComponentProps<typeof TabsTab>;

type TabsListProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C>;

export const TabsList = forwardRef(function TabsList<
  C extends ElementType = "div",
>(props: TabsListProps<C>, ref?: PolymorphicRef<C>) {
  const { as, children, style, ...rest } = props;

  const tabsContext = useContext(TabsContext);

  const Component = as || "div";

  const combinedStyles = useMemo(
    () => (style ? css(listBaseStyle, { ...style }) : [listBaseStyle]),
    [style]
  );

  if (!tabsContext) {
    throw new Error("Tabs.List must be rendered within a Tabs.Root.");
  }

  return (
    <Component ref={ref} role="tablist" css={combinedStyles} {...rest}>
      {Children.map(children, (child, idx) => {
        if (!isValidElement(child)) return child;
        return cloneElement(child as ReactElement<TabsTab>, {
          handleChange: () => {
            if (tabsContext?.onChangeCurrent) tabsContext?.onChangeCurrent(idx);
          },
          index: idx,
          id: `tab-${idx}`,
        });
      })}
    </Component>
  );
});
