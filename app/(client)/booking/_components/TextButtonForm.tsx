"use client";

import { useState } from "react";

const RadioButtonTiles = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedHours, setSelectedHours] = useState("");
  const [selectedRooms, setSelectedRooms] = useState("");
  const [selectedCleanType, setSelectedCleanType] = useState("");

  const handleChange = (fieldName: string, value: string) => {
    switch (fieldName) {
      case "gender":
        setSelectedGender(value);
        break;
      case "hours":
        setSelectedHours(value);
        break;
      case "rooms":
        setSelectedRooms(value);
        break;
      case "cleanType":
        setSelectedCleanType(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Selected Gender:", selectedGender);
    console.log("Selected Hours of Work:", selectedHours);
    console.log("Selected Number of Rooms:", selectedRooms);
    console.log("Selected Clean Type:", selectedCleanType);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap gap-4">
        {/* Gender */}
        <label
          className={`cursor-pointer border rounded p-4 ${
            selectedGender === "Male" ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          <input
            type="radio"
            className="hidden"
            name="gender-group"
            value="Male"
            checked={selectedGender === "Male"}
            onChange={() => handleChange("gender", "Male")}
          />
          Male
        </label>

        <label
          className={`cursor-pointer border rounded p-4 ${
            selectedGender === "Female" ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          <input
            type="radio"
            className="hidden"
            name="gender-group"
            value="Female"
            checked={selectedGender === "Female"}
            onChange={() => handleChange("gender", "Female")}
          />
          Female
        </label>

        {/* Hours of Work */}
        <label
          className={`cursor-pointer border rounded p-4 ${
            selectedHours === "1h" ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          <input
            type="radio"
            className="hidden"
            name="hours-group"
            value="1h"
            checked={selectedHours === "1h"}
            onChange={() => handleChange("hours", "1h")}
          />
          1h
        </label>
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default RadioButtonTiles;
