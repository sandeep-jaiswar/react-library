import { ReactNode } from "react";
import {
  CheckboxGroupProps as AriaCheckboxGroupProps,
  ValidationResult,
} from "react-aria-components";

export interface CheckboxGroupProps
  extends Omit<AriaCheckboxGroupProps, "children"> {
  label?: string;
  children?: ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}
