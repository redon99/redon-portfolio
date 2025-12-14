'use client'
import Link from 'next/link'
import { Sun } from 'lucide-react'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export const Header = () => {
  const pathname = usePathname()

  return (
    <div className='w-full border-primary border-b'>
      <header className='w-7xl py-4 mx-auto flex items-center justify-between'>
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

          {NAV_ITEMS.map(item => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`cursor-pointer group link-transition inline-block relative focus-ring ${
                    isActive ? 'text-primary font-bold' : 'hover:text-primary'
                  }`}
                >
                  {item.name}
                  <span className='link-underline' />
                </Link>
              </li>
            )
          })}
          <Link
            href='/redonCV-2025.pdf'
            className='button focus-ring link-transition'
            download='Redon_Lutolli_CV.pdf'
          >
            Download CV
          </Link>
        </ul>
      </header>
    </div>
  )
}
