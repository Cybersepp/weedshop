import OrderCTA from '../components/OrderCTA';

const steps = [
  {
    step: '01',
    title: 'Share Your Preferences',
    desc: 'Tell us your experience level, desired effects, and flavour profile — via Telegram or Instagram.',
  },
  {
    step: '02',
    title: 'Get a Personal Recommendation',
    desc: 'Our sommelier crafts a bespoke selection from our lab-certified catalogue, tailored to you.',
  },
  {
    step: '03',
    title: 'Enjoy With Confidence',
    desc: 'Every recommendation comes with terpene notes, dosage guidance, and pairing suggestions.',
  },
];

const testimonials = [
  {
    quote: 'The sommelier matched me with Island Haze for an afternoon beach session — absolutely perfect.',
    author: 'Emma R. — UK',
  },
  {
    quote: 'I had no idea there was such nuance to cannabis. This changed everything for me.',
    author: 'Kiet T. — Thailand',
  },
  {
    quote: 'Knowledgeable, warm, and genuinely passionate. Not just a shop — a real experience.',
    author: 'Marco L. — Italy',
  },
  {
    quote: 'Lab-certified and personally recommended. I finally feel confident about what I am buying.',
    author: 'Sarah M. — Australia',
  },
];

export default function Sommelier() {
  return (
    <div className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🍷</div>
          <p className="text-ww-gold text-xs font-semibold uppercase tracking-widest mb-4">Personalised expertise</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-100 mb-4">Cannabis Sommelier</h1>
          <p className="text-stone-400 text-lg max-w-xl mx-auto leading-relaxed">
            Cannabis is not one-size-fits-all. Our sommelier helps you find the perfect strain for your mood, occasion, and experience level.
          </p>
        </div>

        {/* About */}
        <div className="bg-ww-card border border-ww-border rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold text-ww-gold mb-4">The Art of Cannabis Selection</h2>
          <p className="text-stone-400 leading-relaxed mb-4">
            Just as a wine sommelier guides you through terroir, vintage, and pairing — our cannabis sommelier decodes terpenes, cannabinoid ratios, and cultivation methods to match you with your ideal experience.
          </p>
          <p className="text-stone-400 leading-relaxed">
            Whether you are a first-time explorer or a seasoned connoisseur, Woody Weedpecker brings a refined, knowledgeable approach to what is too often left to guesswork.
          </p>
        </div>

        {/* How it works */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-stone-100 mb-8 text-center">How It Works</h2>
          <div className="space-y-4">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 bg-ww-card border border-ww-border rounded-2xl p-6">
                <div className="text-ww-gold font-bold text-2xl w-10 flex-shrink-0">{step}</div>
                <div>
                  <h3 className="text-stone-100 font-semibold mb-1">{title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-stone-100 mb-6 text-center">What Guests Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials.map(({ quote, author }) => (
              <div key={author} className="bg-ww-card border border-ww-border rounded-2xl p-5">
                <p className="text-stone-400 text-sm italic leading-relaxed mb-3">"{quote}"</p>
                <p className="text-ww-gold text-xs font-medium">— {author}</p>
              </div>
            ))}
          </div>
        </div>

        <OrderCTA label="Book a sommelier consultation:" />
      </div>
    </div>
  );
}
