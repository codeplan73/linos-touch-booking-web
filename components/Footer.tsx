import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { PiPhoneCallBold } from "react-icons/pi";
import { FaMapLocation } from "react-icons/fa6";

const links = [
  { label: "About us", link: "about" },
  { label: "Our Works", link: "projects" },
  { label: "Services", link: "services" },
  { label: "Terms & Condition", link: "terms" },
  { label: "Privacy Policy", link: "policy" },
  { label: "Testimonials", link: "testimonial" },
  { label: "Appointment", link: "appointment" },
];

const servcices = [
  { label: "House Cleaning", link: "services", id: 1 },
  { label: "Office Cleaning", link: "services", id: 2 },
  { label: "Kitchen Cleaning", link: "services", id: 3 },
  { label: "Bedroom Cleaning", link: "services", id: 4 },
  { label: "Plumbing Service", link: "services", id: 5 },
  { label: "Residential Service", link: "services", id: 6 },
  { label: "Window Cleaning", link: "services", id: 7 },
];

const Footer = () => {
  return (
    <div className="w-full bg-secondaryColor2 font-seri">
      <div className="container max-w-7xl py-10 flex flex-col items-center gap-12 justify-start">
        <div className="w-full flex flex-col md:flex-row items-start justify-start gap-8 md:gap-12">
          <div className="w-full md:w-4/12 flex flex-col items-start gap-6">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={1000}
              height={1000}
              className="h-12 md:h-20 w-12 md:w-20"
            />
            <p className=" text-slate-400">
              we are a well known professional cleaning company based in south
              east London and have a well known reputation of customer obsession
              and commitment to perfect service delivery... A trial will
              convince you
            </p>

            <div className="flex items-start gap-4">
              <Link href="/">
                <FaFacebook className="bg-slate-400 rounded-full text-secondaryColor text-4xl p-2" />
              </Link>
              <Link href="/">
                <FaTwitter className="bg-slate-400 rounded-full text-secondaryColor text-4xl p-2" />
              </Link>
              <Link href="/">
                <FaYoutube className="bg-slate-400 rounded-full text-secondaryColor text-4xl p-2" />
              </Link>
            </div>
          </div>

          <div className="w-full md:w-8/12 flex flex-col md:flex-row md:justify-between gap-6">
            <div className="w-6/12 md:w-4/12 flex flex-col gap-2 items-start">
              <h4 className="text-md text-slate-50 mb-1 font-bold">
                Quick Link
              </h4>

              {links.map((link) => (
                <Link
                  key={link.link}
                  href={link.link}
                  className="text-slate-500 hover:text-white whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="w-6/12 md:w-4/12 flex flex-col gap-2 items-start">
              <h4 className="text-md text-slate-50 mb-2 font-bold">Service</h4>

              {servcices.map((link) => (
                <Link
                  key={link.id}
                  href={link.link}
                  className="text-slate-500 hover:text-white whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="w-6/12 md:w-4/12 flex flex-col gap-2 items-start">
              <h4 className="text-md text-slate-50 mb-2 font-bold">
                Contact Info
              </h4>
              <p className="text-slate-500 flex items-center gap-2">
                <IoMdMail />
                bookings@linostouch.com
              </p>
              <p className="text-slate-500 flex items-center gap-2">
                <PiPhoneCallBold />
                +447514603137
              </p>
              <p className="text-slate-500 flex items-center gap-2">
                <FaMapLocation />
                Location: 103, Crofton Park Road, Brookley London
              </p>
            </div>
          </div>
        </div>

        <hr className="border border-slate-700 w-full" />
        <div className="w-full flex flex-col md:flex-row items-center gap-4 md:items-start justify-between">
          <Link
            href="https://https://globeraven.vercel.app/"
            className="text-slate-500 text-sm"
          >
            Powered by Glob-Rave &copy; {new Date().getFullYear()} All Rights
            Reserved
          </Link>
          <p className="flex space-x-8 ">
            <Link
              href="/policy"
              className="text-sm text-slate-500 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-slate-500 hover:text-white"
            >
              Terms of use
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
