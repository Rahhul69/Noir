import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-24 md:pt-32 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-widest2 uppercase text-gold-deep mb-6"
          >
            The Permanent Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl leading-[1.05] font-light text-ink"
          >
            Quiet pieces,
            <br />
            <span className="italic text-graphite">held onto</span>
            <br />
            for years.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-graphite max-w-md leading-relaxed"
          >
            Each piece in the atelier is numbered, not named — a small
            catalogue of rings, necklaces, and earrings designed to be worn
            daily and inherited eventually.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10"
          >
            <a
              href="#collection"
              className="inline-block border border-ink px-8 py-3 text-xs tracking-widest2 uppercase hover:bg-ink hover:text-paper transition-colors duration-300"
            >
              View Collection
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-soft"
        >
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
            alt="Featured fine jewelry piece on display"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute bottom-5 left-5 bg-paper/90 backdrop-blur-sm px-4 py-2 text-xs tracking-widest2 uppercase">
            No. 05 — Filament Pendant
          </div>
        </motion.div>
      </div>
    </section>
  )
}
