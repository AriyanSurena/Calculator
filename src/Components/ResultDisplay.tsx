interface ResultDisplayProps {
    placeholder: string,
    label?: string,
    result: number
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
    placeholder = 'Result',
    label,
    result
}) => {
    const formattedResult = new Intl.NumberFormat().format(Number(result));
    
    return (
        <section className={`flex flex-col gap-2 w-full text-center bg-slate-100 dark:bg-slate-600 rounded shadow p-2 my-2 ring-1 ring-slate-200 dark:ring-slate-700 overflow-hidden ${!result || result <= 0 && "opacity-50"}`}>
            {
                label && (
                    <span className="w-full text-center p-2 rounded bg-white dark:bg-slate-700 text-black dark:text-white select-none">
                        {label}
                    </span>
                )
            }
            {
                result >= 0
                    ?
                    (formattedResult)
                    :
                    (placeholder)
            }
        </section>
    )
}

export default ResultDisplay;