import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";
import { useMenu } from "./use-menu";
import { Direction } from "./menu-root";

interface MenuContextValue {
  isOpen: boolean;
  toggle: () => void;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export const MenuContext = createContext<MenuContextValue | null>(null);

interface MenuProviderProps {
  children: ReactNode;
  direction?: Direction;
}

export const MenuProvider = ({ children, direction }: MenuProviderProps) => {
  const { isOpen, toggle } = useMenu();

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const ContextValue = useMemo(
    () => ({ isOpen, toggle, direction, activeIndex, setActiveIndex }),
    [isOpen, direction, activeIndex]
  );

  return (
    <MenuContext.Provider value={ContextValue}>{children}</MenuContext.Provider>
  );
};
