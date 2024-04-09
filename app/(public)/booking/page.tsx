"use client";

import { useState, useEffect } from "react";
import PageBanner from "@/components/PageBanner";
import Form from "./_components/Form";
import Summary from "./_components/Summary";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const BookingPage = () => {
  // const [clientSecret, setClientSecret] = useState("");
  // const stripePromise = loadStripe(
  //   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  // );

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("/api/webhook", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);

  // const appearance = {
  //   theme: "stripe",
  // };
  // const options = {
  //   clientSecret,
  //   appearance,
  // };

  return (
    <section>
      <PageBanner page="Booking Aplication" link="booking" />
      <div className="relative container flex flex-col md:flex-row items-start justify-start gap-10 py-8 md:px-24">
        {/* <Elements stripe={stripePromise}> */}
        <Form />
        {/* </Elements> */}
        {/* <Summary /> */}
      </div>
    </section>
  );
};

export default BookingPage;
