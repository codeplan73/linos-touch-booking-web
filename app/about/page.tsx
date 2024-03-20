import React from "react";
import Image from "next/image";
import Banner from "../components/about/Banner";
import Card from "../components/about/Card";
import { GrUserExpert } from "react-icons/gr";
import { FaTools } from "react-icons/fa";
import HireCard from "../components/about/HireCard";

const AboutPage = () => {
  return (
    <>
      <Banner />

      <section className="container w-full py-16 md:py-32 flex flex-col-reverse md:flex-row md:gap-20">
        <div className="w-full md:w-6/12 flex flex-col gap-6 p-8">
          <div className="w-full flex items-end justify-start gap-6">
            <Image
              src="/images/about-project-1.jpeg"
              alt="image"
              width={1000}
              height={1000}
              className="w-6/12 h-80"
            />

            <Image
              src="/images/about-project-2.png"
              alt="image"
              width={1000}
              height={1000}
              className="w-6/12 h-72"
            />
          </div>
          <div className="w-full flex items-start justify-start gap-6">
            <Image
              src="/images/about-project-3.jpeg"
              alt="image"
              width={1000}
              height={1000}
              className="w-4/12 h-54"
            />
            <Image
              src="/images/about-project-4.png"
              alt="image"
              width={1000}
              height={1000}
              className="w-8/12 h-80"
            />
          </div>
        </div>

        <div className="w-full md:w-6/12 flex flex-col items-start justify-start gap-12">
          <h4 className="text-center md:text-pretty text-3xl md:text-5xl font-semibold leading-snug capitalize">
            Transforming any space into clean, neat perfection
          </h4>

          <div className="flex flex-col items-start gap-12">
            <Card
              icon={<GrUserExpert className="text-slate-200 p-1 font-bold" />}
              title=" Qualified & Expert Professionals"
              text=" LLinostouch Global Services, founded by Amaziah Jechin Samuel in Lagos, Nigeria in 2010 and registered in England and Wales, stands firm on the pillars of trust, customer satisfaction, commitment, responsibility, and passion. Our ethos revolves around acting with integrity towards our staff, customers, community, and environment. We prioritize the well-being of our staff, customers, and the environment, striving for excellence in all aspects of our services. With a dedication to quality cleaning and unparalleled customer service, we aim to deliver the best possible experience to our clients while upholding our values of integrity and excellence."
            />

            <Card
              icon={<FaTools className="text-slate-200 p-1 font-bold" />}
              title="Modern Tools & Technology Use"
              text=" Our diligent management and work ethic are central to LinosTouch Global services business philosophy and critical to delivering consistent, quality cleaning services. We pride ourselves on making our management accountable to the client through direct access and interaction with our managing director."
            />
          </div>
        </div>
      </section>

      <section className="container w-full pb-16 md:pb-32  md:pt-10  flex flex-col gap-10 md:gap-20 md:px-20 px-10">
        <div className="w-full md:w-6/12 mx-auto flex flex-col items-center justify-center gap-6">
          <h2 className="text-center text-3xl md:text-5xl font-bold">
            Why Hire Us?
          </h2>
          <p className="text-center text-slate-500 text-md font-sans ">
            {`
           Choose us because of our reputation for excellence. For more than 10
            years, we've earned a name for quality and customer service. The
            homeowners we serve rely on us for detail-oriented, consistent
            cleaning services, every single time we clean their homes.
          `}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HireCard
            icon={<FaTools className="text-slate-200 p-1 font-bold" />}
            title="With Us, Your Satisfaction is Guaranteed"
            text="The experts at Linostouch are commited to providing thorough house cleaning services four our valued customers nationwide, in order to accomplish this goal, we adhere to strict standards that remain consistent accross the board"
          />
          <HireCard
            icon={<FaTools className="text-slate-200 p-1 font-bold" />}
            title="Our Bonded & Insured Cleaning Team"
            text="Our compnay is fully bonded and insured, which means you can have peace of mind when hire us as your residentail cleaning service helpin our customer feel confident in our services is very important to us."
          />
          <HireCard
            icon={<FaTools className="text-slate-200 p-1 font-bold" />}
            title="Our Team Consist of Fully Trained Employees"
            text="It means every individual hired at a franchise location of Linostouch cleaning services goes through athorough screening process, and then is trained in every aspect of our home cleaning services. This ensured high-quality service every time"
          />
          <HireCard
            icon={<FaTools className="text-slate-200 p-1 font-bold" />}
            title="Locally Owned Home Cleaning Services"
            text="life is just too short to clean your own home. You should be able to enjoy peace of mind knowing that your home is in good hands, while focusing on things that matter more to you, such as your family and loved ones."
          />
          <HireCard
            icon={<FaTools className="text-slate-200 p-1 font-bold" />}
            title="Free Over Phone Estimates"
            text="LinosTouch Cleaning Services service is the key to keeping a beautiful homewhile more time for yourself and the things you love most. Contact us for a free estimate."
          />
          <HireCard
            icon={<FaTools className="text-slate-200 p-1 font-bold" />}
            title="We Guarantee Our Work"
            text="LinosTouch Cleaning Services strive to provide the highest level if qulity, service and value to each and every customer, If you are not completely satisfied with our service, please inform us within 24 hours or your clean so we may resolve the sitaution."
          />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
