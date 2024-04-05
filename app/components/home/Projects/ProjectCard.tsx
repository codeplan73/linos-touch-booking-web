import React from "react";
import Image from "next/image";

const ProjectCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="max-w-sm relative overflow-hidden rounded-2xl shadow-xl">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div style={{ height: "250px" }}>
        <Image
          src={image}
          alt=""
          width={1000}
          height={1000}
          // objectFit="cover" // Cover the container without stretching the image
          className="rounded-2xl h-full object-cover"
        />
      </div>
      <p className="absolute bottom-4 left-6 text-white font-semibold text-lg">
        {title}
      </p>
    </div>
  );
};

export default ProjectCard;
