import { CircleIcon, RectangleIcon, SquareIcon } from "../../assets/SVGIcons"
interface stateType {
    shape: 'Circle' | 'Rectangle' | 'Square';
    radius?: number,
    area: number,
    perimeter: number,
    width?: number,
    height?: number,
    side?: number
}

const ShapeDisplay: React.FC<stateType> = (state) => {
    return (
        <section
            className="w-full min-h-max text-center bg-slate-100 dark:bg-slate-600 rounded shadow p-2 my-2 ring-1 ring-slate-200 dark:ring-slate-700 relative"
        >
            {
                state.shape === "Circle" && (
                    <CircleIcon radius={Number(state.radius)} />
                ) ||
                state.shape === "Rectangle" && (
                    <RectangleIcon width={Number(state.width)} height={Number(state.height)}/>
                ) ||
                state.shape === "Square" && (
                    <SquareIcon side={Number(state.side)}/>
                )
            }
            
        </section>
    )
}

export default ShapeDisplay;