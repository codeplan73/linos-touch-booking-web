import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { priceSchema } from "@/schemas";

export async function GET(request: NextRequest) {
  const price = await db.pricing.findMany({});
  return NextResponse.json(price);
}

export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json();

  const validatedFields = priceSchema.safeParse(body);

  if (!validatedFields.success)
    return NextResponse.json(validatedFields.error.format(), { status: 400 });
  const {
    id,
    hourly_rate,
    bedroom_count,
    bathroom_count,
    standard,
    deep_clean,
    move_in_out,
    post_construction,
    extra_task,
    bring_our_own_materials,
  } = validatedFields.data;

  const priceId = parseInt(id);
  const hourlyRateInt = parseInt(hourly_rate, 10);
  const bedroomCountInt = parseInt(bedroom_count, 10);
  const bathroomCountInt = parseInt(bathroom_count, 10);
  const standardInt = parseInt(standard, 10);
  const deepCleanInt = parseInt(deep_clean, 10);
  const moveInOutInt = parseInt(move_in_out, 10);
  const postConstructionInt = parseInt(post_construction, 10);
  const extraTaskInt = parseInt(extra_task, 10);
  const bringOurOwnMaterialsInt = parseInt(bring_our_own_materials, 10);

  const price = await db.pricing.findUnique({ where: { id: priceId } });

  if (!price) {
    return NextResponse.json({ message: "Price not found" }, { status: 404 });
  }

  try {
    const updatedPrice = await db.pricing.update({
      where: { id: priceId },
      data: {
        price: 0,
        hourly_rate: hourlyRateInt,
        bedroom_count: bedroomCountInt,
        bathroom_count: bathroomCountInt,
        standard: standardInt,
        deep_clean: deepCleanInt,
        move_in_out: moveInOutInt,
        post_construction: postConstructionInt,
        extra_task: extraTaskInt,
        bring_our_own_materials: bringOurOwnMaterialsInt,
      },
    });

    return NextResponse.json({
      updatedPrice,
      message: "Price updated successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating price" },
      { status: 400 }
    );
  }
}
