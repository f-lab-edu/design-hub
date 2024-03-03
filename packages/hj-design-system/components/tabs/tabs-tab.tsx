import {
  ComponentProps,
  ForwardedRef,
  HTMLAttributes,
  forwardRef,
  useContext,
} from "react";
import { TabsContext, TabsProvider } from "./tabs-context";

type TabChangeHandler = ComponentProps<typeof TabsProvider>["onChangeCurrent"];

type TabsTabProps = HTMLAttributes<HTMLButtonElement> & {
  handleChange?: TabChangeHandler;
  index?: number;
  id?: string;
};

export const TabsTab = forwardRef(function TabsTab(
  props: TabsTabProps,
  ref?: ForwardedRef<HTMLButtonElement>
) {
  const { handleChange, index, onClick, id, ...rest } = props;

  const tabsContext = useContext(TabsContext);

  if (!tabsContext) {
    throw new Error("Tabs.Tab must be rendered within a Tabs.Root.");
  }

  return (
    <button
      role="tab"
      aria-selected={tabsContext?.current === index}
      id={id}
      ref={ref}
      onClick={(e) => {
        if (index !== undefined) {
          handleChange?.(index);
        }
        onClick?.(e);
      }}
      {...rest}
    />
  );
});
