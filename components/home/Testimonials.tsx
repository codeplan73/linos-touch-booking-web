"use client";

import TestimonialCard from "@/app/(public)/testimonial/_components/TestimonialCard";
import { testimonials } from "@/lib/domFiles";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-10 md:max-w-7xl md:gap-20">
      <div className="flex flex-col items-center justify-between w-full gap-4 md:flex-row">
        <div className="flex flex-col items-center justify-start gap-4 md:items-start">
          <p className="font-sans font-light tracking-widest uppercase text-md">
            Testimonials
          </p>
          <h2 className="hidden font-sans leading-tight tracking-wide capitalize md:block md:text-6xl">
            what they say <br /> about our service
          </h2>
          <h2 className="font-sans text-3xl leading-tight tracking-wide text-center capitalize md:hidden md:text-6xl">
            what they say about our service
          </h2>
        </div>
        <Link
          href="/testimonial"
          className="hidden px-10 py-6 font-sans font-semibold rounded-full md:block bg-warningColor text-secondaryColor text-md"
        >
          See All Testimonial
        </Link>
      </div>

      <div className="relative w-full ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {testimonials.map((test) => (
            <SwiperSlide key={test.id} className="h-[250px]">
              <div className="h-full">
                <TestimonialCard
                  name={test.name}
                  rating={test.rating}
                  text={test.text}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>

      <Link
        href="/testimonial"
        className="block px-6 py-3 mt-12 font-sans text-sm font-semibold rounded-full md:hidden bg-warningColor text-secondaryColor"
      >
        See All Testimonial
      </Link>
    </div>
  );
};

export default Testimonials;
