import { getServerSession } from 'next-auth' 
import Settings from './Settings' 
import Profile from './Profile' 
import SignInButton from '../SignInButton' 
import ThemeToggle from './ThemeToggle' 

const Navbar = async ({ }) => {
  const session = await getServerSession() 
  
  return (
    <nav className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50  top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-center p-3'>
      <div className='container flex items-center justify-between'>
        <div className="text-3xl font-bold sm:p-4">
          Meetcode
        </div>
        <div className='sm:p-4 flex items-center justify-center gap-2 sm:gap-6'>
            <ThemeToggle />
            <Settings />
            {session ? (<Profile />) : (<SignInButton />)}  
        </div>
      </div>
    </nav>
  ) 
}

export default Navbar 