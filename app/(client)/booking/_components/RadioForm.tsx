"use client";

import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  rooms: string;
  cleanType: string;
  bathroom: string;
}

const YourComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, // Destructure watch from useForm
  } = useForm<FormData>();

  const selectedRooms = watch("rooms"); // Watch the "rooms" field to get the selected value
  const selectedBathroom = watch("bathroom"); // Watch the "bathroom" field to get the selected value
  const selectedCleanType = watch("cleanType"); // Watch the "cleanType" field to get the selected value

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap flex-col gap-4">
        <label
          htmlFor="number_of_bedrooms"
          className="block text-md font-medium semibold leading-6 text-gray-900"
        >
          Number of Bedrooms
        </label>

        <div className="flex flex-wrap items-start justify-between gap-4">
          {["Studio", "1", "2", "3", "4", "5"].map((value) => (
            <label
              key={value}
              className={`cursor-pointer border rounded-xl p-4 px-10 text-slate-700 ${
                selectedRooms === value
                  ? "border-primaryColor shadow-xl"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                className="hidden"
                value={value}
                {...register("rooms")} // Register "rooms" field
              />
              {value}
            </label>
          ))}
          {["1", "2", "3", "4", "5"].map((value) => (
            <label
              key={value}
              className={`cursor-pointer border rounded-xl p-4 px-10 text-slate-700 ${
                selectedBathroom === value
                  ? "border-primaryColor shadow-xl"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                className="hidden"
                value={value}
                {...register("bathroom")} // Register "bathroom" field
              />
              {value}
            </label>
          ))}
          {["Standard", "Deep Clean", "Moving In/Out", "Post Construction"].map(
            (value) => (
              <label
                key={value}
                className={`cursor-pointer border rounded-xl p-4 px-10 text-slate-700 ${
                  selectedCleanType === value
                    ? "border-primaryColor shadow-xl"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  className="hidden"
                  value={value}
                  {...register("cleanType")} // Register "cleanType" field
                />
                {value}
              </label>
            )
          )}
        </div>
        {errors.rooms && (
          <p className="mt-2 text-sm text-red-400">{errors.rooms.message}</p>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default YourComponent;
