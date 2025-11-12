import React, { useEffect, useState } from 'react';
interface SectionHeaderProps {
  children: React.ReactNode,
  isCopyOn?: boolean,
  setMessage?: (value : string) => void
}

const TextChip: React.FC<SectionHeaderProps> = ({ setMessage, isCopyOn, children }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    if(setMessage) {
      if (isClicked) setMessage(`Copied To Clipboard. ✅`);
      else setMessage('');
    }
    const Timer = setTimeout(() => {
      isClicked && setIsClicked(!isClicked);
    }, 2000)
    return () => clearTimeout(Timer)
  }, [isClicked])

  return (
    <>
      <div
        className={`
        w-full
        text-center 
        p-2
        rounded
        bg-white
        dark:bg-slate-700 
        text-black
        dark:text-white
        ${isCopyOn ? 'cursor-pointer hover:shadow-lg active:dark:bg-slate-800 hover:opacity-90' : 'select-none'}
      `}
        onClick={(e) => {
          navigator.clipboard.writeText(e.currentTarget.innerText)
          setIsClicked(true);
        }}
      >
        {children}
      </div>
    </>
  );
};

export default TextChip;