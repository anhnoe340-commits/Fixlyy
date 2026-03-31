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
        ? 'bg-white/95 backdrop-blur-md border-b border-[#DDE5F8] shadow-sm'
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-[68px]">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 bg-[#2E5CFF] rounded-lg flex items-center justify-center shadow-[0_2px_12px_rgba(46,92,255,0.4)]">
              <Zap size={16} className="text-white" fill="white" />
            </div>
            <span className="text-[#0A1628] font-extrabold text-xl tracking-tight">Fixlyy</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="text-[#6B7A99] hover:text-[#0A1628] text-sm font-medium transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#tarifs" className="text-[#6B7A99] hover:text-[#0A1628] text-sm font-medium transition-colors">
              Connexion
            </a>
            <Button variant="primary" size="sm"
              onClick={() => document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' })}>
              Essai gratuit 7 jours
            </Button>
          </div>

          {/* Burger */}
          <button className="md:hidden text-[#0A1628] p-2 -mr-2 rounded-lg hover:bg-[#F5F8FF] transition-colors"
            onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#DDE5F8]">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-[#0A1628] font-medium py-3 px-3 rounded-lg hover:bg-[#F5F8FF] transition-colors border-b border-[#F0F4FF] last:border-0">
                {l.label}
              </a>
            ))}
            <div className="pt-3">
              <Button variant="primary" size="md" fullWidth
                onClick={() => { setOpen(false); document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Essai gratuit 7 jours — sans carte
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
