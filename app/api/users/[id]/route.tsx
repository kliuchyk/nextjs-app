import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "../../../../prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: +params.id,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User is not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  const userId = +params.id;

  if (!validation.success) {
    return NextResponse.json(validation.error, { status: 400 });
  }

  const userExists = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!userExists) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const userId = +params.id;

  const userExists = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!userExists) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  return NextResponse.json({}, { status: 200 });
}
