import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const staff = await db.user.findMany({
    where: {
      OR: [{ role: "USER" }, { role: "ADMIN" }],
    },
    orderBy: {
      employee_id: "desc",
    },
    take: 1,
  });

  let new_employee_id = "0001";
  if (staff.length > 0) {
    const last_employee_id =
      staff[0].employee_id !== null ? parseInt(staff[0].employee_id, 10) : 0;
    new_employee_id = String(last_employee_id + 1).padStart(4, "0");
  }

  return NextResponse.json({ staff, new_employee_id });
}
