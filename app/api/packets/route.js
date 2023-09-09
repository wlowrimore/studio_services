import { NextResponse } from "next/server";
import packets from "./data.json";

export async function GET(request) {
  return NextResponse.json(packets);
}
