import { MenuProps as AriaMenuProps, PopoverProps, } from "react-aria-components";

export interface MenuProps<T> extends AriaMenuProps<T> {
    placement?: PopoverProps["placement"];
  }