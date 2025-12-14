import Link from 'next/link'

interface P {
  project: {
    id: string
    name: string
    description: string
    stack: string[]
    highlights: string[]
    links: {
      live: string | null
      github: string | null
    }
  }
}

export const ProjectDetails = ({ project }: P) => {
  return (
    <div className='ml-4 sm:ml-8 mt-2 pr-2 overflow-x-hidden'>
      <p className='mt-2 mb-1 text-sm sm:text-base break-words'>- {project.description}</p>
      <p className='text-sm sm:text-base'>- Tech stack</p>
      <ul className='overflow-x-hidden'>
        {project.stack.map(tech => (
          <li key={tech} className='text-xs sm:text-sm ml-4 sm:ml-8 break-words'>
            • {tech}
          </li>
        ))}
      </ul>
      <p className='mt-2 text-sm sm:text-base'>- Highlights</p>
      <ul className='overflow-x-hidden'>
        {project.highlights.map(highlight => (
          <li key={highlight} className='text-xs sm:text-sm ml-4 sm:ml-8 break-words'>
            • {highlight}
          </li>
        ))}
      </ul>
      <p className='mt-2 text-sm sm:text-base'>- Links</p>
      <ul className='overflow-x-hidden'>
        <li className='flex flex-wrap gap-2 sm:gap-4'>
          {project.links.live && (
            <Link
              href={project.links.live}
              className='hover:text-primary link-transition ml-2 sm:ml-4 focus-ring text-sm sm:text-base'
              target='_blank'
            >
              [Live]
            </Link>
          )}
          {project.links.github && (
            <Link
              href={project.links.github}
              className='hover:text-primary link-transition ml-2 sm:ml-4 focus-ring text-sm sm:text-base'
              target='_blank'
            >
              [Github]
            </Link>
          )}
        </li>
      </ul>
    </div>
  )
}
