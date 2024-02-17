import { FC, ReactNode, createContext, useMemo, useState } from "react";
import { ModalSizeSet } from "./types";

interface ModalContextProps {
  size?: ModalSizeSet;
}
const ModalContext = createContext<ModalContextProps>({});

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [size, setSize] = useState<ModalSizeSet>("md");

  const ContextValue = useMemo(() => ({ size, setSize }), [size]);

  return (
    <ModalContext.Provider value={ContextValue}>
      {children}
    </ModalContext.Provider>
  );
};
