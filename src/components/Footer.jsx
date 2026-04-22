import {
  FaHome, FaInfoCircle, FaEnvelope, FaShoppingCart, FaUser,
  FaPhone, FaMapMarkerAlt, FaPaperPlane,
  FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok
} from 'react-icons/fa'
import {
  MdOutdoorGrill, MdKitchen, MdHouse, MdDirectionsCar,
  MdElectricBolt, MdCheckroom
} from 'react-icons/md'
import { GiMeat, GiPlantRoots } from 'react-icons/gi'
import './Footer.css'

const quickLinks = [
  { name: 'Home',         href: '/',        icon: FaHome },
  { name: 'About Us',     href: '/about',   icon: FaInfoCircle },
  { name: 'Contact',      href: '/contact', icon: FaEnvelope },
  { name: 'My Account',   href: '/account', icon: FaUser },
  { name: 'Cart',         href: '/cart',    icon: FaShoppingCart },
]

const categories = [
  { name: 'Raw Food',         href: '#', icon: GiMeat },
  { name: 'Cooked Food',      href: '#', icon: MdOutdoorGrill },
  { name: 'Houses',           href: '#', icon: MdHouse },
  { name: 'Cars',             href: '#', icon: MdDirectionsCar },
  { name: 'Kitchen Utensils', href: '#', icon: MdKitchen },
  { name: 'Electronics',      href: '#', icon: MdElectricBolt },
  { name: 'Fashion',          href: '#', icon: MdCheckroom },
  { name: 'Fresh Produce',    href: '#', icon: GiPlantRoots },
]

const socials = [
  { label: 'Facebook',  href: '#', icon: FaFacebookF },
  { label: 'Twitter',   href: '#', icon: FaTwitter },
  { label: 'Instagram', href: '#', icon: FaInstagram },
  { label: 'TikTok',    href: '#', icon: FaTiktok },
  { label: 'YouTube',   href: '#', icon: FaYoutube },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-accent-bar" />

      <div className="footer-body">

        {/* ── Brand ── */}
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            <div className="footer-logo-box">O</div>
            <span className="footer-logo-text">OmniCart</span>
          </a>
          <p className="footer-tagline">
            Your all‑in‑one marketplace for food, homes, wheels, and everything in between.
          </p>

          <div className="footer-contact-item">
            <FaEnvelope size={13} className="footer-contact-icon" />
            <span>hello@omnicart.com</span>
          </div>
          <div className="footer-contact-item">
            <FaPhone size={13} className="footer-contact-icon" />
            <span>+234 800 000 0000</span>
          </div>
          <div className="footer-contact-item">
            <FaMapMarkerAlt size={13} className="footer-contact-icon" />
            <span>Lagos, Nigeria</span>
          </div>
        </div>

        {/* ── Quick Links ── */}
        <div>
          <p className="footer-label">Quick Links</p>
          <ul className="footer-links-list">
            {quickLinks.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <a href={href}>
                  <Icon size={13} className="link-icon" />
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Categories ── */}
        <div>
          <p className="footer-label">Categories</p>
          <div className="footer-categories">
            {categories.map(({ name, href, icon: Icon }) => (
              <a key={name} href={href} className="footer-cat-link">
                <span className="cat-icon-wrap">
                  <Icon size={14} />
                </span>
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* ── Newsletter + Social ── */}
        <div className="footer-right">
          <p className="footer-label">Stay Updated</p>
          <p className="newsletter-desc">
            Get the latest deals, new arrivals, and exclusive offers straight to your inbox.
          </p>
          <div className="newsletter-row">
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
            />
            <button className="newsletter-btn">
              Subscribe <FaPaperPlane size={12} />
            </button>
          </div>

          <p className="footer-label" style={{ marginTop: '2rem' }}>Follow Us</p>
          <div className="social-row">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="social-btn"
                aria-label={label}
                title={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

      </div>

      <hr className="footer-divider-line" />

      <div className="footer-bottom">
        <span className="footer-copy">
          © {new Date().getFullYear()} <span>OmniCart</span>. All rights reserved.
        </span>
        <div className="footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <span className="legal-dot" />
          <a href="/terms">Terms of Service</a>
          <span className="legal-dot" />
          <a href="/cookies">Cookies</a>
        </div>
      </div>
    </footer>
  )
}