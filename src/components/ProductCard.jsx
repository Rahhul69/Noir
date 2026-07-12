import { motion } from 'framer-motion'

export default function ProductCard({ product, onSelect, index }) {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, delay: (index % 12) * 0.04 }}
      onClick={() => onSelect(product)}
      className="group text-left"
    >
      <div className="relative aspect-square overflow-hidden rounded-sm bg-card mb-4">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute top-3 left-3 bg-paper/85 backdrop-blur-sm text-[10px] tracking-widest2 uppercase px-2.5 py-1 text-graphite">
          No. {product.catalogueNo}
        </span>
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl leading-snug">{product.name}</h3>
          <p className="text-xs text-graphite mt-1">{product.category}</p>
        </div>
        <p className="font-body text-sm text-ink whitespace-nowrap mt-1">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </motion.button>
  )
}
