import React, { type ActionDispatch } from 'react';

interface actionType {
    shape: 'Circle' | 'Rectangle' | 'Square',
    radius?: number,
    width?: number,
    height?: number,
    side?: number
}

type ShapeInputProps = {
    shape: 'Circle' | 'Rectangle' | 'Square'
    value?: number; // مقدار فعلی ورودی
    param: string;
    label: string;
    placeholder?: string;
    onChange: ActionDispatch<[action: actionType]>;
};

const ShapeInput: React.FC<ShapeInputProps> = ({
    shape,
    param,
    label,
    placeholder,
    onChange,
}) => {
    const id = `${shape.toLowerCase()}input`;
    const params: string = param;
    return (
        <label htmlFor={id} className='flex flex-col gap-2'>
            <span className='bg-slate-500 p-2 w-max rounded cursor-pointer'>
                {label}
            </span>
            <input
                id={id}
                name={`${shape}-input`}
                placeholder={placeholder}
                onChange={(e) => {
                    onChange({ shape, [params]: Number(e.target.value) });
                }}
                type="number"
                className={`w-full bg-slate-100 dark:bg-slate-600 rounded shadow p-2 ring-1 ring-slate-200 dark:ring-slate-700 overflow-hidden`}
            />
        </label>
    );
};

export default ShapeInput;