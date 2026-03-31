const testimonials = [
  {
    quote: 'Avant Fixlyy : 10 appels ratés/semaine. Depuis 3 mois : 0 appel manqué. J\'ai récupéré 3 200€/mois.',
    name: 'Marc D.', role: 'Plombier Paris 15', since: '3 mois', initials: 'MD', color: '#2E5CFF',
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
    <section className="section-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#FEFCE8] border border-[#FDE68A] text-[#B45309] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628]">
            Ce qu'ils disent de{' '}
            <span className="text-gradient">Fixlyy</span>
          </h2>
          <p className="mt-3 text-[#64748B]">50+ artisans IDF font confiance à Fixlyy. 0 remboursement.</p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {testimonials.map((t, i) => (
            <div key={i}
              className="bg-white border border-[#DDE5F8] rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#FBBF24] text-base">★</span>
                ))}
              </div>
              {/* Quote */}
              <blockquote className="text-[#64748B] text-sm leading-relaxed flex-1 italic">
                "{t.quote}"
              </blockquote>
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#F0F4FF]">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-black"
                  style={{ background: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-[#0A1628] text-sm">{t.name}</p>
                  <p className="text-[#94A3B8] text-xs">{t.role}</p>
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
              <p className="mono font-black text-2xl sm:text-3xl text-[#2E5CFF]">{s.val}</p>
              <p className="text-white/50 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
