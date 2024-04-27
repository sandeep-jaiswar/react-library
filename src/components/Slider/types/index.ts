import { SliderProps as AriaSliderProps, } from "react-aria-components";

export interface SliderProps<T> extends AriaSliderProps<T> {
    label?: string;
    thumbLabels?: string[];
  }