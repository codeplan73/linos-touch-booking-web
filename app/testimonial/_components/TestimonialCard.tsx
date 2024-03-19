import React from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface Props {
  name: string;
  rating: string;
  title: string;
  text: string;
}

const TestimonialCard = ({ name, rating, title, text }: Props) => {
  return (
    <div className="flex flex-col gap-6 max-w-max-w-md bg-white rounded-2xl drop-shadow-2xl p-8 font-sans">
      <div className="flex items-start justify-start gap-4">
        <p className="bg-blue-500 h-20 w-20 rounded-2xl"></p>
        <div className="flex flex-col items-start gap-4">
          <h4 className="text-xl md:text-2xl font-semibold">{name}</h4>
          <p className="flex items-center gap-2">
            <FaStar className="text-primaryColor text-2xl" />
            <span className="text-blue-500 font-light">{rating}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start gap-4">
        <div className="flex items-center gap-2 justify-start">
          <span>
            <AiOutlineInfoCircle className="text-red-500 text-xl" />
          </span>
          <h4 className="text-md font-semibold text-secondaryColor">{title}</h4>
        </div>

        <p className="text-md text-slate-400 text-left">{text}</p>
        <p className="text-sm text-slate-400">
          {new Date().toLocaleDateString("default", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
