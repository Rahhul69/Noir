import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { useEffect } from 'react'

export default function ProductModal({ product, onClose }) {
  const { addItem } = useCart()

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = product ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [product, onClose])

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={product.name}
            className="relative z-10 bg-card w-full max-w-3xl max-h-[88vh] overflow-y-auto grid md:grid-cols-2 shadow-soft rounded-sm"
          >
            <button
              onClick={onClose}
              aria-label="Close product details"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-paper/90 flex items-center justify-center hover:bg-paper transition-colors"
            >
              <X size={18} strokeWidth={1.4} />
            </button>

            <div className="aspect-square md:aspect-auto md:h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:p-10 flex flex-col">
              <span className="text-[10px] tracking-widest2 uppercase text-gold-deep mb-4">
                No. {product.catalogueNo} — {product.category}
              </span>
              <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
                {product.name}
              </h2>
              <p className="text-graphite leading-relaxed mb-6">
                {product.description}
              </p>
              <div className="text-xs uppercase tracking-widest2 text-graphite mb-1">
                Material
              </div>
              <p className="text-sm text-ink mb-8">{product.material}</p>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-hairline">
                <span className="font-display text-2xl">
                  ${product.price.toLocaleString()}
                </span>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    addItem(product)
                    onClose()
                  }}
                  className="bg-ink text-paper px-7 py-3 text-xs tracking-widest2 uppercase hover:bg-gold-deep transition-colors duration-300"
                >
                  Add to Bag
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
