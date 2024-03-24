import { ReactNode, createContext, useContext } from "react";

interface CarouselViewportContext {
  /**
   * The width of the carousel viewport
   */
  width?: number;
}

export const CarouselViewportContext =
  createContext<CarouselViewportContext | null>(null);

interface CarouselViewportProvider {
  /**
   * The width of the carousel viewport
   */
  width?: number;
  children: ReactNode;
}

export const CarouselViewportProvider = ({
  children,
  width,
}: CarouselViewportProvider) => {
  return (
    <CarouselViewportContext.Provider value={{ width }}>
      {children}
    </CarouselViewportContext.Provider>
  );
};

export const useCarouselViewport = () => {
  const context = useContext(CarouselViewportContext);

  if (!context) {
    throw new Error(
      "useCarouselViewport must be used within a CarouselViewportProvider. Did you forget to wrap your component in a Carousel.Viewport?"
    );
  }

  return context;
};
