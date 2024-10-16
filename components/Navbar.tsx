"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { CgMenuMotion } from "react-icons/cg";
import classnames from "classnames";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  // { label: "Login", href: "/auth/login" },
  // { label: "SignUp", href: "/auth/register" },
  { label: "Book Appointment", href: "/booking" },
];

const Navbar = () => {
  const [open, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const currentPath = usePathname();

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
      className={`fixed w-full top-0 z-50 transition-all duration-300  ${
        isScrolled
          ? "bg-secondaryColor bg-opacity-60 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {/* Blur effect is applied to the background here */}
      <div className="container relative">
        <div className="container flex items-center justify-between w-full px-4 py-4 mx-auto text-white">
          <Link href="/" className="">
            <Image
              src="/images/logo.png"
              alt="logo"
              height={1000}
              width={1000}
              className="h-14 w-14"
            />
          </Link>
          <ul className="items-center hidden md:flex gap-28">
            <ul className="items-center justify-start hidden space-x-2 md:flex">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  // className={`hover:text-warningColor hover:bg-secondaryColor p-2 rounded-xl`}
                  className={classnames({
                    "text-warningColor p-2 rounded-xl":
                      link.href === currentPath,
                    "text-slate-300": link.href !== currentPath,
                    "transition-colors hover:text-warningColor p-2 rounded-xl":
                      true,
                  })}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
            <Link
              href="/download"
              className="px-4 py-2 text-white bg-warningColor rounded-xl hover:bg-secondaryColor"
            >
              Download app
            </Link>
          </ul>
          {open ? (
            <CgMenuMotion
              className="block h-full text-3xl font-semibold cursor-pointer md:hidden text-slate-300"
              onClick={() => setIsOpen(!open)}
            />
          ) : (
            <TiThMenu
              className="block h-full text-3xl cursor-pointer md:hidden text-slate-300"
              onClick={() => setIsOpen(!open)}
            />
          )}
        </div>
      </div>

      {/* mobile menu section */}
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-70"
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
              key={link.href}
              href={link.href}
              className="flex w-full p-4 text-slate-700 hover:bg-secondaryColor hover:text-white"
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
