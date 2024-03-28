import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { bookingSchema } from "@/lib/schema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);

  const {
    postcode,
    rooms,
    bathrooms,
    clean_type,
    extra_task,
    hours,
    cleaning_product,
    frequency,
    access_type,
    house_access,
    pets,
    notes,
    pets_type,
    booking_date,
    booking_time,
    fullname,
    phone_number,
    email,
    address,
    city,
    amount,
  } = body;

  const validate = bookingSchema.safeParse(body);

  if (!validate.success)
    return NextResponse.json(validate.error.format(), { status: 400 });

  // const newBooking = await prisma.booking.create({
  //   data: {
  //     postcode
  //   },
  // });

  const newBooking = await prisma.booking.create({
    data: {
      postcode,
      rooms,
      bathrooms,
      clean_type,
      extra_task,
      hours,
      cleaning_product,
      frequency,
      access_type,
      house_access,
      pets,
      notes,
      pets_type,
      booking_date,
      booking_time,
      fullname,
      phone_number,
      email,
      address,
      city,
      amount,
    },
  });
}

export async function GET(response: NextResponse) {
  const bookings = await prisma.booking.findMany({});
  return NextResponse.json(bookings);
}
