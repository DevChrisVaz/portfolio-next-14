"use client"

import React from 'react';
import { LinkButtonProps } from './button';
import { ButtonSize, ButtonVariant } from './enums';
import Link from 'next/link';

const LinkButton: React.FC<LinkButtonProps> = (props) => {

    const setSize = (size?: ButtonSize): string => {
        switch (size) {
            case ButtonSize.sm:
                return "py-1 px-3";
            case ButtonSize.md:
                return "py-2 px-3";
            case ButtonSize.lg:
                return "py-3 px-4";
            case ButtonSize.xl:
                return "py-4 px-5";
            case ButtonSize.circle:
                return "p-2";
            default:
                return "py-3 px-4";
        }
    }

    const setVariant = () => {
        switch (props.variant) {
            case ButtonVariant.primary:
                return "border-primary bg-primary text-white hover:bg-primary-700 border-3";
            case ButtonVariant.primary_alt:
                return "border-secondary bg-secondary text-primary hover:bg-secondary-700 border-3";
            case ButtonVariant.secondary:
                return "border-tertiary text-tertiary border-2";
            default:
                return "border-primary bg-primary text-white hover:bg-primary-700 border-3";
        }
    }

    return (
        <Link
            href={props.to}
            className={`inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-xl ${setVariant()} disabled:opacity-50 disabled:pointer-events-none`.concat(" ", setSize(props.size)).concat(" ", props.className ?? "")}
        >
            {props.children}
        </Link>
    );
}

export default LinkButton;