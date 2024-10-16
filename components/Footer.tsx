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
      <div className="container flex flex-col items-center justify-start gap-12 py-10 max-w-7xl">
        <div className="flex flex-col items-start justify-start w-full gap-8 md:flex-row md:gap-12">
          <div className="flex flex-col items-start w-full gap-6 md:w-4/12">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={1000}
              height={1000}
              className="w-12 h-12 md:h-20 md:w-20"
            />
            <p className=" text-slate-400">
              we are a well known professional cleaning company based in south
              east London and have a well known reputation of customer obsession
              and commitment to perfect service delivery... A trial will
              convince you
            </p>

            <div className="flex items-start gap-4">
              <Link href="/">
                <FaFacebook className="p-2 text-4xl rounded-full bg-slate-400 text-secondaryColor" />
              </Link>
              <Link href="/">
                <FaTwitter className="p-2 text-4xl rounded-full bg-slate-400 text-secondaryColor" />
              </Link>
              <Link href="/">
                <FaYoutube className="p-2 text-4xl rounded-full bg-slate-400 text-secondaryColor" />
              </Link>
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-3 md:w-8/12">
            <div className="flex flex-col items-start w-6/12 gap-2 md:w-4/12">
              <h4 className="mb-1 font-bold text-md text-slate-50 text-nowrap">
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
            <div className="flex flex-col items-start w-6/12 gap-2 md:w-4/12">
              <h4 className="mb-2 font-bold text-md text-slate-50">Service</h4>

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
            <div className="flex flex-col items-start w-6/12 gap-2 md:w-4/12">
              <h4 className="mb-2 font-bold text-md text-slate-50 text-nowrap">
                Contact Info
              </h4>
              <p className="flex items-center gap-2 text-slate-500">
                <IoMdMail className="text-xl" />
                bookings@linostouch.com
              </p>
              <p className="flex items-center gap-2 text-slate-500">
                <PiPhoneCallBold className="text-xl" />
                +447514603137
              </p>
              <p className="flex items-start gap-2 text-slate-500">
                <FaMapLocation className="text-5xl" />
                103, Crofton Park Road, Brookley London
              </p>
            </div>
          </div>
        </div>

        <hr className="w-full border border-slate-700" />
        <div className="flex flex-col items-center justify-between w-full gap-4 md:flex-row md:items-start">
          <Link
            href="https://https://globeraven.vercel.app/"
            className="text-sm text-slate-500"
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
