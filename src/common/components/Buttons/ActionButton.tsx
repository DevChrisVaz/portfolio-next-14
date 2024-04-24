"use client"

import React from 'react';
import { ButtonProps } from './button';
import { ButtonSize, ButtonVariant } from './enums';

const ActionButton: React.FC<ButtonProps> = (props) => {

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
        return "border-tertiary bg-tertiary text-secondary hover:bg-tertiary-700 border-3";
      case ButtonVariant.primary_alt:
        return "border-secondary bg-secondary text-primary hover:bg-secondary-700 border-3";
      case ButtonVariant.secondary:
        return "border-tertiary text-tertiary border-2";
      default:
        return "border-tertiary bg-tertiary text-secondary hover:bg-tertiary-700 border-3";
    }
  }

  return (
    <button
      ref={props.ref}
      type={props.type}
      disabled={props.disabled}
      className={`uppercase inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full ${setVariant()} disabled:opacity-50 disabled:pointer-events-none`.concat(" ", setSize(props.size)).concat(" ", props.className ?? "")}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default ActionButton;