interface InputProps {
    id: string,
    name: string,
    placeholder: string,
    value?: number | undefined,
    disabled?: boolean,
    onChange?: (value: string) => void,
    classes?: string
}

const Input: React.FC<InputProps> = ({
    id,
    name,
    placeholder,
    value,
    disabled,
    onChange,
    classes
}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.value);
    };

    return (
        <input
            id={id}
            name={name}
            placeholder={placeholder}
            value={Number.isNaN(value)? '' : value}
            disabled={disabled}
            onChange={onChange && handleChange}
            className={`w-full bg-slate-100 dark:bg-slate-600 rounded shadow p-2 ring-1 ring-slate-200 dark:ring-slate-700 ${classes}`}
            max={30}
            type="number"
        />
    )
}

export default Input;