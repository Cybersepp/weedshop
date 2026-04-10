import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import type { Category } from '../types';

type Filter = Category | 'all';

const categories: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Flower', value: 'flower' },
  { label: 'Pre-roll', value: 'pre-roll' },
  { label: 'Edibles', value: 'edible' },
  { label: 'Extracts', value: 'extract' },
  { label: 'Accessories', value: 'accessory' },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Filter>('all');

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-ww-gold text-xs font-semibold uppercase tracking-widest mb-2">Lab-certified selection</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-100 mb-2">Our Products</h1>
          <p className="text-stone-500 text-sm">Sourced from trusted Thai partners</p>
        </div>

        {/* Category filter — scrollable on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
          {categories.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveCategory(value)}
              className={`flex-shrink-0 text-sm px-4 py-2 rounded-full transition-colors ${
                activeCategory === value
                  ? 'bg-ww-gold text-ww-bg font-semibold'
                  : 'bg-ww-hover text-stone-400 hover:text-stone-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
