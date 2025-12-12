'use client'
import Link from 'next/link'
import { Sun } from 'lucide-react'

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

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

        {NAV_ITEMS.map(item => (
          <li key={item.name}>
            <Link
              href={item.href}
              className='cursor-pointer group link-transition hover:text-primary focus-ring inline-block relative'
            >
              {item.name}
              <span className='link-underline' />
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
