import { handleNumericInputKeyDown } from '@/common/utils/input_formatters/numeric_input';
import { useFormikContext } from 'formik';
import React, { useRef } from 'react';

const InputNumber: React.FC<InputNumberProps> = (props) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const formikProps = useFormikContext();

    const sumQty = () => {
        if (inputRef.current) {
            inputRef.current.value = `${parseInt(inputRef.current.value) + 1}`;
            formikProps.setFieldValue(props.name!, inputRef.current.value);
        }
    };

    const substractQty = () => {
        if (inputRef.current && parseInt(inputRef.current.value) > 1) {
            inputRef.current.value = `${parseInt(inputRef.current.value) - 1}`;
            formikProps.setFieldValue(props.name!, inputRef.current.value);
        }
    }

    return (
        <div className={`${props.className} py-1 px-3 bg-white border-3 border-transparent outline outline-transparent rounded-full text-sm`}>
            <div className="w-full flex justify-between items-center gap-x-5">
                <div className="grow">
                    <span className="block text-xs text-gray-500">
                        {props.label}
                    </span>
                    <input
                        ref={inputRef}
                        className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0"
                        type="text"
                        value={props.value}
                        onChange={props.onChange}
                        onKeyDown={handleNumericInputKeyDown}
                        name={props.name}
                    />
                </div>
                <div className="flex justify-end items-center gap-x-1.5">
                    <button
                        type="button"
                        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-secondary text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                        onClick={substractQty}
                    >
                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                    </button>
                    <button
                        type="button"
                        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-secondary text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                        onClick={sumQty}>
                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InputNumber;