/** @jsxImportSource @emotion/react */

import {
  Children,
  ForwardedRef,
  HTMLAttributes,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
  useMemo,
} from "react";
import { useCarousel } from "./carousel-context";
import {
  getTransformStyle,
  itemGroupBaseStyle,
} from "./style/carousel-item-group";
import { css } from "@emotion/react";

type CarouselItemGroupProps = HTMLAttributes<HTMLDivElement>;

export const CarouselItemGroup = forwardRef(function CarouselItemGroup(
  props: CarouselItemGroupProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const { children, style, ...rest } = props;

  const context = useCarousel();
  const itemWidth = 200;

  const styles = useMemo(() => {
    const baseStyles = css(
      itemGroupBaseStyle,
      getTransformStyle(context.current, itemWidth)
    );
    if (style) return css(baseStyles, { ...style });
    return baseStyles;
  }, [style, context.current]);

  return (
    <div ref={ref} css={styles} {...rest}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return null;
        }
        context.changeTotal(Children.count(children));
        return cloneElement(child as ReactElement, {
          index,
        });
      })}
    </div>
  );
});
