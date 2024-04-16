import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { bookingSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  const body = await request.json();

  console.log(body);

  const validate = bookingSchema.safeParse(body);

  body.amount = parseFloat(body.amount); // Fix here

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

  try {
    const newBooking = await db.booking.create({
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

    const existingUser = await getUserByEmail(email);

    if (!existingUser || !existingUser.email) {
      const hashedPassword = await bcrypt.hash(email, 10);

      const newUser = await db.user.create({
        data: {
          email: newBooking.email,
          name: newBooking.fullname,
          city: newBooking.city,
          address: newBooking.address,
          phone_number: newBooking.phone_number,
          password: hashedPassword,
        },
      });
      return NextResponse.json({
        booking: newBooking,
        account: newUser,
        message:
          "Booking successfull, you booking account have been createdm please check your mail and verify your account",
        status: 200,
      });
    }

    return NextResponse.json({
      newBooking,
      message: "Booking successfull, please check your mail booking details",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ message: error, status: 400 });
  }
}
export async function GET(request: NextRequest) {
  const bookings = await db.booking.findMany({});
  return NextResponse.json(bookings);
}
