import { FlaskConical } from 'lucide-react';
import type { Product, Category } from '../types';

interface ProductCardProps {
  product: Product;
}

const categoryColors: Record<Category, string> = {
  flower: 'text-ww-green bg-ww-green/10',
  'pre-roll': 'text-ww-gold bg-ww-gold/10',
  edible: 'text-pink-400 bg-pink-400/10',
  extract: 'text-yellow-400 bg-yellow-400/10',
  accessory: 'text-stone-400 bg-stone-400/10',
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-ww-card border border-ww-border rounded-2xl overflow-hidden hover:border-ww-hover transition-colors">
      {/* Placeholder image */}
      <div className="h-40 bg-gradient-to-br from-ww-hover to-ww-card flex items-center justify-center text-5xl">
        {product.emoji}
      </div>

      <div className="p-4 space-y-3">
        {/* Name + lab badge */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-stone-100 font-semibold text-sm leading-tight">{product.name}</h3>
          {product.labCertified && (
            <FlaskConical className="w-4 h-4 text-ww-gold flex-shrink-0 mt-0.5" />
          )}
        </div>

        {/* Category pill */}
        <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[product.category]}`}>
          {product.category}
        </span>

        {/* THC / CBD */}
        {(product.thc !== undefined || product.cbd !== undefined) && (
          <div className="flex gap-3 text-xs">
            {product.thc !== undefined && (
              <span className="text-stone-400">
                THC <span className="text-ww-green font-medium">{product.thc}%</span>
              </span>
            )}
            {product.cbd !== undefined && (
              <span className="text-stone-400">
                CBD <span className="text-ww-gold font-medium">{product.cbd}%</span>
              </span>
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-stone-500 text-xs leading-relaxed line-clamp-2">{product.description}</p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-ww-gold font-bold">฿{product.price.toLocaleString()}</span>
          <a
            href="https://t.me/your-bot"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ww-green hover:bg-ww-green-light text-stone-100 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
          >
            Order
          </a>
        </div>
      </div>
    </div>
  );
}
