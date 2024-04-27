import {   SwitchProps as AriaSwitchProps, } from "react-aria-components";

export interface SwitchProps extends Omit<AriaSwitchProps, "children"> {
    children: React.ReactNode;
  }