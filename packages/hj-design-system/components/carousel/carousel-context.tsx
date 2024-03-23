import { ReactNode, createContext, useContext, useMemo } from "react";

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

export const useCarousel = () => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error(
      "useCarousel must be used within a CarouselProvider. Did you forget to wrap your component in a Carousel.Root?"
    );
  }

  return context;
};
