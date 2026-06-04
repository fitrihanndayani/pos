import type { ActiveOrder } from '../data/posData'
import { formatCurrency } from '../data/posData'

const statusStyles: Record<ActiveOrder['status'], string> = {
  Preparing: 'bg-blue-50 text-blue-700',
  Ready: 'bg-emerald-50 text-emerald-700',
  Waiting: 'bg-amber-50 text-amber-700',
}

type OrderCardProps = {
  order: ActiveOrder
}

export function OrderCard({ order }: OrderCardProps) {
  return (
    <article className="min-w-60 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-black text-slate-900">{order.id}</p>
          <p className="text-xs font-semibold text-slate-400">{order.customer} · {order.table}</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-[11px] font-black ${statusStyles[order.status]}`}>
          {order.status}
        </span>
      </div>
      <div className="flex items-end justify-between">
        <p className="text-xs font-semibold text-slate-400">{order.items} items</p>
        <p className="font-black text-slate-900">{formatCurrency(order.total)}</p>
      </div>
    </article>
  )
}
