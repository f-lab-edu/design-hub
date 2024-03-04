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
  useCallback,
  useContext,
  useMemo,
  type KeyboardEvent,
} from "react";
import { TabsContext } from "./tabs-context";
import { TabsTab } from "./tabs-tab";
import { getDirectionStyle, listBaseStyle } from "./styles/tabs-list";
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
    () =>
      style
        ? css(listBaseStyle, getDirectionStyle(tabsContext?.direction), {
            ...style,
          })
        : [listBaseStyle, getDirectionStyle(tabsContext?.direction)],
    [style, tabsContext?.direction]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!tabsContext) return;

      const tabElements = Array.from(
        event.currentTarget.children
      ) as HTMLElement[];
      let newTabIndex = tabsContext.current || 0;

      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        const moveForward = event.key === "ArrowRight";

        for (let i = 1; i < tabElements.length; i++) {
          const potentialIndex =
            ((tabsContext.current || 0) +
              (moveForward ? i : -i) +
              tabElements.length) %
            tabElements.length;

          const potentialTab = tabElements[potentialIndex];

          if (!potentialTab.hasAttribute("disabled")) {
            newTabIndex = potentialIndex;
            break;
          }
        }
      }

      if (newTabIndex !== tabsContext.current && tabsContext.onChangeCurrent) {
        tabsContext.onChangeCurrent(newTabIndex);
        tabElements[newTabIndex].focus();
      }
    },
    [tabsContext]
  );

  if (!tabsContext) {
    throw new Error("Tabs.List must be rendered within a Tabs.Root.");
  }

  return (
    <Component
      ref={ref}
      role="tablist"
      onKeyDown={handleKeyDown}
      css={combinedStyles}
      {...rest}
    >
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
