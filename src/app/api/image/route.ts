import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  
  if (!name) {
    return new NextResponse('Not found', { status: 404 });
  }
  
  // Base path to the artifacts directory
  const basePath = 'C:\\Users\\ITSE ARUEYINGHO\\.gemini\\antigravity\\brain\\0d213e66-1148-4da8-b05d-06863faedbfd';
  const filePath = path.join(basePath, name);
  
  try {
    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      headers: { 
        'Content-Type': name.endsWith('.jpg') ? 'image/jpeg' : 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable'
      },
    });
  } catch (e) {
    console.error("Error reading image:", e);
    return new NextResponse('Not found', { status: 404 });
  }
}
