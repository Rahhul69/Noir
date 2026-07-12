// Local product catalogue. No backend / database — this file is the single
// source of truth for every item shown in the shop.

const products = [
  {
    id: 'ring-001',
    catalogueNo: '01',
    name: 'Aria Solitaire Ring',
    category: 'Rings',
    price: 1240,
    material: '18k yellow gold, lab-grown diamond',
    description:
      'A single stone set high on a knife-edge band, cut to catch light from every angle. Understated enough for daily wear, precise enough for the moments that matter.',
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ring-002',
    catalogueNo: '02',
    name: 'Verso Twist Band',
    category: 'Rings',
    price: 890,
    material: 'Sterling silver, brushed finish',
    description:
      'Two ribbons of brushed silver wind around each other in a single continuous line — a quiet study in tension and balance, wearable stacked or alone.',
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ring-003',
    catalogueNo: '03',
    name: 'Noir Signet Ring',
    category: 'Rings',
    price: 1580,
    material: 'Blackened sterling silver, 18k gold trim',
    description:
      'A modern take on the archival signet, its face left bare rather than engraved — a mark of restraint rather than initials.',
    image:
      'https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ring-004',
    catalogueNo: '04',
    name: 'Halo Pavé Ring',
    category: 'Rings',
    price: 2150,
    material: '18k white gold, micro-pavé diamonds',
    description:
      'A centre stone circled by a ring of pavé so fine it reads as a single continuous shimmer rather than individual settings.',
    image:
      'https://images.unsplash.com/photo-1587467512961-120760940315?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'necklace-001',
    catalogueNo: '05',
    name: 'Filament Pendant Necklace',
    category: 'Necklaces',
    price: 760,
    material: '14k gold-filled chain, single diamond',
    description:
      'A hair-fine chain carries one stone at the collarbone — the kind of piece meant to be noticed only up close.',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'necklace-002',
    catalogueNo: '06',
    name: 'Lune Collar',
    category: 'Necklaces',
    price: 1340,
    material: 'Sterling silver, rhodium plated',
    description:
      'A rigid collar with a soft, hand-hammered surface — structured in shape, organic in texture.',
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'necklace-003',
    catalogueNo: '07',
    name: 'Longform Layer Chain',
    category: 'Necklaces',
    price: 980,
    material: '18k gold vermeil',
    description:
      'An extra-long paperclip chain designed to be doubled, knotted, or worn to the waist — one piece, three silhouettes.',
    image:
      'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'necklace-004',
    catalogueNo: '08',
    name: 'Petite Bar Necklace',
    category: 'Necklaces',
    price: 540,
    material: 'Sterling silver',
    description:
      'A slim horizontal bar, hand-polished to a soft matte — the shop\'s quietest piece, and its most worn.',
    image:
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'earring-001',
    catalogueNo: '09',
    name: 'Arc Hoop Earrings',
    category: 'Earrings',
    price: 620,
    material: '14k gold, hollow-formed',
    description:
      'A slightly irregular hoop, hollow-formed for weightlessness — the imperfection is deliberate, the comfort is not.',
    image:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'earring-002',
    catalogueNo: '10',
    name: 'Drift Drop Earrings',
    category: 'Earrings',
    price: 780,
    material: '18k gold, freshwater pearl',
    description:
      'A single pearl suspended on a curved gold wire, chosen for its imperfect, near-round shape rather than in spite of it.',
    image:
      'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'earring-003',
    catalogueNo: '11',
    name: 'Stud Trio Set',
    category: 'Earrings',
    price: 430,
    material: 'Sterling silver, cubic zirconia',
    description:
      'Three studs in ascending size, sold as a set for a curated second and third piercing — worn together or apart.',
    image:
      'https://images.unsplash.com/photo-1589207212797-cfd5cbf1dcb8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'earring-004',
    catalogueNo: '12',
    name: 'Fine Line Ear Cuff',
    category: 'Earrings',
    price: 360,
    material: '18k gold vermeil',
    description:
      'No piercing required — a slim cuff that follows the curve of the ear and stays put, a piece for those still deciding.',
    image:
      'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?auto=format&fit=crop&w=800&q=80',
  },
]

export const categories = ['All', 'Rings', 'Necklaces', 'Earrings']

export default products
