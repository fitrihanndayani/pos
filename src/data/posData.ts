export type Category = {
  id: string
  name: string
  itemCount: number
}

export type Product = {
  id: string
  name: string
  category: string
  description: string
  price: number
  badge: string
  accent: string
}

export type ActiveOrder = {
  id: string
  customer: string
  table: string
  status: 'Preparing' | 'Ready' | 'Waiting'
  total: number
  items: number
}

export type CartItem = {
  productId: string
  quantity: number
}

export const categories: Category[] = [
  { id: 'all', name: 'All Menu', itemCount: 12 },
  { id: 'milk-tea', name: 'Milk Tea', itemCount: 5 },
  { id: 'fruit-tea', name: 'Fruit Tea', itemCount: 4 },
  { id: 'premium', name: 'Premium', itemCount: 3 },
]

export const products: Product[] = [
  {
    id: 'jasmine-milk-tea',
    name: 'Jasmine Milk Tea',
    category: 'milk-tea',
    description: 'Classic jasmine tea with creamy milk and soft boba pearls.',
    price: 28000,
    badge: 'Best Seller',
    accent: 'from-sky-100 to-blue-200',
  },
  {
    id: 'brown-sugar-boba',
    name: 'Brown Sugar Boba',
    category: 'milk-tea',
    description: 'Fresh milk, brown sugar syrup, and warm tapioca pearls.',
    price: 34000,
    badge: 'Popular',
    accent: 'from-amber-100 to-orange-200',
  },
  {
    id: 'thai-tea',
    name: 'Thai Tea',
    category: 'milk-tea',
    description: 'Bold Thai tea blend with condensed milk and ice.',
    price: 30000,
    badge: 'Iced',
    accent: 'from-orange-100 to-amber-200',
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    category: 'premium',
    description: 'Ceremonial matcha whisked with fresh milk.',
    price: 36000,
    badge: 'Premium',
    accent: 'from-emerald-100 to-green-200',
  },
  {
    id: 'peach-oolong',
    name: 'Peach Oolong Tea',
    category: 'fruit-tea',
    description: 'Roasted oolong, peach slices, and a light citrus finish.',
    price: 32000,
    badge: 'Fresh',
    accent: 'from-rose-100 to-pink-200',
  },
  {
    id: 'lemon-black-tea',
    name: 'Lemon Black Tea',
    category: 'fruit-tea',
    description: 'Refreshing black tea shaken with lemon and honey.',
    price: 26000,
    badge: 'Citrus',
    accent: 'from-yellow-100 to-lime-200',
  },
]

export const activeOrders: ActiveOrder[] = [
  { id: '#A102', customer: 'Dina', table: 'Table 04', status: 'Preparing', total: 90000, items: 3 },
  { id: '#A103', customer: 'Rafi', table: 'Takeaway', status: 'Ready', total: 62000, items: 2 },
  { id: '#A104', customer: 'Maya', table: 'Table 02', status: 'Waiting', total: 128000, items: 4 },
]

export const initialCart: CartItem[] = [
  { productId: 'jasmine-milk-tea', quantity: 1 },
  { productId: 'brown-sugar-boba', quantity: 2 },
]

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value)
