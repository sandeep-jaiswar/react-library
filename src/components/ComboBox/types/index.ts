import { ComboBoxProps as AriaComboBoxProps,
    ValidationResult, } from "react-aria-components";

export interface ComboBoxProps<T extends object>
  extends Omit<AriaComboBoxProps<T>, "children"> {
  label?: string;
  description?: string | null;
  errorMessage?: string | ((validation: ValidationResult) => string);
  children: React.ReactNode | ((item: T) => React.ReactNode);
}
