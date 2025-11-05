interface InputProps {
    name: string,
    id: string, 
    placeholder: string,
    value?: number | undefined, 
    disabled?: boolean,
    onChange?: (value: string | number) => void;
    classes ?: string
}

const Input: React.FC<InputProps> = ({name, id, placeholder, value, disabled, onChange, classes}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.value);
    };

    return(
        <input
            name={name}
            id={id}
            type="text"
            placeholder={placeholder}
            value={Number.isNaN(value) ? '' : value}
            disabled={disabled}
            onChange={onChange && handleChange}
            className={`w-full bg-slate-100 dark:bg-slate-600 rounded shadow p-2 ring-1 ring-slate-200 dark:ring-slate-700 ${classes}`}
            maxLength={30}
        />
    )
}

export default Input;