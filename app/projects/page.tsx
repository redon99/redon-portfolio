'use client'
import { useState } from 'react'
import { TerminalQuery } from '../components/TerminalQuery'
import { PROJECTS } from './const'
import { ProjectDetails } from '../components/ProjectDetails'
import { motion } from 'motion/react'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemsVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function Index() {
  const [openProject, setOpenProject] = useState<string | null>(null)

  return (
    <section className='w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
      <motion.div variants={containerVariants} initial='hidden' animate='show'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl'>My work so far 👷</h2>
        <motion.div variants={itemsVariants}>
          <TerminalQuery query='projects ls --short' />
        </motion.div>

        <motion.div variants={itemsVariants}>
          <p className='text-xs sm:text-sm opacity-50'>
            click projects to expand
            <span className='caret-blink ml-1'>▌</span>
          </p>
        </motion.div>

        <ul className='ml-4 sm:ml-8 my-4 space-y-2 overflow-hidden'>
          {PROJECTS.map(project => (
            <motion.li
              key={project.id}
              variants={itemsVariants}
              className='break-words'
            >
              <div
                role='button'
                tabIndex={0}
                className={`inline-flex items-center cursor-pointer hover:text-primary link-transition focus-ring ${
                  openProject === project.id && 'text-primary'
                }`}
                onClick={() =>
                  setOpenProject(openProject === project.id ? null : project.id)
                }
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setOpenProject(
                      openProject === project.id ? null : project.id
                    )
                  }
                }}
              >
                <span
                  className={`inline-block transition-transform duration-200 mr-2 sm:mr-4 flex-shrink-0 ${
                    openProject === project.id ? 'rotate-90' : 'rotate-0'
                  }`}
                >
                  &gt;
                </span>
                <span className='break-words'>{project.name}</span>
              </div>

              {openProject === project.id && (
                <ProjectDetails project={project} />
              )}
            </motion.li>
          ))}
        </ul>
        {!openProject && (
          <motion.div variants={itemsVariants}>
            <p className='sticky bottom-0 mt-4 py-2 text-xs sm:text-sm opacity-60 bg-background'>
              More cool projects SOON!
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

export default Index
