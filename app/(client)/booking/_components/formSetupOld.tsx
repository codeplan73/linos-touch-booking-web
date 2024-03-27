"use client";

import React, { ReactEventHandler, useState } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { z } from "zod";
import { FormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";

type Inputs = z.infer<typeof FormSchema>;

const steps = [
  {
    id: "01",
    name: "Get your quote",
    fields: [
      "firstName",
      "lastName",
      "email",
      "rooms",
      "post_code",
      "bathrooms",
      "standard",
      "deep_clean",
      "moving",
      "post_construction",
    ],
  },
  {
    id: "2",
    name: "Choose Time",
    fields: ["country", "state", "city", "street", "zip"],
  },
  { id: "03", name: "Your Details" },
  { id: "04", name: "Payment info" },
];

interface FormDetails {
  rooms: string;
  bathrooms: string;
  clean_type: string;
}

export default function Form() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  // const [selectedRoom, setSelectedRoom] = useState("");
  // const [selectedBathRoom, setSelectedBathRoom] = useState("");
  // const [selectedCleanType, setSelectedCleanType] = useState("");
  const [selectedHours, setSelectedHours] = useState("");
  const [selectedRooms, setSelectedRooms] = useState("");

  const [formDetails, setFormDetails] = useState<FormDetails>({
    rooms: "",
    bathrooms: "",
    clean_type: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(formDetails);

  // const handleChange = (value: any) => {
  //   setSelectedRoom(value); // Update selectedRoom state with the selected value
  //   setSelectedBathRoom(value); // Update selectedRoom state with the selected value
  //   setSelectedCleanType(value); // Update selectedRoom state with the selected value
  // };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormSchema),
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // reset();
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <section className="w-full md:w-8/12 inset-0 flex flex-col justify-between">
      {/* steps */}
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-warningColor py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-2xl font-extrabold text-warningColor transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-md font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-warningColor py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-2xl font-extrabold text-warningColor">
                    {step.id}
                  </span>
                  <span className="text-md font-medium text-warningColor">
                    {step.name}
                  </span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-2xl font-extrabold text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-md font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Form */}
      <form className="mt-12 py-12" onSubmit={handleSubmit(processForm)}>
        {currentStep === 0 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold leading-7 text-gray-900">
              Customize your clean
            </h2>

            {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12"> */}
            <div className="mt-10 flex flex-col gap-8">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="postal_code"
                  className="block text-md font-medium semibold leading-6 text-gray-900"
                >
                  Your Postcode
                </label>
                <Input
                  {...register("post_code")}
                  className="placeholder:text-slate-400 text-slate"
                  placeholder="Enter your postcode"
                />

                {errors.post_code?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.post_code.message}
                  </p>
                )}
              </div>

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
                      className={`cursor-pointer border rounded-xl p-4 px-10 text-slate-700`}
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
                </div>
                {errors.rooms?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.rooms.message}
                  </p>
                )}
              </div>
              <div className="flex flex-wrap flex-col gap-4">
                <label
                  htmlFor="number_of_bedrooms"
                  className="block text-md font-medium semibold leading-6 text-gray-900"
                >
                  Number of Bathrooms
                </label>

                <div className="flex flex-wrap items-start justify-between gap-4">
                  {["1", "2", "3", "4", "5"].map((value) => (
                    <label
                      key={value}
                      className={`cursor-pointer border rounded-xl p-4 px-12 text-slate-700 ${
                        formDetails.bathrooms === `${value}`
                          ? "border-2 border-primaryColor shadow-xl drop-shadow-2xl"
                          : "bg-white"
                      }`}
                    >
                      <input
                        type="radio"
                        className="hidden"
                        value={value}
                        {...register("bathrooms")}
                      />
                      {value}
                    </label>
                  ))}
                </div>
                {errors.bathrooms?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.bathrooms.message}
                  </p>
                )}
              </div>
              <div className="flex flex-wrap flex-col gap-4">
                <label
                  htmlFor="number_of_bedrooms"
                  className="block text-md font-medium semibold leading-6 text-gray-900"
                >
                  Clean Type
                </label>
                <p className="text-slate-600 mb-4">
                  Your cleaner will also clean your kitchen, lounge and common
                  areas
                </p>

                <div className="flex flex-wrap items-start justify-between gap-2">
                  {[
                    "Standard",
                    "Deep Clean",
                    "Moving In/Out",
                    "Post Construction",
                  ].map((value) => (
                    <label
                      key={value}
                      className={`cursor-pointer border rounded-xl px-10 py-4 justify-between text-slate-700 ${
                        formDetails.clean_type === `${value}`
                          ? "border-2 border-primaryColor shadow-xl drop-shadow-2xl"
                          : "bg-white"
                      }`}
                    >
                      <input
                        type="radio"
                        className="hidden"
                        value={value}
                        {...register("clean_type")}
                      />
                      {value}
                    </label>
                  ))}
                </div>
                {errors.bathrooms?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.bathrooms.message}
                  </p>
                )}
              </div>

              {/* <div className="sm:col-span-3">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName")}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.firstName?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName")}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.lastName?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div> */}
            </div>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Address
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    {...register("country")}
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  {errors.country?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.country.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="street"
                    {...register("street")}
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.street?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.street.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="city"
                    {...register("city")}
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.city?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.city.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="state"
                    {...register("state")}
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.state?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.state.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="zip"
                    {...register("zip")}
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.zip?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.zip.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Confim Data
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Review Data before submitting
            </p>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Complete
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Thank you for your submission.
            </p>
          </motion.div>
        )}
      </form>

      {/* Navigation */}
      <div className="mt-8 pt-5">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {currentStep === steps.length - 1 ? (
              "Submit Data"
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
