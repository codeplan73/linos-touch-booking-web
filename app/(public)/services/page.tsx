import React from "react";
import ServiceCard from "./_components/serviceCard";
import PageBanner from "../../../components/PageBanner";
import Counter from "../../../components/Counter";
import CounterSection from "@/components/home/CounterSection";

import {
  FaHouseChimney,
  FaHouse,
  FaTruckRampBox,
  FaBroom,
  FaWindowMaximize,
  FaBuilding,
  FaHouseUser,
} from "react-icons/fa6";
import { FaHardHat } from "react-icons/fa";
import { MdCurtainsClosed } from "react-icons/md";

const services = [
  {
    id: 1,
    icon: (
      <FaHouseChimney className="p-2 text-6xl text-white rounded-lg bg-warningColor" />
    ),
    title: "Apartment Cleaning",
    text: "LinosTouch-Global-Services offers a program designed to service residents of apartments and condominiums.",
  },
  {
    id: 2,
    icon: (
      <FaHouse className="p-2 text-6xl text-white rounded-lg bg-warningColor" />
    ),
    title: "House Cleaning",
    text: "For over 10 years we've performed housekeeping services according to the wishes of our clients.",
  },
  {
    id: 3,
    icon: (
      <FaTruckRampBox className="p-2 text-6xl text-white rounded-lg bg-warningColor" />
    ),
    title: "Move in/ Move out",
    text: "In fact, many people say that moving is one of the most stressful and exhausting life experiences.",
  },
  {
    id: 4,
    icon: (
      <FaBroom className="p-2 text-6xl text-white rounded-lg bg-warningColor" />
    ),
    title: "Carpet Cleaning",
    text: "When you choose us, you get a deeper clean, faster-drying carpets and a healthier home.",
  },
  {
    id: 5,
    icon: (
      <FaWindowMaximize className="p-2 text-6xl text-white rounded-lg bg-warningColor" />
    ),
    title: "window cleaning",
    text: "Indulge in high-quality window cleaning from bonded professionals.",
  },
  {
    id: 6,
    icon: (
      <FaBuilding className="p-2 text-6xl text-white rounded-lg bg-warningColor" />
    ),
    title: "Commercial Cleaning",
    text: "Anyone who has done a renovation project knows the mess that comes with it.",
  },
  {
    id: 7,
    icon: (
      <FaHouseUser className="p-2 text-6xl text-white rounded-lg bg-warningColor" />
    ),
    title: "Residential Cleaning",
    text: "We will take down uninstall your curtains and dry-clean right on the spot!.",
  },
  {
    id: 8,
    icon: (
      <MdCurtainsClosed className="p-2 text-6xl text-white rounded-lg bg-warningColor" />
    ),
    title: "curtail cleaning",
    text: "We will take down uninstall your curtains and dry-clean right on the spot!",
  },
  {
    id: 9,
    icon: (
      <FaHardHat className="p-2 text-6xl text-white rounded-lg bg-warningColor" />
    ),
    title: "After Renovation",
    text: "Anyone who has done a renovation project knows the mess that comes with it.",
  },
];

const ServicesPage = () => {
  return (
    <>
      <section className="flex flex-col">
        <PageBanner
          page="Services"
          link={"services"}
          bannerImg="/images/banner-services.jpeg"
        />

        <div className="container px-10 md:px-32 md:gap-24">
          <div className="flex flex-col w-full gap-10 py-12">
            <div className="flex items-start justify-start gap-2">
              <hr className="w-20 mt-3 border-1 border-warningColor " />
              <h4 className="text-lg tracking-wider uppercase text-warningColor">
                best services
              </h4>
            </div>

            <div className="flex flex-col items-start w-full gap-4 pr-10 md:w-5/12">
              <h2 className="text-4xl font-semibold capitalize">
                what our services
              </h2>
              <p className="text-slate-400">
                While we can customize your cleaning plan to suit your needs,
                most clients schedule regular cleaning services:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  image={service.icon}
                  title={service.title}
                  text={service.text}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <CounterSection />
    </>
  );
};

export default ServicesPage;
