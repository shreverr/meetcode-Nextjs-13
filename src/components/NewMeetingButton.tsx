'use client'

import { FC } from 'react';
import { Button } from '@/ui/Button';
import Icons from '@/ui/Icons';

interface NewMeetingButtonProps { }

const NewMeetingButton: FC<NewMeetingButtonProps> = ({ }) => {
  const createNewMeeting = () => {

  }

  return (
    <Button variant='default' size='lg' onClick={createNewMeeting} className='px-3'>
      <Icons.Video/>
      <span className='ml-2'>
        New Meeting
      </span>
    </Button>
  );
}

export default NewMeetingButton;