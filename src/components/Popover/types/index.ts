import {  PopoverProps as AriaPopoverProps } from "react-aria-components";

export interface PopoverProps extends Omit<AriaPopoverProps, 'children'> {
    showArrow?: boolean,
    children: React.ReactNode
  }