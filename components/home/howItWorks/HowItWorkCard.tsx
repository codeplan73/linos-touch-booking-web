import React from "react";

const Card = ({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-10 py-16 border border-slate-200">
      <span className="px-2 py-1 text-xs border border-gray-200 rounded-full text-secondaryColor">
        {step}
      </span>
      <p className="text-xl text-secondaryColor">{title}</p>
      <p className="text-sm text-center text-gray4 text-balance">{text}</p>
    </div>
  );
};

export default Card;
