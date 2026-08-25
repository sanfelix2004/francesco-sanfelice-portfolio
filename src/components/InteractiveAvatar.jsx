import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data/profile'

/**
 * Interactive hero avatar — greets on hover / focus / tap.
 */
export default function InteractiveAvatar() {
  const [greeting, setGreeting] = useState(false)

  const show = () => setGreeting(true)
  const hide = () => setGreeting(false)

  return (
    <div
      className="relative mx-auto w-full cursor-pointer select-none"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      onTouchStart={show}
      role="img"
      aria-label={`${profile.name} — hover to say hi`}
      tabIndex={0}
    >
      <motion.div
        animate={greeting ? { y: [-2, 4, -2], rotate: [0, -1.2, 1.2, 0] } : { y: 0, rotate: 0 }}
        transition={
          greeting
            ? { duration: 0.7, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.25 }
        }
        className="relative"
      >
        <img
          src={profile.avatar}
          alt={`${profile.name} — stylized portrait with curly fade haircut`}
          className="relative z-10 mx-auto aspect-[3/4] w-full rounded-3xl object-cover object-top shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-[filter] duration-300"
          style={{ filter: greeting ? 'brightness(1.06) saturate(1.08)' : 'none' }}
          width={840}
          height={1120}
          draggable={false}
        />

        {/* Waving hand */}
        <AnimatePresence>
          {greeting && (
            <motion.span
              className="pointer-events-none absolute right-[8%] top-[28%] z-30 text-5xl drop-shadow-lg sm:text-6xl"
              initial={{ opacity: 0, scale: 0.4, rotate: -25 }}
              animate={{ opacity: 1, scale: 1, rotate: [0, 25, -10, 20, 0] }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                rotate: { duration: 0.9, repeat: Infinity, ease: 'easeInOut' },
                opacity: { duration: 0.2 },
                scale: { type: 'spring', stiffness: 320, damping: 14 },
              }}
              aria-hidden
            >
              👋
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Speech bubble */}
      <AnimatePresence>
        {greeting && (
          <motion.div
            className="absolute -right-2 top-[12%] z-40 max-w-[11rem] sm:-right-6 sm:top-[10%]"
            initial={{ opacity: 0, y: 10, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 280, damping: 18 }}
          >
            <div className="rounded-2xl rounded-bl-md border border-accent/50 bg-panel px-3 py-2 text-left shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
              <p className="text-sm font-bold text-white">Hey! 👋</p>
              <p className="text-xs leading-snug text-muted">
                Nice to meet you — I&apos;m Francesco.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Name overlay */}
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
  )
}
