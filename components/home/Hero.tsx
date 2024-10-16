import React from "react";
import HeroForm from "./HeroForm";
import { FadeText } from "@/components/ui/fade-text";

const Hero = () => {
  return (
    <div
      className="relative w-full md:w-[100vw] bg-no-repeat bg-center md:bg-top bg-cover h-[100vh] overflow-hidden px-6"
      style={{ backgroundImage: "url('/images/bg-main.jpeg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-65"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-start gap-12 px-6 text-white pt-52 md:pt-36 md:gap-10">
        <FadeText
          className="text-xl font-semibold text-center open-sans-bold text-warningColor md:text-2xl md:mt-12"
          direction="up"
          framerProps={{
            show: { transition: { delay: 0.2 } },
          }}
          text="15 Years Experienced"
        />

        <div className="flex flex-col text-center space-4-8">
          <FadeText
            className="text-4xl font-bold text-center text-white open-sans-bold md:text-7xl"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.5 } },
            }}
            text="We Work For You To"
          />
          <FadeText
            className="text-4xl font-bold text-center text-white open-sans-bold md:text-7xl"
            direction="down"
            framerProps={{
              show: { transition: { delay: 0.7 } },
            }}
            text="Give Best Services"
          />
        </div>
        <div>
          <FadeText
            className="font-sans text-lg text-center"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.9 } },
            }}
            text="Experience our renowned customer obserssion and commitment to perfect
          service"
          />
          <FadeText
            className="pl-12 font-sans text-lg text-center"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.9 } },
            }}
            text="  delivery. Free quotes available - let us take the
          stress our of cleaning"
          />
        </div>

        <HeroForm />
      </div>
    </div>
  );
};

export default Hero;
