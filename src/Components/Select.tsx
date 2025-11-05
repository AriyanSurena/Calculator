import { useId, useState, type Dispatch, type SetStateAction } from "react";

interface SelectProps {
    id: string,
    list: string[],
    selected: string,
    setSelected: (selected: string) => void,
}

const Select: React.FC<SelectProps> = ({
    id,
    list,
    selected,
    setSelected
}) => {
    const [isOpened, setIsOpened]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
    const selectId: string = id || useId();

    return (
        <div
            id={selectId}
            className="shadow-2xl rounded select-none">
            {
                !isOpened &&
                <button
                    value={selected}
                    onClick={() => { setIsOpened(!isOpened) }}
                    className="flex justify-between w-full p-2 rounded bg-gray-500 dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-900 transition-all duration-200 text-white"
                >
                    {selected}
                    <svg className="w-1/12 h-4">
                        <path
                            d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                            className="fill-white">
                        </path>
                    </svg>
                </button>
            }
            {
                isOpened &&
                <div className="w-full h-max min-h-full max-h-[80vh] bg-white dark:bg-gray-700 absolute top-0 left-0 overflow-auto z-50">
                    <ul
                        className="w-full flex flex-col gap-1 h-full p-2 z-50"
                        id={selectId + 'Items'}>
                        {
                            list.map((item) => {
                                return (
                                    <li
                                        key={item}
                                        className="
                                    w-full 
                                    p-2 
                                    rounded  
                                    bg-white
                                        dark:bg-gray-900 
                                        text-black
                                        dark:text-white 
                                        ring-1
                                        ring-gray-300
                                        dark:ring-gray-800 
                                        hover:bg-gray-100
                                        dark:hover:bg-slate-900 
                                        hover:scale-[1.01]
                                        hover:text-blue-400
                                        transition-all 
                                        duration-200 
                                        cursor-pointer 
                                        select-none
                                        "
                                        onClick={() => {
                                            if (setSelected) setSelected(item)
                                            setIsOpened(!isOpened);
                                        }}>
                                        {item}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default Select;