import { NumberFieldProps as AriaNumberFieldProps,
    ValidationResult, } from "react-aria-components";

export interface NumberFieldProps extends AriaNumberFieldProps {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
  }
  