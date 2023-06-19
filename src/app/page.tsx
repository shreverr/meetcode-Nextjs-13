import JoinMeeting from "@/components/JoinMeeting" 
import NewMeetingButton from "@/components/NewMeetingButton" 
import type { Metadata } from "next" 
import Image from 'next/image' 

export const metadata: Metadata = {
  title: 'Meetcode',
  description: 'Coding classes evolved',
}

export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full p-3'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-center font-extrabold text-black dark:text-white antialiased">
              Coding classes <br /> evolved.
            </h1>
            <p className="text-xl max-w-xl p-4 text-center text-slate-700 dark:text-slate-300">
              A video conferencing app where you can code on the go.
            </p>
            <div className="p-3 mt-4 flex gap-4 items-center justify-center">
              {/* @ts-expect-error */}
              <NewMeetingButton />
              <JoinMeeting />
            </div>
          </div>
          <div className='relative w-full lg:w-1/3 max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute lg:ml-20'>
            <Image
              priority
              className='image-shadow'
              quality={100}
              style={{ objectFit: 'contain' }}
              fill
              src='/programmer.png'
              alt='programmer'
            />
          </div>
        </div>
      </div>
    </div>
  ) 
}
