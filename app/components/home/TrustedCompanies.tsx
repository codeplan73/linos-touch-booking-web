import React from "react";
import Image from "next/image";

const TrustedCompanies = () => {
  return (
    <div className="w-full md:max-w-7xl mx-auto font-sans flex flex-col gap-10">
      <h4 className="text-2xl text-center text-gray3">
        Trusted by over <span className="text-blue-500">90k+</span> companies
        worldwide
      </h4>
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto gap-12">
        <Image
          src="/images/trustedCompanies/1.png"
          alt="company"
          height={1000}
          width={1000}
          className=" rounded-lg overflfow:hidden h-16 w-auto"
        />
        <Image
          src="/images/trustedCompanies/2.png"
          alt="company"
          height={100}
          width={100}
          className=" rounded-lg overflfow:hidden h-16 w-auto"
        />
        <Image
          src="/images/trustedCompanies/3.png"
          alt="company"
          height={100}
          width={100}
          className=" rounded-lg overflfow:hidden h-16 w-auto"
        />
        <Image
          src="/images/trustedCompanies/4.png"
          alt="company"
          height={100}
          width={100}
          className=" rounded-lg overflfow:hidden h-16 w-auto"
        />
        <Image
          src="/images/trustedCompanies/5.png"
          alt="company"
          height={100}
          width={100}
          className=" rounded-lg overflfow:hidden h-16 w-auto"
        />
      </div>
    </div>
  );
};

export default TrustedCompanies;
