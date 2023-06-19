'use client'

import { FC } from 'react'
import { Button } from '@/ui/Button'
import Icons from '@/ui/Icons'
import { useSession } from 'next-auth/react'

interface NewMeetingButtonProps { }

const NewMeetingButton: FC<NewMeetingButtonProps> = ({ }) => {
  const { data: session } = useSession()
  const host = session?.user?.email 
  
  const createNewMeeting = async () => {
    let meetingData
    try {
      const res = await fetch(`/api/meeting/new-meeting?host=${host}`)
      meetingData = await res.json()
    } catch (error) {
      console.log(`Error fetching meeting code: ${error}`)
    }

    window.location.href = `/${meetingData.meetingCode}`
  }

  return (
    <Button variant='default' size='lg' onClick={createNewMeeting} className='px-3'>
      <Icons.Video />
      <span className='ml-2'>
        New Meeting
      </span>
    </Button>
  )
}

export default NewMeetingButton 