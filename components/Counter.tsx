"use client";

import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

interface CounterProps {
  title: string;
  count: number; // Changed the type to number
}

const Counter: React.FC<CounterProps> = ({ title, count }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-start justify-start gap-2">
        <p className="text-slate-500 text-md">{title}</p>
        <h4 className="text-7xl font- text-warningColor">
          <CountUp start={0} end={count} delay={5} />
        </h4>
      </div>
    </div>
  );
};

export default Counter;
