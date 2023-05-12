'use client'

import { mergeClassNames } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import Image from 'next/image';
import { FC } from 'react';
import { buttonVariants } from '../ui/Button';

interface ProfileProps {

}

const Profile: FC<ProfileProps> = ({ }) => {
  return (<div>
    <Image src="/sample.jpg" width="40" height="40" alt="profile picture" className={mergeClassNames(buttonVariants({ variant: 'outline', size: 'pfp' }), 'rounded-full')}></Image>
  </div>);
}

export default Profile;