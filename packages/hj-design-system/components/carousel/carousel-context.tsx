import { ReactNode, createContext, useMemo } from "react";

interface CarouselContext {
  /**
   * Current index of the carousel
   */
  current?: number;
}

const CarouselContext = createContext<CarouselContext | null>(null);

interface ContextProvider {
  /**
   * Current index of the carousel
   */
  current?: number;
  children: ReactNode;
}

export const CarouselProvider = ({ children, current }: ContextProvider) => {
  const ContextValue = useMemo(() => ({ current }), [current]);

  return (
    <CarouselContext.Provider value={ContextValue}>
      {children}
    </CarouselContext.Provider>
  );
};
