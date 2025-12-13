'use client'
import { useState } from 'react'
import { TerminalQuery } from '../components/TerminalQuery'
import { PROJECTS } from './const'
import { ProjectDetails } from '../components/ProjectDetails'

function Index() {
  const [openProject, setOpenProject] = useState<string | null>(null)
  console.log('openProject', openProject)

  return (
    <section className='max-w-5xl h-[600px] mx-auto overflow-y-auto'>
      <h2 className='mb-6'>My work so far 👷</h2>

      <TerminalQuery query='projects ls --short' />

      <p className='text-sm opacity-50'>
        click projects to expand
        <span className='caret-blink ml-1'>▌</span>
      </p>

      <ul className='ml-8 my-4 space-y-2'>
        {PROJECTS.map(project => (
          <li key={project.id}>
            <div
              className='cursor-pointer hover:text-primary link-transition'
              onClick={() =>
                setOpenProject(openProject === project.id ? null : project.id)
              }
            >
              <span
                className={`inline-block transition-transform duration-200 mr-4 ${
                  openProject === project.id ? 'rotate-90' : 'rotate-0'
                }`}
              >
                &gt;
              </span>
              {project.name}
            </div>

            {openProject === project.id && <ProjectDetails project={project} />}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Index
