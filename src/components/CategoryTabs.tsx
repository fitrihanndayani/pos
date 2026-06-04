import type { Category } from '../data/posData'

type CategoryTabsProps = {
  categories: Category[]
  activeCategory: string
  onSelectCategory: (categoryId: string) => void
}

export function CategoryTabs({ categories, activeCategory, onSelectCategory }: CategoryTabsProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {categories.map((category) => {
        const isActive = category.id === activeCategory

        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`min-w-fit rounded-2xl px-5 py-3 text-left transition ${
              isActive
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                : 'bg-white text-slate-500 ring-1 ring-slate-100 hover:text-slate-900'
            }`}
          >
            <p className="text-sm font-black">{category.name}</p>
            <p className={`text-xs font-semibold ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
              {category.itemCount} products
            </p>
          </button>
        )
      })}
    </div>
  )
}
