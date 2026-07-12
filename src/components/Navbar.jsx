import { ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext.jsx'

export default function Navbar() {
  const { itemCount, openCart } = useCart()

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-sm border-b border-hairline">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#top" className="font-display text-2xl tracking-widest2 uppercase">
          Maison <span className="text-gold-deep">Noir</span>
        </a>

        <nav className="hidden md:flex items-center gap-10 text-xs tracking-widest2 uppercase text-graphite">
          <a href="#collection" className="underline-grow hover:text-ink transition-colors">
            Collection
          </a>
          <a href="#about" className="underline-grow hover:text-ink transition-colors">
            Atelier
          </a>
          <a href="#footer" className="underline-grow hover:text-ink transition-colors">
            Contact
          </a>
        </nav>

        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={openCart}
          aria-label="Open shopping bag"
          className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-ink/5 transition-colors"
        >
          <ShoppingBag size={20} strokeWidth={1.4} />
          {itemCount > 0 && (
            <motion.span
              key={itemCount}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute -top-1 -right-1 flex items-center justify-center w-4.5 h-4.5 min-w-[18px] min-h-[18px] rounded-full bg-ink text-paper text-[10px] font-medium"
            >
              {itemCount}
            </motion.span>
          )}
        </motion.button>
      </div>
    </header>
  )
}
