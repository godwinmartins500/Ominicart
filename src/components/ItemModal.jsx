import { useState, useEffect } from 'react'
import { MdAddShoppingCart, MdClose, MdArrowForward } from 'react-icons/md'
import './ItemModal.css'

function Stars({ rating }) {
  return (
    <div className="im-rating">
      {[1, 2, 3, 4, 5].map(n => (
        <span key={n} className={`im-star ${n <= rating ? '' : 'empty'}`}>★</span>
      ))}
      <span className="im-rating-num">({rating}.0)</span>
    </div>
  )
}

export default function ItemModal({ item, isOpen, onClose, similarItems, category }) {
  const [quantity, setQuantity] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !item) return null

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(onClose, 300)
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${item.name} to cart`)
  }

  const handleOrder = () => {
    console.log(`Ordering ${quantity} of ${item.name}`)
  }

  const handleQuantityChange = (e) => {
    const val = parseInt(e.target.value)
    if (val > 0) setQuantity(val)
  }

  // Filter similar items (excluding current item)
  const filtered = similarItems.filter(i => i.id !== item.id).slice(0, 4)

  return (
    <>
      {/* Backdrop */}
      <div
        className={`im-backdrop ${isAnimating ? 'active' : ''}`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div className={`im-modal ${isAnimating ? 'active' : ''}`}>
        {/* Close button */}
        <button className="im-close-btn" onClick={handleClose} aria-label="Close modal">
          <MdClose size={24} />
        </button>

        {/* Main content wrapper */}
        <div className="im-content">
          {/* Image section */}
          <div className="im-image-section">
            <div className="im-image-container">
              <img src={item.img} alt={item.name} className="im-image" />
              {item.badge && <span className="im-badge">{item.badge}</span>}
            </div>
          </div>

          {/* Details section */}
          <div className="im-details-section">
            {/* Header */}
            <div className="im-header">
              <div>
                <h1 className="im-title">{item.name}</h1>
                <p className="im-subtitle">{item.sub}</p>
              </div>
            </div>

            {/* Rating */}
            <Stars rating={item.rating} />

            {/* Price */}
            <div className="im-price-section">
              <span className="im-price">{item.price}</span>
              <span className="im-price-label">per unit</span>
            </div>

            {/* Description */}
            <div className="im-description">
              <h3 className="im-section-title">About this item</h3>
              <p className="im-description-text">
                High-quality {item.name.toLowerCase()} sourced from trusted suppliers. Perfect for your needs with excellent durability and value. Fast delivery available to your location.
              </p>
            </div>

            {/* Quantity selector */}
            <div className="im-quantity-section">
              <label htmlFor="quantity" className="im-quantity-label">Quantity</label>
              <div className="im-quantity-control">
                <button
                  className="im-qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  −
                </button>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="im-qty-input"
                />
                <button
                  className="im-qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="im-actions">
              <button className="im-btn im-btn-cart" onClick={handleAddToCart}>
                <MdAddShoppingCart size={18} />
                <span>Add to Cart</span>
              </button>
              <button className="im-btn im-btn-order" onClick={handleOrder}>
                <span>Order Now</span>
                <MdArrowForward size={18} />
              </button>
            </div>

            {/* Similar items section */}
            {filtered.length > 0 && (
              <div className="im-similar-section">
                <h3 className="im-section-title">Similar Items</h3>
                <div className="im-similar-grid">
                  {filtered.map(similarItem => (
                    <div key={similarItem.id} className="im-similar-item">
                      <div className="im-similar-img-wrap">
                        <img
                          src={similarItem.img}
                          alt={similarItem.name}
                          className="im-similar-img"
                        />
                        {similarItem.badge && (
                          <span className="im-similar-badge">{similarItem.badge}</span>
                        )}
                      </div>
                      <div className="im-similar-info">
                        <p className="im-similar-name">{similarItem.name}</p>
                        <p className="im-similar-price">{similarItem.price}</p>
                        <button className="im-similar-btn">
                          <MdAddShoppingCart size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
