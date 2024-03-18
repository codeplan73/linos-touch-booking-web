"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/aboutUs" },
  { label: "Our Services", link: "/services" },
  { label: "Gallery", link: "/gallery" },
  { label: "Appointment", link: "/appointment" },
  { label: "Contact", link: "/contact" },
];

const Navbar = () => {
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
          <ul className="flex items-center justify-start space-x-4">
            {links.map((link) => (
              <Link key={link.link} href={link.link} className="">
                {link.label}
              </Link>
            ))}
            <Link
              href="/download"
              className="bg-primaryColor text-white px-4 py-2 rounded-xl space-x-12"
            >
              Download app
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
