import { useEffect, useReducer, useState} from "react";
import ShapesJSON from "../../assets/Shapes.json";
import Input from "../Converter/Input";
import Toast from "./../Converter/Toast";
import Menu from "../Menu";
import TitleChip from "../Converter/TitleChip";
import TextChip from "../Converter/TextChlip";

interface ShapesObj {
    shapes: string[];
}

const ShapesCalculator: React.FC = () => {
    const ShapesCategory: ShapesObj = ShapesJSON;
    const shapes: string[] = ShapesCategory.shapes;

    const [selectedShape, setSelectedShape] = useState<string>(shapes[0]);

    const [message, setMessage] = useState<string>('')

    interface stateType {
        shape: 'Circle' | 'Rectangle' | 'Square',
        area: number,
        perimeter: number
    }

    interface actionType {
        shape: 'Circle' | 'Rectangle' | 'Square',
        radius?: number,
        width?: number,
        height?: number,
        side?: number,
    }

    const initialState: stateType = {
        shape: "Circle",
        area: 0,
        perimeter: 0,
    }

    const isNumber = (num: number): boolean => {
        if(typeof num === 'number') return true;
        else return false;
    }
    function reducer(prevState: stateType, action: actionType) {


        switch (action.shape) {
            case 'Circle': return {
                "shape": "Circle",
                "radius": action.radius,
                "area": Math.PI * Math.pow((action.radius as number), 2),
                "perimeter": 2 * Math.PI * (action.radius as number)
            }
            case 'Rectangle': return {
                "shape": "Rectangle",
                "area": (action.width as number) * (action.height as number),
                "perimeter": 2 * ((action.width as number) + (action.height as number))
            }
            case 'Square': return {
                "shape": "Square",
                "area": Math.pow((action.side as number), 2),
                "perimeter": 4 * (action.side as number)
            }
        }
    }

    const [state, dispatch] = useReducer(
        reducer,
        initialState
    )

    useEffect(() => {
        switch (selectedShape) {
            case "Circle": {
                dispatch( {shape: "Circle"} )
            } break;
            case "Rectangle": {
                dispatch( {shape: "Rectangle"} )
            } break;
            case "Square": {
                dispatch( {shape: "Square"} )
            } break;
                
            default: throw new Error("unknown Shape")
                break;
        }
    }, [selectedShape])

    return (
        <>
            <article className="flex flex-col gap-4 w-11/12 max-w-lg px-2 py-4 bg-gray-100 dark:bg-gray-700 text-black dark:text-white shadow-2xl ring-1 ring-gray-300 dark:ring-gray-800 rounded relative">
                <Menu id='category' list={shapes} setSelected={setSelectedShape} selected={selectedShape} />
                {
                    state.shape === 'Circle' && (
                        <div className="flex flex-col">
                            <span className="flex my-2 gap-4">
                                <TitleChip text={"Radius"} classes="w-fit" />
                                <input className="w-full bg-slate-100 dark:bg-slate-600 rounded shadow p-2 ring-1 ring-slate-200 dark:ring-slate-700" placeholder="Enter Radius (r)" onChange={(e) => {
                                    dispatch({ shape: 'Circle', radius: Number(e.target.value) })
                                }} />
                            </span>

                            <TitleChip text={"Area"} />
                            <Input name={selectedShape + '-Area'} id={selectedShape + '-Area'} disabled={true} placeholder={selectedShape + ' Area'} value={state.area} />
                            <TitleChip text={"Perimeter"} />
                            <Input name={selectedShape + '-Perimeter'} id={selectedShape + '-Perimeter'} disabled={true} placeholder={selectedShape + ' Perimeter'} value={state.perimeter} />
                        </div>
                    )
                }


                {
                    state.shape === 'Rectangle' && (
                        <div className="flex flex-col">
                            <span className="flex my-2 gap-4">
                                <TitleChip text={"Width"} classes="w-fit" />
                                <input name="InputValue" id="rectangleWidth" placeholder="Enter Rectangle Width (w)" onChange={
                                    e =>
                                        dispatch({ shape: "Rectangle", width: Number(e.target.value) })
                                } />
                            </span>
                            <span className="flex my-2 gap-4">
                                <TitleChip text={"Height"} classes="w-fit" />
                                <input name="InputValue" id="rectangleHeaight" placeholder="Enter Rectangle Height (h)" onChange={
                                    e =>
                                        dispatch({ shape: "Rectangle", height: Number(e.target.value) })
                                } />
                            </span>

                            <TitleChip text={"Area"} />
                            <Input name={state.shape + '-Area'} id={state.shape + '-Area'} disabled={true} placeholder={state.shape + ' Area'} value={state.area} />
                            <TitleChip text={"Perimeter"} />
                            <Input name={state.shape + '-Perimeter'} id={state.shape + '-Perimeter'} disabled={true} placeholder={state.shape + ' Perimeter'} value={state.perimeter} />
                        </div>
                    )
                }

                {/*  */}

                {
                    state.shape === 'Square' && (
                        <div className="flex flex-col">
                            <span className="flex my-2 gap-4">
                                <TitleChip text={"Side"} classes="w-fit" />
                                <input name="InputValue" id="squareSide" placeholder="Enter Square Side (s)"  onChange={
                                    e => dispatch({ shape: "Square", side: Number(e.target.value) })
                                } />
                            </span>

                            <TitleChip text={"Area"} />
                            <Input name={state.shape + '-Area'} id={state.shape + '-Area'} disabled={true} placeholder={state.shape + ' Area'} value={state.area} />
                            <TitleChip text={"Perimeter"} />
                            <Input name={state.shape + '-Perimeter'} id={state.shape + '-Perimeter'} disabled={true} placeholder={state.shape + ' Perimeter'} value={state.perimeter} />
                        </div>
                    )
                }
            
                {
                    !isNaN(state.area) && !isNaN(state.perimeter) && (state.area !==0) && (state.perimeter !==0) &&(
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