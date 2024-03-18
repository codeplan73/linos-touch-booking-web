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
    <div className="flex flex-col items-center justify-center gap-2 border border-slate-200 py-6 px-10">
      <span className="border border-gray-200 rounded-full text-xs py-1 px-2 text-secondaryColor">
        {step}
      </span>
      <p className="text-secondaryColor text-xl">{title}</p>
      <p className="text-gray4 text-sm text-balance text-center">{text}</p>
    </div>
  );
};

export default Card;
