import { LinkProps as AriaLinkProps, } from "react-aria-components";

export interface LinkProps extends AriaLinkProps {
    variant?: "primary" | "secondary";
  }