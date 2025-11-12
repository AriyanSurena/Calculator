import { useEffect, useState } from "react";

interface InputProps {
    id: string,
    name: string,
    placeholder: string,
    propValue?: number | undefined,
    disabled?: boolean,
    onChange: (value: string) => void,
    classes?: string
}

const Input: React.FC<InputProps> = ({
    id,
    name,
    placeholder,
    propValue,
    disabled,
    onChange,
    classes
}) => {

    const [localValue, setLocalValue] = useState<string>('')

    // همگام‌سازی با prop (در صورت controlled component بودن)
    useEffect(() => {
        if (propValue !== undefined) {
            setLocalValue(propValue.toString());
        }
    }, [propValue]);

    // ارسال تغییرات به والد
    useEffect(() => {
        onChange(localValue);
    }, [localValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        // محدودیت 30 کاراکتر
        if (inputValue.length > 30) {
            return;
        }

        // فقط اعداد، نقطه و منفی مجاز باشند
        if (/^\d*\.?\d*$/.test(inputValue) || inputValue === '') {
            setLocalValue(inputValue);
        }
    };

    return (
        <input
            id={id}
            name={name}
            placeholder={placeholder}
            value={localValue}
            disabled={disabled}
            onChange={handleChange}
            className={`w-full bg-slate-100 dark:bg-slate-600 rounded shadow p-2 ring-1 ring-slate-200 dark:ring-slate-700 ${classes}`}
            type="text"
            inputMode="decimal"
        />
    )
}

export default Input;