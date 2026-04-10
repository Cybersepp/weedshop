import { Instagram } from 'lucide-react';

interface OrderCTAProps {
  label?: string;
}

export default function OrderCTA({ label = 'Ready to order?' }: OrderCTAProps) {
  return (
    <div className="bg-ww-card border border-ww-border rounded-2xl p-6 text-center space-y-4">
      {label && <p className="text-stone-300 font-medium">{label}</p>}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="https://instagram.com/your-handle"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-ww-hover hover:bg-ww-border text-stone-200 px-6 py-3 rounded-xl transition-colors text-sm font-medium"
        >
          <Instagram className="w-4 h-4" />
          Message on Instagram
        </a>
        <a
          href="https://t.me/your-bot"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-ww-green hover:bg-ww-green-light text-stone-100 px-6 py-3 rounded-xl transition-colors text-sm font-semibold"
        >
          ✈️ Order via Telegram
        </a>
      </div>
    </div>
  );
}
