import { SelectSize } from "./select/enum";

export type FormProps = {
    label: string,
    type?: string,
    name?: string,
    onChange?: (e: ChangeEvent<any>) => void,
    prefixIcon?: ReactNode,
    value?: string,
    error?: string;
    className?: string;
    info?: string;
}

export type SelectProps = Omit<FormProps, "type" | "value" | "error"> & {
    id?: string | undefined;
    options: {
        name: string;
        value: string | number | string[];
    }[],
    error?: string | string[];
    multiple?: boolean;
    defaultValue?: string | number | string[];
    size?: SelectSize
}

export type InputNumberProps = Omit<FormProps, "type" | "value" | "prefixIcon"> & {
    value?: number;
}

export type TextAreaProps = Omit<FormProps, "type"> & {
    rows?: number
}

export type CheckProps = Omit<FormProps, "type" | "label"> & {
    options: {
        name: string;
        value: string | number;
    }[];
    defaultChecked?: string;
}