import { Zap, Mail, MapPin } from 'lucide-react';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);

const cols = [
  {
    title: 'Produit',
    links: [
      { label: 'Comment ça marche', href: '#comment-ca-marche' },
      { label: 'Fonctionnalités', href: '#fonctionnalites' },
      { label: 'Tarifs', href: '#tarifs' },
      { label: 'Démo', href: '#demo' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { label: 'À propos', href: '#' },
      { label: 'Contact', href: 'mailto:noe@fixlyy.fr' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: "Centre d'aide", href: '#' },
      { label: 'Status', href: '#' },
      { label: 'Documentation', href: '#' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'CGU', href: '#' },
      { label: 'CGV', href: '#' },
      { label: 'RGPD', href: '#' },
      { label: 'Mentions légales', href: '#' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#060E1F] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Top */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-6 gap-8 border-b border-white/8">

          {/* Brand — spans 2 cols */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-[#2E5CFF] rounded-lg flex items-center justify-center shadow-[0_2px_12px_rgba(46,92,255,0.5)]">
                <Zap size={15} className="text-white" fill="white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight">Fixlyy</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-[220px] mb-5">
              Votre secrétaire IA 24/7 pour plombiers et électriciens en Île-de-France.
            </p>
            {/* Social */}
            <div className="flex gap-2.5">
              {[
                { href: 'https://linkedin.com/company/fixlyy', Icon: LinkedInIcon, label: 'LinkedIn' },
                { href: 'https://facebook.com/fixlyy', Icon: FacebookIcon, label: 'Facebook' },
                { href: 'https://twitter.com/fixlyy', Icon: XIcon, label: 'X' },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center hover:bg-[#2E5CFF] transition-colors">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {cols.map(col => (
            <div key={col.title}>
              <h4 className="text-white/35 text-xs font-bold uppercase tracking-widest mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="text-white/55 hover:text-white text-sm transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <p>© {year} Fixlyy — Votre secrétaire IA 24/7</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a href="mailto:noe@fixlyy.fr" className="flex items-center gap-1.5 hover:text-white/60 transition-colors">
              <Mail size={12} />noe@fixlyy.fr
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />Paris, Île-de-France
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
