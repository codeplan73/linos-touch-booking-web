import React from "react";
import Image from "next/image";
import LoginForm from "./LoginForm";

const LoginPage = () => {
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
      <div className="w-full md:w-7/12 z-10 md:h-screen bg-white flex flex-col gap-10 items-start justify-center px-10 pl-20 py-40">
        <Image
          src={"/images/logo.png"}
          alt="auth image"
          width={1000}
          height={1000}
          className="w-20 h-20"
        />

        <div className="flex flex-col gap-2">
          <h4 className="text-center text-4xl font-bold text-warningColor">
            Welcome
          </h4>
          <p className="text-md">Please login here</p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
