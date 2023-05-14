'use client'

import Image from 'next/image';
import { FC } from 'react';
import { Button } from '@/ui/Button';
import { useSession } from 'next-auth/react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/DropdownMenu';
import SignOutButton from '@/components/SignOutButton';

interface ProfileProps {

}

const Profile: FC<ProfileProps> = ({ }) => {
  const { data: session } = useSession();
  const profilePictureUrl = typeof session?.user?.image == 'string' ? session?.user?.image : '/defaultProfilePicture.jpg';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='pfp' className='rounded-full'>
          <Image src={profilePictureUrl} width="40" height="40" className='rounded-full' alt="profile picture" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' forceMount>
        <DropdownMenuItem>
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Profile;
// return (<div>
//   <Image src={profilePictureUrl} width="40" height="40" alt="profile picture" className={mergeClassNames(buttonVariants({ variant: 'outline', size: 'pfp' }), 'rounded-full')}></Image>
// </div>);