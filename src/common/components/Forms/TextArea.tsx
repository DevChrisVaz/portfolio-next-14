"use client"

import React, { ChangeEvent, useEffect, useState } from 'react';
import { TextAreaProps } from './forms';

const TextArea: React.FC<TextAreaProps> = (props) => {
    const [inputValue, setInputValue] = useState(props.value);

    const onInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (props.onChange) {
            props.onChange(e);
        }
        setInputValue(e.target.value);
    };

    useEffect(() => {
        setInputValue(props.value);
    }, [props.value]);

    return (
        <div>
            <div className="relative">
                <textarea
                    className={`${props.className} py-3 px-4 ${props.prefixIcon != null && "ps-11"} block w-full border-3 border-transparent ${props.error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "focus:border-primary focus:ring-primary"} rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`}
                    rows={props.rows}
                    placeholder={props.label}
                    name={props.name}
                    id={props.name}
                    onChange={onInputChange}
                    value={inputValue}
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                    <div className="w-[20px]">
                        {props.prefixIcon}
                    </div>
                </div>
            </div>
            {props.error && <p className="text-sm text-red-600 ms-5 mt-1">{props.error}</p>}
        </div>
    );
}

export default TextArea;