import React from "react";

const SummaryValues = ({ text, value }: { text: string; value: string }) => {
  return (
    <div className="flex justify-between px-4 ">
      <p className="font-light text-sm text-slate-500">{text}</p>
      <p className="font-semibold text-sm ">{value}</p>
    </div>
  );
};

export default SummaryValues;
