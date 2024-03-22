import React from "react";
import Image from "next/image";
import ForgotPasswordForm from "./forgotPasswordForm";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const ForgotPasswordPage = () => {
  return (
    <div className="flex items-start relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="hidden md:block md:w-5/12 h-[100vh]">
        <Image
          src={"/images/auth.jpeg"}
          alt="auth image"
          layout="fill"
          objectFit="cover"
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
          <h4 className="text-left text-4xl font-bold text-black">
            Forgot Password
          </h4>
          <p className="text-md text-left text-slate-600">{`Enter your registered email address, we'll send you a code to reset your password`}</p>
        </div>

        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
