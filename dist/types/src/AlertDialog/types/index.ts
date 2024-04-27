import { ReactNode } from "react";
import { DialogProps } from "react-aria-components";

export interface AlertDialogProps extends Omit<DialogProps, "children"> {
    title: string;
    children: ReactNode;
    variant?: "info" | "destructive";
    actionLabel: string;
    cancelLabel?: string;
    onAction?: () => void;
}