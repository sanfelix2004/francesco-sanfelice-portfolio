import Reveal from './Reveal'
import { experience, projects } from '../data/profile'

export default function Work() {
  return (
    <section id="work" className="scroll-mt-24 py-6 sm:py-10">
      <div className="mx-auto w-[min(1120px,calc(100%-1.5rem))]">
        <Reveal>
          <h2 className="mb-6 text-2xl font-medium lowercase tracking-tight text-white sm:mb-8 sm:text-3xl" id="projects">
            selected projects
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-panel/70 p-5 transition hover:scale-[1.015] hover:border-accent/45 hover:shadow-[0_0_28px_rgba(61,220,132,0.1)]"
              >
                <span className="w-fit rounded-full bg-accent/15 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-accent">
                  {project.badge}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white">{project.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
                <span className="text-sm font-bold text-accent">{project.cta} →</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <h2 className="mb-6 text-2xl font-medium lowercase tracking-tight text-white sm:text-3xl">
            experience
          </h2>
        </Reveal>

        <div className="grid gap-3">
          {experience.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="rounded-2xl border border-white/10 bg-panel/55 p-5">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-accent">{item.meta}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
