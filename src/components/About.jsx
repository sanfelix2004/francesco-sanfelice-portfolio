import Reveal from './Reveal'
import { brands, profile } from '../data/profile'

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

        <Reveal delay={0.12} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
          {brands.map((brand) => (
            <div
              key={brand}
              className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-4 text-center text-xs font-semibold uppercase tracking-wider text-white/35 sm:text-sm"
            >
              {brand}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
