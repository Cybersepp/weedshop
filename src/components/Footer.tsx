import { Instagram } from 'lucide-react';
import type { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const pages: Page[] = ['home', 'products', 'sommelier', 'about'];

function Logo() {
  return (
    <span className="font-bold text-lg tracking-wide">
      <span className="text-ww-red">WOODY</span>{' '}
      <span className="text-ww-green">WEED</span>
      <span className="text-ww-gold">PECKER</span>
    </span>
  );
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ww-card border-t border-ww-border mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <Logo />
            </div>
            <p className="text-stone-500 text-sm leading-relaxed">
              Premium cannabis &amp; cannabis sommelier in Koh Phangan, Thailand. Lab-certified products from trusted partners.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-ww-gold font-semibold mb-3 text-xs uppercase tracking-widest">Quick Links</h4>
            <div className="space-y-2">
              {pages.map((page) => (
                <button
                  key={page}
                  onClick={() => navigate(page)}
                  className="block text-stone-500 hover:text-stone-300 text-sm capitalize transition-colors"
                >
                  {page}
                </button>
              ))}
            </div>
          </div>

          {/* Order */}
          <div>
            <h4 className="text-ww-gold font-semibold mb-3 text-xs uppercase tracking-widest">Order &amp; Connect</h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-500 hover:text-stone-300 text-sm transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @woodyweedpecker
              </a>
              <a
                href="https://t.me/your-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-500 hover:text-stone-300 text-sm transition-colors"
              >
                <span>✈️</span>
                Telegram Order Bot
              </a>
              <p className="text-stone-600 text-xs pt-1">Koh Phangan, Thailand 🇹🇭</p>
            </div>
          </div>
        </div>

        <div className="border-t border-ww-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-stone-600">
          <p>© 2025 Woody Weedpecker. All rights reserved.</p>
          <p>🔬 All products are lab-certified. Adults 18+ only. Consume responsibly.</p>
        </div>
      </div>
    </footer>
  );
}
