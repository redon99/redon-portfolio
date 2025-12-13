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
    <div className='ml-8'>
      <p className='mt-2 mb-1'>- {project.description}</p>
      <p>- Tech stack</p>
      <ul>
        {project.stack.map(tech => (
          <li key={tech} className='text-sm ml-8'>
            • {tech}
          </li>
        ))}
      </ul>
      <p className='mt-2'>- Highlights</p>
      <ul>
        {project.highlights.map(highlight => (
          <li key={highlight} className='text-sm ml-8'>
            • {highlight}
          </li>
        ))}
      </ul>
      <p className='mt-2'>- Links</p>
      <ul>
        <li>
          {project.links.live && (
            <Link
              href={project.links.live}
              className='hover:text-primary link-transition ml-4'
              target='_blank'
            >
              [Live]
            </Link>
          )}
          {project.links.github && (
            <Link
              href={project.links.github}
              className='hover:text-primary link-transition ml-4'
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
