import { NextRequest, NextResponse } from "next/server";
import schema from "@/app/api/users/schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  //validate
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  // if invalid, 400
  // else return body

  const foundUser = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (foundUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const user = await prisma.user.create({
    data: { email: body.email, name: body.name },
  });
  return NextResponse.json(user, { status: 201 });
}
