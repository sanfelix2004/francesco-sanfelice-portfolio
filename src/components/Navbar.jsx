import { ArrowRight, Check, ShoppingBag } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { href: '#work', label: 'See my work', Icon: ArrowRight },
  { href: '#services', label: 'My catalog', Icon: ShoppingBag },
  { href: '#contact', label: 'Book a service', Icon: Check },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex w-[min(1120px,calc(100%-1.5rem))] items-center justify-between gap-3 py-3 sm:py-4">
        <a href="#top" className="hidden font-extrabold tracking-tight text-white sm:block">
          {profile.shortName}
          <span className="text-accent">.</span>
        </a>

        <div className="flex flex-1 flex-wrap items-center justify-center gap-2 sm:justify-end">
          {links.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              className="group inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white/[0.03] px-3 py-2 text-sm font-medium text-white transition hover:border-accent hover:bg-accent/10 sm:px-4"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-bg transition group-hover:scale-105">
                <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
              <span className="whitespace-nowrap">{label}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
