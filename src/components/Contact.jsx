import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FiExternalLink, FiFileText, FiMail } from 'react-icons/fi'
import Reveal from './Reveal'
import { contacts } from '../data/profile'

const iconMap = {
  email: FiMail,
  whatsapp: FaWhatsapp,
  github: FaGithub,
  linkedin: FaLinkedin,
  cv: FiFileText,
  link: FiExternalLink,
}

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-14 sm:py-20">
      <div className="mx-auto w-[min(1120px,calc(100%-1.5rem))] text-center">
        <Reveal>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact me</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto inline-flex max-w-full flex-wrap items-center justify-center gap-x-5 gap-y-4 rounded-full border border-accent/35 bg-panel/90 px-5 py-4 sm:gap-x-7 sm:px-8">
            {contacts.map((item) => {
              const Icon = iconMap[item.kind] || FiExternalLink
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  download={item.download || undefined}
                  className="group flex min-w-[3.8rem] flex-col items-center gap-2"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-accent/50 bg-white text-bg transition group-hover:scale-110 group-hover:bg-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[0.68rem] font-semibold uppercase tracking-wide text-muted group-hover:text-accent">
                    {item.label}
                  </span>
                </a>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
