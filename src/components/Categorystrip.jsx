import { useRef, useState } from 'react'
import { GiMeat, GiPlantRoots } from 'react-icons/gi'
import {
  MdOutdoorGrill, MdHouse, MdDirectionsCar,
  MdKitchen, MdElectricBolt, MdCheckroom
} from 'react-icons/md'
import './CategoryStrip.css'

const categories = [
  {
    name: 'Raw Food',
    count: '240+ items',
    icon: GiMeat,
    style: {
      '--card-bg':       '#0f1f0f',
      '--card-gradient': 'linear-gradient(135deg, #16a34a, #4ade80)',
      '--card-blob':     '#16a34a',
      '--card-border':   'rgba(74, 222, 128, 0.45)',
      '--card-shadow':   'rgba(22, 163, 74, 0.3)',
    },
  },
  {
    name: 'Cooked Food',
    count: '180+ items',
    icon: MdOutdoorGrill,
    style: {
      '--card-bg':       '#1f1200',
      '--card-gradient': 'linear-gradient(135deg, #ea580c, #fb923c)',
      '--card-blob':     '#ea580c',
      '--card-border':   'rgba(251, 146, 60, 0.45)',
      '--card-shadow':   'rgba(234, 88, 12, 0.3)',
    },
  },
  {
    name: 'Houses',
    count: '95+ listings',
    icon: MdHouse,
    style: {
      '--card-bg':       '#0c1a2e',
      '--card-gradient': 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
      '--card-blob':     '#1e3a8a',
      '--card-border':   'rgba(59, 130, 246, 0.45)',
      '--card-shadow':   'rgba(30, 58, 138, 0.35)',
    },
  },
  {
    name: 'Cars',
    count: '320+ listings',
    icon: MdDirectionsCar,
    style: {
      '--card-bg':       '#1a0a2e',
      '--card-gradient': 'linear-gradient(135deg, #7c3aed, #a78bfa)',
      '--card-blob':     '#7c3aed',
      '--card-border':   'rgba(167, 139, 250, 0.45)',
      '--card-shadow':   'rgba(124, 58, 237, 0.3)',
    },
  },
  {
    name: 'Kitchen Utensils',
    count: '410+ items',
    icon: MdKitchen,
    style: {
      '--card-bg':       '#1f0f18',
      '--card-gradient': 'linear-gradient(135deg, #be185d, #ec4899)',
      '--card-blob':     '#be185d',
      '--card-border':   'rgba(236, 72, 153, 0.45)',
      '--card-shadow':   'rgba(190, 24, 93, 0.3)',
    },
  },
  {
    name: 'Electronics',
    count: '530+ items',
    icon: MdElectricBolt,
    style: {
      '--card-bg':       '#0f1a1f',
      '--card-gradient': 'linear-gradient(135deg, #0891b2, #22d3ee)',
      '--card-blob':     '#0891b2',
      '--card-border':   'rgba(34, 211, 238, 0.45)',
      '--card-shadow':   'rgba(8, 145, 178, 0.3)',
    },
  },
  {
    name: 'Fashion',
    count: '860+ items',
    icon: MdCheckroom,
    style: {
      '--card-bg':       '#1f1a0a',
      '--card-gradient': 'linear-gradient(135deg, #b45309, #fbbf24)',
      '--card-blob':     '#b45309',
      '--card-border':   'rgba(251, 191, 36, 0.45)',
      '--card-shadow':   'rgba(180, 83, 9, 0.3)',
    },
  },
  {
    name: 'Fresh Produce',
    count: '150+ items',
    icon: GiPlantRoots,
    style: {
      '--card-bg':       '#101f14',
      '--card-gradient': 'linear-gradient(135deg, #065f46, #34d399)',
      '--card-blob':     '#065f46',
      '--card-border':   'rgba(52, 211, 153, 0.45)',
      '--card-shadow':   'rgba(6, 95, 70, 0.3)',
    },
  },
]

export default function CategoryStrip() {
  const trackRef  = useRef(null)
  const [active, setActive] = useState(null)

  // ── Drag to scroll ──
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0 })

  const onMouseDown = (e) => {
    drag.current = { down: true, startX: e.pageX - trackRef.current.offsetLeft, scrollLeft: trackRef.current.scrollLeft }
  }
  const onMouseLeave = () => { drag.current.down = false }
  const onMouseUp    = () => { drag.current.down = false }
  const onMouseMove  = (e) => {
    if (!drag.current.down) return
    e.preventDefault()
    const x    = e.pageX - trackRef.current.offsetLeft
    const walk = (x - drag.current.startX) * 1.4
    trackRef.current.scrollLeft = drag.current.scrollLeft - walk
  }

  // ── Arrow scroll handlers ──
  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <section className="cat-strip-section">
      <div className="cat-strip-header">
        <h2 className="cat-strip-title">
          Shop by <span>Category</span>
        </h2>
        <div className="cat-strip-arrows">
          <button 
            className="cat-arrow cat-arrow-left" 
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button 
            className="cat-arrow cat-arrow-right" 
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <div className="cat-strip-scroll-wrapper">
        <div
          ref={trackRef}
          className="cat-strip-track"
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <a
                key={cat.name}
                href={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`cat-card ${active === cat.name ? 'selected' : ''}`}
                style={cat.style}
                onClick={() => setActive(cat.name)}
                draggable={false}
              >
                <div className="cat-card-bg" />
                <div className="cat-card-blob b1" />
                <div className="cat-card-blob b2" />

                <div className="cat-card-icon">
                  <Icon size={28} />
                </div>

                <span className="cat-card-name">{cat.name}</span>
                <span className="cat-card-count">{cat.count}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}