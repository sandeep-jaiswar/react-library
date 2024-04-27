import {
  ButtonProps as RACButtonProps,
} from "react-aria-components";

export interface ButtonProps extends RACButtonProps {
  variant?: "primary" | "secondary" | "destructive" | "icon";
}
