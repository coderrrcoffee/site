import Nav from './Nav.jsx'
import Button from '../ui/Button.jsx'
import { contacts } from '../../content/site.js'

export default function MobileMenu({ open, items, onNavigate }) {
  return (
    <div id="mobile-menu" className={`mobile-menu${open ? ' is-open' : ''}`}>
      <div className="mobile-menu__inner">
        <Nav
          items={items}
          className="mobile-menu__nav"
          onNavigate={onNavigate}
        />
        <div className="mobile-menu__actions">
          <Button
            href={contacts.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать в Telegram
          </Button>
          <Button href={contacts.phone.href} variant="secondary">
            {contacts.phone.label}
          </Button>
        </div>
      </div>
    </div>
  )
}
