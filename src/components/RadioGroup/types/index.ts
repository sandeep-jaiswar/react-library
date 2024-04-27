import { ReactNode } from "react";
import {  RadioGroupProps as RACRadioGroupProps,
    ValidationResult, } from "react-aria-components";

export interface RadioGroupProps extends Omit<RACRadioGroupProps, "children"> {
    label?: string;
    children?: ReactNode;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
  }