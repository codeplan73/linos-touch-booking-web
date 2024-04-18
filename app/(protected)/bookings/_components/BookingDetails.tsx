import React from "react";
import { Booking } from "@prisma/client";

const BookingDetails = (booking: Booking) => {
  return (
    <div>
      <h4>
        Booking: {booking.clean_type} - {booking.hours} hours
      </h4>
    </div>
  );
};

export default BookingDetails;
