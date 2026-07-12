import { motion } from 'framer-motion'
import { Minus, Plus, X } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

export default function CartItem({ item }) {
  const { setQuantity, removeItem } = useCart()
  const { product, quantity } = item

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
      transition={{ duration: 0.3 }}
      className="flex gap-4 pb-6 mb-6 border-b border-hairline last:border-none"
    >
      <div className="w-20 h-20 rounded-sm overflow-hidden shrink-0 bg-paper">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-display text-lg leading-snug truncate pr-2">
            {product.name}
          </h4>
          <button
            onClick={() => removeItem(product.id)}
            aria-label={`Remove ${product.name} from bag`}
            className="text-graphite hover:text-ink shrink-0 mt-1"
          >
            <X size={15} strokeWidth={1.4} />
          </button>
        </div>
        <p className="text-xs text-graphite mb-3">
          ${product.price.toLocaleString()}
        </p>

        <div className="flex items-center gap-3">
          <div className="flex items-center border border-hairline">
            <button
              onClick={() => setQuantity(product.id, quantity - 1)}
              aria-label="Decrease quantity"
              className="w-7 h-7 flex items-center justify-center hover:bg-ink/5 transition-colors"
            >
              <Minus size={12} strokeWidth={1.6} />
            </button>
            <span className="w-8 text-center text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity(product.id, quantity + 1)}
              aria-label="Increase quantity"
              className="w-7 h-7 flex items-center justify-center hover:bg-ink/5 transition-colors"
            >
              <Plus size={12} strokeWidth={1.6} />
            </button>
          </div>
          <span className="text-xs text-graphite">
            ${(product.price * quantity).toLocaleString()} subtotal
          </span>
        </div>
      </div>
    </motion.div>
  )
}
