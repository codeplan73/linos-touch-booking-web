import React, { ReactNode } from "react";
import Image from "next/image";
import ShineBorder from "@/components/ui/shine-border";

interface Props {
  image: string;
  title: string;
  text: string;
  style: string;
}

const ServiceCard = ({ image, title, text, style }: Props) => {
  return (
    <ShineBorder
      className={`flex flex-col items-start justify-start max-w-md  gap-4 py-10 px-8 drop-shadow-sm ${style}`}
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <Image
        src={image}
        className="p-2 bg-white rounded-full shadow-lg h-14 w-14 drop-shadow-lg"
        alt={title}
        width={100}
        height={100}
      />
      <h2 className="font-sans text-2xl font-semibold">{title}</h2>
      <p className="text-lg open-sans text-slate-600">{text}</p>
    </ShineBorder>
  );
};

export default ServiceCard;
