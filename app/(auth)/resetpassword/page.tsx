import React from "react";
import Image from "next/image";
import ResetPasswordForm from "./resetPasswordForm";
import Link from "next/link";

const LoginPage = () => {
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
      <div className="w-full md:w-7/12 z-10 md:h-screen bg-white flex flex-col gap-10 items-center md:items-start justify-center md:justify-start pt-32 md:pt-56 px-10 md:pl-28 ">
        <div className="flex flex-col gap-2">
          <h4 className="text-center md:text-left text-4xl font-bold text-warningColor">
            Reset Your Password
          </h4>
          <p className="text-md">
            Please enter your new password and confirm your password
          </p>
        </div>

        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default LoginPage;
