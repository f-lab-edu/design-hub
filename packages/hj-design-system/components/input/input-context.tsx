import { createContext, type ReactNode, useMemo, useState } from "react";

import { type InputSizeSet } from "./types";

interface InputContextType {
  size: InputSizeSet;
  setSize: (size: InputSizeSet) => void;
}

export const InputContext = createContext<InputContextType | null>(null);

const InputProvider = ({ children }: { children: ReactNode }) => {
  const [size, setSize] = useState<InputSizeSet>("md");

  const ContextValue = useMemo(() => ({ size, setSize }), [size]);

  return (
    <InputContext.Provider value={ContextValue}>
      {children}
    </InputContext.Provider>
  );
};

export default InputProvider;
