import React from "react";
import PageBanner from "../components/PageBanner";
import ContactCard from "../components/ContactCard";
import { IoMdMail } from "react-icons/io";
import { PiPhoneCallBold } from "react-icons/pi";
import { FaMapLocation } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <PageBanner link="contact" page="Contact" />

      <section className="container py-10 md:py-20  md:px-20">
        <div>
          <h2>We want to share our location to find us easily</h2>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
