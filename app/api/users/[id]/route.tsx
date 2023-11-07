import { NextRequest, NextResponse } from "next/server";
import schema from "@/app/api/users/schema";

interface Props {
  params: { id: number };
}
export function GET(request: NextRequest, { params }: Props) {
  // fetch
  // if not found, 404
  if (params.id > 10)
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  // else return json
  return NextResponse.json({ id: params.id, name: "Jimmy" });
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  //validate
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  if (params.id > 10) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  // else return body
  return NextResponse.json(
    {
      message: "PUT request",
      body: { id: params.id, name: body.name },
    },
    { status: 200 },
  );
}

export async function DELETE(request: NextRequest, { params }: Props) {
  if (params.id > 10) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (!params.id) {
    return NextResponse.json({ error: "Id is required" }, { status: 400 });
  }

  // else return body
  return NextResponse.json(
    {
      message: "DELETE request",
      body: { id: params.id },
    },
    { status: 200 },
  );
}
