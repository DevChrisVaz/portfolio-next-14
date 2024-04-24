"use client"

import { useFormikContext } from 'formik';

import React from 'react';

const InputCheck: React.FC<CheckProps> = (props) => {

    const formik = useFormikContext<any>();

    return (
            <div className="flex flex-col gap-3 mt-2">
                {
                    props.options.map((option, index) => (
                        <div key={index} className="relative">
                            <input
                                className="peer hidden"
                                id={`radio_${option.value}`}
                                type="radio"
                                name={props.name}
                                value={option.value}
                                onChange={props.onChange}
                                defaultChecked={props.defaultChecked === option.value}
                                checked={option.value === formik.values[props.name!]}
                            />
                            <span className="peer-checked:border-tertiary-700 absolute left-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-neutral-500 bg-white"></span>
                            <label className="peer-checked:border-2 peer-checked:border-tertiary-700 peer-checked:bg-tertiary-50 flex cursor-pointer select-none rounded-full border border-neutral-500 p-4" htmlFor={`radio_${option.value}`}>
                                {/* <img className="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" /> */}
                                <div className="ml-11">
                                    <span className="mt-2 font-semibold">{option.name}</span>
                                    {/* <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p> */}
                                </div>
                            </label>
                        </div>
                    ))
                }
            </div>
    );
}

export default InputCheck;