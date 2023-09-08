import { NextResponse } from "next/server";
import packages from "./data.json";

export async function GET(request) {
  return NextResponse.json(packages);
}
