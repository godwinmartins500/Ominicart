import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import BannerCarousel from './components/Bannercarousel'
import CategoryStrip from './components/Categorystrip'
import ProductSections from './components/Productsections'

function App() {
  return (
    <div className="app">
      <Header />
      <BannerCarousel />
      <CategoryStrip />
      <ProductSections />
      <Footer />
    </div>
  )
}

export default App