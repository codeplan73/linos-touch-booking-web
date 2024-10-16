import React from "react";
import Counter from "./Counter";

const CounterSection = () => {
  return (
    <section className="w-full px-6 py-12 md:px-32">
      <div className="container flex flex-col items-start justify-center gap-10">
        <h2 className="text-2xl font-bold md:text-4xl">
          <span className="pb-4 mr-2 border-4 border-t-white border-r-white border-l-white border-b-primaryColor">
            By the
          </span>
          numbers
        </h2>
        <div className="grid justify-between w-full grid-cols-1 gap-8 md:grid-cols-4 ">
          <Counter title="Year" count={10} />
          <Counter title="Employees" count={160} />
          <Counter title="Award" count={20} />
          <Counter title="Completed Projects" count={200} />
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
