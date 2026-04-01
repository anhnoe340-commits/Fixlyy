const problems = [
  {
    emoji: '📞',
    tag: 'Appels ratés',
    desc: '8 appels/semaine manqués pendant que vous êtes sur chantier. Chaque sonnerie sans réponse, c\'est un client chez le concurrent.',
    cost: '= 2 400€/mois perdus',
  },
  {
    emoji: '⏰',
    tag: 'Temps perdu',
    desc: '2h/jour à rédiger des devis à la main, rappeler des clients, noter des informations. Du temps facturable gaspillé.',
    cost: '= 15h/semaine perdues',
  },
  {
    emoji: '😰',
    tag: 'Épuisement',
    desc: '"J\'aurais dû décrocher..." Ce regret quotidien. L\'épuisement de tout gérer seul, sans jamais vraiment décrocher.',
    cost: '= Épuisement mental',
  },
];

export default function Problem() {
  return (
    <section className="section-light py-20 md:py-28 lg:py-32" id="probleme">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#FFF7ED] border border-[#FDBA74] text-[#EA580C] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            La réalité du terrain
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight">
            Vous perdez de l'argent.
            <br /><span className="highlight-italic">Chaque. Jour.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#6B7280] max-w-xl mx-auto leading-relaxed">
            Si vous êtes artisan indépendant en IDF, ces 3 problèmes vous coûtent probablement plus de{' '}
            <strong className="text-[#1a1a1a]">28 000€ par an</strong>.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div key={p.tag}
              className="bg-white rounded-2xl border-2 border-[#E5E7EB] p-8 flex flex-col gap-5 hover:border-[#FF6B35] hover:shadow-[0_8px_16px_rgba(255,107,53,0.1)] hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{p.emoji}</span>
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFF7ED] text-[#EA580C]">
                  {p.tag}
                </span>
              </div>
              <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed flex-1">{p.desc}</p>
              <div className="font-black text-sm px-4 py-2.5 rounded-xl bg-[#FFF7ED] text-[#EA580C]">
                {p.cost}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom hook */}
        <div className="mt-14 text-center">
          <div className="inline-block bg-white border-2 border-[#E5E7EB] rounded-2xl px-8 py-6 max-w-2xl">
            <p className="text-[#6B7280] text-base leading-relaxed">
              Si vous vous reconnaissez dans{' '}
              <strong className="text-[#1a1a1a]">ne serait-ce qu'une</strong> de ces situations...
            </p>
            <p className="text-[#FF6B35] font-black text-xl mt-2">Continuez à lire.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
