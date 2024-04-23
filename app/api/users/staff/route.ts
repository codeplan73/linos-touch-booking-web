import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // const staff = await db.user.findMany({ where: { role: "USER" || "ADMIN" } });
  const staff = await db.user.findMany({
    where: {
      OR: [{ role: "USER" }, { role: "ADMIN" }],
    },
  });
  return NextResponse.json(staff);
}
