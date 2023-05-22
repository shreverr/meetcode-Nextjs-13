import { NextResponse } from 'next/server';
 
export async function GET() {
  const res = {
    name: 'segs'
  }
 
  return NextResponse.json({ res });
}

export async function POST() {
  const res = {
    name: 'fuks'
  }
 
  return NextResponse.json({ res });
}