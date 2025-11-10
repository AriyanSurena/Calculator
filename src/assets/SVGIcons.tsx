export function CircleIcon({ radius }: { radius: number }): React.ReactElement {
    const localRadius = radius;
    const formattedRadius = new Intl.NumberFormat().format(localRadius);
    return (
        <div className="flex items-center">
            <div className="block relative w-[6rem] h-[6rem] p-2 my-2 ml-2 mr-2 rounded-full border-2 border-slate-900">
                <div className="border-red-500 w-1/2 border-2 rotate-90 absolute top-[25%] left-2/4 translate-x-[-50%] rotate-45"></div>
            </div>
            {
                localRadius
                ? (
                    <div className="overflow-x-hidden [overflow-wrap:anywhere] bg-slate-100 dark:bg-slate-700 hover:scale-[1.01] cursor-pointer rounded shadow p-2 my-2 ring-1 ring-slate-200 dark:ring-slate-700">
                        {formattedRadius}
                    </div>
                ) : null
            }
        </div>
    )
}

export function RectangleIcon({ width, height }: { width: number, height: number }): React.ReactElement {
    const localWidth = width || 0;
    const localHeight = height || 0;
    const formattedWidth = width ? new Intl.NumberFormat().format(localWidth) : null;
    const formattedHeight = height ? new Intl.NumberFormat().format(localHeight) : null;
    return (
        <div className="flex flex-col items-center">
            {
                localHeight && localWidth
                ? (
                    <div className="overflow-x-hidden [overflow-wrap:anywhere] w-fit bg-slate-100 dark:bg-slate-700 hover:scale-[1.01] cursor-pointer rounded shadow p-2 my-2 ring-1 ring-slate-200 dark:ring-slate-700">
                        {(localHeight > localWidth) ? formattedHeight : formattedWidth}
                    </div>
                ) : null
            }
            <div className="flex justify-center gap-4 items-center">
                <div className="block w-[7rem] h-[5rem] p-2 my-2 ml-2 mr-2 border-2  border-r-red-500 border-t-green-500 border-slate-900"></div>
                {
                    localHeight && localWidth
                    ? (
                        <div className="overflow-x-hidden [overflow-wrap:anywhere] bg-slate-100 dark:bg-slate-700 hover:scale-[1.01] cursor-pointer rounded shadow p-2 my-2 ring-1 ring-slate-200 dark:ring-slate-700">
                            {(localWidth < localHeight) ? formattedWidth : formattedHeight}
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

export function SquareIcon({ side }: { side: number }): React.ReactElement {
    const localSide = side || 0;
    const formattedSide = new Intl.NumberFormat().format(localSide);
    return (
        <div className="flex justify-center items-center">
            <div className="block w-[6rem] h-[6rem] p-2 my-2 ml-2 mr-2 border-2 border-r-red-500 border-slate-900"></div>
            {
                localSide
                ? (
                    <div className="overflow-x-hidden [overflow-wrap:anywhere] bg-slate-100 dark:bg-slate-700 hover:scale-[1.01] cursor-pointer rounded shadow p-2 my-2 ring-1 ring-slate-200 dark:ring-slate-700">
                        {formattedSide}
                    </div>
                ) : null
            }
        </div>
    )
}