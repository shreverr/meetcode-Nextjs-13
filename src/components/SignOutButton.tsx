import { signOut } from 'next-auth/react';
import { FC } from 'react';
import { toast } from './ui/Toast';

interface SignOutButtonProps { }

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const signOutWithGoogle = async () => {
    try{
      await signOut();
    } catch (error) {
      toast({
        title: 'Error signing out',
        message: 'Please try again later',
        type: 'error'
      });      
    }
  }
  return (
    <button className='w-full' onClick={ signOutWithGoogle }>
      Sign out
    </button>
  );
}

export default SignOutButton;