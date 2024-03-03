import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "components/polymorphic";
import { ElementType, forwardRef } from "react";

type TabsSizeSet = "sm" | "md" | "lg";

type TabsDirection = "horizontal" | "vertical";

type TabsRootProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
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
      onChange?: (index: number) => void;
      /**
       * Default tab index.
       * @default 0
       */
      defaultIndex?: number;
      /**
       * The direction of the tabs.
       * @default "horizontal"
       */
      direction?: TabsDirection;
    }
  >;

export const TabsRoot = forwardRef(function TabsRoot<
  C extends ElementType = "div",
>(props: TabsRootProps<C>, ref?: PolymorphicRef<C>) {
  const {
    as,
    children,
    size = "md",
    direction = "horizontal",
    ...rest
  } = props;

  const Component = as || "div";

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});
