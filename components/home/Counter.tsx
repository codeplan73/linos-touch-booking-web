import React from "react";
import NumberTicker from "@/components/ui/number-ticker";

const Counter = ({ title, count }: { title: string; count: number }) => {
  return (
    <div className="flex flex-col items-center justify-start gap-4">
      <p className="text-lg text-center text-primaryColor text-nowrap">
        {title}
      </p>
      <h4 className="text-4xl font-bold text-center md:text-7xl text-primaryColor">
        <NumberTicker className=" text-primaryColor" value={count} />
      </h4>
    </div>
  );
};

export default Counter;
