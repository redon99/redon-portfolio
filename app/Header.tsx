'use client'
import Link from 'next/link'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState, useEffect, startTransition } from 'react'
import { useTheme } from './contexts/ThemeContext'

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export const Header = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  // Close menu when route changes
  useEffect(() => {
    startTransition(() => {
      setIsMenuOpen(false)
    })
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='w-full border-primary border-b'>
      <header className='w-full max-w-7xl py-4 px-4 sm:px-6 lg:px-8 mx-auto flex items-center justify-between'>
        <Link
          className='text-primary text-lg sm:text-xl font-bold cursor-pointer hover:opacity-80 link-transition focus-ring'
          href='/'
        >
          Redon LUTOLLI
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex'>
          <ul className='flex gap-6 lg:gap-8 font-medium text-base lg:text-lg items-center'>
            <li className='flex items-center'>
              <button
                onClick={toggleTheme}
                className='cursor-pointer focus-visible:ring-2 focus-ring flex items-center justify-center'
                aria-label='Toggle theme'
              >
                {theme === 'light' ? (
                  <Moon className='hover:text-primary link-transition focus-visible:outline-none w-5 h-5' />
                ) : (
                  <Sun className='hover:text-primary link-transition focus-visible:outline-none w-5 h-5' />
                )}
              </button>
            </li>

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
            <li>
              <Link
                href='/redonCV-2025.pdf'
                className='button focus-ring link-transition text-sm lg:text-base px-3 lg:px-4 py-2'
                download='Redon_Lutolli_CV.pdf'
              >
                Download CV
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className='flex items-center gap-4 md:hidden'>
          <button
            onClick={toggleTheme}
            className='cursor-pointer focus-visible:ring-2 focus-ring'
            aria-label='Toggle theme'
          >
            {theme === 'light' ? (
              <Moon className='hover:text-primary link-transition focus-visible:outline-none w-5 h-5' />
            ) : (
              <Sun className='hover:text-primary link-transition focus-visible:outline-none w-5 h-5' />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className='cursor-pointer focus-visible:ring-2 focus-ring text-foreground hover:text-primary link-transition relative z-50'
            aria-label='Toggle menu'
            aria-expanded={isMenuOpen}
          >
            <div className='relative w-6 h-6'>
              <X
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen
                    ? 'opacity-100 rotate-0 scale-100'
                    : 'opacity-0 rotate-90 scale-0'
                }`}
              />
              <Menu
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen
                    ? 'opacity-0 -rotate-90 scale-0'
                    : 'opacity-100 rotate-0 scale-100'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${
            isMenuOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible pointer-events-none'
          }`}
          style={{ backgroundColor: 'var(--overlay)' }}
          onClick={toggleMenu}
        >
          <nav
            className={`absolute top-0 right-0 h-full w-64 sm:w-80 bg-background border-l border-primary shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={e => e.stopPropagation()}
          >
            <div className='flex flex-col h-full pt-20 px-6'>
              <ul className='flex flex-col gap-6 font-medium text-lg'>
                {NAV_ITEMS.map((item, index) => {
                  const isActive = pathname === item.href
                  return (
                    <li
                      key={item.name}
                      className='transform transition-all duration-300'
                      style={{
                        animationDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                        opacity: isMenuOpen ? 1 : 0,
                        transform: isMenuOpen
                          ? 'translateX(0)'
                          : 'translateX(20px)',
                      }}
                    >
                      <Link
                        href={item.href}
                        className={`cursor-pointer group link-transition inline-block relative focus-ring text-xl ${
                          isActive
                            ? 'text-primary font-bold'
                            : 'hover:text-primary'
                        }`}
                        onClick={toggleMenu}
                      >
                        {item.name}
                        <span className='link-underline' />
                      </Link>
                    </li>
                  )
                })}
                <li
                  className='mt-4 transform transition-all duration-300'
                  style={{
                    animationDelay: isMenuOpen
                      ? `${NAV_ITEMS.length * 50}ms`
                      : '0ms',
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen
                      ? 'translateX(0)'
                      : 'translateX(20px)',
                  }}
                >
                  <Link
                    href='/redonCV-2025.pdf'
                    className='button focus-ring link-transition inline-block px-6 py-3 text-base hover:scale-105 active:scale-95'
                    download='Redon_Lutolli_CV.pdf'
                    onClick={toggleMenu}
                  >
                    Download CV
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}
