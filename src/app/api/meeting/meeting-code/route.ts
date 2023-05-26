import generateMeetingCode from '@/lib/meetingCode';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ meetingCode: generateMeetingCode() });
}