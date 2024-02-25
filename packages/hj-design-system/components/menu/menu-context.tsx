import { ReactNode, createContext, useMemo } from "react";
import { useMenu } from "./hooks/use-menu";

interface MenuContextValue {
  isOpen: boolean;
  toggle: () => void;
}

export const MenuContext = createContext<MenuContextValue | null>(null);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const { isOpen, toggle } = useMenu();

  const ContextValue = useMemo(() => ({ isOpen, toggle }), [isOpen]);

  return (
    <MenuContext.Provider value={ContextValue}>{children}</MenuContext.Provider>
  );
};
