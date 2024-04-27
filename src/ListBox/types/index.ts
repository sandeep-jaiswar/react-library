import {  ListBoxProps as AriaListBoxProps, } from "react-aria-components";

export interface ListBoxProps<T>
extends Omit<AriaListBoxProps<T>, "layout" | "orientation"> {}