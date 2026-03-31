const problems = [
  {
    emoji: '📞',
    tag: 'Appels ratés',
    tagClass: 'bg-[#EEF3FF] text-[#2E5CFF]',
    borderClass: 'border-[#C5D3F8]',
    desc: '8 appels/semaine manqués pendant que vous êtes sur chantier. Chaque sonnerie sans réponse, c\'est un client chez le concurrent.',
    cost: '= 2 400€/mois perdus',
    costClass: 'text-[#2E5CFF] bg-[#EEF3FF]',
  },
  {
    emoji: '⏰',
    tag: 'Temps perdu',
    tagClass: 'bg-[#FFF7ED] text-[#EA580C]',
    borderClass: 'border-[#FDBA74]',
    desc: '2h/jour à rédiger des devis à la main, rappeler des clients, noter des informations. Du temps facturable gaspillé.',
    cost: '= 15h/semaine perdues',
    costClass: 'text-[#EA580C] bg-[#FFF7ED]',
  },
  {
    emoji: '😰',
    tag: 'Épuisement',
    tagClass: 'bg-[#F1F5F9] text-[#475569]',
    borderClass: 'border-[#CBD5E1]',
    desc: '"J\'aurais dû décrocher..." Ce regret quotidien. L\'épuisement de tout gérer seul, sans jamais vraiment décrocher.',
    cost: '= Épuisement mental',
    costClass: 'text-[#475569] bg-[#F1F5F9]',
  },
];

export default function Problem() {
  return (
    <section className="section-white py-20 md:py-28" id="probleme">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#FFF0F0] border border-[#FFCDD2] text-[#DC2626] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            La réalité du terrain
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628] leading-tight">
            Vous perdez de l'argent.
            <br /><span className="text-[#2E5CFF]">Chaque. Jour.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-xl mx-auto">
            Si vous êtes artisan indépendant en IDF, ces 3 problèmes vous coûtent probablement plus de{' '}
            <strong className="text-[#0A1628]">28 000€ par an</strong>.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {problems.map((p) => (
            <div key={p.tag}
              className={`bg-white rounded-2xl border ${p.borderClass} p-7 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}>
              <div className="flex items-center gap-3">
                <span className="text-4xl">{p.emoji}</span>
                <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${p.tagClass}`}>
                  {p.tag}
                </span>
              </div>
              <p className="text-[#64748B] text-sm leading-relaxed flex-1">{p.desc}</p>
              <div className={`font-black text-sm px-4 py-2.5 rounded-xl ${p.costClass}`}>
                {p.cost}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom hook */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-[#F5F8FF] border border-[#C5D3F8] rounded-2xl px-8 py-6 max-w-2xl">
            <p className="text-[#64748B] text-base leading-relaxed">
              Si vous vous reconnaissez dans{' '}
              <strong className="text-[#0A1628]">ne serait-ce qu'une</strong> de ces situations...
            </p>
            <p className="text-[#2E5CFF] font-black text-xl mt-2">Continuez à lire.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
