/* Rescale-style "The Story So Far" → L'histoire de Fixlyy */
import Button from '../components/Button';

const timeline = [
  { year: '2024', title: 'L\'idée', desc: 'En accompagnant des plombiers et électriciens IDF, Noé réalise que la perte d\'appels coûte en moyenne 28 000€/an par artisan.' },
  { year: 'Jan 2025', title: 'Le prototype', desc: 'Premier test sur 5 artisans volontaires. Résultat : 0 appel manqué, 3h/jour économisées. Les artisans ne veulent plus arrêter.' },
  { year: 'Mars 2025', title: 'Le lancement', desc: 'Fixlyy ouvre ses portes à tous les artisans IDF. 50+ utilisateurs rejoignent en moins de 3 mois. 0 remboursement demandé.' },
  { year: 'Aujourd\'hui', title: 'La croissance', desc: '2 847 appels traités ce mois, 143 800€ récupérés collectivement. Bientôt disponible dans toute la France.' },
];

export default function FeatureQuotes() {
  return (
    <section className="section-light py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — story text */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#7C3AED] mb-4">Notre histoire</p>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black text-[#111827] leading-tight mb-6">
              L'histoire{' '}
              <span className="text-italic-accent">jusqu'ici —</span>
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-8">
              Fixlyy est né d'un constat simple : les meilleurs artisans perdent leurs meilleurs clients parce qu'ils ne peuvent pas répondre au téléphone pendant qu'ils travaillent.
            </p>

            {/* Big quote card */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6">
              <p className="text-[#DDD6FE] text-5xl font-serif leading-none mb-3">"</p>
              <blockquote className="text-[#374151] text-base leading-relaxed italic mb-4">
                En 3 mois avec Fixlyy, j'ai récupéré 9 600€ de CA que j'aurais perdu. Pour 79€/mois, c'est le meilleur investissement de ma carrière d'artisan.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#7C3AED] rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                  MD
                </div>
                <div>
                  <p className="font-bold text-[#111827] text-sm">Marc D.</p>
                  <p className="text-[#9CA3AF] text-xs">Plombier Paris 15 · Client depuis 3 mois</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — timeline */}
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-5 pb-8 last:pb-0 relative">
                {/* Vertical line */}
                {i < timeline.length - 1 && (
                  <div className="absolute left-[18px] top-9 bottom-0 w-px bg-[#DDD6FE]" />
                )}
                {/* Dot */}
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 z-10 border-2"
                  style={{
                    background: i === timeline.length - 1 ? '#7C3AED' : 'white',
                    borderColor: i === timeline.length - 1 ? '#7C3AED' : '#DDD6FE'
                  }}>
                  {i === timeline.length - 1
                    ? <span className="w-2 h-2 bg-white rounded-full" />
                    : <span className="w-2 h-2 bg-[#DDD6FE] rounded-full" />
                  }
                </div>
                <div>
                  <span className="text-xs font-bold text-[#A78BFA] tracking-widest">{t.year}</span>
                  <h3 className="font-black text-[#111827] text-base mt-0.5 mb-1">{t.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <Button variant="primary" size="lg"
            onClick={() => document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' })}>
            Rejoindre l'aventure →
          </Button>
        </div>
      </div>
    </section>
  );
}
