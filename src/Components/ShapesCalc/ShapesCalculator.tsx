import { useEffect, useReducer, useState, type ActionDispatch } from "react";
import ShapesJSON from "../../assets/Shapes.json";
import Toast from "./../Converter/Toast";
import Menu from "../Menu";
import TextChip from "../Converter/TextChlip";
import ResultDisplay from "../ResultDisplay";
import ShapeInput from "./ShapeInput";

interface ShapesObj {
    shapes: string[];
}

const ShapesCalculator: React.FC = () => {
    const ShapesCategory: ShapesObj = ShapesJSON;
    const shapes: string[] = ShapesCategory.shapes;
    const [selectedShape, setSelectedShape] = useState<string>(shapes[0]);

    const initialState: stateType = {
        shape: "Circle",
        area: 0,
        perimeter: 0,
    }
    const [message, setMessage] = useState<string>('')

    interface stateType {
        shape: 'Circle' | 'Rectangle' | 'Square';
        radius?: number,
        area: number,
        perimeter: number,
        width?: number,
        height?: number,
        side?: number
    }

    interface actionType {
        shape: 'Circle' | 'Rectangle' | 'Square',
        radius?: number,
        width?: number,
        height?: number,
        side?: number
    }

    function reducer(prevState: stateType, action: actionType) {
        switch (action.shape) {
            case 'Circle': {
                const radius = action.radius ?? prevState.radius ?? 0;
                return {
                    ...prevState,
                    "shape": "Circle",
                    radius,
                    "area": Math.PI * Math.pow((action.radius as number), 2),
                    "perimeter": 2 * Math.PI * (action.radius as number)
                }
            }
            case 'Rectangle': {
                const width = action.width ?? prevState.width ?? 0;
                const height = action.height ?? prevState.height ?? 0;
                return {
                    ...prevState,
                    shape: "Rectangle",
                    width,
                    height,
                    area: width * height,
                    perimeter: 2 * (width + height)
                };
            }
            case 'Square': {
                const side = action.side ?? prevState.side ?? 0;
                return {
                    ...prevState,
                    shape: "Square",
                    side,
                    area: side * side,
                    perimeter: 4 * side
                };
            }

            default: return prevState;
        }
    }

    const [state, dispatch] = useReducer(
        reducer,
        initialState
    )

    useEffect(() => {
        dispatch({ shape: selectedShape as ('Circle' | 'Rectangle' | 'Square') })
    }, [selectedShape])


    const Row: React.FC<{ label: string, placeholder: string, shape: ('Circle' | 'Rectangle' | 'Square'), param: string, onChange: ActionDispatch<[action: actionType]> }> = ({ label, placeholder, shape, param, onChange }) => {
        return (
            <span className="flex flex-col my-2 gap-2">
                <ShapeInput placeholder={placeholder} label={label} shape={shape} param={param} onChange={onChange} />
            </span>
        )
    }

    return (
        <>
            <article className="flex flex-col gap-4 w-11/12 max-w-lg px-2 py-4 bg-gray-100 dark:bg-gray-700 text-black dark:text-white shadow-2xl ring-1 ring-gray-300 dark:ring-gray-800 rounded relative">
                <Menu id='category' list={shapes} setSelected={setSelectedShape} selected={selectedShape} />
                {
                    <div className="flex flex-col">
                        <span className="flex flex-col my-2 gap-2">
                            {
                                state.shape === 'Circle' &&
                                (
                                    <Row label="Radius" shape="Circle" param="radius" placeholder="Enter Radius (r)" onChange={dispatch} />
                                )
                            }
                            {
                                state.shape === 'Rectangle' && (
                                    <>
                                        <Row label="Width" shape="Rectangle" param="width" placeholder="Enter Rectangle Width (w)" onChange={dispatch} />
                                        <Row label="Height" shape="Rectangle" param="height" placeholder="Enter Rectangle Height (h)" onChange={dispatch} />
                                    </>
                                )
                            }
                            {
                                state.shape === 'Square' &&
                                (
                                    <Row label="Side" shape="Square" param="side" placeholder="Enter Square Side (s)" onChange={dispatch} />
                                )
                            }
                        </span>

                        <ResultDisplay label={"Area"} id={state.shape + '-Area'} placeholder={state.shape + ' Area'} result={state.area} />
                        <ResultDisplay label={"Perimeter"} id={state.shape + '-Perimeter'} placeholder={state.shape + ' Perimeter'} result={state.perimeter} />
                    </div>
                }

                {
                    !isNaN(state.area) && !isNaN(state.perimeter) && (state.area !== 0) && (state.perimeter !== 0) && (
                        <TextChip setMessage={setMessage}>
                            <div className="overflow-x-hidden">
                                <span className="text-blue-500">{`${state.shape} Area is equal to `}</span>
                                <span className="text-blue-300">{` ${state.area} `}</span>
                                {' and '}
                                <span className="text-green-500">{`${state.shape} Perimeter is equal to `}</span>
                                <span className="text-green-300">{`${state.perimeter}`}</span>
                            </div>
                        </TextChip>
                    )
                }

            </article>
            {
                message &&
                <Toast message={message} type="success" duration={2000} />
            }
        </>
    )
}

export default ShapesCalculator;
