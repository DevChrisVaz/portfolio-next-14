"use client"

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const SelectMultiple: React.FC<SelectProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<Array<string | number>>([]);
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
            setSelectedOptions(opt => [...opt, props.options[index].name]);
        } else {
            setSelectedOptions(opt => opt.filter(o => o !== props.options[index].name));
        }
    };

    const removeOption = (option: string) => {
        const optionElement = optionsRef.current.findIndex(ref => ref.innerHTML === option);
        if (optionElement != null) handleOptionClick(optionElement);
    }

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

    return (
        <div>
            <div className="relative">
                <select
                    className="hidden"
                    ref={selectRef}
                    multiple
                    name={props.name}
                    onChange={props.onChange}
                >
                    {
                        props.options.map((option, index) => (
                            <option ref={(el) => { optionsRef.current.push(el!) }} key={index} value={option.value}>{option.name}</option>
                        ))
                    }
                </select>
                <button type="button" onClick={toggleOptions} className="select-content hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-full text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><span className="truncate">{selectedOptions.length > 0 ? selectedOptions.length + " seleccionados" : props.label}</span></button>
                <AnimatePresence initial={false}>
                    {isOpen &&
                        <motion.div
                            key="select"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <div className="select-content absolute mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-3xl overflow-hidden overflow-y-auto dark:bg-slate-900 dark:border-gray-700 top-full">
                                {props.options.map((option, index) => (
                                    <button type='button' onClick={() => { handleOptionClick(index) }} key={index} tabIndex={index} className="select-content cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800 selected"><div className="flex justify-between items-center w-full"><span>{option.name}</span><span className={!selectedOptions.includes(option.name) ? "hidden" : "block"}><svg className="flex-shrink-0 size-3.5 text-tertiary-600 dark:text-tertiary-500" xmlns="http:.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span></div></button>
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
            <AnimatePresence initial={false}>
                {
                    selectedOptions.length > 0 &&
                    <motion.div
                        key={"options-container"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex px-1 py-2 gap-2 flex-wrap">
                            <AnimatePresence initial={false}>
                                {
                                    selectedOptions.map((selected, index) => (
                                        <motion.div
                                            key={"option-" + index}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <span key={index} className="inline-flex items-center gap-x-1.5 py-1.5 ps-3 pe-2 rounded-full text-xs font-medium bg-secondary-100 text-primary-800 dark:bg-secondary-800/30 dark:text-primary-500">
                                                {selected}
                                                <button type="button" onClick={() => removeOption(selected.toString())} className="flex-shrink-0 size-4 inline-flex items-center justify-center rounded-full hover:bg-secondary-200 focus:outline-none focus:bg-secondary-200 focus:text-primary-500 dark:hover:bg-secondary-900">
                                                    <span className="sr-only">Remove badge</span>
                                                    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                                </button>
                                            </span>
                                        </motion.div>
                                    ))
                                }
                            </AnimatePresence>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
}

export default SelectMultiple