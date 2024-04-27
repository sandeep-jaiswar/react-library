import { SearchFieldProps as AriaSearchFieldProps,
    ValidationResult, } from "react-aria-components";

export interface SearchFieldProps extends AriaSearchFieldProps {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
  }