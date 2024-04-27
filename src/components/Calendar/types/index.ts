import { ReactNode } from "react";
import { DateValue, CalendarProps as AriaCalendarProps, } from "react-aria-components";

export interface CalendarProps<T extends DateValue>
  extends Omit<AriaCalendarProps<T>, "visibleDuration"> {
  errorMessage?: string;
}