import { FlaskConical, Star, Award } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import OrderCTA from '../components/OrderCTA';
import type { Page } from '../types';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const featured = products.filter((p) => p.featured);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 py-24 text-center">
        <div className="max-w-2xl">
          <div className="text-7xl mb-6">🌿</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-100 mb-4 leading-tight">
            Woody
            <br />
            <span className="text-ww-gold">Weedpecker</span>
          </h1>
          <p className="text-stone-400 text-lg sm:text-xl mb-3">
            Cannabis Sommelier · Koh Phangan, Thailand
          </p>
          <p className="text-stone-500 text-sm mb-10 max-w-md mx-auto leading-relaxed">
            Premium lab-certified cannabis from trusted partners. Curated by Thailand's finest cannabis sommelier.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('products')}
              className="bg-ww-green hover:bg-ww-green-light text-stone-100 font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Browse Products
            </button>
            <button
              onClick={() => navigate('sommelier')}
              className="bg-ww-hover hover:bg-ww-border text-stone-200 px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Meet the Sommelier
            </button>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-ww-gold text-xs font-semibold uppercase tracking-widest mb-2">Hand-picked</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-100 mb-2">Featured Strains</h2>
            <p className="text-stone-500 text-sm">Our most beloved selections this season</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => navigate('products')}
              className="text-ww-gold hover:text-ww-gold-light text-sm transition-colors underline underline-offset-4"
            >
              View all products →
            </button>
          </div>
        </div>
      </section>

      {/* Why Woody */}
      <section className="bg-ww-card/60 px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-ww-gold text-xs font-semibold uppercase tracking-widest mb-2">The difference</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-100 mb-2">Why Woody Weedpecker?</h2>
            <p className="text-stone-500 text-sm">Quality you can trust, expertise you can feel</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <FlaskConical className="w-7 h-7" />,
                title: 'Lab Certified',
                desc: 'Every product is independently tested and certified. Know exactly what you are consuming.',
              },
              {
                icon: <Star className="w-7 h-7" />,
                title: 'Expert Curation',
                desc: 'Our cannabis sommelier personally selects products matched to your preferences and occasion.',
              },
              {
                icon: <Award className="w-7 h-7" />,
                title: 'Premium Partners',
                desc: "We source exclusively from Thailand's most reputable and ethical cannabis cultivators.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-ww-card border border-ww-border rounded-2xl p-6 text-center space-y-3">
                <div className="text-ww-gold flex justify-center">{icon}</div>
                <h3 className="text-stone-100 font-semibold">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sommelier teaser */}
      <section className="px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">🍷</div>
          <p className="text-ww-gold text-xs font-semibold uppercase tracking-widest mb-4">Personalised guidance</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-100 mb-4">Cannabis Sommelier</h2>
          <p className="text-stone-400 leading-relaxed mb-8">
            Not sure where to start? Our resident cannabis sommelier will guide you through terpene profiles, effects, and pairings — personalised to your taste and experience level.
          </p>
          <button
            onClick={() => navigate('sommelier')}
            className="bg-ww-hover hover:bg-ww-border text-stone-200 px-8 py-4 rounded-xl transition-colors text-sm"
          >
            Learn More →
          </button>
        </div>
      </section>

      {/* Order CTA */}
      <section className="px-4 pb-20">
        <div className="max-w-lg mx-auto">
          <OrderCTA label="Ready to order? Reach us on:" />
        </div>
      </section>
    </div>
  );
}
