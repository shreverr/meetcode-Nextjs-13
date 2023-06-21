'use client'

import { FC } from 'react' 
import { Button } from './ui/Button' 
import Icons from './ui/Icons' 

interface JoinMeetingProps { }

const JoinMeeting: FC<JoinMeetingProps> = ({ }) => {
  const joinMeeting = () => {
    
  }

  return (
    <div className='flex items-center'>
      <div className='flex items-center border rounded-md dark:border-slate-700 '>
        <div className='bg-white dark:bg-slate-800 h-11 flex items-center rounded-s-md ps-3'>
          <Icons.Keyboard />
        </div>
        <input type="text" id='meetingLinkInput' placeholder='Enter meeting code' className='h-11 p-2 bg-white dark:bg-slate-800 rounded-md rounded-s-none focus-visible:outline-none' />
      </div>
      <span>
        <Button variant='ghost' size='lg' onClick={joinMeeting} className='mx-2 px-3 text-slate-900 dark:text-slate-200'>
          join
        </Button>
      </span>
    </div>
  )   
}

export default JoinMeeting 