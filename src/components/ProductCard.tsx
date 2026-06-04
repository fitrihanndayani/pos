import { Minus, Plus } from 'lucide-react'
import type { Product } from '../data/posData'
import { formatCurrency } from '../data/posData'

type ProductCardProps = {
  product: Product
  quantity: number
  onAddToCart: (productId: string) => void
  onDecrease: (productId: string) => void
}

export function ProductCard({ product, quantity, onAddToCart, onDecrease }: ProductCardProps) {
  return (
    <article className="group rounded-[2rem] bg-white p-4 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80">
      <div className={`mb-5 flex h-36 items-start justify-between rounded-[1.5rem] bg-gradient-to-br ${product.accent} p-4`}>
        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-black text-slate-700 shadow-sm">
          {product.badge}
        </span>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-2xl shadow-sm">
          🧋
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-black text-slate-950">{product.name}</h3>
          <p className="mt-1 min-h-10 text-sm font-medium leading-5 text-slate-400">{product.description}</p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className="text-lg font-black text-blue-600">{formatCurrency(product.price)}</p>
          {quantity > 0 ? (
            <div className="flex items-center gap-2 rounded-2xl bg-slate-100 p-1">
              <button
                onClick={() => onDecrease(product.id)}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm transition hover:text-blue-600"
                aria-label={`Decrease ${product.name}`}
              >
                <Minus size={16} />
              </button>
              <span className="w-6 text-center text-sm font-black text-slate-900">{quantity}</span>
              <button
                onClick={() => onAddToCart(product.id)}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm transition hover:bg-blue-700"
                aria-label={`Increase ${product.name}`}
              >
                <Plus size={16} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => onAddToCart(product.id)}
              className="rounded-2xl bg-blue-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
