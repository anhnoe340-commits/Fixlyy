import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Comment ça marche', href: '#comment-ca-marche' },
    { label: 'Fonctionnalités', href: '#fonctionnalites' },
    { label: 'Tarifs', href: '#tarifs' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A1628]/95 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2E5CFF] rounded-lg flex items-center justify-center">
              <Zap size={18} className="text-white" fill="white" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Fixlyy
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#tarifs" className="text-white/70 hover:text-white text-sm font-medium transition-colors">
              Connexion
            </a>
            <Button variant="primary" size="sm">
              Essai gratuit 7 jours
            </Button>
          </div>

          {/* Burger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0A1628] border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white font-medium py-2 border-b border-white/10 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <Button variant="primary" size="md" fullWidth>
              Essai gratuit 7 jours
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
