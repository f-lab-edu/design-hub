import { useToggle } from "../../hooks/use-toggle";
import { ReactNode, createContext, useMemo, useState } from "react";

interface ComboboxContextProps {
  /**
   * The current selected option index.
   */
  current?: number;
  /**
   * The open satet of the combobox
   */
  isOpen: boolean;
  /**
   * Change the open state of the combobox
   */
  toggle: () => void;
}

export const ComboboxContext = createContext<ComboboxContextProps | null>(null);

interface ComboboxProviderProps {
  children: ReactNode;
  /**
   * The current selected option index.
   */
  current?: number;
}

export const ComboboxProvider = ({
  children,
  current,
}: ComboboxProviderProps) => {
  const [currentValue, changeCurrent] = useState(current ?? 0);

  const { isOpen, toggle } = useToggle();

  const ContextValue = useMemo(
    () => ({ current: currentValue, changeCurrent, isOpen, toggle }),
    [currentValue, current, isOpen]
  );

  return (
    <ComboboxContext.Provider value={ContextValue}>
      {children}
    </ComboboxContext.Provider>
  );
};
