import React from "react";
import PageBanner from "../components/PageBanner";
import TestimonialCard from "./_components/TestimonialCard";
import { testimonials } from "../utils/domFiles";

const TestimonialPage = () => {
  return (
    <div className="flex flex-col">
      <PageBanner page="Testimonials" link={"testimonial"} />

      <div className="container px-10 md:px-32 py-10 md:py-20 md:gap-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <TestimonialCard
              key={test.id}
              name={test.name}
              rating={test.rating}
              text={test.text}
              title={test.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
