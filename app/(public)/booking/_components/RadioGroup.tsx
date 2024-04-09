// RadioGroup.tsx
import React from "react";

interface RadioGroupProps {
  options: string[];
  selectedValue: string;
  register: any;
  fieldName: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  selectedValue,
  register,
  fieldName,
}) => {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      {options.map((value) => (
        <label
          key={value}
          className={`ccursor-pointer border rounded-xl py-4 px-8 text-center flex-1 text-slate-700 ${
            selectedValue === value
              ? "border-primaryColor shadow-xl"
              : "border-gray-200"
          }`}
        >
          <input
            type="radio"
            className="hidden"
            value={value}
            {...register(fieldName)}
          />
          {value}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
