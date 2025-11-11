import React, { useEffect, useState } from 'react';
interface SectionHeaderProps {
  children: React.ReactNode;
  setMessage?: (value : string) => void
}

const TextChip: React.FC<SectionHeaderProps> = ({ setMessage, children }) => {
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
        className="
        w-full
        text-center 
        p-2 
        rounded
        bg-white
        dark:bg-slate-700 
        text-black
        dark:text-white   
        select-none
        cursor-pointer
        hover:dark:bg-slate-800 
        hover:opacity-80
      "
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