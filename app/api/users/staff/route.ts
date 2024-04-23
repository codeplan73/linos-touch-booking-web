import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/user";
import { RegisterStaffSchema } from "@/schemas";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";

export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json();
  const validatedFields = RegisterStaffSchema.safeParse(body);

  console.log(validatedFields);

  if (!validatedFields.success)
    return NextResponse.json(validatedFields.error.format(), { status: 400 });

  const { name, email, password, phone_number, city, address } =
    validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser)
    return NextResponse.json(
      { message: "Email already in use!" },
      { status: 400 }
    );

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.user.create({
      data: {
        name,
        email,
        phone_number,
        city,
        address,
        password: hashedPassword,
        role: "USER",
      },
    });

    // const verificationToken = await generateVerificationToken(email);
    // await sendVerificationEmail(
    //   verificationToken.email,
    //   verificationToken.token
    // );

    return NextResponse.json({
      message: "Staff account created successfully",
      user: newUser,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}

/**
 *
 * @param request GET
 * @returns all users both admin and staff
 */
export async function GET(request: NextRequest) {
  const staff = await db.user.findMany({
    where: {
      OR: [{ role: "USER" }, { role: "ADMIN" }],
    },
  });
  return NextResponse.json(staff);
}
