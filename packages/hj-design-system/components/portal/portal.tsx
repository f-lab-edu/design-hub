import {
  ForwardedRef,
  PropsWithChildren,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";

type PortalContainerType = Element | DocumentFragment;

interface PortalProps {
  /**
   * The children to render into the `container`.
   * @default document.body
   */
  portalContainer?: Element | DocumentFragment | null;
  /**
   * If `true`, the children will be rendered in place instead of being portaled.
   */
  disablePortal?: boolean;
}

const Portal = forwardRef(function Portal(
  props: PropsWithChildren<PortalProps>,
  ref?: ForwardedRef<HTMLElement>
) {
  const {
    children,
    portalContainer = document.body,
    disablePortal = false,
  } = props;
  const [container, setContainer] =
    useState<PortalContainerType>(portalContainer);

  useEffect(() => {
    if (document) setContainer(portalContainer);
  }, [portalContainer]);

  if (disablePortal) {
    if (isValidElement(children)) {
      const newProps = {
        ref,
      };
      return cloneElement(children, newProps);
    }
    return children;
  }

  return container ? createPortal(children, container) : null;
});

export default Portal;
