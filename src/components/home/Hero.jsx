import Button from '../ui/Button.jsx'
import Photo from '../ui/Photo.jsx'
import { hero, trial, contacts } from '../../content/site.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__text">{hero.text}</p>
          <div className="hero__actions">
            <Button
              href={contacts.telegram.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.primaryCta}
            </Button>
            <Button to="/lessons" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>
          <p className="hero__note">{trial.note}</p>
        </div>

        <div className="hero__media">
          <Photo alt="Фото репетитора" className="hero__photo" />
        </div>
      </div>
    </section>
  )
}
