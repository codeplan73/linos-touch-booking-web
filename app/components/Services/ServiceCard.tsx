import React, { ReactNode } from "react";

import { GiFloorPolisher } from "react-icons/gi";

interface Props {
  image: ReactNode;
  title: string;
  text: string;
}

const ServiceCard: React.FC<Props> = ({ image, title, text }) => {
  return (
    <div className="flex flex-col items-start justify-start bg- max-w-md rounded-3xl gap-4 py-10 px-8 drop-shadow-sm bg-white hover:bg-warningColor transition-all hover:drop-shadow-xl">
      {image}
      <h2 className="text-2xl font-sans font-semibold">{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default ServiceCard;
