export default function Footer() {
  return (
    <footer id="footer" className="border-t border-hairline mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-2xl tracking-widest2 uppercase mb-4">
            Maison Noir
          </h3>
          <p className="text-sm text-graphite leading-relaxed max-w-xs">
            A small atelier of numbered pieces — rings, necklaces, and
            earrings made to be worn, not just displayed.
          </p>
        </div>

        <div id="about">
          <h4 className="text-xs tracking-widest2 uppercase text-graphite mb-4">
            Atelier
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="underline-grow inline-block cursor-pointer">Our Process</li>
            <br />
            <li className="underline-grow inline-block cursor-pointer">Materials</li>
            <br />
            <li className="underline-grow inline-block cursor-pointer">Care Guide</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-widest2 uppercase text-graphite mb-4">
            Contact
          </h4>
          <p className="text-sm text-graphite">hello@maisonnoir.example</p>
          <p className="text-sm text-graphite mt-1">Mon–Fri, 10:00–18:00</p>
        </div>
      </div>
      <div className="border-t border-hairline py-6 text-center text-xs text-graphite">
        © {new Date().getFullYear()} Maison Noir. All rights reserved.
      </div>
    </footer>
  )
}
