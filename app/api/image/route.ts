import { readFileSync } from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // A simple image server to bypass local file serving security
  try {
    const file = readFileSync('C:\\Users\\Darshan Honkhande\\.gemini\\antigravity\\brain\\66dcfe8b-5128-4a3a-89c8-19569c5659d4\\sentiment_analysis_dashboard_1777293930429.png');
    return new NextResponse(file, { headers: { 'Content-Type': 'image/png' } });
  } catch (e) {
    return new NextResponse("Not Found", { status: 404 });
  }
}
