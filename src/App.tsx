import { Search, SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { CategoryTabs } from './components/CategoryTabs'
import { OrderCard } from './components/OrderCard'
import { PreparedOrder } from './components/PreparedOrder'
import { ProductCard } from './components/ProductCard'
import { Sidebar } from './components/Sidebar'
import { activeOrders, categories, initialCart, products, type CartItem } from './data/posData'

function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart)

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') {
      return products
    }

    return products.filter((product) => product.category === activeCategory)
  }, [activeCategory])

  const getQuantity = (productId: string) =>
    cartItems.find((item) => item.productId === productId)?.quantity ?? 0

  const increaseCartItem = (productId: string) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.productId === productId)

      if (!existingItem) {
        return [...currentItems, { productId, quantity: 1 }]
      }

      return currentItems.map((item) =>
        item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item,
      )
    })
  }

  const decreaseCartItem = (productId: string) => {
    setCartItems((currentItems) =>
      currentItems.flatMap((item) => {
        if (item.productId !== productId) {
          return [item]
        }

        if (item.quantity <= 1) {
          return []
        }

        return [{ ...item, quantity: item.quantity - 1 }]
      }),
    )
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <Sidebar />
      <PreparedOrder
        cartItems={cartItems}
        products={products}
        onIncrease={increaseCartItem}
        onDecrease={decreaseCartItem}
      />

      <main className="ml-24 px-5 py-6 lg:ml-72 lg:px-8 xl:mr-[380px]">
        <header className="mb-8 flex flex-col gap-5 rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-100 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-500">Point of Sale</p>
            <h1 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">Good morning, Cashier</h1>
            <p className="mt-2 text-sm font-semibold text-slate-400">Manage tea orders, menu selections, and prepared carts in one place.</p>
          </div>

          <div className="flex gap-3">
            <label className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl bg-slate-100 px-4 py-3 md:w-72">
              <Search size={18} className="text-slate-400" />
              <input
                className="w-full bg-transparent text-sm font-semibold text-slate-700 outline-none placeholder:text-slate-400"
                placeholder="Search tea menu..."
              />
            </label>
            <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
              <SlidersHorizontal size={20} />
            </button>
          </div>
        </header>

        <section className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Order Line</p>
              <h2 className="text-2xl font-black text-slate-950">Active Orders</h2>
            </div>
            <button className="rounded-2xl bg-white px-4 py-3 text-sm font-black text-blue-600 shadow-sm ring-1 ring-slate-100">
              View All
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
            {activeOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Menu Grid</p>
              <h2 className="text-2xl font-black text-slate-950">Tea Products</h2>
            </div>
            <CategoryTabs
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                quantity={getQuantity(product.id)}
                onAddToCart={increaseCartItem}
                onDecrease={decreaseCartItem}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
