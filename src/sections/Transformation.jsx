/* Rescale-style "Our Milestones, Your Advantage" */
import Button from '../components/Button';

const milestones = [
  { val: '50+', label: 'Artisans actifs', desc: 'En Île-de-France' },
  { val: '97%', label: 'Satisfaction', desc: 'Note moyenne 4.9/5' },
  { val: '2 847', label: 'Appels/mois', desc: 'Zéro manqué' },
  { val: '143k€', label: 'Revenus récupérés', desc: 'Par nos utilisateurs' },
  { val: '30 min', label: 'Setup moyen', desc: 'Opérationnel dès J1' },
  { val: '0', label: 'Remboursements', desc: 'Garantie 30 jours' },
];

const beforeAfter = [
  { before: '8 appels ratés/sem.', after: '0 appel manqué' },
  { before: '2h/jour en devis', after: '15 min/jour' },
  { before: 'Clients sans réponse', after: 'Réponse en 3 sonneries' },
  { before: '28 000€/an perdus', after: '28 000€/an récupérés' },
];

export default function Transformation() {
  return (
    <section className="section-light py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#7C3AED] mb-4">Résultats</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] leading-tight">
            Nos jalons,{' '}
            <span className="text-italic-accent">votre avantage</span>
          </h2>
          <p className="mt-4 text-[#6B7280] max-w-md mx-auto leading-relaxed">
            Des chiffres concrets, pas des promesses. Voici ce que Fixlyy fait réellement.
          </p>
        </div>

        {/* Milestones grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-16">
          {milestones.map((m, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#E5E7EB] p-6 text-center card-hover-purple">
              <p className="text-4xl font-black text-[#7C3AED] tracking-tight mb-1">{m.val}</p>
              <p className="font-bold text-[#111827] text-sm mb-1">{m.label}</p>
              <p className="text-xs text-[#9CA3AF]">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Before / After split */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm">
          <div className="grid grid-cols-2">
            <div className="px-6 py-4 bg-[#FFF5F5] border-r border-[#E5E7EB]">
              <p className="text-xs font-black text-[#DC2626] uppercase tracking-widest">❌ Avant Fixlyy</p>
            </div>
            <div className="px-6 py-4 bg-[#F0FDF4]">
              <p className="text-xs font-black text-[#059669] uppercase tracking-widest">✅ Avec Fixlyy</p>
            </div>
          </div>
          {beforeAfter.map(({ before, after }, i) => (
            <div key={i} className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'} border-t border-[#F3F4F6]`}>
              <div className="px-6 py-3.5 flex items-center gap-2 border-r border-[#F3F4F6]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FCA5A5] flex-shrink-0" />
                <span className="text-sm text-[#6B7280] line-through decoration-[#FCA5A5]/60">{before}</span>
              </div>
              <div className="px-6 py-3.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] flex-shrink-0" />
                <span className="text-sm font-semibold text-[#111827]">{after}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="primary" size="lg"
            onClick={() => document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' })}>
            Rejoindre les 50+ artisans →
          </Button>
        </div>
      </div>
    </section>
  );
}
