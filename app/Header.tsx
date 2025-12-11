import Link from 'next/link'

export const Header = () => {
  return (
    <header className='w-full py-4 px-48 mx-auto border-b border-primary flex items-center justify-between'>
      <Link
        className='text-primary text-xl font-bold cursor-pointer hover:opacity-80 link-transition'
        href='/'
      >
        Redon LUTOLLI
      </Link>

      <ul className='flex gap-8 font-medium text-lg'>
        {['Home', 'About', 'Projects', 'Contact'].map(item => (
          <li
            key={item}
            className='cursor-pointer group hover:text-primary link-transition'
          >
            {item}
            <span className='link-underline' />
          </li>
        ))}
      </ul>
    </header>
  )
}
