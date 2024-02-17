import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";
import { ModalSizeSet } from "./types";

interface ModalContextProps {
  size: ModalSizeSet;
  setSize: Dispatch<SetStateAction<ModalSizeSet>>;
}
export const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [size, setSize] = useState<ModalSizeSet>("md");

  const ContextValue = useMemo(() => ({ size, setSize }), [size]);

  return (
    <ModalContext.Provider value={ContextValue}>
      {children}
    </ModalContext.Provider>
  );
};
