import { Facebook, GithubIcon, Linkedin, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const SOCIAL_LINKS = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/redon-lutolli/',
    icon: <Linkedin />,
  },
  {
    name: 'github',
    url: 'https://www.github.com/redon99',
    icon: <GithubIcon />,
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/redonlu',
    icon: <Facebook />,
  },
]

export const Footer = () => {
  return (
    <footer className='w-full mx-auto mt-12 border-primary border-t pt-4 px-80 flex justify-between items-end'>
      <div>
        <div className='flex items-center gap-4 mb-4'>
          <Image
            src='/redon-profile.jpg'
            alt='Redon Lutolli profile pic'
            width={48}
            height={48}
            objectFit='cover'
            className='rounded-full'
          />
          <div>
            <h4 className='text-primary font-bold text-lg'>Redon Lutolli</h4>
            <p className='text-primary opacity-50'>Software Engineer</p>
          </div>
        </div>
        <div className='text-sm w-[250px]'>
          <p className='mb-2'>
            <strong className='text-primary'>redon@linuxpc:~$ </strong>
            socials ls
          </p>

          <ul className='flex items-center gap-4'>
            {SOCIAL_LINKS.map(link => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary link-transition focus-ring group relative inline-block'
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>

          <p className='mt-6 opacity-50'>made with /~.zsh</p>
        </div>
      </div>
      <div>
        <Link
          className='flex gap-1 hover:text-primary link-transition text-sm focus-ring'
          href='https://www.google.com/maps/place/Pristina/@42.6664358,21.1175278,12786m/data=!3m2!1e3!4b1!4m6!3m5!1s0x13549ee605110927:0x9365bfdf385eb95a!8m2!3d42.6673053!4d21.1643067!16zL20vMDFueWhs?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D'
          target='_blank'
          rel='noopener noreferrer'
        >
          <MapPin height={20} />
          <p>Prishtina, Kosovo</p>
        </Link>
      </div>
    </footer>
  )
}
