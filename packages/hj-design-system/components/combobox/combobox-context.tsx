import { useToggle } from "../../hooks/use-toggle";
import { ReactNode, createContext, useMemo, useState } from "react";

interface ComboboxContextProps {
  /**
   * The current selected option value
   * @type string
   */
  current?: string;
  /**
   * The open satet of the combobox
   */
  isOpen: boolean;
  /**
   * Change the open state of the combobox
   */
  toggle: () => void;
  /**
   * Change the open state of the combobox
   */
  changeIsOpen: (value: boolean) => void;
  /**
   * Change the current selected option value
   * @param value - the value of the selected option
   */
  changeCurrent: (value: string) => void;
}

export const ComboboxContext = createContext<ComboboxContextProps | null>(null);

interface ComboboxProviderProps {
  children: ReactNode;
  /**
   * The current selected option value.
   * @type string
   */
  current?: string;
}

export const ComboboxProvider = ({
  children,
  current,
}: ComboboxProviderProps) => {
  const [currentValue, changeCurrent] = useState(current ?? "");

  const { isOpen, toggle, changeIsOpen } = useToggle();

  const ContextValue = useMemo(
    () => ({
      current: currentValue,
      changeCurrent,
      isOpen,
      toggle,
      changeIsOpen,
    }),
    [currentValue, current, isOpen]
  );

  return (
    <ComboboxContext.Provider value={ContextValue}>
      {children}
    </ComboboxContext.Provider>
  );
};
