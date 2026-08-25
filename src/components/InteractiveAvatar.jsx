import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import './InteractiveAvatar.css'

/**
 * Interactive hero avatar.
 * Greets on hover AND click (so it always works on desktop + mobile).
 * Also auto-waves once on first load so the effect is obvious.
 */
export default function InteractiveAvatar() {
  const [active, setActive] = useState(false)

  // Demo salute on first visit so it's unmistakable
  useEffect(() => {
    const start = setTimeout(() => setActive(true), 900)
    const stop = setTimeout(() => setActive(false), 4200)
    return () => {
      clearTimeout(start)
      clearTimeout(stop)
    }
  }, [])

  const onEnter = () => setActive(true)
  const onLeave = () => setActive(false)
  const onClick = (e) => {
    e.preventDefault()
    setActive((v) => !v)
  }

  return (
    <button
      type="button"
      className={`avatar-hit ${active ? 'is-greeting' : ''}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      onClick={onClick}
      aria-pressed={active}
      aria-label="Francesco avatar — passa sopra o clicca per il saluto"
    >
      <div className="avatar-stage">
        <img
          src={profile.avatar}
          alt={`${profile.name} — ricci con sfumatura`}
          className="avatar-img"
          width={840}
          height={1120}
          draggable={false}
        />

        <span className="avatar-hand" aria-hidden>
          👋
        </span>

        <div className="avatar-bubble" role="status">
          <strong>Ciao! 👋</strong>
          <span>Sono Francesco, piacere!</span>
        </div>
      </div>

      <div className="avatar-name">
        <p className="avatar-tag">{profile.tagline}</p>
        <h1>
          {profile.shortName}
          <span>{profile.lastName}</span>
        </h1>
      </div>

      <p className="avatar-hint">passa sopra / clicca per il saluto</p>
    </button>
  )
}
