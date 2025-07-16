import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "../../../../prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Props) {
  const prodId = +params.id;

  const product = await prisma.product.findUnique({
    where: {
      id: prodId,
    },
  });

  if (!product) {
    return NextResponse.json(
      { error: "Product is not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error, { status: 400 });
  }

  const prodId = +params.id;
  const product = await prisma.product.findUnique({
    where: {
      id: prodId,
    },
  });

  if (!product) {
    return NextResponse.json(
      { error: "Product is not found" },
      { status: 404 }
    );
  }

  const updatedProduct = await prisma.product.update({
    where: {
      id: prodId,
    },
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(updatedProduct, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const product = await prisma.product.findUnique({
    where: {
      id: +params.id,
    },
  });

  if (!product) {
    return NextResponse.json(
      { error: "Product is not found" },
      { status: 404 }
    );
  }

  await prisma.product.delete({
    where: {
      id: +params.id,
    },
  });

  return NextResponse.json({}, { status: 200 });
}
