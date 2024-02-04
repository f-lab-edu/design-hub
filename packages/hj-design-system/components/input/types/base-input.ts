import {
  type InputHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";

import { type SerializedStyles } from "@emotion/react";

export type ValueType = InputHTMLAttributes<HTMLInputElement>["value"];

export interface BaseInputProps {
  value?: ValueType;
  children: ReactElement;
  prefix?: ReactNode;
  suffix?: ReactNode;
  styles?: SerializedStyles;
}
