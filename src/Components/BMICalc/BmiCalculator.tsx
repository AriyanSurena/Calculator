import { useEffect, useReducer } from "react";
import Input from "../Converter/Input";
import ResultDisplay from "../ResultDisplay";
import TextChip from "../TextChlip";

const BMICalculator: React.FC = () => {

    const initialState: {
        gender: ('male' | 'female') | undefined,
        weight: number | undefined,
        height: number | undefined,
        category?: string | undefined
    } = {
        gender: undefined,
        weight: undefined,
        height: undefined,
        category: undefined
    }

    // اول تایپ‌ها رو تعریف کن
    type StateType = {
        weight?: number;
        height?: number;
        bmi?: number;
        category?: string;
    };

    type ActionType =
        | { type: "UPDATE"; param: keyof StateType; value: string | number }
        | { type: "CALCULATE_BMI" };

    const reducer = (prevState: StateType, action: ActionType): StateType => {
        switch (action.type) {
            case 'UPDATE': {
                return {
                    ...prevState,
                    [action.param]: action.value,
                };
            }

            case 'CALCULATE_BMI': {
                const weight = Number(prevState.weight) || 0;
                const height = Number(prevState.height) || 0;

                // اگر داده کافی نیست، state رو تغییر نده
                if (weight <= 0 || height <= 0) {
                    return prevState;
                }

                // تبدیل قد از سانتی‌متر به متر
                const heightInMeters = height / 100;

                // محاسبه BMI
                const bmi = weight / (heightInMeters * heightInMeters);
                const roundedBMI = Math.round(bmi * 10) / 10;

                // تعیین دسته‌بندی
                let category: string;
                if (bmi < 18.5) category = "کم‌وزن";
                else if (bmi < 25) category = "وزن طبیعی";
                else if (bmi < 30) category = "اضافه وزن";
                else category = "چاق";

                return {
                    ...prevState,  // ✅ درست شد
                    bmi: roundedBMI,
                    category
                };
            }
            default:
                return prevState;  // ✅ درست شد
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type:'CALCULATE_BMI'})
    }, [state.weight, state.height])
    
    return (
        <article className="flex flex-col gap-4 w-11/12 max-w-lg px-2 py-4 bg-gray-100 dark:bg-gray-700 text-black dark:text-white shadow-2xl ring-1 ring-gray-300 dark:ring-gray-800 rounded relative">
            <InputBox htmlFor="weight" id="weight" name="weight" placeholder="Enter Your Weight: " onChangeFn={(v) => dispatch({ type: "UPDATE", param: 'weight', value: Number(v) })} labelText="Weight" />
            <InputBox htmlFor="height" id="height" name="height" placeholder="Enter Your Height: " onChangeFn={(v) => dispatch({ type: "UPDATE", param: 'height', value: Number(v) })} labelText="Height" />
            <div>
                {
                    state.bmi ? (
                            <ResultDisplay label="BMI" result={state.bmi} placeholder="Result"/>
                        ) : null
                    }
                {
                    state.bmi ? (
                        <TextChip>{state.category}</TextChip>
                    ) : null
                }
            </div>
        </article>
    )
}

export default BMICalculator;


const InputBox: React.FC<{ 
        htmlFor: string, 
        labelText: string, 
        id: string, 
        name: string, 
        placeholder: string, 
        onClickFn?: () => void, 
        onChangeFn?: (value: number) => void 
    }> = ({
        htmlFor,
        labelText,
        id,
        name,
        placeholder,
        onClickFn,
        onChangeFn,
}) => {
    const handleChange = (value: string) => {
        if (onChangeFn) {
            const numValue = Number(value);
            onChangeFn(numValue);
        }
    };
    return (
        <label
            htmlFor={htmlFor}
            onClick={onClickFn}
            className="flex flex-col gap-2 cursor-pointer">
            <span>{labelText}</span>
            <Input id={id} name={name} placeholder={placeholder} onChange={handleChange} />
        </label>
    )
}