import Reveal from './Reveal'
import { certifications, profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="pb-8 pt-6 sm:pb-12 sm:pt-10">
      <div className="mx-auto w-[min(1120px,calc(100%-1.5rem))] text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[18ch] text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl">
            {profile.statementTitle}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.statementBody}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="mt-10 mb-4 text-sm font-bold uppercase tracking-[0.18em] text-accent">
            Certifications
          </h3>
        </Reveal>

        <Reveal delay={0.12} className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="rounded-xl border border-accent/20 bg-white/[0.04] px-4 py-4 text-center text-sm font-semibold leading-snug text-white/85"
            >
              {cert}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
