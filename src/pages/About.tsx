import { FlaskConical, MapPin, Heart } from 'lucide-react';
import OrderCTA from '../components/OrderCTA';

export default function About() {
  return (
    <div className="px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🌴</div>
          <p className="text-ww-gold text-xs font-semibold uppercase tracking-widest mb-4">Koh Phangan, Thailand</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-100 mb-4">About Us</h1>
          <p className="text-stone-400 text-lg">The story behind Woody Weedpecker</p>
        </div>

        {/* Story */}
        <div className="bg-ww-card border border-ww-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-ww-gold mb-4">Our Story</h2>
          <p className="text-stone-400 leading-relaxed mb-4">
            Woody Weedpecker was born from a love of Koh Phangan's natural beauty and a belief that cannabis deserves the same respect as fine wine or artisan spirits.
          </p>
          <p className="text-stone-400 leading-relaxed mb-4">
            We saw a gap between the casual beach-side stall and the informed, premium experience that many travellers and locals were looking for. So we built it.
          </p>
          <p className="text-stone-400 leading-relaxed">
            Every product we carry is personally vetted, lab-certified, and sourced from cultivators who share our standards for quality, safety, and transparency.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            {
              icon: <FlaskConical className="w-6 h-6" />,
              title: 'Lab Certified',
              desc: 'Full transparency on cannabinoid and terpene profiles for every product.',
            },
            {
              icon: <MapPin className="w-6 h-6" />,
              title: 'Koh Phangan',
              desc: 'Rooted in the island. We know our community and we serve it with care.',
            },
            {
              icon: <Heart className="w-6 h-6" />,
              title: 'People First',
              desc: 'Responsible consumption guidance and genuine expertise for every guest.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-ww-card border border-ww-border rounded-2xl p-5 text-center space-y-2">
              <div className="text-ww-gold flex justify-center">{icon}</div>
              <h3 className="text-stone-100 font-semibold text-sm">{title}</h3>
              <p className="text-stone-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Location */}
        <div className="bg-ww-card border border-ww-border rounded-2xl p-6 mb-10 flex items-start gap-4">
          <MapPin className="w-5 h-5 text-ww-gold flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-stone-100 font-semibold mb-1">Find Us</h3>
            <p className="text-stone-500 text-sm">Koh Phangan, Surat Thani, Thailand 🇹🇭</p>
            <p className="text-stone-600 text-xs mt-1">
              DM us on Instagram or Telegram for exact location details.
            </p>
          </div>
        </div>

        <OrderCTA label="Get in touch:" />
      </div>
    </div>
  );
}
