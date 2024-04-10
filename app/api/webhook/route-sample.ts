// import Stripe from "stripe";
// import { NextResponse, NextRequest } from "next/server";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// export async function POST(req: NextRequest) {
//   const payload = await req.text();
//   const res = JSON.parse(payload);

//   const sig = req.headers.get("Stripe-signature");

//   const dataTime = new Date(res.created * 1000).toLocaleDateString("en-UK");
//   const timeString = new Date(res.created * 1000).toLocaleDateString("en-UK");

//   try {
//     console.log("Payload ", payload);
//     let event = stripe.webhooks.constructEvent(
//       payload,
//       sig!,
//       process.env.STRIPE_WEBHOOK_SECRET!
//     );

//     console.log("event", event.type);
//     // Handle the event
//     // charge.succeeded
//     // payment_intent.succeeded
//     // payment_intent.created

//     // const response: any = await reigisterPayment(
//     //   res?.data?.object.billing_detials?.email,
//     //   res?.data?.object.amount,
//     //   JSON.stringify(res),
//     //   res.type,
//     //   String(timeString),
//     //   String(dataTime),
//     //   res?.data?.object.receipt_email,
//     //   res?.data?.object.receipt_url,
//     //   JSON.stringify(res?.data?.object.payment_method_details),
//     //   JSON.stringify(res?.data?.object.billing_details),
//     //   res?.data?.object.currency
//     // );

//     return NextResponse.json({ status: "Success", event: event.type });
//   } catch (error) {
//     return NextResponse.json({ status: "Faild", error });
//   }
// }
