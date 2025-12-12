'use client'

import { ParticlesBackground } from './components/ParticlesBackground'
import Typewriter from 'typewriter-effect'

export default function Home() {
  return (
    <main className='w-full h-[650px] relative flex items-center justify-center overflow-hidden'>
      <ParticlesBackground />

      <h3 className='relative text-white text-xl drop-shadow-[0_0_15px_#11ce91]'>
        <Typewriter
          options={{
            strings: [
              'Innovation never sleeps!',
              'AI can not replace creativity!',
              'Or can it? Hmm...',
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
    </main>
  )
}
