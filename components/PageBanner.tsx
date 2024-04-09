import Link from "next/link";
import React from "react";

const PageBanner = ({ page, link }: { page: string; link: string }) => {
  return (
    <div className="w-full h-[40vh] md:h-[50vh] flex flex-col items-center justify-center bg-amber-50 gap-4">
      <h4 className="text-3xl md:text-5xl font-bold z-20  text-slate-950">
        {page}
      </h4>
      <div className="flex items-start gap-2">
        <Link href="/" className="text-slate-400">
          Home
        </Link>{" "}
        |{" "}
        <Link href={link} className="text-slate-900">
          {page}
        </Link>
      </div>
    </div>
  );
};

export default PageBanner;
