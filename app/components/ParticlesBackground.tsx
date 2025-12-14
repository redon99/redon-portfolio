'use client'
import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import type { ISourceOptions } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'
import { useTheme } from '../contexts/ThemeContext'

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

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
            mode: 'grab',
          },
          onClick: {
            enable: true,
            mode: 'push',
          },
        },
        modes: {
          grab: {
            distance: 100,
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
          opacity: theme === 'light' ? 0.3 : 0.5,
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
          value: theme === 'light' ? 0.4 : 0.5,
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
    [theme]
  )

  if (init) {
    return (
      <Particles
        id='tsparticles'
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
