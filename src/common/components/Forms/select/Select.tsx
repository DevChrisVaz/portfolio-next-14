"use client"

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const Select: React.FC<SelectProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | number | null>(null);
    const selectRef = useRef<HTMLSelectElement>(null);
    const optionsRef = useRef<HTMLOptionElement[]>([]);

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (index: number) => {
        selectRef.current!.options[index].selected = !selectRef.current!.options[index].selected;

        const event = new Event('change', {
            bubbles: true,
            cancelable: true,
        });

        // Disparar el evento 'change' en el select
        selectRef.current!.dispatchEvent(event);

        if (optionsRef.current[index].selected) {
            setSelectedOption(optionsRef.current[index].text);
        }

        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!(e.target as HTMLElement).classList.contains('select-content')) {
                if (isOpen) {
                    setIsOpen(false);
                }
            }
        }

        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setSelectedOption(props.options.find(opt => opt.value === props.defaultValue)?.name ?? null);
    }, [props.defaultValue]);


    return (
        <div>
            <div className="relative">
                <select
                    id={props.id}
                    className="hidden"
                    ref={selectRef}
                    name={props.name}
                    onChange={props.onChange}
                    defaultValue={props.defaultValue}
                >
                    {
                        props.options.map((option, index) => (
                            <option ref={(el) => { optionsRef.current.push(el!) }} key={index} value={option.value}>{option.name}</option>
                        ))
                    }
                </select>
                <button type="button" onClick={toggleOptions} className="relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border-3 border-gray-200 rounded-xl text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><span className="truncate">{selectedOption ?? props.label}</span></button>
                <AnimatePresence initial={false}>
                    {isOpen &&
                        <motion.div
                            key="select"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <div className="select-content absolute mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-xl overflow-hidden overflow-y-auto dark:bg-slate-900 dark:border-gray-700 top-full">
                                {props.options.map((option, index) => (
                                    <button type='button' onClick={() => { handleOptionClick(index) }} key={index} tabIndex={index} className="select-content cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800 selected"><div className="flex justify-between items-center w-full"><span>{option.name}</span><span className={!(selectedOption === option.name) ? "hidden" : "block"}><svg className="flex-shrink-0 size-3.5 text-tertiary-600 dark:text-tertiary-500" xmlns="http:.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span></div></button>
                                ))}
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
                <div className="absolute top-1/2 end-3 -translate-y-1/2">
                    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m7 15 5 5 5-5"></path>
                        <path d="m7 9 5-5 5 5"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Select