import { NextRequest } from "next/server";
import { signOut } from "@/auth";

export async function POST(req: NextRequest) {
  await signOut();
}

// export default async function logout(req, res) {
//   await signOut({ req, res, callbackUrl: `${req.protocol}://${req.headers.host}` });
// }
