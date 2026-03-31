export default function Problem() {
  const problems = [
    {
      icon: '📞',
      label: 'APPELS RATÉS',
      color: 'border-red-500/40 bg-red-500/5',
      badge: 'bg-red-500/20 text-red-400',
      desc: '8 appels/semaine manqués pendant que vous êtes sur chantier. Chaque sonnerie sans réponse, c\'est un client chez le concurrent.',
      cost: '= 2 400€/mois ENVOLÉS',
      costColor: 'text-red-400',
    },
    {
      icon: '⏰',
      label: 'TEMPS PERDU',
      color: 'border-orange-500/40 bg-orange-500/5',
      badge: 'bg-orange-500/20 text-orange-400',
      desc: '2h/jour à faire des devis manuellement, rappeler des clients, noter des infos. Du temps que vous pourriez facturer.',
      cost: '= 15h/semaine PERDUES',
      costColor: 'text-orange-400',
    },
    {
      icon: '😰',
      label: 'STRESS',
      color: 'border-gray-500/40 bg-gray-500/5',
      badge: 'bg-gray-500/20 text-gray-400',
      desc: '"J\'aurais dû décrocher..." Ce regret qui vous ronge à chaque fin de journée. L\'épuisement de gérer TOUT seul.',
      cost: '= Épuisement MENTAL',
      costColor: 'text-gray-400',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F7F9FC]" id="probleme">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            La réalité du terrain
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628] leading-tight">
            Vous perdez de l'argent.
            <br />
            <span className="text-red-500">Chaque jour.</span>
          </h2>
          <p className="mt-4 text-lg text-[#0A1628]/60 max-w-2xl mx-auto">
            Si vous êtes plombier ou électricien indépendant en IDF, ces 3 problèmes vous coûtent probablement plus de 28 000€ par an.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.label}
              className={`rounded-2xl border-2 ${p.color} p-8 flex flex-col gap-4`}
            >
              <div className="text-5xl">{p.icon}</div>
              <span className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit ${p.badge}`}>
                {p.label}
              </span>
              <p className="text-[#0A1628]/70 leading-relaxed">{p.desc}</p>
              <p className={`font-black text-lg ${p.costColor}`}>{p.cost}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <div className="inline-block bg-white border border-gray-200 rounded-2xl px-8 py-6 shadow-sm max-w-2xl">
            <p className="text-[#0A1628]/70 text-lg leading-relaxed">
              Si vous vous reconnaissez dans ne serait-ce qu'<strong className="text-[#0A1628]">UNE</strong> de ces situations...
            </p>
            <p className="text-[#2E5CFF] font-black text-xl mt-2">Continuez à lire.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
