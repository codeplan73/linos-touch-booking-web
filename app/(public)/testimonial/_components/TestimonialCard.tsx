import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

interface Props {
  name: string;
  rating: string;
  text: string;
}

const TestimonialCard = ({ name, rating, text }: Props) => {
  const ratingNumber = parseFloat(rating);
  const fullStars = Math.floor(ratingNumber);
  const hasHalfStar = ratingNumber % 1 !== 0;

  return (
    <div className="flex flex-col h-full gap-6 p-8 font-sans bg-white rounded-2xl drop-shadow-2xl">
      <div className="flex flex-col items-start gap-4">
        <h4 className="text-xl font-semibold md:text-2xl">{name}</h4>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => {
            if (index < fullStars) {
              return (
                <FaStar key={index} className="text-2xl text-primaryColor" />
              );
            } else if (index === fullStars && hasHalfStar) {
              return (
                <FaStarHalfAlt
                  key={index}
                  className="text-2xl text-primaryColor"
                />
              );
            } else {
              return (
                <AiOutlineStar
                  key={index}
                  className="text-2xl text-primaryColor"
                />
              );
            }
          })}
          <span className="ml-2 font-light text-blue-500">{rating}</span>
        </div>
        <p className="flex-grow overflow-y-auto text-left text-md text-slate-400">
          {text}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
