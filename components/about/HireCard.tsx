import React from "react";

interface Props {
  title: string;
  text: string;
}

const HireCard = ({ title, text }: Props) => {
  return (
    <div className="flex flex-col gap-3 p-8 font-sans bg-white max-w-max-w-md rounded-2xl drop-shadow-2xl">
      {/* <Image
        src={image}
        className="p-1 bg-white rounded-full shadow-lg h-14 w-14 drop-shadow-lg"
        alt={title}
        width={100}
        height={100}
      /> */}
      <h4 className="text-2xl font-semibold text-secondaryColor">{title}</h4>
      <p className="text-lg text-left open-sans text-slate-700">{text}</p>
    </div>
  );
};

export default HireCard;
