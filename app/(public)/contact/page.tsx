import React from "react";
import PageBanner from "../../../components/PageBanner";
import ContactCard from "../../../components/ContactCard";
import { IoMdMail } from "react-icons/io";
import { PiPhoneCallBold } from "react-icons/pi";
import { FaMapLocation } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import MapLocation from "./MapLocation";

const page = () => {
  return (
    <>
      <PageBanner
        link="contact"
        page="Contact"
        bannerImg="/images/banner-about.jpeg"
      />

      <section className="container py-10 md:py-20 md:px-20">
        <div className="flex flex-col items-center gap-12 md:gap-20">
          <p className="text-lg text-primaryColor">Contact information</p>
          <h2 className="text-2xl font-semibold text-center capitalize md:text-5xl">
            We want to share our location <br /> to find us easily
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <ContactCard
              icon={<FaMapLocation className="" />}
              tittle="Office Address"
              text="03, Crofton Park Road, Brookley London"
            />
            <ContactCard
              icon={<PiPhoneCallBold className="" />}
              tittle="Phone Number"
              text="+447514603137"
            />
            <ContactCard
              icon={<IoMdMail className="" />}
              tittle="Mail Address"
              text="bookings@linostouch.com"
            />
          </div>

          <div className="flex flex-col-reverse items-start w-full gap-12 md:container md:flex-row">
            <MapLocation />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
