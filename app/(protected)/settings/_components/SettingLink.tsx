import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const links = [
  {
    label: "Price Settings",
    href: "/settings/price",
    description: "Customize how your price is per hour",
  },
  {
    label: "Update Password",
    href: "/settings/password",
    description: "Change Password",
  },
  {
    label: "Two-factor Authentication",
    href: "/settings/password",
    description: "Keep your account secure by enabling 2Fa via email",
  },
  {
    label: "Email Notification",
    href: "/settings/password",
    description: "Receive email notifications for important events",
  },
];

const SettingLink = () => {
  return (
    <div className="flex flex-col gap-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="border rounded-md py-8 px-4  bg-slate-50 flex items-center justify-between shadow-sm"
        >
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold">{link.label}</h4>
            <p className="text-xs text-slate-500">{link.description}</p>
          </div>
          <IoIosArrowForward className="" />
        </Link>
      ))}
    </div>
  );
};

export default SettingLink;
