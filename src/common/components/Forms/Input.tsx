"use client"

import React, { ChangeEvent, useEffect, useState } from 'react';
import { FormProps } from './forms';

const Input: React.FC<FormProps> = (props) => {
    const [inputValue, setInputValue] = useState(props.value);
    const [isVisible, setIsVisible] = useState(props.type === "password" ? false : true);

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
            <div className="relative z-10">
                <input
                    className={`${props.className} peer py-3 px-4 ${props.prefixIcon != null && "ps-11"} block w-full border-3 border-transparent outline outline-transparent rounded-full text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none`}
                    placeholder={props.label}
                    type={props.type === "password" ? isVisible ? "text" : props.type : props.type}
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
                {
                    props.type === "password" &&
                    <button type="button" onClick={() => setIsVisible(!isVisible)} className="absolute z-10 top-0 end-0 p-3.5 pe-4 rounded-e-md">
                        <svg className="flex-shrink-0 size-[20px] text-gray-400 dark:text-neutral-600" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {
                                !isVisible ?
                                    <>
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </>
                                    :
                                    <>
                                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                                        <line x1="2" x2="22" y1="2" y2="22"></line>
                                    </>
                            }
                        </svg>
                    </button>
                }
            </div>
            {props.info && <p className="text-sm text-gray-500 mt-2 ms-5" id="hs-input-helper-text">{props.info}</p>}
            {props.error && <p className="text-sm text-red-600 ms-5 mt-2">{props.error}</p>}
        </div>
    );
}

export default Input;