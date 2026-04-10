import { useState, useEffect } from 'react';

export default function AgeGate() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const confirmed = localStorage.getItem('ww-age-confirmed');
    if (!confirmed) setVisible(true);
  }, []);

  const confirm = () => {
    localStorage.setItem('ww-age-confirmed', 'true');
    setVisible(false);
  };

  const deny = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
      <div className="bg-ww-card border border-ww-gold/20 rounded-2xl p-8 max-w-sm w-full text-center space-y-6">
        <div className="text-6xl">🌿</div>
        <div>
          <h2 className="text-ww-gold text-2xl font-bold mb-1">Welcome</h2>
          <p className="text-stone-400 text-sm">to Woody Weedpecker</p>
        </div>
        <p className="text-stone-500 text-sm leading-relaxed">
          This website contains information about cannabis products. You must be 18 years or older to enter.
        </p>
        <div className="space-y-3">
          <button
            onClick={confirm}
            className="w-full bg-ww-gold hover:bg-ww-gold-light text-ww-bg font-semibold py-3 rounded-xl transition-colors"
          >
            I am 18 or older — Enter
          </button>
          <button
            onClick={deny}
            className="w-full bg-ww-hover hover:bg-ww-border text-stone-400 py-3 rounded-xl transition-colors text-sm"
          >
            I am under 18 — Exit
          </button>
        </div>
        <p className="text-stone-600 text-xs">
          Cannabis for adults only. Please consume responsibly.
        </p>
      </div>
    </div>
  );
}
