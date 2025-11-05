import React, { type JSX } from 'react';
interface SectionHeaderProps {
  text: string | JSX.Element;
  classes?: string;
}

const TitleChip: React.FC<SectionHeaderProps> = ({ text, classes }) => {
  return (
    <span
      className={`
        w-full
        text-center 
        p-2 
        rounded
        bg-white
        dark:bg-slate-700 
        text-black
        dark:text-white   
        select-none
      ${classes}`}
    >
      {text}
    </span>
  );
};

export default TitleChip;