"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { CgMenuMotion } from "react-icons/cg";

const links = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/aboutUs" },
  { label: "Our Services", link: "/services" },
  { label: "Gallery", link: "/gallery" },
  { label: "Appointment", link: "/appointment" },
  { label: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [open, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondaryColor bg-opacity-95" : "bg-transparent"
      }`}
    >
      {/* Blur effect is applied to the background here */}
      <div className="relative">
        <div className="w-full container mx-auto px-4 py-4 flex items-center justify-between text-white">
          <Link href="/" className="">
            <Image
              src="/images/logo.png"
              alt="logo"
              height={1000}
              width={1000}
              className="h-14 w-14"
            />
          </Link>
          <ul className="hidden md:flex items-center justify-start space-x-4">
            {links.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                className="hover:text-warningColor hover:bg-secondaryColor p-2 rounded-xl"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/download"
              className="bg-warningColor text-white px-4 py-2 rounded-xl space-x-12 hover:bg-secondaryColor"
            >
              Download app
            </Link>
          </ul>
          {open ? (
            <CgMenuMotion
              className="block md:hidden text-slate-300 text-3xl font-semibold cursor-pointer h-full"
              onClick={() => setIsOpen(!open)}
            />
          ) : (
            <TiThMenu
              className="block md:hidden text-slate-300 text-3xl cursor-pointer h-full"
              onClick={() => setIsOpen(!open)}
            />
          )}
        </div>
      </div>

      {/* mobile menu section */}
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-70 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <ul
        className={`w-8/12 absolute z-20 bg-white h-screen backdrop:bg-slate-400 left-0 top-0 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {open &&
          links.map((link) => (
            <Link
              key={link.link}
              href={link.link}
              className="flex p-4 text-slate-700 w-full hover:bg-secondaryColor"
              onClick={() => setIsOpen(false)}
            >
              <span>{link.label}</span>
            </Link>
          ))}
      </ul>
    </nav>
  );
};

export default Navbar;
