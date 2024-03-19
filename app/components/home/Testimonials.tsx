import TestimonialCard from "@/app/testimonial/_components/TestimonialCard";
import Link from "next/link";
import React from "react";

const Testimonials = () => {
  return (
    <div className="w-full md:max-w-7xl flex flex-col items-center justify-center md:gap-20">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start justify-start gap-4">
          <p className="text-md font-sans uppercase font-light tracking-widest">
            Testimonials
          </p>
          <h2 className="hidden md:block md:text-6xl capitalize tracking-wide font-sans leading-tight">
            what they say <br /> about our service
          </h2>
          <h2 className="md:hidden text-3xl text-center md:text-6xl capitalize tracking-wide font-sans leading-tight">
            what they say about our service
          </h2>
        </div>
        <Link
          href="/testimonial"
          className="hidden md:block bg-warningColor rounded-full py-6 px-10 text-secondaryColor text-md font-semibold font-sans"
        >
          See All Testimonial
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TestimonialCard
          name="Walter Anderson"
          rating="4.5/5"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sequi."
          title="Faulty Wiring in my Kitcjen"
        />
        <TestimonialCard
          name="Susan Torres"
          rating="4.5/5"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sequi."
          title="Circuit Breaker Tripping"
        />
        <TestimonialCard
          name="John Davis"
          rating="4.5/5"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sequi."
          title="Flickering Lights in The Living Room"
        />
        <TestimonialCard
          name="Melisa Rose"
          rating="4.5/5"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sequi."
          title="Installation of new electrical outlet"
        />
        <TestimonialCard
          name="Brandon Millet"
          rating="4.5/5"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sequi."
          title="Power Outage troubleshooting."
        />
        <TestimonialCard
          name="Gloria Williams"
          rating="4.5/5"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sequi."
          title="Installation of new electrical outlet"
        />
      </div>
    </div>
  );
};

export default Testimonials;
