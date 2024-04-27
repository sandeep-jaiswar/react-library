import { DateFieldProps as AriaDateFieldProps,
    DateValue,
    ValidationResult, } from "react-aria-components";

export interface DateFieldProps<T extends DateValue>
  extends AriaDateFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}