import { Zap, Mail, MapPin } from 'lucide-react';

// Minimal SVG social icons (lucide-react doesn't include these brand icons)
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M2 4h7l13 16H15L2 4z"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#2E5CFF] rounded-lg flex items-center justify-center">
                <Zap size={18} className="text-white" fill="white" />
              </div>
              <span className="font-bold text-xl">Fixlyy</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Votre secrétaire IA 24/7 pour plombiers et électriciens en Île-de-France.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://linkedin.com/company/fixlyy"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#2E5CFF] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://facebook.com/fixlyy"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#2E5CFF] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://twitter.com/fixlyy"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#2E5CFF] transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Produit */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Produit
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Comment ça marche', href: '#comment-ca-marche' },
                { label: 'Tarifs', href: '#tarifs' },
                { label: 'Démo', href: '#demo' },
                { label: 'Fonctionnalités', href: '#fonctionnalites' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Entreprise
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'À propos', href: '#' },
                { label: 'Contact', href: 'mailto:noe@fixlyy.fr' },
                { label: 'Blog', href: '#' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Ressources
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Centre d'aide", href: '#' },
                { label: 'Status', href: '#' },
                { label: 'Documentation', href: '#' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Légal
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'CGU', href: '#' },
                { label: 'CGV', href: '#' },
                { label: 'RGPD', href: '#' },
                { label: 'Mentions légales', href: '#' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <p>© {year} Fixlyy — Votre secrétaire IA 24/7</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Mail size={14} />
              noe@fixlyy.fr
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              Paris, Île-de-France
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
