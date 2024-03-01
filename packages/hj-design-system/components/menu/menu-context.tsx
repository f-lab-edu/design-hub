import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";
import { useToggle } from "./use-toggle";
import { Direction } from "./menu-root";

interface MenuContextValue {
  isOpen: boolean;
  toggle: () => void;
  current: number;
  changeCurrent: (value: number) => void;
  direction?: Direction;
  defaultOpen?: boolean;
  changeIsOpen: (value: boolean) => void;
}

export const MenuContext = createContext<MenuContextValue | null>(null);

interface MenuProviderProps {
  children: ReactNode;
  direction?: Direction;
  defaultOpen?: boolean;
}

export const MenuProvider = ({
  children,
  direction,
  defaultOpen,
}: MenuProviderProps) => {
  const { isOpen, toggle, changeIsOpen } = useToggle(defaultOpen || false);

  const [current, changeCurrent] = useState<number>(0);

  const ContextValue = useMemo(
    () => ({
      isOpen,
      toggle,
      changeIsOpen,
      current,
      changeCurrent,
      direction,
      defaultOpen,
    }),
    [isOpen, current, direction, defaultOpen]
  );

  return (
    <MenuContext.Provider value={ContextValue}>{children}</MenuContext.Provider>
  );
};
