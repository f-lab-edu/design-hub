import { ReactNode, createContext, useMemo, useState } from "react";
import { TabsDirection, TabsSizeSet } from "./types";

type TabsContextProps = Omit<TabsProviderProps, "children">;

export const TabsContext = createContext<TabsContextProps | null>(null);

interface TabsProviderProps {
  children: ReactNode;
  size: TabsSizeSet;
  defaultIndex: number;
  current?: number;
  onChangeCurrent?: (index: number) => void;
  direction?: TabsDirection;
}

export const TabsProvider = ({
  children,
  size,
  defaultIndex,
  current,
  onChangeCurrent,
  direction,
}: TabsProviderProps) => {
  const ContextValue = useMemo(
    () => ({ size, defaultIndex, current, onChangeCurrent, direction }),
    [size, defaultIndex, current, direction]
  );

  return (
    <TabsContext.Provider value={ContextValue}>{children}</TabsContext.Provider>
  );
};
