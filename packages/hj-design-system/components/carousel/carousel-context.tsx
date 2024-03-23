import { ReactNode, createContext } from "react";

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
  return (
    <CarouselContext.Provider value={{ current }}>
      {children}
    </CarouselContext.Provider>
  );
};
