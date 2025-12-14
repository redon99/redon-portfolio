'use client'

import { ParticlesBackground } from './components/ParticlesBackground'
import Typewriter from 'typewriter-effect'

export default function Home() {
  return (
    <div className='w-full flex-1 flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8'>
      <ParticlesBackground />

      <h3 className='relative text-foreground text-base sm:text-lg md:text-xl lg:text-2xl px-4 text-center drop-shadow-[0_0_15px_#11ce91]'>
        <Typewriter
          options={{
            strings: [
              'Innovation never sleeps!',
              'AI can not replace creativity!',
              'Every dot is connected!',
              'Explore the unknown!',
              'Chaos births unexpected clarity.',
              'Time bends for those who observe.',
              'Echoes of yesterday shape tomorrow.',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 20,
            delay: 70,
          }}
        />
      </h3>
    </div>
  )
}
