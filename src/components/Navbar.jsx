import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import Button from './Button';

const links = [
  { label: 'Comment ça marche', href: '#comment-ca-marche' },
  { label: 'Fonctionnalités', href: '#fonctionnalites' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm'
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 bg-[#FF6B35] rounded-lg flex items-center justify-center shadow-[0_2px_12px_rgba(255,107,53,0.35)]">
              <Zap size={17} className="text-white" fill="white" />
            </div>
            <span className="text-[#1a1a1a] font-extrabold text-xl tracking-tight">Fixlyy</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="text-[#6B7280] hover:text-[#1a1a1a] text-sm font-medium transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#tarifs" className="text-[#6B7280] hover:text-[#1a1a1a] text-sm font-medium transition-colors">
              Connexion
            </a>
            <Button variant="primary" size="sm"
              onClick={() => document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' })}>
              Essai gratuit 7 jours
            </Button>
          </div>

          {/* Burger */}
          <button className="md:hidden text-[#1a1a1a] p-2 -mr-2 rounded-lg hover:bg-[#F7F9FC] transition-colors"
            onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E5E7EB]">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-[#1a1a1a] font-medium py-3 px-3 rounded-lg hover:bg-[#F7F9FC] transition-colors border-b border-[#F3F4F6] last:border-0">
                {l.label}
              </a>
            ))}
            <div className="pt-3">
              <Button variant="primary" size="md" fullWidth
                onClick={() => { setOpen(false); document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Essai gratuit 7 jours
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
