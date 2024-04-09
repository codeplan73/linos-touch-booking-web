import React, { ReactNode } from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface Props {
  icon: ReactNode;
  title: string;
  text: string;
}

const HireCard = ({ icon, title, text }: Props) => {
  return (
    <div className="flex flex-col gap-6 max-w-max-w-md bg-white rounded-2xl drop-shadow-2xl p-8 font-sans">
      <p className="bg-slate-500 h-14 w-14 rounded-full"></p>
      {/* <h4 className="text-xl md:text-2xl font-semibold">{icon}</h4> */}
      <h4 className="text-md font-semibold text-secondaryColor">{title}</h4>
      <p className="text-md text-slate-400 text-left">{text}</p>
    </div>
  );
};

export default HireCard;
