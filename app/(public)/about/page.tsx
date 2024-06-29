import React from "react";
import Image from "next/image";
import Banner from "../../../components/about/Banner";
import Card from "../../../components/about/Card";
import { GrUserExpert } from "react-icons/gr";
import { FaTools } from "react-icons/fa";
import HireCard from "../../../components/about/HireCard";
import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <Banner />

      <section className="container flex flex-col-reverse w-full py-16 md:py-32 md:flex-row md:gap-20">
        <div className="flex flex-col w-full gap-6 p-8 md:w-6/12">
          <div className="flex items-end justify-start w-full gap-6">
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
          <div className="flex items-start justify-start w-full gap-6">
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

        <div className="flex flex-col items-start justify-start w-full gap-12 md:w-6/12">
          <h4 className="text-3xl font-semibold leading-snug text-center capitalize md:text-pretty md:text-5xl">
            Transforming any space into clean, neat perfection
          </h4>

          <div className="flex flex-col items-start gap-12">
            <Card
              icon={<GrUserExpert className="p-1 font-bold text-slate-200" />}
              title=" Qualified & Expert Professionals"
              text=" Linostouch Global Services, founded by Amaziah Jechin Samuel in Lagos, Nigeria in 2010 and registered in England and Wales, stands firm on the pillars of trust, customer satisfaction, commitment, responsibility, and passion. Our ethos revolves around acting with integrity towards our staff, customers, community, and environment. We prioritize the well-being of our staff, customers, and the environment, striving for excellence in all aspects of our services. With a dedication to quality cleaning and unparalleled customer service, we aim to deliver the best possible experience to our clients while upholding our values of integrity and excellence."
            />

            <Card
              icon={<FaTools className="p-1 font-bold text-slate-200" />}
              title="Modern Tools & Technology Use"
              text=" Our diligent management and work ethic are central to LinosTouch Global services business philosophy and critical to delivering consistent, quality cleaning services. We pride ourselves on making our management accountable to the client through direct access and interaction with our managing director."
            />
          </div>
        </div>
      </section>

      <section className="container flex flex-col w-full gap-10 px-10 pb-16 md:pb-32 md:pt-10 md:gap-20 md:px-20">
        <div className="flex flex-col items-center justify-center w-full gap-6 mx-auto md:w-6/12">
          <h2 className="text-3xl font-bold text-center md:text-5xl">
            Why Hire Us?
          </h2>
          <p className="font-sans text-center text-slate-500 text-md ">
            {`
           Choose us because of our reputation for excellence. For more than 10
            years, we've earned a name for quality and customer service. The
            homeowners we serve rely on us for detail-oriented, consistent
            cleaning services, every single time we clean their homes.
          `}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <HireCard
            icon={<FaTools className="p-1 font-bold text-slate-200" />}
            title="With Us, Your Satisfaction is Guaranteed"
            text="The experts at Linostouch are commited to providing thorough house cleaning services four our valued customers nationwide, in order to accomplish this goal, we adhere to strict standards that remain consistent accross the board"
          />
          <HireCard
            icon={<FaTools className="p-1 font-bold text-slate-200" />}
            title="Our Bonded & Insured Cleaning Team"
            text="Our compnay is fully bonded and insured, which means you can have peace of mind when hire us as your residentail cleaning service helpin our customer feel confident in our services is very important to us."
          />
          <HireCard
            icon={<FaTools className="p-1 font-bold text-slate-200" />}
            title="Our Team Consist of Fully Trained Employees"
            text="It means every individual hired at a franchise location of Linostouch cleaning services goes through athorough screening process, and then is trained in every aspect of our home cleaning services. This ensured high-quality service every time"
          />
          <HireCard
            icon={<FaTools className="p-1 font-bold text-slate-200" />}
            title="Locally Owned Home Cleaning Services"
            text="life is just too short to clean your own home. You should be able to enjoy peace of mind knowing that your home is in good hands, while focusing on things that matter more to you, such as your family and loved ones."
          />
          <HireCard
            icon={<FaTools className="p-1 font-bold text-slate-200" />}
            title="Free Over Phone Estimates"
            text="LinosTouch Cleaning Services service is the key to keeping a beautiful homewhile more time for yourself and the things you love most. Contact us for a free estimate."
          />
          <HireCard
            icon={<FaTools className="p-1 font-bold text-slate-200" />}
            title="We Guarantee Our Work"
            text="LinosTouch Cleaning Services strive to provide the highest level if qulity, service and value to each and every customer, If you are not completely satisfied with our service, please inform us within 24 hours or your clean so we may resolve the sitaution."
          />
        </div>
      </section>

      <section
        className="relative flex flex-col w-full gap-10 px-10 py-12 overflow-hidden bg-center bg-no-repeat bg-cover md:gap-20 md:px-20 md:bg-center"
        style={{
          backgroundImage: "url('/images/about/about-app-section-bg.jpeg",
        }}
      >
        <div
          className="absolute inset-0 bg-purple-900 opacity-40"
          style={{ zIndex: 0 }}
        ></div>

        <div className="container relative z-10 flex items-center justify-center md:justify-between">
          <div className="flex flex-col w-full gap-6 text-white md:w-6/12">
            <h4 className="text-sm font-semibold tracking-wider text-center uppercase md:text-left md:text-lg">
              GET STARTED
            </h4>
            <h2 className="text-2xl font-bold text-center capitalize md:text-left md:text-balance md:text-5xl">
              Download our APP Now!
            </h2>
            <p className="text-center md:text-left text-md">
              For convenient and easy booking and re-booking service we offer
              discounts and special offers when you download our app for free
              today!
            </p>
            <Link
              href="/appdownload"
              className="px-10 py-3 text-center rounded-full bg-warningColor text-md w-72"
            >
              Download App
            </Link>

            <div className="flex items-start justify-start gap-2 ml-3">
              <Link href="/appdownload" className="overflow-hidden">
                <Image
                  src="/images/about/playstore.png"
                  alt="playstore"
                  height={1000}
                  width={1000}
                  className="w-32 h-10 rounded-2xl "
                />
              </Link>
              <Link href="/appdownload" className="overflow-hidden">
                <Image
                  src="/images/about/appstore.png"
                  alt="playstore"
                  height={1000}
                  width={1000}
                  className="w-32 h-10 rounded-2xl"
                />
              </Link>
            </div>
          </div>

          <div className="absolute hidden md:flex top-6 right-44">
            <Image
              src="/images/about/app.png"
              alt="app image"
              height={1000}
              width={1000}
              className="h-96 w-72 rounded-3xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
