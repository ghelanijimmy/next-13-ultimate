import { NextRequest, NextResponse } from "next/server";
import schema from "@/app/api/users/schema";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}
export async function GET(request: NextRequest, { params }: Props) {
  // fetch
  // if not found, 404
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id) || 0,
    },
  });
  if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });
  // else return json
  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  //validate
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const foundUser = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!foundUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // otherwise update user
  const user = await prisma.user.update({
    where: {
      id: parseInt(params.id),
    },
    data: { email: body.email, name: body.name },
  });

  // else return body
  return NextResponse.json(user, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const foundUser = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!foundUser) {
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  }

  const user = await prisma.user.delete({
    where: {
      id: parseInt(params.id),
    },
  });

  // else return body
  return NextResponse.json(user, { status: 200 });
}
