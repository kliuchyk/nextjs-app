import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params }: Props) {
  if (params.id > 10) {
    return NextResponse.json({ error: "User is not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: "Mosh" });
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error, { status: 400 });
  }

  const userId = params.id;
  // If no user is found, return 404
  if (userId > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Fetch the user with the given ID

  return NextResponse.json({ id: userId, name: body.name }, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const userId = params.id;

  if (userId > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({}, { status: 200 });
}
