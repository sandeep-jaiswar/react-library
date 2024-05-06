import {
    DatePickerProps as AriaDatePickerProps,
    DateValue,
    ValidationResult,
  } from "react-aria-components";

  export interface DatePickerProps<T extends DateValue>
  extends AriaDatePickerProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}