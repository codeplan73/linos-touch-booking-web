import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { stat } from "fs";
// import { assignedToUserIdSchema } from "@/schemas";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  // const validation = assignedToUserIdSchema.safeParse(body);

  // if (!validation.success)
  //   return NextResponse.json(validation.error.format(), { status: 400 });

  const { userId } = body;

  const user = await db.user.findUnique({
    where: { id: userId },
  });
  if (!user)
    return NextResponse.json({ error: "Invalid user." }, { status: 404 });

  const booking = await db.booking.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!booking)
    return NextResponse.json({ error: "Invalid Booking" }, { status: 404 });

  const updatedBooking = await db.booking.update({
    where: { id: booking.id },
    data: {
      assignedToUserId: userId,
      assigned_status: "ASSIGNED",
      assigneeName: user.name,
    },
  });

  const assignedUser = await db.user.update({
    where: { id: user.id },
    data: { status: "ASSIGNED" },
  });

  return NextResponse.json({ updatedBooking, assignedUser }, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const booking = await db.booking.findUnique({
    where: { id: parseInt(params.id) },
  });

  console.log(booking);

  if (!booking)
    return NextResponse.json({ error: "Invalid booking" }, { status: 404 });

  await db.booking.delete({
    where: { id: booking.id },
  });

  return NextResponse.json({
    message: "Booking deleted successfully",
    status: 200,
  });
}
