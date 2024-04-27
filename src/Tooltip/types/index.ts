import { TooltipProps as AriaTooltipProps } from "react-aria-components";
export interface TooltipProps extends Omit<AriaTooltipProps, 'children'> {
    children: React.ReactNode;
  }