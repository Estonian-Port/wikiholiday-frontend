import { Link, useLocation } from 'react-router-dom';
import { Globe, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-body bg-wh-cream">
      <nav className="sticky top-0 z-50 bg-wh-cream/90 backdrop-blur-md border-b border-wh-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <Globe className="w-6 h-6 text-wh-terracotta group-hover:rotate-12 transition-transform" />
              <span className="font-display text-xl font-semibold text-wh-charcoal tracking-tight">
                WH Community
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-wh-terracotta' : 'text-wh-stone hover:text-wh-charcoal'}`}
              >
                Inicio
              </Link>
              <Link
                to="/creadores"
                className={`text-sm font-medium transition-colors ${location.pathname === '/creadores' ? 'text-wh-terracotta' : 'text-wh-stone hover:text-wh-charcoal'}`}
              >
                Creadores
              </Link>
              <a
                href="https://forms.google.com/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-wh-terracotta hover:text-wh-terracotta-dark transition-colors"
              >
                <Heart className="w-4 h-4" />
                Contribuir
              </a>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-wh-charcoal"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-wh-sand bg-wh-cream">
            <div className="px-4 py-3 space-y-3">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium text-wh-charcoal"
              >
                Inicio
              </Link>
              <Link
                to="/creadores"
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium text-wh-charcoal"
              >
                Creadores
              </Link>
              <a
                href="https://forms.google.com/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-wh-terracotta"
              >
                <Heart className="w-4 h-4" />
                Contribuir
              </a>
            </div>
          </div>
        )}
      </nav>
      <main className="flex-1">{children}</main>
    </div>
  );
}
