import { useState, useEffect, useCallback, useRef } from 'react'
import { FaShoppingCart, FaInfoCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import {
  GiMeat, GiPlantRoots
} from 'react-icons/gi'
import {
  MdOutdoorGrill, MdHouse, MdDirectionsCar,
  MdKitchen, MdElectricBolt, MdCheckroom
} from 'react-icons/md'
import './BannerCarousel.css'

const banners = [
  {
    category: 'Raw Food',
    icon: GiMeat,
    name: 'Premium Wagyu Beef',
    tag: 'Best Seller',
    price: '₦12,500 / kg',
    description:
      'Hand-selected A5-grade Wagyu cuts, sourced fresh daily from certified farms. Rich marbling, melt-in-your-mouth texture — delivered to your door within hours.',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1400&auto=format&fit=crop&q=80',
  },
  {
    category: 'Cooked Food',
    icon: MdOutdoorGrill,
    name: 'Jollof Rice Supreme',
    tag: `Chef's Special`,
    price: '₦3,200 / plate',
    description:
      'Slow-cooked party jollof with smoky tomato base, seasoned grilled chicken, and a side of fried plantain. Made fresh by top-rated home chefs near you.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1400&auto=format&fit=crop&q=80',
  },
  {
    category: 'Houses',
    icon: MdHouse,
    name: '4-Bedroom Lekki Duplex',
    tag: 'New Listing',
    price: '₦85,000,000',
    description:
      'Spacious fully-finished duplex in a serene Lekki Phase 1 estate. BOQ available, 24/7 security, ample parking, and proximity to major expressways.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&auto=format&fit=crop&q=80',
  },
  {
    category: 'Cars',
    icon: MdDirectionsCar,
    name: '2023 Toyota Camry XSE',
    tag: 'Clean Title',
    price: '₦28,500,000',
    description:
      'Foreign-used 2023 Camry V6 XSE, full leather interior, sunroof, adaptive cruise control. Tokunbo with full service history. Drive away today.',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1400&auto=format&fit=crop&q=80',
  },
  {
    category: 'Kitchen Utensils',
    icon: MdKitchen,
    name: 'Pro Chef Cookware Set',
    tag: 'Bundle Deal',
    price: '₦45,000 / set',
    description:
      '12-piece stainless steel cookware set with tri-ply copper core. Even heat distribution, ergonomic handles, dishwasher safe — everything a serious kitchen needs.',
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=1400&auto=format&fit=crop&q=80',
  },
  {
    category: 'Electronics',
    icon: MdElectricBolt,
    name: 'Samsung 65" QLED 4K TV',
    tag: 'Flash Sale',
    price: '₦680,000',
    description:
      'Quantum HDR, 120Hz refresh rate, and AI-powered upscaling for cinema-grade viewing at home. Compatible with all major smart home ecosystems.',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?w=1400&auto=format&fit=crop&q=80',
  },
  {
    category: 'Fashion',
    icon: MdCheckroom,
    name: 'Ankara Luxury Collection',
    tag: 'Limited Edition',
    price: '₦18,000 / piece',
    description:
      'Bold contemporary Ankara pieces crafted by Lagos-based designers. Premium 100% cotton fabric, hand-stitched detailing, available in sizes XS–3XL.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&auto=format&fit=crop&q=80',
  },
  {
    category: 'Fresh Produce',
    icon: GiPlantRoots,
    name: 'Organic Farm Box',
    tag: 'Farm Direct',
    price: '₦8,500 / box',
    description:
      'Weekly curated box of 15+ seasonal organic vegetables and fruits — harvested at peak freshness from verified farms in Ogun and Plateau States.',
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=1400&auto=format&fit=crop&q=80',
  },
]

const AUTO_PLAY_INTERVAL = 10000

export default function BannerCarousel() {
  const [current, setCurrent]   = useState(0)
  const [exiting, setExiting]   = useState(null)
  const [progKey, setProgKey]   = useState(0)
  const timerRef                = useRef(null)

  const goTo = useCallback((index) => {
    setExiting(current)
    setCurrent(index)
    setProgKey(k => k + 1)
    setTimeout(() => setExiting(null), 900)
  }, [current])

  const next = useCallback(() => goTo((current + 1) % banners.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + banners.length) % banners.length), [current, goTo])

  // Auto-play
  useEffect(() => {
    timerRef.current = setInterval(() => next(), AUTO_PLAY_INTERVAL)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [next])

  // Pause on hover
  const pauseAuto  = () => {
    if (timerRef.current) clearInterval(timerRef.current)
  }
  const resumeAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => next(), AUTO_PLAY_INTERVAL)
  }

  // Keyboard nav
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft')  prev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  return (
    <section
      className="banner-carousel"
      onMouseEnter={pauseAuto}
      onMouseLeave={resumeAuto}
      aria-label="Featured categories carousel"
    >
      {/* Progress bar */}
      <div key={progKey} className="banner-progress" />

      {/* Slides */}
      {banners.map((banner, i) => {
        const Icon = banner.icon
        const isActive  = i === current
        const isExiting = i === exiting
        return (
          <div
            key={i}
            className={`banner-slide ${isActive ? 'active' : ''} ${isExiting ? 'exiting' : ''}`}
            aria-hidden={!isActive}
          >
            {/* BG Image */}
            <div
              className="banner-bg"
              style={{ backgroundImage: `url(${banner.image})` }}
            />
            <div className="banner-overlay" />

            {/* Content */}
            {isActive && (
              <div className="banner-content">
                <div className="banner-badge">
                  <Icon size={12} />
                  {banner.category}
                </div>

                <h2 className="banner-title">{banner.name}</h2>

                <div className="banner-meta">
                  <span className="banner-price">{banner.price}</span>
                  <span className="banner-meta-dot" />
                  <span className="banner-tag">{banner.tag}</span>
                </div>

                <p className="banner-desc">{banner.description}</p>

                <div className="banner-actions">
                  <button className="banner-order-btn">
                    <FaShoppingCart size={15} />
                    Order Now
                  </button>
                  <button className="banner-info-btn">
                    <FaInfoCircle size={15} />
                    More Info
                  </button>
                </div>
              </div>
            )}
          </div>
        )
      })}

      {/* Arrows */}
      <button className="banner-arrow prev" onClick={prev} aria-label="Previous slide">
        <FaChevronLeft size={16} />
      </button>
      <button className="banner-arrow next" onClick={next} aria-label="Next slide">
        <FaChevronRight size={16} />
      </button>

      {/* Dots */}
      <div className="banner-dots" role="tablist" aria-label="Slide indicators">
        {banners.map((_, i) => (
          <button
            key={i}
            className={`banner-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="banner-counter">
        <span>{String(current + 1).padStart(2, '0')}</span>
        {' / '}
        {String(banners.length).padStart(2, '0')}
      </div>
    </section>
  )
}