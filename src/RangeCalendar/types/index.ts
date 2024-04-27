import {  RangeCalendarProps as AriaRangeCalendarProps,
    DateValue, } from "react-aria-components";

export interface RangeCalendarProps<T extends DateValue>
  extends Omit<AriaRangeCalendarProps<T>, "visibleDuration"> {
  errorMessage?: string;
}