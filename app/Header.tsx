'use client'
import Link from 'next/link'
import { Sun } from 'lucide-react'

export const Header = () => {
  return (
    <header className='w-full py-4 px-48 mx-auto border-b border-primary flex items-center justify-between'>
      <Link
        className='text-primary text-xl font-bold cursor-pointer hover:opacity-80 link-transition focus-ring'
        href='/'
      >
        Redon LUTOLLI
      </Link>

      <ul className='flex gap-8 font-medium text-lg items-center'>
        <button
          onClick={() => console.log('click')}
          className='cursor-pointer focus-visible:ring-2 focus-ring'
        >
          <Sun className='hover:text-primary link-transition focus-visible:outline-none' />
        </button>
        {['Home', 'About', 'Projects', 'Contact'].map(item => (
          <li
            key={item}
            className='cursor-pointer group hover:text-primary link-transition focus-ring'
            tabIndex={0}
          >
            {item}
            <span className='link-underline' />
          </li>
        ))}
      </ul>
    </header>
  )
}
