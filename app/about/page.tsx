'use client'
import { TerminalQuery } from '../components/TerminalQuery'
import { motion } from 'motion/react'
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiPython,
  SiDocker,
  SiMysql,
  SiAwslambda,
  SiKubernetes,
  SiDatabricks,
  SiTailwindcss,
} from 'react-icons/si'

const SKILLS = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'React.js', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Vue.js', icon: SiVuedotjs },
  { name: 'Python', icon: SiPython },
  { name: 'Docker', icon: SiDocker },
  { name: 'Kubernetes', icon: SiKubernetes },
  { name: 'SQL', icon: SiMysql },
  { name: 'AWS', icon: SiAwslambda },
  { name: 'Database', icon: SiDatabricks },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemsVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function Index() {
  return (
    <div className='w-full flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-x-hidden'>
      <div className='w-full max-w-5xl mx-auto'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='show'
        >
          <motion.div variants={itemsVariants} className='pt-2'>
            <TerminalQuery query='whoami' />
            <p className='text-sm sm:text-base md:text-md font-light mb-6 sm:mb-10 break-words'>
              👋 Hi there! I'm Redon, a full-stack software engineer based on
              Prishtina, Kosovo.
            </p>
          </motion.div>
          <motion.div variants={itemsVariants}>
            <TerminalQuery query='cat about_me.txt' />
            <p className='text-sm sm:text-base md:text-md font-light mb-6 sm:mb-10 break-words'>
              I have almost 3 years of experience in building web applications
              using Next.js, React.js, Node.js and other modern technologies.
              While I love UIs I also enjoy working on backend systems and
              databases.
            </p>
          </motion.div>
          <motion.div variants={itemsVariants}>
            <TerminalQuery query='skills ls --icons' />
            <div className='my-4 overflow-x-hidden'>
              <ul className='flex gap-4 sm:gap-6 flex-wrap'>
                {SKILLS.map(skill => (
                  <li
                    key={skill.name}
                    className='flex items-center gap-2 mb-2 break-words'
                  >
                    <skill.icon className='text-xl sm:text-2xl flex-shrink-0' />
                    <span className='text-sm sm:text-base'>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div variants={itemsVariants}>
            <TerminalQuery query='cat goals.txt' />
            <p className='text-sm sm:text-base md:text-md font-light mb-6 sm:mb-10 break-words'>
              Dive deeper into backend systems, cloud computing, machine
              learning. Why not architecting scalable frontends too!
            </p>
          </motion.div>
          <motion.div variants={itemsVariants}>
            <TerminalQuery query='hobbies ls' />
            <p className='text-sm sm:text-base md:text-md font-light mb-6 sm:mb-10 break-words'>
              Fitness🏋️‍♂️ Basketball🏀 Chess♟️ Reading📖 Exploring nature🌋
            </p>
          </motion.div>
          <motion.div variants={itemsVariants}>
            <TerminalQuery query='click here to download CV 👈' link />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Index
