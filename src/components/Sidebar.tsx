import { BarChart3, Home, ReceiptText, Settings, ShoppingBag, Users } from 'lucide-react'

const navItems = [
  { label: 'Dashboard', icon: Home, active: false },
  { label: 'Orders', icon: ReceiptText, active: true },
  { label: 'Menu', icon: ShoppingBag, active: false },
  { label: 'Customers', icon: Users, active: false },
  { label: 'Reports', icon: BarChart3, active: false },
]

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex w-24 flex-col items-center justify-between bg-white px-3 py-6 shadow-xl shadow-slate-200/70 lg:w-72 lg:items-stretch lg:px-5">
      <div>
        <div className="mb-10 flex items-center justify-center gap-3 lg:justify-start">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-xl font-black text-white shadow-lg shadow-blue-200">
            T
          </div>
          <div className="hidden lg:block">
            <p className="text-lg font-black text-slate-900">TeaPOS</p>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Cashier</p>
          </div>
        </div>

        <nav className="space-y-3">
          {navItems.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              className={`flex w-full items-center justify-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition lg:justify-start ${
                active
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Icon size={20} />
              <span className="hidden lg:inline">{label}</span>
            </button>
          ))}
        </nav>
      </div>

      <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-500 transition hover:text-slate-900 lg:justify-start">
        <Settings size={20} />
        <span className="hidden lg:inline">Settings</span>
      </button>
    </aside>
  )
}
