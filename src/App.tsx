import { useState } from 'react';
import type { Page } from './types';
import AgeGate from './components/AgeGate';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Sommelier from './pages/Sommelier';
import About from './pages/About';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'products':
        return <Products />;
      case 'sommelier':
        return <Sommelier />;
      case 'about':
        return <About />;
    }
  };

  return (
    <div className="bg-ww-bg min-h-screen text-stone-100">
      <AgeGate />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-16">{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
