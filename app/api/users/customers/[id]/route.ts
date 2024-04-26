import { UpdateStaffSchema } from "@/schemas";
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await db.user.findUnique({
    where: { id: params.id },
  });

  if (!user)
    return NextResponse.json({ error: "Invalid user" }, { status: 404 });

  await db.user.delete({
    where: { id: user.id },
  });

  return NextResponse.json({
    message: "Client deleted successfully",
    status: 200,
  });
}
