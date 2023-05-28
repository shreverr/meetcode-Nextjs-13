import dbConnect from '@/lib/dbConnect';
import generateMeetingCode from '@/lib/meetingCode';
import { NextRequest, NextResponse } from 'next/server';
import Meeting from '@/models/Meeting';

export async function GET(request: NextRequest) {
  await dbConnect();

  const { searchParams } = new URL(request.url);
  const host = Object.fromEntries(searchParams.entries()).host;
  
  const meetingCode = await generateMeetingCode();
  const newMeeting = new Meeting({
    host: host,
    meetingCode: meetingCode,
  });
  await newMeeting.save();
  
  return NextResponse.json(
    {
      host: host,
      meetingCode: meetingCode,
    }
  );
}