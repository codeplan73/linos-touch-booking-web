"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BiSearchAlt } from "react-icons/bi";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const HeroForm = () => {
  const router = useRouter();

  const fetchAddress = async (postcode: string) => {
    const response = await fetch(
      `https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(
        postcode
      )}&proximity=-73.990593%2C40.740121&access_token=pk.eyJ1IjoiY29kZXBsYW43MyIsImEiOiJjbTFxajhmNmIwMHB4Mm1zM3NuMjc1eXV1In0.oACaSvta7W9HHwFYYCk8hg`
    );
    const data = await response.json();

    // console.log("Data: ", data);
    return data.features[0].properties;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const postcode = formData.get("postcode") as string;

    try {
      const addressData = await fetchAddress(postcode);

      if (addressData && addressData.name) {
        const postal_code = addressData.name;
        const address = addressData.full_address;
        const lat_long = `${addressData.coordinates.latitude}, ${addressData.coordinates.longitude}`;

        console.log(`PostCode: ${addressData.name}`);
        console.log("Address: ", addressData.full_address);
        console.log(
          `Log & Lat: ${addressData.coordinates.latitude}, ${addressData.coordinates.longitude}`
        );
        // Proceed with successful postcode entry
        router.push(
          `/booking?postcode=${postcode}&address=${address}&lat_long=${lat_long}&postal_code=${postal_code}`
        );
      } else {
        // Handle case when no address is found or invalid postcode
        Swal.fire({
          title: "Invalid Postcode",
          text: "The postcode you entered is not valid. Please check and try again.",
          icon: "warning",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.log("Error fetching address:", error);
      Swal.fire({
        title: "Error",
        text: "There was a problem processing your request. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      className="relative flex items-center justify-start w-full md:w-6/12"
    >
      <BiSearchAlt className="absolute text-2xl font-bold text-slate-400 left-4" />
      <input
        type="text"
        name="postcode"
        className="w-full px-10 py-4 text-xl border outline-none text-slate-700 md:px-12 md:py-6 border-secondaryColor rounded-2xl bg-slate-200 opacity-60 md:text-2xl"
        placeholder="Enter your post code"
        id=""
      />
      <button
        type="submit"
        className="absolute px-2 py-2 font-sans font-semibold border-none open-sans-bold hover:bg-secondaryColor hover:text-white bg-warningColor md:px-6 text-md md:text-xl md:py-4 rounded-xl right-4 text-secondaryColor"
      >
        Find your cleaner
      </button>
    </form>
  );
};

export default HeroForm;
