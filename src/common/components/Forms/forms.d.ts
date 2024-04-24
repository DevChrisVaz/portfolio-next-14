type FormProps = {
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

type SelectProps = Omit<FormProps, "type" | "value" | "error"> & {
    id?: string | undefined;
    options: {
        name: string;
        value: string | number | string[];
    }[],
    error?: string | string[];
    multiple?: boolean;
    defaultValue?: string | number | string[];
}

type InputNumberProps = Omit<FormProps, "type" | "value" | "prefixIcon"> & {
    value?: number;
}

type TextAreaProps = Omit<FormProps, "type"> & {
    rows?: number
}

type CheckProps = Omit<FormProps, "type" | "label"> & {
    options: {
        name: string;
        value: string | number;
    }[];
    defaultChecked?: string;
}