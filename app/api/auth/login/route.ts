// "use server";

// import { NextRequest, NextResponse } from "next/server";
// import * as z from "zod";
// import { AuthError } from "next-auth";
// // import { db } from "@/lib/db";
// import { signIn } from "@/auth";
// import { LoginSchema } from "@/schemas";
// import { getUserByEmail } from "@/data/user";
// import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
// import { generateVerificationToken } from "@/lib/tokens";
// import { sendVerificationEmail } from "@/lib/mail";

// export async function POST(
//   request: NextRequest,
//   response: NextResponse,
//   callbackUrl?: string | null
// ) {
//   const body = await request.json();
//   const validatedFields = LoginSchema.safeParse(body);

//   console.log(body);

//   if (!validatedFields.success)
//     return NextResponse.json(validatedFields.error.format(), {
//       status: 400,
//     });

//   const { email, password } = validatedFields.data;

//   const existingUser = await getUserByEmail(email);

//   if (!existingUser || !existingUser.email || !existingUser.password) {
//     return { error: "Email does not exist!" };
//   }

//   if (!existingUser.emailVerified) {
//     const verificationToken = await generateVerificationToken(
//       existingUser.email
//     );

//     await sendVerificationEmail(
//       verificationToken.email,
//       verificationToken.token
//     );

//     return { success: "Confirmation email sent!" };
//   }

//   try {
//     await signIn("credentials", {
//       email,
//       password,
//       redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
//     });
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case "CredentialsSignin":
//           return { error: "Invalid credentials!" };
//         default:
//           return { error: "Something went wrong!" };
//       }
//     }

//     throw error;
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export async function POST(
  request: NextRequest,
  response: NextResponse,
  callbackUrl?: string | null
) {
  const body = await request.json();
  const validatedFields = LoginSchema.safeParse(body);

  if (!validatedFields.success)
    return NextResponse.json(validatedFields.error.format(), {
      status: 400,
    });

  const { email, password } = validatedFields.data;

  console.log("first call");
  const existingUser = await getUserByEmail(email);
  // const existingUser = await db.user.findUnique({ where: { email } });

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return NextResponse.json(
      { error: "Email does not exist!" },
      { status: 400 }
    );
  }

  console.log("2nd call");
  // if (!existingUser.emailVerified) {
  //   const verificationToken = await generateVerificationToken(
  //     existingUser.email
  //   );
  //   console.log("3rd call");
  //   await sendVerificationEmail(
  //     verificationToken.email,
  //     verificationToken.token
  //   );
  //   return NextResponse.json({ success: "Confirmation email sent!" });
  // }

  console.log("4th call");

  try {
    console.log("signin call");
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });

    console.log("last call");

    // Return a success response
    return NextResponse.json({ success: "Logged in successfully!" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return NextResponse.json(
            { error: "Invalid credentials!" },
            { status: 400 }
          );
        default:
          return NextResponse.json(
            { error: "Something went wrong!" },
            { status: 500 }
          );
      }
    }

    throw error;
  }
}
