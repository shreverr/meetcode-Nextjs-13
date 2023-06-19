import dbConnect from '@/lib/dbConnect' 
import generateMeetingCode from '@/lib/meetingCode' 
import { NextRequest, NextResponse } from 'next/server' 
import Meeting from '@/models/Meeting' 

export async function GET(request: NextRequest) {
  try {
    await dbConnect() 
  } catch (error) {
    console.log(`Error connecting to the database: ${error}`); 
  }

  try {
    const { searchParams } = new URL(request.url) 
    const host = Object.fromEntries(searchParams.entries()).host
    if(!host || host.length === 0){
      throw new Error("Host not defined")
    }

    const meetingCode = await generateMeetingCode() 
    const newMeeting = new Meeting({
      host: host,
      meetingCode: meetingCode,
    }) 
    await newMeeting.save()
    
    return NextResponse.json(
      {
        host: host,
        meetingCode: meetingCode,
      }
    ) 
  } catch (error) {
    console.log(error)
  }
}