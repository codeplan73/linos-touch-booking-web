import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { assignedToUserIdSchema } from "@/schemas";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  // const validation = assignedToUserIdSchema.safeParse(body);

  // if (!validation.success)
  //   return NextResponse.json(validation.error.format(), { status: 400 });

  const { userId } = body;

  if (userId) {
    const user = await db.user.findUnique({
      where: { id: userId },
    });
    if (!user)
      return NextResponse.json({ error: "Invalid user." }, { status: 404 });
  }

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
    },
  });

  return NextResponse.json(updatedBooking, { status: 200 });
}
