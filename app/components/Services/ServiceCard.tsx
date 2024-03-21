import React, { ReactNode } from "react";

import { GiFloorPolisher } from "react-icons/gi";

interface Props {
  image: ReactNode;
  title: string;
  text: string;
}

const ServiceCard: React.FC<Props> = ({ image, title, text }) => {
  return (
    <div className="flex flex-col items-start justify-start max-w-sm rounded-3xl gap-4 py-10 px-8 bg-white transition-all drop-shadow-sm border">
      {image}
      <h2 className="text-xl font-sans font-semibold">{title}</h2>
      <p className="text-slate-500 font-">{text}</p>
    </div>
  );
};

export default ServiceCard;
