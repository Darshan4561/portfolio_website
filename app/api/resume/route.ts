import { readFileSync } from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const file = readFileSync('C:\\Users\\Darshan Honkhande\\OneDrive\\Profile (1).pdf');
    return new NextResponse(file, { 
      headers: { 
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Babu_Honkhande_Resume.pdf"'
      } 
    });
  } catch (e) {
    return new NextResponse("Resume PDF not found.", { status: 404 });
  }
}
