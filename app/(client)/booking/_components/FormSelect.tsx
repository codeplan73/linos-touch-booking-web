import { useState } from "react";

const FormSelect = () => {
  const [selectedRoom, setSelectedRoom] = useState("");
  const [selectedBathRoom, setSelectedBathRoom] = useState("");
  const [selectedCleanType, setSelectedCleanType] = useState("");

  const handleChange = (fieldName: string, value: any) => {
    console.log("Field Name:", fieldName + " " + value); // Log field name to check which field is being updated
    // console.log("Selected Value:", value); // Log selected value to verify state updates

    switch (fieldName) {
      case "rooms":
        setSelectedRoom(value);
        break;
      case "bathrooms":
        setSelectedBathRoom(value);
        break;
      case "clean_type":
        setSelectedCleanType(value);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-semibold leading-7 text-gray-900">
        Customize your clean
      </h2>

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
                className={`cursor-pointer border rounded-xl p-4 px-10 text-slate-700 ${
                  selectedRoom === value
                    ? "border-2 border-primaryColor shadow-xl drop-shadow-2xl"
                    : "bg-white"
                }`}
              >
                <input
                  type="radio"
                  className="hidden"
                  value={value}
                  {...register("rooms")}
                  checked={selectedRoom === value}
                  onChange={() => handleChange("rooms", value)}
                />
                {value}
              </label>
            ))}
          </div>
          {errors.rooms?.message && (
            <p className="mt-2 text-sm text-red-400">{errors.rooms.message}</p>
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
                  selectedBathRoom === value
                    ? "border-2 border-primaryColor shadow-xl drop-shadow-2xl"
                    : "bg-white"
                }`}
              >
                <input
                  type="radio"
                  className="hidden"
                  value={value}
                  {...register("bathrooms")}
                  checked={selectedBathRoom === value}
                  onChange={() => handleChange("bathrooms", value)}
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
            Your cleaner will also clean your kitchen, lounge and common areas
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
                  selectedCleanType === value
                    ? "border-2 border-primaryColor shadow-xl drop-shadow-2xl"
                    : "bg-white"
                }`}
              >
                <input
                  type="radio"
                  className="hidden"
                  value={value}
                  {...register("clean_type")}
                  checked={selectedCleanType === value}
                  onChange={() => handleChange("clean_type", value)}
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
      </div>
    </>
  );
};

export default FormSelect;
