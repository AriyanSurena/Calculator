import { useEffect, useReducer, useState, type ActionDispatch } from "react";
import ShapesJSON from "../../assets/Shapes.json";
import Toast from "../Toast";
import Menu from "../Menu";
import TextChip from "../TextChlip";
import ResultDisplay from "../ResultDisplay";
import ShapeInput from "./ShapeInput";
import ShapeDisplay from "./ShapeDisplay";

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

    function reducer(prevState: stateType, action: actionType): stateType {
        switch (action.shape) {
            case 'Circle': {
                const radius = action.radius ?? prevState.radius ?? 0;
                if (radius < 0) return prevState;
                return {
                    shape: "Circle",
                    radius,
                    area: (radius) && Math.PI * Math.pow(radius, 2),
                    perimeter: (radius) && (2 * Math.PI * radius)
                }
            }
            case 'Rectangle': {
                const width = action.width ?? prevState.width ?? 0;
                const height = action.height ?? prevState.height ?? 0;
                if (width < 0 || height < 0) return prevState;
                return {
                    shape: "Rectangle",
                    width,
                    height,
                    area: (width && height) && (width * height),
                    perimeter: (width && height) && (2 * (width + height))
                };
            }
            case 'Square': {
                const side = action.side ?? prevState.side ?? 0;
                return {
                    shape: "Square",
                    side,
                    area: (side) && (side * side),
                    perimeter: (side) && 4 * side
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
        dispatch({
            shape: selectedShape as ('Circle' | 'Rectangle' | 'Square'),
            radius: undefined,
            width: undefined,
            height: undefined,
            side: undefined
        })
    }, [selectedShape])


    const Row: React.FC<{ label: string, placeholder: string, shape: ('Circle' | 'Rectangle' | 'Square'), param: string, onChange: ActionDispatch<[action: actionType]> }> = ({ label, placeholder, shape, param, onChange }) => {
        return (
            <div className="flex flex-col my-2 gap-2">
                <ShapeInput placeholder={placeholder} label={label} shape={shape} param={param} onChange={onChange} />
            </div>
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
                                (state.shape === 'Circle')
                                    ? (
                                        <Row label="Radius" shape="Circle" param="radius" placeholder="Enter Radius (r)" onChange={dispatch} />
                                    ) : null
                            }
                            {
                                (state.shape === 'Rectangle')
                                    ? (
                                        <>
                                            <Row label="Width" shape="Rectangle" param="width" placeholder="Enter Rectangle Width (w)" onChange={dispatch} />
                                            <Row label="Height" shape="Rectangle" param="height" placeholder="Enter Rectangle Height (h)" onChange={dispatch} />
                                        </>
                                    ) : null
                            }
                            {
                                (state.shape === 'Square')
                                    ? (
                                        <Row label="Side" shape="Square" param="side" placeholder="Enter Square Side (s)" onChange={dispatch} />
                                    ) : null
                            }
                        </span>
                        <ResultDisplay label={"Area"} placeholder={state.shape + ' Area'} result={state.area} />
                        <ResultDisplay label={"Perimeter"} placeholder={state.shape + ' Perimeter'} result={state.perimeter} />
                        <ShapeDisplay {...state} />
                    </div>
                }

                {
                    state.area > 0 && state.perimeter > 0 && (
                        <TextChip setMessage={setMessage}>
                            <div className="overflow-x-hidden">
                                <span className="text-blue-500">{`${state.shape} Area is equal to `}</span>
                                <span className="text-blue-300">{` ${state.area} `}</span>
                                <div></div>
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
