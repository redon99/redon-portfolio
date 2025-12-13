interface Project {
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

export const PROJECTS: Project[] = [
  {
    id: 'pabau-crm',
    name: 'Pabau CRM 💻',
    description:
      '(Full time employee) Enterprise CRM system used by medical clinics for managing patients, bookings, and billing.',
    stack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'MySQL & PostgreSQL',
      'Prisma',
      'Nexus.js',
      'Hasura GraphQL Engine',
    ],
    highlights: [
      'Large-scale production codebase',
      'Complex business logic',
      'Team collaboration',
    ],
    links: {
      live: 'https://pabau.com/go-emr/',
      github: null,
    },
  },
  {
    id: 'portfolio',
    name: 'Portfolio Website',
    description:
      'Personal portfolio built with a terminal-inspired UI. (This one that you are looking at)',
    stack: ['Next.js', 'Tailwind', 'Framer Motion'],
    highlights: ['Terminal UI', 'Accessible navigation'],
    links: {
      live: '/',
      github: 'https://github.com/...',
    },
  },
  {
    id: 'recipe-app',
    name: 'Recipe App 🍲',
    description:
      'A web application to browse, search, and save cooking recipes.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    highlights: ['User authentication', 'Recipe search functionality'],
    links: {
      live: null,
      github: 'https://github.com/redon99/recipeApp',
    },
  },
]
