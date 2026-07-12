import { motion } from 'framer-motion'
import { categories } from '../data/products.js'

export default function FilterBar({ activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-3 md:gap-6 mb-14">
      {categories.map((cat) => {
        const isActive = activeCategory === cat
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`relative text-xs tracking-widest2 uppercase pb-2 transition-colors duration-300 ${
              isActive ? 'text-ink' : 'text-graphite hover:text-ink'
            }`}
          >
            {cat}
            {isActive && (
              <motion.span
                layoutId="filter-underline"
                className="absolute left-0 right-0 -bottom-px h-px bg-gold-deep"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
          </button>
        )
      })}
    </div>
  )
}
