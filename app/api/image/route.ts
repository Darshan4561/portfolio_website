import { readFileSync } from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // A simple image server to bypass local file serving security
  try {
    const file = readFileSync('C:\\Users\\Darshan Honkhande\\.gemini\\antigravity\\brain\\817d4b30-1580-4acc-a7c8-af3f80451562\\ai_dashboard_1776148558339.png');
    return new NextResponse(file, { headers: { 'Content-Type': 'image/png' } });
  } catch (e) {
    return new NextResponse("Not Found", { status: 404 });
  }
}
