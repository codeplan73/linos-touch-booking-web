import Link from "next/link";
import React from "react";

const PageBanner = ({
  page,
  link,
  bannerImg,
}: {
  page: string;
  link: string;
  bannerImg: string;
}) => {
  return (
    <div
      className="relative w-full h-[40vh] md:h-[50vh] flex flex-col items-center justify-center bg-amber-50 gap-4  bg-no-repeat bg-bottom md:bg-bottom bg-cover"
      style={{ backgroundImage: `url('${bannerImg}` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h4 className="z-20 text-3xl font-bold md:text-5xl text-slate-50">
        {page}
      </h4>
      <div className="flex items-start gap-2">
        <Link href="/" className="text-white">
          Home
        </Link>{" "}
        |{" "}
        <Link href={link} className="text-white">
          {page}
        </Link>
      </div>
    </div>
  );
};

export default PageBanner;
