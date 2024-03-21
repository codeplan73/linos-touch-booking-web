import React from "react";
import PageBanner from "../components/PageBanner";
import ServiceCard from "../components/Services/serviceCard";
import { FaHouseChimney } from "react-icons/fa6";
import Counter from "../components/Counter";

const services = [
  {
    id: 1,
    icon: (
      <FaHouseChimney className="text-6xl bg-warningColor text-white rounded-lg p-2" />
    ),
    title: "Apartment Cleaning",
    text: "LinosTouch-Global-Services offers a program designed to service residents of apartments and condominiums.",
  },
  {
    id: 2,
    icon: (
      <FaHouseChimney className="text-6xl bg-warningColor text-white rounded-lg p-2" />
    ),
    title: "House Cleaning",
    text: "For over 10 years we’ve performed housekeeping services according to the wishes of our clients.",
  },
  {
    id: 3,
    icon: (
      <FaHouseChimney className="text-6xl bg-warningColor text-white rounded-lg p-2" />
    ),
    title: "Move in/ Move out",
    text: "In fact, many people say that moving is one of the most stressful and exhausting life experiences.",
  },
  {
    id: 4,
    icon: (
      <FaHouseChimney className="text-6xl bg-warningColor text-white rounded-lg p-2" />
    ),
    title: "Carpet  Cleaning",
    text: "When you choose us, you get a deeper clean, faster-drying carpets and a healthier home.",
  },
  {
    id: 5,
    icon: (
      <FaHouseChimney className="text-6xl bg-warningColor text-white rounded-lg p-2" />
    ),
    title: "window cleaning",
    text: "Indulge in high-quality window cleaning from bonded professionals.",
  },
  {
    id: 6,
    icon: (
      <FaHouseChimney className="text-6xl bg-warningColor text-white rounded-lg p-2" />
    ),
    title: "Commercial Cleaning",
    text: "Anyone who has done a renovation project knows the mess that comes with it.",
  },
  {
    id: 7,
    icon: (
      <FaHouseChimney className="text-6xl bg-warningColor text-white rounded-lg p-2" />
    ),
    title: "Residential  Cleaning",
    text: "We will take down uninstall your curtains and dry-clean right on the spot!.",
  },
  {
    id: 8,
    icon: (
      <FaHouseChimney className="text-6xl bg-warningColor text-white rounded-lg p-2" />
    ),
    title: "curtail  cleaning",
    text: "We will take down uninstall your curtains and dry-clean right on the spot!",
  },
  {
    id: 9,
    icon: (
      <FaHouseChimney className="text-6xl bg-warningColor text-white rounded-lg p-2" />
    ),
    title: "After Renovation",
    text: "Anyone who has done a renovation project knows the mess that comes with it.",
  },
];

const ServicesPage = () => {
  return (
    <section className="flex flex-col">
      <PageBanner page="Services" link={"services"} />

      <div className="container px-10 md:px-32 md:gap-24">
        <div className="w-full flex flex-col gap-10 py-12">
          <div className="flex items-start gap-2 justify-start">
            <hr className="w-20 mt-3  border-1 border-warningColor " />
            <h4 className="text-warningColor text-lg uppercase tracking-wider">
              best services
            </h4>
          </div>

          <div className="flex flex-col gap-4 items-start w-full md:w-5/12 pr-10">
            <h2 className="text-4xl font-semibold capitalize">
              what our services
            </h2>
            <p className="text-slate-400">
              While we can customize your cleaning plan to suit your needs, most
              clients schedule regular cleaning services:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        {/* <div className="flex flex-col py-20 gap-10">
          <h2 className="font-bold text-4xl">
            <span className="mr-2 border-4 pb-4 border-t-white border-r-white border-l-white border-b-primaryColor">
              By the
            </span>
            numbers
          </h2>
          <div className="w-full flex items-start justify-between gap-6 ">
            <Counter title="Year" count={10} />
            <Counter title="Employees" count={160} />
            <Counter title="Award" count={20} />
            <Counter title="Projects implemented by Linostouch" count={200} />
          </div>
        </div> */}

        <div className=" flex flex-col gap-10 items-start justify-center py-20">
          <h2 className="font-bold text-4xl">
            <span className="mr-2 border-4 pb-4 border-t-white border-r-white border-l-white border-b-primaryColor">
              By the
            </span>
            numbers
          </h2>
          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 ">
            <div className="w-full md:w-6/12 flex justify-between md:justify-start md:gap-56 px-4 md:px-0">
              <Counter title="Year" count={10} />
              <Counter title="Employees" count={160} />
            </div>
            <div className="w-full md:w-6/12 flex md:ml-32 justify-between px-4 md:px-0">
              <Counter title="Award" count={20} />
              <Counter title="Completed Projects" count={200} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
