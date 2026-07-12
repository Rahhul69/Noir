import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import CartItem from './CartItem.jsx'
import { useEffect } from 'react'

export default function CartDrawer() {
  const { items, isOpen, closeCart, clearCart, subtotal } = useCart()

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') closeCart()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeCart])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping bag"
            className="fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-card shadow-soft flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
              <h2 className="font-display text-2xl">Your Bag</h2>
              <button
                onClick={closeCart}
                aria-label="Close bag"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-ink/5 transition-colors"
              >
                <X size={18} strokeWidth={1.4} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-graphite">
                  <ShoppingBag size={32} strokeWidth={1} className="mb-4 opacity-50" />
                  <p className="font-display text-xl italic mb-1">Your bag is empty</p>
                  <p className="text-sm">Pieces you add will appear here.</p>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </AnimatePresence>
              )}
            </div>

            {items.length > 0 && (
              <div className="px-6 py-6 border-t border-hairline">
                <div className="flex items-center justify-between mb-1 text-sm text-graphite">
                  <span>Subtotal</span>
                  <span>Shipping calculated at checkout</span>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-2xl">Total</span>
                  <span className="font-display text-2xl">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>
                <button className="w-full bg-ink text-paper py-4 text-xs tracking-widest2 uppercase hover:bg-gold-deep transition-colors duration-300 mb-3">
                  Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-xs tracking-widest2 uppercase text-graphite hover:text-ink py-2 transition-colors"
                >
                  Clear Bag
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
