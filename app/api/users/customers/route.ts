import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const customers = await db.user.findMany({ where: { role: "CLIENT" } });
  return NextResponse.json(customers);
}
