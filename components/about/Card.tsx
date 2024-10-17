import React, { ReactNode } from "react";
interface Props {
  icon: ReactNode;
  title: string;
  text: string;
}

const Card = ({ icon, title, text }: Props) => {
  return (
    <div className="flex items-start justify-start gap-6">
      <p className="p-2 text-4xl font-bold rounded-full bg-secondaryColor">
        {icon}
      </p>
      <div className="flex flex-col gap-6">
        <h4 className="text-xl font-semibold md:text-2xl">{title}</h4>
        <p className="text-lg text-slate-600 text-balance">{text}</p>
      </div>
    </div>
  );
};

export default Card;
