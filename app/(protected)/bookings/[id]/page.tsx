import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";
import BreadCumNav from "@/components/BreadCumNav";
import BookingDetails from "../_components/BookingDetails";

interface Props {
  params: { id: string };
}

const BookingDetailsPage = async ({ params }: Props) => {
  const booking = await db.booking.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!booking) return notFound();

  return (
    <div>
      <BreadCumNav
        dashboard="dashboard"
        currentPage="bookings"
        currentSection={booking.clean_type}
      />
      <div>
        <BookingDetails {...booking} />
      </div>
    </div>
  );
};

export const revalidate = 100;

export default BookingDetailsPage;
