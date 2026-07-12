import { useMemo, useState } from 'react'
import { CartProvider } from './context/CartContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FilterBar from './components/FilterBar.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import ProductModal from './components/ProductModal.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import Footer from './components/Footer.jsx'
import products from './data/products.js'

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return products
    return products.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />

          <section id="collection" className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
            <div className="flex items-end justify-between mb-8">
              <h2 className="font-display text-3xl md:text-4xl">
                The Collection
              </h2>
              <span className="text-xs text-graphite hidden sm:block">
                {filteredProducts.length} piece
                {filteredProducts.length !== 1 ? 's' : ''}
              </span>
            </div>

            <FilterBar
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />

            <ProductGrid
              products={filteredProducts}
              onSelect={setSelectedProduct}
            />
          </section>
        </main>
        <Footer />

        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
