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
  activeItemIdx: number;
  changeActiveItemIdx: Dispatch<SetStateAction<number>>;
}

export const MenuContext = createContext<MenuContextValue | null>(null);

interface MenuProviderProps {
  children: ReactNode;
  direction?: Direction;
}

export const MenuProvider = ({ children, direction }: MenuProviderProps) => {
  const { isOpen, toggle } = useToggle();

  const [activeItemIdx, changeActiveItemIdx] = useState<number>(0);

  const ContextValue = useMemo(
    () => ({ isOpen, toggle, direction, activeItemIdx, changeActiveItemIdx }),
    [isOpen, direction, activeItemIdx]
  );

  return (
    <MenuContext.Provider value={ContextValue}>{children}</MenuContext.Provider>
  );
};
