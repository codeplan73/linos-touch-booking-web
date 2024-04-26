import { UpdateStaffSchema } from "@/schemas";
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const validation = UpdateStaffSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const {
    name,
    phone_number,
    address,
    city,
    email,
    marital_status,
    nationality,
    dob,
    gender,
    postal_code,
    employee_id,
    employment_date,
    employment_type,
    working_days,
  } = validation.data;

  const user = await db.user.findUnique({ where: { id: params.id } });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const updatedUser = await db.user.update({
    where: { id: params.id },
    data: {
      name,
      phone_number,
      address,
      city,
      email,
      marital_status,
      nationality,
      dob,
      gender,
      postal_code,
      employee_id,
      employment_date,
      employment_type,
      working_days,
    },
  });

  return NextResponse.json(updatedUser, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await db.user.findUnique({
    where: { id: params.id },
  });

  if (!user)
    return NextResponse.json({ error: "Invalid user" }, { status: 404 });

  const assignTasks = await db.booking.updateMany({
    where: { assignedToUserId: user.id },
    data: {
      assignedToUserId: null,
      assigneeName: null,
      assigned_status: "UNASSIGNED",
      cleaning_status: "NEW",
    },
  });

  await db.user.delete({
    where: { id: user.id },
  });

  return NextResponse.json({
    message: "User deleted successfully",
    status: 200,
  });
}
