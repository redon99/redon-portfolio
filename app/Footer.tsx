import { Facebook, GithubIcon, Linkedin, MapPin, MailIcon } from 'lucide-react'
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
  {
    name: 'mail',
    url: 'mailto:redon.lutolli@gmail.com',
    icon: <MailIcon />,
  },
]

export const Footer = () => {
  return (
    <div className='w-full border-primary border-t overflow-x-hidden'>
      <footer className='w-full max-w-5xl mx-auto mt-6 pt-4 pb-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-end gap-6 sm:gap-4'>
        <div className='w-full sm:w-auto flex flex-col items-center sm:items-start'>
          <div className='flex items-center gap-3 sm:gap-4 mb-4 justify-center sm:justify-start'>
            <Image
              src='/redon-profile.jpg'
              alt='Redon Lutolli profile pic'
              width={48}
              height={48}
              className='rounded-full shrink-0 object-cover'
            />
            <div className='text-center sm:text-left'>
              <h4 className='text-primary font-bold text-base sm:text-lg'>
                Redon Lutolli
              </h4>
              <p className='text-primary opacity-50 text-sm sm:text-base'>
                Software Engineer
              </p>
            </div>
          </div>
          <div className='text-xs sm:text-sm w-full sm:max-w-[250px] flex flex-col items-center sm:items-start'>
            <p className='mb-2 break-words text-center sm:text-left'>
              <strong className='text-primary'>redon@linuxpc:~$ </strong>
              socials ls
            </p>

            <ul className='flex items-center justify-center sm:justify-start gap-3 sm:gap-4 flex-wrap'>
              {SOCIAL_LINKS.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-primary link-transition focus-ring group relative inline-block'
                    aria-label={link.name}
                  >
                    <span className='w-5 h-5 sm:w-6 sm:h-6 block'>
                      {link.icon}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className='mt-4 sm:mt-6 opacity-70 text-center sm:text-left'>
              made with /~.zsh
            </p>
          </div>
        </div>
        <div className='shrink-0 flex flex-col items-center sm:items-start'>
          <Link
            className='flex gap-1 hover:text-primary link-transition text-xs sm:text-sm focus-ring items-center justify-center sm:justify-start'
            href='https://www.google.com/maps/place/Pristina/@42.6664358,21.1175278,12786m/data=!3m2!1e3!4b1!4m6!3m5!1s0x13549ee605110927:0x9365bfdf385eb95a!8m2!3d42.6673053!4d21.1643067!16zL20vMDFueWhs?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MapPin className='w-4 h-4 sm:w-5 sm:h-5 shrink-0' />
            <p className='break-words'>Prishtina, Kosovo</p>
          </Link>
        </div>
      </footer>
    </div>
  )
}
