/* Rescale-style big stats row — "75% 47% 54%" equivalent */
const stats = [
  { val: '97%', label: 'Taux de satisfaction client', desc: 'Nos artisans donnent 5 étoiles' },
  { val: '2 847', label: 'Appels traités ce mois', desc: 'Zéro appel manqué' },
  { val: '143 800€', label: 'Revenus récupérés', desc: 'En appels convertis' },
  { val: '0', label: 'Remboursements demandés', desc: 'Sur 50+ utilisateurs actifs' },
];

const ticker = [
  '✦ 50+ artisans IDF actifs',
  '✦ 2 847 appels traités',
  '✦ 97% satisfaction client',
  '✦ 143 800€ récupérés',
  '✦ 0 remboursement',
  '✦ Setup en 30 minutes',
  '✦ Disponible 24/7',
  '✦ Devis en 2 minutes',
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="section-white py-20 md:py-24 border-y border-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section label */}
        <p className="text-center text-xs font-bold uppercase tracking-[0.15em] text-[#9CA3AF] mb-12">
          Les chiffres parlent d'eux-mêmes
        </p>

        {/* Stats grid — Rescale percentage style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-14">
          {stats.map((s, i) => (
            <div key={i} className="text-center group">
              <p className="text-4xl sm:text-5xl font-black text-[#7C3AED] tracking-tight mb-1">{s.val}</p>
              <p className="text-sm font-semibold text-[#111827] mb-1">{s.label}</p>
              <p className="text-xs text-[#9CA3AF]">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Ticker */}
        <div className="overflow-hidden border-t border-[#F3F4F6] pt-6">
          <div className="flex">
            <div className="flex ticker-animation whitespace-nowrap">
              {[...ticker, ...ticker].map((t, i) => (
                <span key={i} className="inline-flex items-center text-[#9CA3AF] text-sm font-medium px-7">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
