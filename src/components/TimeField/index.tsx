import React from "react";
import {
  TimeField as AriaTimeField,
  TimeValue,
} from "react-aria-components";
import { DateInput } from "../DateField";
import { Description, FieldError, Label } from "../Field";
import { TimeFieldProps } from "./types";



export function TimeField<T extends TimeValue>({
  label,
  description,
  errorMessage,
  ...props
}: TimeFieldProps<T>) {
  return (
    <AriaTimeField {...props}>
      <Label>{label}</Label>
      <DateInput />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTimeField>
  );
}
