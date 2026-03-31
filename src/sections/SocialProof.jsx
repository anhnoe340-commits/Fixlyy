const stats = [
  { val: '50+', label: 'Artisans IDF actifs' },
  { val: '2 847', label: 'Appels traités ce mois' },
  { val: '97%', label: 'Satisfaction client' },
  { val: '143 800€', label: 'Récupérés collectivement' },
  { val: '0', label: 'Remboursements demandés' },
];

const ticker1 = [
  '✅ 50+ artisans IDF',
  '✅ 2 847 appels traités',
  '✅ 97% satisfaction',
  '✅ 143 800€ récupérés',
  '✅ 0 remboursement',
  '✅ Setup 30 min',
  '✅ 24/7 disponible',
];

const ticker2 = [
  '"Plus jamais un appel manqué" — Marc, Paris 15',
  '"3h/jour gagnées" — Ahmed, Montreuil',
  '"Devis en 2 min" — Sophie, Versailles',
  '"ROI dès la 1ère semaine" — Karim, Vincennes',
  '"Mes clients adorent la réactivité" — Julien, Boulogne',
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="bg-[#0A1628] overflow-hidden">
      {/* Stats row */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="mono font-black text-2xl sm:text-3xl text-[#2E5CFF]">{s.val}</p>
              <p className="text-white/50 text-xs sm:text-sm mt-1 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Ticker strip */}
      <div className="py-3 space-y-2 overflow-hidden">
        <div className="flex">
          <div className="flex ticker-animation whitespace-nowrap">
            {[...ticker1, ...ticker1].map((s, i) => (
              <span key={i} className="inline-flex items-center text-white/60 text-sm font-medium px-6">
                {s}
                <span className="text-[#2E5CFF]/40 ml-6">•</span>
              </span>
            ))}
          </div>
        </div>
        <div className="flex">
          <div className="flex ticker-animation-slow whitespace-nowrap">
            {[...ticker2, ...ticker2].map((t, i) => (
              <span key={i} className="inline-flex items-center text-[#00D4FF]/50 text-xs italic px-6">
                {t}
                <span className="text-white/20 ml-6 not-italic">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
