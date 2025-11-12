import { CircleIcon, EquilateralTriangleIcon, HexagonIcon, IsoscelesTriangleIcon, PentagonIcon, RectangleIcon, RightTriangleIcon, ScaleneTriangleIcon, SquareIcon } from "../../assets/SVGIcons"
interface stateType {
    shape: 'Circle' | 'Rectangle' | 'Square' | 'Pentagon' | 'Hexagon' | 'Equilateral Triangle' | 'Isosceles Triangle' | 'Scalene Triangle' | 'Right Triangle';
    radius?: number,
    area: number,
    perimeter: number,
    width?: number,
    length?: number,
    height?: number,
    base?: number,
    side?: number,
    sideA?: number,
    sideB?: number,
    sideC?: number,
    equalSide?: number,
    hypotenuse?: number,
    error?: string
}

const ShapeDisplay: React.FC<stateType> = (state) => {
    return (
        <section
            className="flex justify-center w-full min-h-max text-center bg-slate-100 dark:bg-slate-600 rounded shadow p-2 my-2 ring-1 ring-slate-200 dark:ring-slate-700 relative"
        >
            {
                state.shape === "Circle" && (
                    <CircleIcon />
                ) ||
                state.shape === "Rectangle" && (
                    <RectangleIcon />
                ) ||
                state.shape === "Square" && (
                    <SquareIcon />
                ) ||
                state.shape === "Pentagon" && (
                    <PentagonIcon />
                ) ||
                state.shape === "Hexagon" && (
                    <HexagonIcon />
                ) ||
                state.shape === "Equilateral Triangle" && (
                    <EquilateralTriangleIcon />
                ) ||
                state.shape === "Isosceles Triangle" && (
                    <IsoscelesTriangleIcon />
                ) ||
                state.shape === "Right Triangle" && (
                    <RightTriangleIcon />
                ) ||
                state.shape === "Scalene Triangle" && (
                    <ScaleneTriangleIcon />
                )
            }

        </section>
    )
}

export default ShapeDisplay;