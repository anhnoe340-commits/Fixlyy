/* Rescale-style "What Our Clients Say" */
const testimonials = [
  {
    quote: 'Avant Fixlyy : 10 appels ratés par semaine. Depuis 3 mois : 0 appel manqué. J\'ai récupéré 3 200€ de CA ce mois.',
    name: 'Marc D.', role: 'Plombier', city: 'Paris 15', since: '3 mois', initials: 'MD', color: '#7C3AED',
  },
  {
    quote: 'Les devis automatiques m\'ont sauvé la vie. Avant, 45 min par devis. Maintenant 2 min. Je fais 3× plus de chiffre.',
    name: 'Ahmed K.', role: 'Électricien', city: 'Montreuil', since: '5 mois', initials: 'AK', color: '#059669',
  },
  {
    quote: 'Setup en 30 min chrono. Maintenant je dors tranquille, Fixlyy bosse pour moi 24/7. ROI positif dès la 1ère semaine.',
    name: 'Sophie L.', role: 'Plombier', city: 'Versailles', since: '2 mois', initials: 'SL', color: '#EA580C',
  },
  {
    quote: 'J\'étais sceptique. Maintenant je ne pourrais plus m\'en passer. Mes clients adorent la réactivité.',
    name: 'Karim B.', role: 'Électricien', city: 'Vincennes', since: '4 mois', initials: 'KB', color: '#0891B2',
  },
  {
    quote: 'La qualité des devis PDF est bluffante. Mes clients me pensent plus professionnel. Merci Fixlyy !',
    name: 'Julien M.', role: 'Plombier', city: 'Boulogne', since: '6 mois', initials: 'JM', color: '#7C3AED',
  },
  {
    quote: 'Avant je perdais des clients parce que je rappelais trop tard. Maintenant Fixlyy capte tout immédiatement.',
    name: 'Nadia R.', role: 'Électricienne', city: 'Saint-Denis', since: '3 mois', initials: 'NR', color: '#DC2626',
  },
];

export default function Testimonials() {
  return (
    <section className="section-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#7C3AED] mb-4">Témoignages</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] leading-tight">
            Ce que nos{' '}
            <span className="text-italic-accent">clients disent</span>
          </h2>
          <p className="mt-4 text-[#6B7280]">50+ artisans IDF. 0 remboursement.</p>
        </div>

        {/* Testimonial grid — Rescale style with large left card */}
        <div className="grid md:grid-cols-3 gap-5">

          {/* Featured left card — large */}
          <div className="md:row-span-2 bg-white border border-[#E5E7EB] rounded-2xl p-7 flex flex-col gap-5 card-hover-purple">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <span key={j} className="text-[#7C3AED] text-sm">★</span>
              ))}
            </div>
            <p className="text-[#DDD6FE] text-5xl font-serif leading-none">"</p>
            <blockquote className="text-[#374151] text-base sm:text-lg leading-relaxed flex-1 italic">
              {testimonials[0].quote}
            </blockquote>
            <div className="flex items-center gap-3 pt-4 border-t border-[#F3F4F6]">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black flex-shrink-0"
                style={{ background: testimonials[0].color }}>
                {testimonials[0].initials}
              </div>
              <div>
                <p className="font-bold text-[#111827]">{testimonials[0].name}</p>
                <p className="text-[#9CA3AF] text-sm">{testimonials[0].role} · {testimonials[0].city}</p>
                <p className="text-xs font-medium text-[#7C3AED] mt-0.5">Client depuis {testimonials[0].since}</p>
              </div>
            </div>
          </div>

          {/* Other cards */}
          {testimonials.slice(1).map((t, i) => (
            <div key={i} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 flex flex-col gap-3 card-hover-purple">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#7C3AED] text-xs">★</span>
                ))}
              </div>
              <blockquote className="text-[#6B7280] text-sm leading-relaxed flex-1 italic">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3 pt-3 border-t border-[#F3F4F6]">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                  style={{ background: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-[#111827] text-sm">{t.name}</p>
                  <p className="text-[#9CA3AF] text-xs">{t.role} · {t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
