"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { z } from "zod";
import { bookingSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

type Inputs = z.infer<typeof bookingSchema>;

const steps = [
  {
    id: "01",
    name: "Get your quote",
    fields: [
      "postcode",
      "bathrooms",
      "rooms",
      "clean_type",
      "extra_tash",
      "hours",
      "cleaning_product",
      "frequency",
      "pets",
      "notes",
      "pet_type",
    ],
  },
  {
    id: "2",
    name: "Choose Time",
    fields: ["access_type", "house_access", "booking_date", "booking_time"],
  },
  {
    id: "03",
    name: "Your Details",
    fields: [
      "fullname",
      "phone_number",
      "email",
      "address",
      "city",
      "postcode",
    ],
  },
  { id: "04", name: "Payment info" },
];

export default function Form() {
  const router = useRouter();
  const [formData, setFormData] = useState<Partial<Inputs>>({});
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(bookingSchema),
  });

  // const stripe = useStripe();
  // const elements = useElements();

  const selectedRooms = watch("rooms");
  const selectedBathroom = watch("bathrooms");
  const selectedCleanType = watch("clean_type");
  const selectedHours = watch("hours");
  const selectedFrequency = watch("frequency");
  const selectedCleaningProduct = watch("cleaning_product");
  const selectedAccessType = watch("access_type");
  const selectedPets = watch("pets");
  // const selectedExtraTasks = watch("extra_task") || [];

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const parsedHours = parseInt(selectedHours);
    const passedRooms = parseInt(selectedRooms);
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        try {
          // console.log("process form called from next");
          const requestData = {
            ...watch(),
            // extra_task: selectedExtraTasks, // Convert array to string separated by comma
          };
          // await axios.post("/api/bookings", requestData);
          // toast.success("Booking submitted successfully.");
          toast("Proceed to payment.");
          console.log(requestData);
        } catch (error) {
          console.log(error);
          toast.error("An error occurred while submitting the booking.");
        }
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

  // const paymentElementOptions: PaymentElementProps = {
  //   layout: "tabs",
  // };

  return (
    <section className="relative w-full md:w-8/12 inset-0 flex flex-col justify-between">
      {/* steps */}
      {/* <nav
        aria-label="Progress"
        className="sticky top-20 md:bg-white drop-shadow-lg z-10 px-2 py-5 mb-6"
      >
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
      </nav> */}

      {/* Form */}
      <form className="" onSubmit={handleSubmit(processForm)}>
        {currentStep === 0 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold leading-7 text-gray-900">
              Customize your clean
            </h2>

            <div className="mt-10 flex flex-col gap-12">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="postal_code"
                  className="block text-md font-medium semibold leading-6 text-gray-900"
                >
                  Your Postcode
                </label>
                <Input
                  {...register("postcode")}
                  className="placeholder:text-slate-400 text-lg py-8 focus:border-blue-700"
                  placeholder="Enter your postcode"
                />

                {errors.postcode?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.postcode.message}
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
                  {["1", "2", "3", "4", "5", "6", "7", "8"].map((value) => (
                    <label
                      key={value}
                      className={`cursor-pointer border rounded-xl py-4 px-8 text-center flex-1 text-slate-700 ${
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
                  {["1", "2", "3", "4", "5", "6", "7", "8"].map((value) => (
                    <label
                      key={value}
                      className={`cursor-pointer border rounded-xl py-4 px-8 flex-1 text-slate-700 ${
                        selectedBathroom === value
                          ? "border-primaryColor shadow-xl"
                          : "border-gray-200"
                      }`}
                    >
                      <input
                        type="radio"
                        className="hidden"
                        value={value}
                        {...register("bathrooms")} // Register "bathroom" field
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
                <p className="text-slate-400 -mt-2 text-sm ">
                  Your cleaner will also clean your kitchen, lounge and common
                  areas
                </p>

                <div className="flex relative flex-wrap items-start justify-between gap-4">
                  {[
                    "Standard",
                    "Deep Clean",
                    "Moving In/Out",
                    "Post Construction",
                  ].map((value) => (
                    <label
                      key={value}
                      className={`cursor-pointer border rounded-xl py-4 px-6 text-center text-slate-700 w-full md:flex-1 ${
                        selectedCleanType === value
                          ? "border-primaryColor shadow-xl"
                          : "border-gray-200"
                      }`}
                    >
                      <input
                        type="radio"
                        className="hidden"
                        value={value}
                        {...register("clean_type")} // Register "cleanType" field
                      />
                      {value}
                    </label>
                  ))}
                </div>
                {errors.clean_type?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.clean_type.message}
                  </p>
                )}
              </div>

              {/* <div className="flex flex-wrap flex-col gap-4">
                <label
                  htmlFor="number_of_bedrooms"
                  className="block text-md font-medium semibold leading-6 text-gray-900"
                >
                  Extra tasks (optional)
                </label>

                <div className="flex relative flex-wrap items-start justify-start gap-4">
                  {[
                    "Ironing",
                    "Laundry",
                    "Inside Window",
                    "Inside Fridge",
                    "Inside Oven",
                  ].map((value) => (
                    <label
                      key={value}
                      className={`cursor-pointer border rounded-xl py-4 px-12 text-slate-700 ${
                        selectedExtraTasks.includes(value)
                          ? "border-primaryColor shadow-xl"
                          : "border-gray-200"
                      }`}
                    >
                      <input
                        type="checkbox" // Change input type to "checkbox"
                        className="hidden"
                        value={value}
                        {...register("extra_task")}
                      />
                      {value}
                    </label>
                  ))}
                </div>
                {errors.extra_task?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.extra_task.message}
                  </p>
                )}
              </div> */}

              <div className="flex flex-wrap flex-col gap-4">
                <label
                  htmlFor="number_of_bedrooms"
                  className="block text-md font-medium semibold leading-6 text-gray-900"
                >
                  We recommend selection{" "}
                  <span className="ffont-bold">3.0 hours</span>
                </label>
                <p className="text-slate-400 -mt-2 text-sm ">
                  Based on your Bedrooms, bathroom and extra tasks
                </p>

                <div className="flex relative flex-wrap items-start justify-start gap-4">
                  {[
                    "2.0",
                    "2.5",
                    "3.0",
                    "3.5",
                    "4.0",
                    "4.5",
                    "5.0",
                    "5.5",
                    "6.0",
                    "6.5",
                    "7.0",
                    "7.5",
                    "8.0",
                  ].map((value) => (
                    <label
                      key={value}
                      className={`cursor-pointer border rounded-xl p-4 px-8 flex-1 text-center text-slate-700 ${
                        selectedHours === value
                          ? "border-primaryColor shadow-xl"
                          : "border-gray-200"
                      }`}
                    >
                      <input
                        type="radio"
                        className="hidden"
                        value={value}
                        {...register("hours")} // Register "cleanType" field
                      />
                      {value}
                    </label>
                  ))}
                </div>
                {errors.hours?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.hours.message}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap flex-col gap-4">
                <label
                  htmlFor="number_of_bedrooms"
                  className="block text-md font-medium semibold leading-6 text-gray-900"
                >
                  Cleaning Product
                </label>
                <p className="text-slate-400 -mt-2 text-sm ">
                  Includes sprays and cloths. Your housekeeper cannot bring a
                  vacuum, mop or bucket
                </p>

                <div className="flex relative flex-wrap items-start justify-start gap-4">
                  {["Bring cleaning products (+7.00)", "I will provide"].map(
                    (value) => (
                      <label
                        key={value}
                        className={`cursor-pointer border rounded-xl p-4 px-4 w-full md:flex-1 text-center text-slate-700 ${
                          selectedCleaningProduct === value
                            ? "border-primaryColor shadow-xl"
                            : "border-gray-200"
                        }`}
                      >
                        <input
                          type="radio"
                          className="hidden"
                          value={value}
                          {...register("cleaning_product")} // Register "cleanType" field
                        />
                        {value}
                      </label>
                    )
                  )}
                </div>
                {errors.cleaning_product?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.cleaning_product.message}
                  </p>
                )}
              </div>

              <hr />

              <input type="text" {...register("amount")} value="500" id="" />

              <div className="flex flex-wrap flex-col gap-4">
                <label
                  htmlFor="number_of_bedrooms"
                  className="block text-md font-medium semibold leading-6 text-gray-900"
                >
                  Select Frequency
                </label>
                <p className="text-slate-400 -mt-2 text-sm ">
                  Book{" "}
                  <span>LinosTouch recurring plan and save 20% annually</span>
                </p>

                <div className="flex relative flex-wrap items-start justify-start gap-4">
                  {["Onetime", "Weekly", "Every 2 Weeks", "Every 5 Weeks"].map(
                    (value) => (
                      <label
                        key={value}
                        className={`cursor-pointer border rounded-xl p-4 px-8 text-center flex-1 text-slate-700 ${
                          selectedFrequency === value
                            ? "border-primaryColor shadow-xl"
                            : "border-gray-200"
                        }`}
                      >
                        <input
                          type="radio"
                          className="hidden"
                          value={value}
                          {...register("frequency")} // Register "cleanType" field
                        />
                        {value}
                      </label>
                    )
                  )}
                </div>
                {errors.frequency?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.frequency.message}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap flex-col gap-4">
                <label
                  htmlFor="number_of_bedrooms"
                  className="block text-md font-medium semibold leading-6 text-gray-900"
                >
                  Any Pets?
                </label>

                <div className="flex relative flex-wrap items-start justify-start gap-4">
                  {["Yes", "No"].map((value) => (
                    <label
                      key={value}
                      className={`cursor-pointer border rounded-xl p-4 px-12 flex-1 text-center text-slate-700 ${
                        selectedPets === value
                          ? "border-primaryColor shadow-xl"
                          : "border-gray-200"
                      }`}
                    >
                      <input
                        type="radio"
                        className="hidden"
                        value={value}
                        {...register("pets")} // Register "cleanType" field
                      />
                      {value}
                    </label>
                  ))}
                </div>

                {selectedPets === "Yes" && ( // Conditionally render based on selectedPets value
                  <Input
                    {...register("pet_type")}
                    className="placeholder:text-slate-400 text-lg py-6 focus:border-blue-700"
                    placeholder="What types of pets? Some of our cleaners have pet allergies."
                  />
                )}

                {errors.pets?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.pets.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="postal_code"
                  className="block text-md font-medium semibold leading-6 text-gray-900"
                >
                  Additional Notes
                </label>
                <Textarea
                  {...register("notes")}
                  className="placeholder:text-slate-400 text-lg py-6 focus:border-blue-700"
                  placeholder="I would like Sophie to be my cleaner. Please change my sheets (Fresh bedding is on the bed) and empty the dishwasher."
                />

                {errors.notes?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.notes.message}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="mt-10 flex flex-col gap-12">
              <div className="flex flex-wrap flex-col gap-4">
                <label
                  htmlFor="number_of_bedrooms"
                  className="block text-md font-medium semibold leading-6 text-gray-900"
                >
                  How do we get in?
                </label>

                <div className="flex relative flex-wrap items-start gap-3">
                  {["Someone is Home", "Doorman", "Hidden Key", "Others"].map(
                    (value) => (
                      <label
                        key={value}
                        className={`cursor-pointer border rounded-xl py-4  text-center w-44 md:flex-1 text-slate-700 ${
                          selectedAccessType === value
                            ? "border-primaryColor shadow-xl"
                            : "border-gray-200"
                        }`}
                      >
                        <input
                          type="radio"
                          className="hidden"
                          value={value}
                          {...register("access_type")} // Register "cleanType" field
                        />
                        {value}
                      </label>
                    )
                  )}
                </div>
                {errors.access_type?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.access_type.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="postal_code"
                  className="block text-md font-medium semibold leading-6 text-gray-900"
                >
                  House Access
                </label>
                <Textarea
                  {...register("house_access")}
                  className="placeholder:text-slate-400 text-lg py-6 focus:border-blue-700"
                  placeholder="e.g 1234"
                />

                {errors.house_access?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.house_access.message}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap flex-col gap-4">
                <label
                  htmlFor="number_of_bedrooms"
                  className="block text-md font-medium semibold leading-6 text-gray-900"
                >
                  When Would You Like Your Clean
                </label>
                <p className="text-slate-500 text-sm">
                  Cleaners work from 07:00 - 20:00, Monday - Sunday
                </p>

                <div className="flex relative flex-wrap items-start justify-start gap-4">
                  <input
                    type="date"
                    {...register("booking_date")}
                    className="w-full rounded-md border px-4 py-4"
                  />
                  {errors.booking_date?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.booking_date.message}
                    </p>
                  )}
                  <input
                    type="time"
                    {...register("booking_time")}
                    className="w-full rounded-md border px-4 py-4"
                  />
                  {errors.booking_time?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.booking_time.message}
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
            <div className="mt-10 flex flex-col gap-12">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="fullname"
                  className="block text-md font-medium semibold leading-6 text-gray-700"
                >
                  Full Name
                </label>
                <Input
                  {...register("fullname")}
                  className="placeholder:text-slate-400 text-lg py-8 focus:border-blue-700"
                />

                {errors.fullname?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.fullname.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="phone_number"
                  className="block text-md font-medium semibold leading-6 text-gray-700"
                >
                  Phone Number
                </label>
                <Input
                  {...register("phone_number")}
                  className="placeholder:text-slate-400 text-lg py-8 focus:border-blue-700"
                />

                {errors.phone_number?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.phone_number.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="block text-md font-medium semibold leading-6 text-gray-700"
                >
                  Email
                </label>
                <Input
                  type="email"
                  {...register("email")}
                  className="placeholder:text-slate-400 text-lg py-8 focus:border-blue-700"
                />

                {errors.email?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="address"
                  className="block text-md font-medium semibold leading-6 text-gray-700"
                >
                  Address
                </label>
                <Input
                  {...register("address")}
                  className="placeholder:text-slate-400 text-lg py-8 focus:border-blue-700"
                />

                {errors.address?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.address.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="city"
                  className="block text-md font-medium semibold leading-6 text-gray-700"
                >
                  City
                </label>
                <Input
                  {...register("city")}
                  className="placeholder:text-slate-400 text-lg py-8 focus:border-blue-700"
                />

                {errors.city?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.city.message}
                  </p>
                )}
              </div>
            </div>
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
          {/* <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          /> */}

          {/* <PaymentElement id="payment-element" /> */}

          <button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {currentStep === steps.length - 2 ? (
              "Proceed to Payment"
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

      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
}
