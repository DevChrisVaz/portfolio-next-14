import { MouseEventHandle, RefObject } from "react";
import { ButtonSize, ButtonVariant } from "./enums";

export type ButtonProps = {
    disabled?: boolean;
    children: ReactNode,
    variant?: ButtonVariant,
    size?: ButtonSize,
    className?: string;
	type?: "reset" | "button" | "submit" | undefined;
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    ref?: RefObject<HTMLButtonElement>;
}


export type TextButtonProps = Omit<ButtonProps, "size" | "variant">;

export type LinkButtonProps = Omit<ButtonProps, "onClick" | "type", "disabled"> & {
    to: string;
}