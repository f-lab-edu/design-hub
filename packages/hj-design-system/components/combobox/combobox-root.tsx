import { ForwardedRef, HTMLAttributes, forwardRef } from "react";

type ComboboxRootProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * The current selected option index.
   */
  current?: number;
};

export const ComboboxRoot = forwardRef(function ComboboxRoot(
  props: ComboboxRootProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const { children, current, ...rest } = props;

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});
