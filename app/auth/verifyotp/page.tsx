import React from "react";
import Image from "next/image";
import OTPForm from "./OTPForm";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const VerifyOTP = () => {
  return (
    <div className="flex items-start relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="hidden md:block md:w-5/12 h-[100vh]">
        <Image
          src={"/images/auth.jpeg"}
          alt="auth image"
          height={1000}
          width={1000}
          className="w-full h-full object-fill"
        />
      </div>
      <div className="w-full md:w-7/12 z-10 md:h-screen bg-white flex flex-col gap-10  items-start justify-center pt-56 md:pt-24 px-10 md:pl-28 ">
        <Link
          href="/login"
          className="flex items-center justify-start space-x-2"
        >
          <IoIosArrowBack /> <span>Back</span>
        </Link>

        <div className="flex flex-col gap-2">
          <h4 className="text-left text-4xl font-bold text-black">Enter OTP</h4>
          <p className="text-md text-left text-slate-600">
            We have sent an OTP to your registered email address email@gmail.com
          </p>
        </div>

        <OTPForm />
      </div>
    </div>
  );
};

export default VerifyOTP;
