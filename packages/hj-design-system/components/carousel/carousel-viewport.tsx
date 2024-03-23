/** @jsxImportSource @emotion/react */

import { ForwardedRef, HTMLAttributes, forwardRef, useMemo } from "react";
import { useCarousel } from "./carousel-context";
import { css } from "@emotion/react";
import { viewportBaseStyle } from "./style/carousel-viewport";

type CarouselViewportProps = HTMLAttributes<HTMLDivElement>;

export const CarouselViewport = forwardRef(function CarouselViewport(
  props: CarouselViewportProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const { children, style, ...rest } = props;

  const context = useCarousel();

  const styles = useMemo(() => {
    if (style) return css(viewportBaseStyle, { ...style });
    return viewportBaseStyle;
  }, [style]);

  return (
    <div ref={ref} css={styles} {...rest}>
      {children}
    </div>
  );
});
