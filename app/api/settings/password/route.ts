import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/user";
import { RegisterStaffSchema } from "@/schemas";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";

export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json();

  console.log(body);

  // const validatedFields = RegisterStaffSchema.safeParse(body);
  // console.log(validatedFields);

  // if (!validatedFields.success)
  //   return NextResponse.json(validatedFields.error.format(), { status: 400 });
}
