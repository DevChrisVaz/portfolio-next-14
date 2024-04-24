import React from 'react';
import { TextButtonProps } from './button';

const TextButton: React.FC<TextButtonProps> = (props) => {
    return (
        <button
            type="button"
            onClick={props.onClick}
            className="m-0 p-0 uppercase inline-flex justify-center items-center gap-x-2 font-semibold text-sm text-tertiary hover:text-tertiary-700 disabled:opacity-50 disabled:pointer-events-none"
        >
            {props.children}
        </button>
    );
}

export default TextButton;