"use client";
import React from "react";
import Link from "next/link";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { FaSignal } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { TbUsers } from "react-icons/tb";
import { RiSettings5Line } from "react-icons/ri";
import { MdOutlineCategory } from "react-icons/md";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Sidebar = () => {
  const router = useRouter();
  const links = [
    {
      id: 1,
      label: "Dashboard",
      link: "/dashboard",
      icon: <LuLayoutDashboard />,
    },
    {
      id: 2,
      label: "POS",
      link: "/pos",
      icon: <FaSignal />,
    },
    {
      id: 3,
      label: "Swap",
      link: "/swap",
      icon: <GrTransaction />,
    },
    {
      id: 4,
      label: "Orders",
      link: "/orders",
      icon: <BiDollar />,
    },
    {
      id: 5,
      label: "Products",
      link: "/products",
      icon: <PiShoppingBagOpenBold />,
    },
    {
      id: 5,
      label: "Category",
      link: "/category",
      icon: <MdOutlineCategory />,
    },
    {
      id: 7,
      label: "Customer",
      link: "/customer",
      icon: <TbUsers />,
    },
  ];

  return (
    <aside className="bg-white hidden h-full md:flex md:w-56 md:flex-col md:fixed  md:inset-y-0  px-4 py-6 gap-6 shadow-2xl z-10">
      <Image src="" alt="logo" height={100} width={100} className="" />
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col space-y-4">
          <ul className="flex flex-col space-y-2">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                className="flex items-center space-x-3 hover:bg-blue-700 py-2 px-2 rounded-xl hover:text-white text-slate-700 hover:shadow-lg hover:drop-shadow-lg"
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start space-y-2">
          <Link
            href="/settings"
            className="flex items-center space-x-3 hover:text-white hover:bg-blue-700 py-2 px-2 rounded-xl text-slate-900 hover:shadow-lg hover:drop-shadow-lg w-full"
          >
            <span>
              <RiSettings5Line />
            </span>
            <span>Settings</span>
          </Link>
          <Link
            href="/"
            className="flex items-center space-x-3 hover:text-white hover:bg-blue-700 py-2 px-2 rounded-xl text-slate-900 hover:shadow-lg hover:drop-shadow-lg w-full"
          >
            <span>
              <LuLogOut />
            </span>
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
