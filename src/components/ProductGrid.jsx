import { AnimatePresence } from 'framer-motion'
import ProductCard from './ProductCard.jsx'

export default function ProductGrid({ products, onSelect }) {
  if (products.length === 0) {
    return (
      <div className="py-24 text-center text-graphite">
        <p className="font-display text-2xl italic mb-2">Nothing here yet</p>
        <p className="text-sm">Try a different category.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
      <AnimatePresence mode="popLayout">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            onSelect={onSelect}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
