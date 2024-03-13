import { ReactNode, createContext, useMemo, useState } from "react";

interface ComboboxContextProps {
  /**
   * The current selected option index.
   */
  current?: number;
}

export const ComboboxContext = createContext<ComboboxContextProps | null>(null);

interface ComboboxProviderProps {
  children: ReactNode;
  current?: number;
}

export const ComboboxProvider = ({
  children,
  current,
}: ComboboxProviderProps) => {
  const [currentValue, changeCurrent] = useState(current ?? 0);

  const ContextValue = useMemo(
    () => ({ current: currentValue, changeCurrent }),
    [currentValue, current]
  );

  return (
    <ComboboxContext.Provider value={ContextValue}>
      {children}
    </ComboboxContext.Provider>
  );
};
