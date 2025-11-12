export function CircleIcon(): React.ReactElement {
    return (
        <div className="block relative w-[6rem] h-[6rem] bg-gradient-to-r from-blue-500 to-purple-500  p-2 my-2 ml-2 mr-2 rounded-full">
            <div className="border-red-500 w-1/2 border-[1px] rotate-90 absolute top-[25%] left-2/4 translate-x-[-50%] rotate-45"></div>
        </div>
    )
}

export function RectangleIcon(): React.ReactElement {
    return (
        <div className="block w-[8rem] h-[6rem] bg-gradient-to-r from-blue-500 to-purple-500  p-2 my-2 ml-2 mr-2"></div>
    )
}

export function SquareIcon(): React.ReactElement {
    return (
        <div className="block w-[6rem] h-[6rem] bg-gradient-to-r from-blue-500 to-purple-500  p-2 my-2 ml-2 mr-2"></div>
    )
}

export function PentagonIcon(): React.ReactElement {
    return (
        <div
            className="block w-[6rem] h-[6rem] bg-gradient-to-r from-blue-500 to-purple-500 my-2 mx-2 "
            style={{
                clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
            }}
        ></div>
    )
}

export function HexagonIcon(): React.ReactElement {
    return (
        <div
            className="block w-[6rem] h-[6rem] bg-gradient-to-r from-green-500 to-teal-500 my-2 mx-2 "
            style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
        ></div>
    )
}

export function TriangleIcon(): React.ReactElement {
    return (
        <div
            className="block w-[6rem] h-[6rem] bg-gradient-to-r from-red-500 to-pink-500 my-2 mx-2 "
            style={{
                clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'
            }}
        ></div>
    )
}

export function RightTriangleIcon(): React.ReactElement {
    return (
        <div
            className="block w-[6rem] h-[6rem] bg-gradient-to-r from-indigo-500 to-blue-500 my-2 mx-2 "
            style={{
                clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)'
            }}
        ></div>
    )
}

export function ScaleneTriangleIcon(): React.ReactElement {
    return (
        // مثلث مختلف الاضلاع
        <div
            className="block w-[6rem] h-[6rem] bg-gradient-to-r from-yellow-500 to-orange-500 my-2 mx-2 "
            style={{
                clipPath: 'polygon(50% 0%, 100% 60%, 20% 100%)'
            }}
        ></div>
    )
}

export function IsoscelesTriangleIcon(): React.ReactElement {
    return (
        // مثلث متساوی الساقین
        <div
            className="block w-[6rem] h-[6rem] bg-gradient-to-r from-green-500 to-emerald-500 my-2 mx-2 "
            style={{
                clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'
            }}
        ></div>
    )
}

export function EquilateralTriangleIcon(): React.ReactElement {
    return (
        //  مثلث متساوی الاضلاع
        <div
            className="block w-[6rem] h-[6rem] bg-gradient-to-r from-blue-500 to-purple-500 my-2 mx-2 "
            style={{
                clipPath: 'polygon(50% 0%, 100% 86.6%, 0% 86.6%)'
            }}
        ></div>
    )
}