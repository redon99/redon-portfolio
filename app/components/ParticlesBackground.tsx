'use client'
import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { type Container, type ISourceOptions } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container)
  }

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          onClick: {
            enable: true,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              opacity: 1,
            },
          },
          repulse: {
            distance: 100,
          },
        },
      },
      particles: {
        color: {
          value: '#11ce91',
        },
        links: {
          color: '#11ce91',
          distance: 100,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.7,
        },
        number: {
          value: 700,
          density: {
            enable: true,
          },
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 0.5, max: 1 },
        },
      },
      detectRetina: true,
    }),
    []
  )

  if (init) {
    return (
      <Particles
        id='tsparticles'
        particlesLoaded={particlesLoaded}
        options={options}
        className='absolute inset-0'
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
      />
    )
  }
}
