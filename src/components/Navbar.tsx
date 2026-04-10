import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const links: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Products', page: 'products' },
  { label: 'Sommelier', page: 'sommelier' },
  { label: 'About', page: 'about' },
];

function Logo() {
  return (
    <span className="font-bold text-lg tracking-wide">
      <span className="text-ww-red">WOODY</span>{' '}
      <span className="text-ww-green">WEED</span>
      <span className="text-ww-gold">PECKER</span>
    </span>
  );
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-ww-bg/95 backdrop-blur border-b border-ww-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => navigate('home')}>
          <Logo />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              className={`text-sm transition-colors ${
                currentPage === page
                  ? 'text-ww-gold'
                  : 'text-stone-400 hover:text-stone-100'
              }`}
            >
              {label}
            </button>
          ))}
          <a
            href="https://t.me/your-bot"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ww-green hover:bg-ww-green-light text-stone-100 text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Order Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-stone-300 hover:text-stone-100 p-1"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-ww-card border-t border-ww-border px-4 py-4 space-y-1">
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              className={`block w-full text-left py-3 px-3 rounded-lg text-sm transition-colors ${
                currentPage === page
                  ? 'text-ww-gold bg-ww-hover'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-ww-hover'
              }`}
            >
              {label}
            </button>
          ))}
          <div className="pt-2 flex gap-3">
            <a
              href="https://instagram.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-ww-hover hover:bg-ww-border text-stone-300 text-sm py-3 rounded-lg transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://t.me/your-bot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-ww-green hover:bg-ww-green-light text-stone-100 text-sm font-semibold py-3 rounded-lg transition-colors"
            >
              Order on Telegram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
