import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const links = [
  { label: 'Fonctionnalités', href: '#fonctionnalites' },
  { label: 'Comment ça marche', href: '#comment-ca-marche' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm'
        : 'bg-white/70 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-[68px]">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-lg flex items-center justify-center shadow-[0_2px_10px_rgba(124,58,237,0.35)]">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[#111827] font-extrabold text-xl tracking-tight">fixlyy</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="text-[#6B7280] hover:text-[#111827] text-sm font-medium transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#tarifs" className="text-[#6B7280] hover:text-[#111827] text-sm font-medium transition-colors">
              Se connecter
            </a>
            <Button variant="primary" size="sm"
              onClick={() => document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' })}>
              Essai gratuit
            </Button>
          </div>

          {/* Burger */}
          <button className="md:hidden text-[#111827] p-2 -mr-2 rounded-lg hover:bg-[#F5F3FF] transition-colors"
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
                className="text-[#111827] font-medium py-3 px-3 rounded-xl hover:bg-[#F5F3FF] transition-colors">
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
