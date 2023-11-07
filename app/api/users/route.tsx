import { NextRequest, NextResponse } from "next/server";
import schema from "@/app/api/users/schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Jimmy" },
    { id: 2, name: "John" },
  ]);
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
  return NextResponse.json(
    {
      message: "POST request",
      body: { id: 1, name: body.name },
    },
    { status: 201 },
  );
}
