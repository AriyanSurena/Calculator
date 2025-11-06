interface ResultDisplayProps {
    id: string,
    placeholder: string,
    label?: string,
    result: number
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
    id,
    placeholder = 'Result',
    label,
    result
}) => {
    const formattedResult = new Intl.NumberFormat().format(Number(result));
    return (
        <section
            id={id + '-result'}
            className={`flex flex-col gap-2 w-full text-center bg-slate-100 dark:bg-slate-600 rounded shadow p-2 my-2 ring-1 ring-slate-200 dark:ring-slate-700 overflow-hidden ${!result && "opacity-50"}`}
        >
            {
                label && (
                    <span className="w-full text-center p-2 rounded bg-white dark:bg-slate-700 text-black dark:text-white select-none">
                        {label}
                    </span>
                )
            }
            {
                result
                    ?
                    (formattedResult)
                    :
                    (placeholder)
            }
        </section>
    )
}

export default ResultDisplay;