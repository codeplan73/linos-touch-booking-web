import React from "react";

const Counter = () => {
  return (
    <div className="flex flex-col gap-10 items-start justify-center">
      <h2 className="font-bold text-4xl">
        <span className="mr-2 border-4 border-t-white border-r-white border-l-white border-b-primaryColor">
          By the
        </span>
        numbers
      </h2>
      <div className="flex">
        <div className="flex flex-col gap-4 items-start justify-start">
          <p className="text-slate-500 text-sm">Years</p>
          <h4 className="text-7xl font-bold text-primaryColor">10+</h4>
        </div>
      </div>
    </div>
  );
};

export default Counter;
