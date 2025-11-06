import React, { useEffect, useState } from 'react';

interface actionType {
    shape: 'Circle' | 'Rectangle' | 'Square';
    radius?: number;
    width?: number;
    height?: number;
    side?: number;
}

type ShapeInputProps = {
    shape: 'Circle' | 'Rectangle' | 'Square';
    value?: number;
    param: string;
    label: string;
    placeholder?: string;
    onChange: (action: actionType) => void;
};

const ShapeInput: React.FC<ShapeInputProps> = ({
    shape,
    param,
    label,
    placeholder,
    onChange,
    value: propValue, // مقدار اولیه از props
}) => {
    const id = `${label.toLowerCase()}-input`;
    const [localValue, setLocalValue] = useState<string>('');

    // همگام‌سازی با prop (در صورت controlled component بودن)
    useEffect(() => {
        if (propValue !== undefined) {
            setLocalValue(propValue.toString());
        }
    }, [propValue]);

    // ارسال تغییرات به والد
    useEffect(() => {
            onChange({ shape, [param]: localValue });
    }, [localValue, shape, param, onChange]);

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
        <label htmlFor={id} className="flex flex-col gap-2">
            <span className="bg-slate-500 p-2 w-max rounded cursor-pointer text-white text-sm">
                {label}
            </span>
            <input
                id={id}
                name={`${shape}-input`}
                placeholder={placeholder}
                value={localValue}
                onChange={handleChange}
                type="text" // بهتر است text باشد تا کنترل کامل داشته باشیم
                inputMode="decimal"
                className="w-full bg-slate-100 dark:bg-slate-600 rounded shadow p-2 ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-blue-500 transition"
            />
        </label>
    );
};

export default ShapeInput;