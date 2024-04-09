import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { bookingSchema } from "@/schemas";

export async function POST(request: NextRequest) {
  const body = await request.json();

  console.log(body);

  const validate = bookingSchema.safeParse(body);

  const {
    postcode,
    rooms,
    bathrooms,
    clean_type,
    hours,
    cleaning_product,
    frequency,
    access_type,
    house_access,
    pets,
    notes,
    pet_type,
    booking_date,
    booking_time,
    fullname,
    phone_number,
    email,
    address,
    city,
    amount,
  } = body;

  if (!validate.success)
    return NextResponse.json(validate.error.format(), { status: 400 });

  const newBooking = await prisma.booking.create({
    data: {
      postcode,
      rooms,
      bathrooms,
      clean_type,
      hours,
      cleaning_product,
      frequency,
      access_type,
      house_access,
      pets,
      notes,
      pet_type,
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

  return NextResponse.json(newBooking, { status: 200 });
}

export async function GET(response: NextResponse) {
  const bookings = await prisma.booking.findMany({});
  return NextResponse.json(bookings);
}
