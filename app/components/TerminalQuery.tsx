import Link from 'next/link'

interface P {
  query: string
  link?: boolean
}

export const TerminalQuery = ({ query, link }: P) => {
  if (link) {
    return (
      <div className='flex gap-2'>
        <p className='text-primary'>redon@linuxpc:~$</p>
        <Link
          href='/redonCV-2025.pdf'
          className='hover:text-primary link-transition relative inline-block pb-1 
          after:absolute after:left-0 after:bottom-0 after:h-0.5
          after:w-0 after:bg-primary after:transition-all after:duration-300
          hover:after:w-full'
          download='redonCV-2025.pdf'
        >
          {query}
        </Link>
      </div>
    )
  }

  return (
    <div className='flex gap-2'>
      <p className='text-primary'>redon@linuxpc:~$</p>
      <p className='opacity-70'>{query}</p>
    </div>
  )
}
