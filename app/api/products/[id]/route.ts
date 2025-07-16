import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params }: Props) {
  //   if (params.id > 10) {
  //     return NextResponse.json({ error: "Product is not found" }, { status: 404 });
  //   }

  return NextResponse.json({ id: 1, name: "PRODUCT" });
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error, { status: 400 });
  }

  const prodId = params.id;
  // If no product is found, return 404
  if (prodId > 10) {
    return NextResponse.json(
      { error: "Product is not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { id: prodId, name: body.name, price: body.price },
    { status: 200 }
  );
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const productId = params.id;

  return NextResponse.json({}, { status: 200 });
}
