import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ count: 20 });
}