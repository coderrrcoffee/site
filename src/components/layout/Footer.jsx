import { Link } from 'react-router-dom'
import { nav, tutor, contacts } from '../../content/site.js'
import avatar from '../../assets/avatar.jpg'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">{tutor.name}</p>
          <p className="site-footer__role">
            {tutor.role} · {tutor.city}
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Навигация в подвале">
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__contacts">
          <a
            href={contacts.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contacts.telegram.label}
          </a>
          <a
            href={contacts.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contacts.whatsapp.label}
          </a>
          <a href={contacts.phone.href}>{contacts.phone.label}</a>
          <a href={contacts.email.href}>{contacts.email.label}</a>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>
          © {new Date().getFullYear()} {tutor.name}
        </p>
        <a
          className="credit"
          href="https://t.me/codercoffee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="credit__avatar"
            src={avatar}
            alt=""
            width="28"
            height="28"
            loading="lazy"
          />
          <span className="credit__name">kitten</span>
          <span className="credit__handle">@codercoffee</span>
        </a>
      </div>
    </footer>
  )
}
