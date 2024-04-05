import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { amount } = body;

  const calculateOrderAmount = (items: any) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
  };

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(amount),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    console.log(paymentIntent);
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ status: "Faild", error });
  }
}
