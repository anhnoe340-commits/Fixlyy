export default function SocialProof() {
  const stats = [
    '✅ 50+ artisans IDF',
    '✅ 2 847 appels traités ce mois',
    '✅ 97% satisfaction client',
    '✅ 143 800€ récupérés collectivement',
    '✅ 0 remboursements demandés',
    '✅ Setup en 30min',
  ];

  const testimonials = [
    '"Plus jamais un appel manqué" — Marc, plombier Paris 15',
    '"3h/jour gagnées" — Ahmed, électricien Montreuil',
    '"Devis en 2 min au lieu de 30" — Sophie, plomberie Versailles',
    '"ROI dès le 1er mois" — Karim, électricien Vincennes',
    '"Mes clients adorent la réactivité" — Julien, plombier Boulogne',
  ];

  return (
    <section className="bg-[#0A1628] py-6 overflow-hidden border-y border-white/10">
      {/* Stats ticker */}
      <div className="relative flex overflow-hidden mb-4">
        <div className="flex ticker-animation whitespace-nowrap">
          {[...stats, ...stats].map((s, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-white/80 text-sm font-medium px-8 py-1"
            >
              {s}
              <span className="text-[#2E5CFF] mx-4">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials ticker (reverse) */}
      <div className="relative flex overflow-hidden">
        <div
          className="flex ticker-animation-slow whitespace-nowrap"
          style={{ animationDirection: 'reverse' }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center text-[#00D4FF]/70 text-sm italic px-8 py-1"
            >
              {t}
              <span className="text-[#2E5CFF] mx-4 not-italic">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
