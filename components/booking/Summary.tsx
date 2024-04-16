import React from "react";
import SummaryValues from "./SummaryValues";

const Summary = () => {
  return (
    <div className="sticky top-24  w-full md:w-4/12 flex flex-col gap-6 py-8 px-4 bg-slate-100 rounded-lg font-sans">
      <h2 className="font-bold text-2xl md:text-3xl">Booking Summary</h2>

      <div className="flex flex-col gap-4 py-4 bg-white rounded-lg shadow-sm">
        <SummaryValues text="Price" value={`125.99`} />
        <SummaryValues text="First Clean" value={`Evening, Sat 24, Mar`} />
        <SummaryValues text="How often" value={`Weekly`} />
        <SummaryValues text="Hours of Cleaning" value={`3.5 hours`} />
        <hr />
        <SummaryValues text="Subtotal" value={`110.01`} />
        <SummaryValues text="Tax" value={`+5.20`} />
        <hr />
        <SummaryValues text="Total" value={`610.00`} />
      </div>
    </div>
  );
};

export default Summary;
