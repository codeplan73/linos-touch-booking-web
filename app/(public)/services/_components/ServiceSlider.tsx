import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ServiceCard from "./ServiceCardHover";
import { GiFloorPolisher } from "react-icons/gi";

const ServiceSlider = () => {
  return (
    <Carousel className="w-full md:max-w-7xl">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1 flex gap-4">
              <ServiceCard
                image={<GiFloorPolisher className="" />}
                title="House Cleaning"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum provident, placeat tempore eos"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ServiceSlider;
