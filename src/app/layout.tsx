import Navbar from '@/components/navbar/Navbar';
import Providers from '@/components/Providers';
import { mergeClassNames } from '@/lib/utils';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={mergeClassNames("min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-200 antialiased", 
      inter.className)}>
        <Providers>
          { children }
          <Toaster position='bottom-right'/>
          {/* @ts-expect-error */}
          <Navbar/>
        </Providers>
      </body>
    </html>
  )
}