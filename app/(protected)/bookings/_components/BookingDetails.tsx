import React from "react";
import { Booking } from "@prisma/client";
import AssingTask from "./AssingTask";

const BookingDetails = (booking: Booking) => {
  const getCleaningStatusColor = () => {
    if (booking.cleaning_status === "NEW") {
      return "bg-yellow-200 text-yellow-900";
    } else if (booking.cleaning_status === "ONGOING") {
      return "bg-purple-200 text-purple-900";
    } else if (booking.cleaning_status === "COMPLETED") {
      return "bg-green-200 text-green-900";
    } else {
      return "";
    }
  };

  return (
    <div className="flex flex-col gap-8 bg-white rounded-lg p-8">
      <div className="flex flex-col gap-8">
        <div className="w-full flex justify-between items-start">
          <div className="flex space-x-2 items-center">
            <span>Cleaning Status:</span>
            <span
              className={`text-xs rounded-lg px-2 py-1 ml-2 ${getCleaningStatusColor()}`}
            >
              {booking.cleaning_status}
            </span>
          </div>

          <div className="flex flex-col space-y-2 space-x-2 items-center">
            <div>
              <span>Assign Status:</span>
              <span
                className={`text-xs rounded-lg px-2 py-1 ml-2 ${
                  booking.assigned_status === "ASSIGNED"
                    ? "bg-green-200 text-green-900"
                    : "bg-yellow-200 text-yellow-900"
                }`}
              >
                {booking.assigned_status}
              </span>
            </div>
            {booking.assigned_status === "ASSIGNED" && (
              <span className="">Assignee: {booking.assigneeName}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <p className="flex flex-col gap-2">
            <span className="text-sm text-slate-500">Client Name</span>
            <span className="text-lg">{booking.fullname}</span>
          </p>
          <p className="flex flex-col gap-2">
            <span className="text-sm text-slate-500">Phone Number</span>
            <span className="text-lg">{booking.phone_number}</span>
          </p>
          <p className="flex flex-col gap-2">
            <span className="text-sm text-slate-500">Address</span>
            <span className="text-lg">{booking.address}</span>
          </p>
          <p className="flex flex-col gap-2">
            <span className="text-sm text-slate-500">Postal Code</span>
            <span className="text-lg">{booking.postcode}</span>
          </p>
          <p className="flex flex-col gap-2">
            <span className="text-sm text-slate-500">Date</span>
            <span className="text-lg">{booking.booking_date}</span>
          </p>
          <p className="flex flex-col gap-2">
            <span className="text-sm text-slate-500">Time</span>
            <span className="text-lg">{booking.booking_time}</span>
          </p>
        </div>
      </div>

      <div className="flex- flex-col space-">
        <h4 className="text-2xl font-semibold mb-1">Booking Details</h4>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
          <p className="flex flex-col gap-2">
            <span className="text-sm text-slate-500">Cleaning Type</span>
            <span className="text-lg">{booking.clean_type}</span>
          </p>
          <p className="flex flex-col gap-2">
            <span className="text-sm text-slate-500">Numbers of Rooms</span>
            <span className="text-lg">{booking.rooms}</span>
          </p>
          <p className="flex flex-col gap-2">
            <span className="text-sm text-slate-500">Number of Bathroom</span>
            <span className="text-lg">{booking.bathrooms}</span>
          </p>
          <p className="flex flex-col gap-2">
            <span className="text-sm text-slate-500">Extra Task</span>
            <span className="text-lg">{booking.clean_type}</span>
          </p>
          <p className="flex flex-col gap-2">
            <span className="text-sm text-slate-500">Hours</span>
            <span className="text-lg">{booking.hours}</span>
          </p>
          <p className="flex flex-col gap-2">
            <span className="text-sm text-slate-500">Cleanning Product</span>
            <span className="text-lg">{booking.cleaning_product}</span>
          </p>
          <p className="flex flex-col gap-2">
            <span className="text-sm text-slate-500">Frequency</span>
            <span className="text-lg">{booking.frequency}</span>
          </p>
          <p className="flex flex-col gap-2">
            <span className="text-sm text-slate-500">Amount</span>
            <span className="text-lg">
              {new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP",
              }).format(parseFloat(String(booking.amount)))}
            </span>
          </p>
        </div>
      </div>

      <div className="flex- flex-col space-">
        <h4 className="text-2xl font-semibold mb-1">Arrival</h4>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
          <p className="flex flex-col gap-2">
            <span className="text-sm text-slate-500">How do we get in</span>
            <span className="text-lg">{booking.house_access}</span>
          </p>
          <p className="flex flex-col gap-2">
            <span className="text-sm text-slate-500">Access Type</span>
            <span className="text-lg">{booking.access_type}</span>
          </p>
          <p className="flex flex-col gap-2">
            <span className="text-sm text-slate-500">Any Pet</span>
            <span className="text-lg">{booking.pets}</span>
          </p>
          <p className="flex flex-col gap-2">
            <span className="text-sm text-slate-500">Pet Type</span>
            <span className="text-lg">{booking.pet_type}</span>
          </p>
        </div>
        <p className="flex flex-col mt-6">
          <span className="text-sm text-slate-500">Additional Notes</span>
          <span className="text-lg">{booking.notes}</span>
        </p>
      </div>

      {booking.assigned_status === "UNASSIGNED" ? (
        <div>
          <AssingTask id={booking.id} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export const revalidate = 10;

export default BookingDetails;
