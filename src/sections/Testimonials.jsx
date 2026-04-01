const testimonials = [
  {
    quote: 'Avant Fixlyy : 10 appels ratés/semaine. Depuis 3 mois : 0 appel manqué. J\'ai récupéré 3 200€/mois.',
    name: 'Marc D.', role: 'Plombier Paris 15', since: '3 mois', initials: 'MD', color: '#FF6B35',
  },
  {
    quote: 'Les devis auto c\'est magique. Avant 45min/devis. Maintenant 2min. Je fais 3× plus de devis dans la journée.',
    name: 'Ahmed K.', role: 'Électricien Montreuil', since: '5 mois', initials: 'AK', color: '#EA580C',
  },
  {
    quote: 'Setup en 30min. Tellement simple. Maintenant je dors tranquille, Fixlyy bosse pour moi 24/7.',
    name: 'Sophie L.', role: 'Plomberie Versailles', since: '2 mois', initials: 'SL', color: '#7C3AED',
  },
  {
    quote: 'J\'étais sceptique au début. Maintenant je ne pourrais plus m\'en passer. ROI positif dès la 1ère semaine.',
    name: 'Karim B.', role: 'Électricien Vincennes', since: '4 mois', initials: 'KB', color: '#059669',
  },
  {
    quote: 'La qualité des devis est bluffante. Mes clients me disent que je suis très professionnel. Merci Fixlyy !',
    name: 'Julien M.', role: 'Plombier Boulogne', since: '6 mois', initials: 'JM', color: '#DC2626',
  },
  {
    quote: 'Avant je perdais des clients parce que je rappelais trop tard. Maintenant Fixlyy capte tout immédiatement.',
    name: 'Nadia R.', role: 'Électricienne Saint-Denis', since: '3 mois', initials: 'NR', color: '#0891B2',
  },
];

const stats = [
  { val: '50+', label: 'Artisans actifs' },
  { val: '97%', label: 'Satisfaction' },
  { val: '2 847', label: 'Appels ce mois' },
  { val: '0', label: 'Remboursements' },
];

export default function Testimonials() {
  return (
    <section className="section-white py-20 md:py-28 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#FFF7ED] border border-[#FDBA74] text-[#EA580C] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a]">
            Ce qu'ils disent de{' '}
            <span className="highlight-italic">Fixlyy</span>
          </h2>
          <p className="mt-4 text-[#6B7280] leading-relaxed">50+ artisans IDF font confiance à Fixlyy. 0 remboursement.</p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {testimonials.map((t, i) => (
            <div key={i}
              className="bg-white border-2 border-[#E5E7EB] rounded-2xl p-7 flex flex-col gap-4 hover:border-[#FF6B35] hover:shadow-[0_8px_16px_rgba(255,107,53,0.1)] hover:-translate-y-1 transition-all duration-200">
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#FF6B35] text-base">★</span>
                ))}
              </div>
              {/* Quote */}
              <blockquote className="text-[#6B7280] text-sm leading-relaxed flex-1 italic">
                "{t.quote}"
              </blockquote>
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#F3F4F6]">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-black"
                  style={{ background: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-[#1a1a1a] text-sm">{t.name}</p>
                  <p className="text-[#9CA3AF] text-xs">{t.role}</p>
                  <p className="text-xs font-medium" style={{ color: t.color }}>Client depuis {t.since}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="bg-[#0A1628] rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <p className="mono font-black text-2xl sm:text-3xl text-[#FF6B35]">{s.val}</p>
              <p className="text-white/50 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
