import { Minus, Plus, ReceiptText, Trash2 } from 'lucide-react'
import type { CartItem, Product } from '../data/posData'
import { formatCurrency } from '../data/posData'

type PreparedOrderProps = {
  cartItems: CartItem[]
  products: Product[]
  onIncrease: (productId: string) => void
  onDecrease: (productId: string) => void
}

export function PreparedOrder({ cartItems, products, onIncrease, onDecrease }: PreparedOrderProps) {
  const preparedItems = cartItems
    .map((item) => ({
      ...item,
      product: products.find((product) => product.id === item.productId),
    }))
    .filter((item): item is CartItem & { product: Product } => Boolean(item.product))

  const subtotal = preparedItems.reduce((total, item) => total + item.product.price * item.quantity, 0)
  const tax = Math.round(subtotal * 0.1)
  const total = subtotal + tax

  return (
    <aside className="fixed bottom-0 right-0 top-0 z-10 hidden w-[380px] flex-col bg-white px-6 py-6 shadow-2xl shadow-slate-300/70 xl:flex">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">Prepared Order</p>
          <h2 className="text-2xl font-black text-slate-950">Cart Summary</h2>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <ReceiptText size={22} />
        </div>
      </div>

      <div className="rounded-3xl bg-slate-50 p-4">
        <div className="mb-3 flex items-center justify-between text-sm font-bold text-slate-500">
          <span>Order ID</span>
          <span className="text-slate-900">#POS-2408</span>
        </div>
        <div className="flex items-center justify-between text-sm font-bold text-slate-500">
          <span>Customer</span>
          <span className="text-slate-900">Walk-in Customer</span>
        </div>
      </div>

      <div className="mt-6 flex-1 space-y-3 overflow-y-auto pr-1">
        {preparedItems.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 text-center">
            <p className="text-4xl">🍵</p>
            <p className="mt-3 font-black text-slate-900">Cart is empty</p>
            <p className="text-sm font-medium text-slate-400">Add tea menu items to start an order.</p>
          </div>
        ) : (
          preparedItems.map(({ product, quantity }) => (
            <div key={product.id} className="rounded-3xl border border-slate-100 p-4">
              <div className="mb-4 flex gap-3">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${product.accent} text-xl`}>
                  🧋
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-black text-slate-950">{product.name}</h3>
                  <p className="text-sm font-bold text-blue-600">{formatCurrency(product.price)}</p>
                </div>
                <button
                  onClick={() => onDecrease(product.id)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-400 transition hover:text-rose-500"
                  aria-label={`Remove ${product.name}`}
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 rounded-2xl bg-slate-100 p-1">
                  <button
                    onClick={() => onDecrease(product.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm"
                    aria-label={`Decrease ${product.name}`}
                  >
                    <Minus size={15} />
                  </button>
                  <span className="w-7 text-center text-sm font-black text-slate-900">{quantity}</span>
                  <button
                    onClick={() => onIncrease(product.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm"
                    aria-label={`Increase ${product.name}`}
                  >
                    <Plus size={15} />
                  </button>
                </div>
                <p className="font-black text-slate-950">{formatCurrency(product.price * quantity)}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
        <div className="flex justify-between text-sm font-bold text-slate-400">
          <span>Subtotal</span>
          <span className="text-slate-700">{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm font-bold text-slate-400">
          <span>Tax 10%</span>
          <span className="text-slate-700">{formatCurrency(tax)}</span>
        </div>
        <div className="flex justify-between text-xl font-black text-slate-950">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
        <button className="w-full rounded-2xl bg-blue-600 py-4 text-sm font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-blue-200 transition hover:bg-blue-700">
          Pay Now
        </button>
      </div>
    </aside>
  )
}
