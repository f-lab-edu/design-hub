/** @jsxImportSource @emotion/react */

import { ForwardedRef, HTMLAttributes, forwardRef, useMemo } from "react";
import { TabsSizeSet, TabsDirection } from "./types";
import { TabsProvider } from "./tabs-context";
import { css } from "@emotion/react";

type TabsRootProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * The size of the tabs.
   * @default "md"
   */
  size?: TabsSizeSet;
  /**
   * The current selected tab index.
   * @default 0
   */
  current?: number;
  /**
   * The callback function that is called when the tab is clicked.
   */
  onChangeCurrent?: (index: number) => void;
  /**
   * The direction of the tabs.
   * @default "horizontal"
   */
  direction?: TabsDirection;
};

export const TabsRoot = forwardRef(function TabsRoot(
  props: TabsRootProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const {
    children,
    size = "md",
    current,
    onChangeCurrent,
    direction = "horizontal",
    style,
    ...rest
  } = props;

  const combinedStyles = useMemo(
    () => (style ? css({ ...style }) : []),
    [style]
  );

  return (
    <TabsProvider
      size={size}
      current={current}
      onChangeCurrent={onChangeCurrent}
      direction={direction}
    >
      <div ref={ref} css={combinedStyles} {...rest}>
        {children}
      </div>
    </TabsProvider>
  );
});
