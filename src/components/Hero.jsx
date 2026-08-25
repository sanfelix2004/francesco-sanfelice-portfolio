import Reveal from './Reveal'
import { profile, tools } from '../data/profile'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-10 pt-8 sm:pb-16 sm:pt-12">
      <div className="mx-auto grid w-[min(1120px,calc(100%-1.5rem))] items-center gap-8 lg:grid-cols-[1fr_minmax(240px,420px)_1fr] lg:gap-6">
        {/* Left label */}
        <Reveal className="order-2 text-center lg:order-1 lg:text-right">
          <div className="inline-flex flex-col items-center gap-3 lg:items-end lg:[writing-mode:vertical-rl] lg:rotate-180">
            <span className="h-px w-10 bg-accent lg:h-10 lg:w-px" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-sm">
              {profile.role}
            </p>
          </div>
        </Reveal>

        {/* Center avatar */}
        <Reveal className="relative order-1 mx-auto w-full max-w-[420px] lg:order-2" delay={0.05}>
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow/70 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <img
              src={profile.avatar}
              alt={`${profile.name} — stylized portrait`}
              className="relative z-10 mx-auto aspect-[3/4] w-full rounded-3xl object-cover object-top shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              width={840}
              height={1120}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-[8%] z-20 px-2 text-center">
              <p className="mb-1 text-[0.7rem] font-bold uppercase tracking-[0.35em] text-accent sm:text-xs">
                {profile.tagline}
              </p>
              <h1 className="bg-gradient-to-b from-white via-white to-white/55 bg-clip-text text-4xl font-extrabold uppercase leading-[0.9] tracking-tight text-transparent sm:text-5xl md:text-6xl">
                {profile.shortName}
                <span className="mt-1 block text-[0.42em] tracking-[0.22em] text-white/80">
                  {profile.lastName}
                </span>
              </h1>
            </div>
          </div>
        </Reveal>

        {/* Right bio */}
        <Reveal className="order-3 mx-auto max-w-md text-center lg:mx-0 lg:justify-self-start lg:text-left" delay={0.1}>
          <p className="text-base leading-relaxed text-muted sm:text-[1.05rem]">{profile.bio}</p>
        </Reveal>
      </div>

      {/* Tools row */}
      <Reveal className="mx-auto mt-10 flex w-[min(1120px,calc(100%-1.5rem))] flex-wrap items-center justify-center gap-2 sm:mt-12" delay={0.15}>
        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-wider text-white/70"
          >
            {tool}
          </span>
        ))}
      </Reveal>
    </section>
  )
}
