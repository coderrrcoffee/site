import Photo from '../components/ui/Photo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CtaBand from '../components/ui/CtaBand.jsx'
import { about } from '../content/site.js'

export default function AboutPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <p className="eyebrow">{about.eyebrow}</p>
          <h1 className="page-header__title">{about.title}</h1>
          <p className="page-header__intro">{about.lead}</p>
        </div>
      </div>

      <section className="section section--tight">
        <div className="container about-grid">
          <Photo
            alt="Фото репетитора"
            caption={about.photoCaption}
            className="about-photo"
          />
          <Reveal>
            <h2>{about.storyTitle}</h2>
            {about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <Reveal>
            <h2>{about.credentialsTitle}</h2>
            <ul className="check-list">
              {about.credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <h2>{about.principlesTitle}</h2>
            <div className="card-grid">
              {about.principles.map((principle) => (
                <article className="subject" key={principle.title}>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
