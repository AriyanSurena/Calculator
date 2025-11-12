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
        message?: string | undefined
    } = {
        gender: undefined,
        weight: undefined,
        height: undefined,
        category: undefined,
        message: undefined
    }

    type StateType = {
        weight?: number;
        height?: number;
        bmi?: number;
        category?: string;
        message?: string;
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

                if (weight <= 0 || height <= 0) {
                    return prevState;
                }

                const heightInMeters = height / 100;

                const bmi = weight / (heightInMeters * heightInMeters);
                const roundedBMI = Math.round(bmi * 10) / 10;

                let category: string;
                let message = "";
                if (bmi < 18.5) {
                    category = "Underweight";
                    message = "Your weight is underweight. Consider consulting a nutritionist.";
                } else if (bmi < 25) {
                    category = "Normal weight";
                    message = "Congratulations! Your weight is normal.";
                } else if (bmi < 30) {
                    category = "Overweight";
                    message = "You are overweight. Regular exercise is recommended.";
                } else {
                    category = "Obese";
                    message = "You are obese. Please consult with a healthcare professional.";
                }


                // اعتبارسنجی بهتر
                if (weight <= 0 || height <= 0 || height > 300 || weight >= 500) {
                    return {
                        ...prevState,
                        bmi: undefined,
                        category: undefined,
                        message: "Please enter valid height and weight"
                    };
                }

                return {
                    ...prevState,
                    bmi: roundedBMI,
                    category,
                    message
                };
            }
            default:
                return prevState;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: 'CALCULATE_BMI' })
    }, [state.weight, state.height])

    const calculateWeightRange = (h: number | undefined) => {
        if (!h || h <= 0) return { min: "0", max: "0" };

        const heightInMeters = h / 100;
        const min = 18.5 * heightInMeters * heightInMeters;
        const max = 24.9 * heightInMeters * heightInMeters;

        return {
            min: min.toFixed(1),
            max: max.toFixed(1)
        };
    };

    const weightRange = calculateWeightRange(state.height);

    return (
        <article className="flex flex-col gap-4 w-11/12 max-w-lg px-2 py-4 bg-gray-100 dark:bg-gray-700 text-black dark:text-white shadow-2xl ring-1 ring-gray-300 dark:ring-gray-800 rounded relative">
            <InputBox htmlFor="height" id="height" name="height" placeholder="Enter Your Height in cm: " onChangeFn={(v) => dispatch({ type: "UPDATE", param: 'height', value: Number(v) })} labelText="Height" />
            <InputBox htmlFor="weight" id="weight" name="weight" placeholder="Enter Your Weight in kg: " onChangeFn={(v) => dispatch({ type: "UPDATE", param: 'weight', value: Number(v) })} labelText="Weight" />
            <div>
                {state.bmi ?
                    (state.weight && state.height) ? (
                        <div>
                            <ResultDisplay
                                label="BMI"
                                result={state.bmi}
                                placeholder="Result"
                            />
                            <TextChip isCopyOn={true}>
                                <div className="p-2 my-2">
                                    {state.category}
                                </div>

                                <div className="opacity-80">
                                    {state.message}
                                </div>

                                {state.category && (
                                    <div>
                                        <div className="opacity-90">
                                            {`The appropriate weight range for you with a height of `}
                                            <span className="text-green-500">
                                                {state.height}
                                            </span>
                                            <span className="text-purple-400">
                                                {' cm '}
                                            </span>
                                            <span>
                                                {' is: '}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="text-blue-500">
                                                {weightRange.min}
                                            </span>
                                            <span className="text-purple-400">
                                                {' kg'}
                                            </span>
                                            {` To `}
                                            <span className="text-red-500">
                                                {weightRange.max}
                                            </span>
                                            <span className="text-purple-400">
                                                {' kg '}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </TextChip>
                        </div>
                    ) : null
                    : (
                        <TextChip>
                            <div className="text-red-500 font-bold">
                                {state.message}
                            </div>
                        </TextChip>
                    )}
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