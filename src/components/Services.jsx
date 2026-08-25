import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { services } from '../data/profile'

export default function Services() {
  return (
    <section id="services" className="py-10 sm:py-14">
      <div className="mx-auto w-[min(1120px,calc(100%-1.5rem))]">
        <Reveal>
          <h2 className="mb-6 text-2xl font-medium lowercase tracking-tight text-white sm:mb-8 sm:text-3xl">
            what I do
          </h2>
        </Reveal>

        <div className="grid gap-3 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.04}>
              <a
                href={service.href}
                className="group grid grid-cols-[84px_1fr_auto] items-center gap-3 rounded-2xl border border-white/10 bg-panel/70 p-3 transition hover:scale-[1.015] hover:border-accent/50 hover:bg-panel hover:shadow-[0_0_30px_rgba(61,220,132,0.12)] sm:gap-4 sm:p-4"
              >
                <div className="grid h-16 w-[84px] place-items-center rounded-xl bg-gradient-to-br from-accent/25 to-transparent text-sm font-extrabold text-accent">
                  {service.thumb}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white sm:text-[0.95rem]">
                    {service.title}
                  </h3>
                  <p className="mt-1 truncate text-xs text-muted sm:text-sm">{service.subtitle}</p>
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-bg transition group-hover:scale-110">
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
