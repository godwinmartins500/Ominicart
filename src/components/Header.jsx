import { Search, User, Info, Home, Mail, ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Header.css'

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  const navLinks = [
    { name: 'About', href: '/about', icon: Info },
    { name: 'Home', href: '/', icon: Home },
    { name: 'Contact', href: '/contact', icon: Mail },
  ]

  const sidebarVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    exit: { 
      x: '100%', 
      opacity: 0,
      transition: { duration: 0.2, ease: 'easeInOut' }
    }
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <div className="logo">
          <div className="logo-box">O</div>
          <span className="logo-text">OmniCart</span>
        </div>

        {/* Navigation */}
        <nav className="nav-center">
          {navLinks.map((link) => {
            const IconComponent = link.icon
            return (
              <a key={link.name} href={link.href} className="nav-link">
                <IconComponent size={18} className="nav-icon" />
                <span>{link.name}</span>
              </a>
            )
          })}
        </nav>

        {/* Right Side - Search & Profile */}
        <div className="nav-right">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <Search size={20} className="search-icon" />
          </div>
          <button className="cart-btn">
            <ShoppingCart size={24} />
          </button>
          <button className="profile-btn">
            <User size={24} />
          </button>
          
          {/* Menu Toggle */}
          <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Backdrop & Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div 
                className="sidebar-backdrop"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setSidebarOpen(false)}
              />

              <motion.nav 
                className="mobile-sidebar"
                variants={sidebarVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="sidebar-header">
                  <h3>Menu</h3>
                </div>
                
                {navLinks.map((link) => {
                  const IconComponent = link.icon
                  return (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      className="sidebar-link"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <IconComponent size={20} className="sidebar-icon" />
                      <span>{link.name}</span>
                    </a>
                  )
                })}
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
               