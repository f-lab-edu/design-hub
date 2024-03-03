import { ReactNode, createContext, useMemo, useState } from "react";
import { TabsDirection, TabsSizeSet } from "./types";

type TabsContextProps = Omit<TabsProviderProps, "children">;

export const TabsContext = createContext<TabsContextProps | null>(null);

interface TabsProviderProps {
  children: ReactNode;
  size?: TabsSizeSet;
  current?: number;
  onChangeCurrent?: (index: number) => void;
  direction?: TabsDirection;
}

export const TabsProvider = ({
  children,
  size,
  current,
  onChangeCurrent,
  direction,
}: TabsProviderProps) => {
  const [internalCurrent, changeInternalCurrent] = useState(current ?? 0);

  const ContextValue = useMemo(
    () => ({
      size,
      current: current ?? internalCurrent,
      onChangeCurrent: onChangeCurrent ?? changeInternalCurrent,
      direction,
    }),
    [size, current, direction, current, onChangeCurrent, internalCurrent]
  );

  return (
    <TabsContext.Provider value={ContextValue}>{children}</TabsContext.Provider>
  );
};
