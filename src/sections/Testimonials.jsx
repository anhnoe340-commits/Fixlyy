const testimonials = [
  {
    stars: 5,
    quote:
      'Avant Fixlyy : 10 appels ratés/semaine. Depuis 3 mois : 0 appel manqué. J\'ai récupéré 3 200€/mois en clients qui auraient été perdus.',
    name: 'Marc D.',
    role: 'Plombier Paris 15ème',
    since: 'Client depuis 3 mois',
    initials: 'MD',
    color: 'bg-blue-600',
  },
  {
    stars: 5,
    quote:
      'Les devis auto c\'est magique. Avant 45min/devis. Maintenant 2min. Je fais 3× plus de devis dans la même journée.',
    name: 'Ahmed K.',
    role: 'Électricien Montreuil',
    since: 'Client depuis 5 mois',
    initials: 'AK',
    color: 'bg-orange-500',
  },
  {
    stars: 5,
    quote:
      'Setup en 30min. Tellement simple. Maintenant je dors tranquille, Fixlyy bosse pour moi 24/7. Mes week-ends sont enfin libres.',
    name: 'Sophie L.',
    role: 'Plomberie Versailles',
    since: 'Cliente depuis 2 mois',
    initials: 'SL',
    color: 'bg-purple-600',
  },
  {
    stars: 5,
    quote:
      'J\'étais sceptique au début. Maintenant je ne pourrais plus m\'en passer. ROI positif dès la première semaine.',
    name: 'Karim B.',
    role: 'Électricien Vincennes',
    since: 'Client depuis 4 mois',
    initials: 'KB',
    color: 'bg-green-600',
  },
  {
    stars: 5,
    quote:
      'La qualité des devis est bluffante. Mes clients me disent que je suis très professionnel. Merci Fixlyy !',
    name: 'Julien M.',
    role: 'Plombier Boulogne',
    since: 'Client depuis 6 mois',
    initials: 'JM',
    color: 'bg-red-500',
  },
  {
    stars: 5,
    quote:
      'Avant je perdais des clients parce que je rappelais trop tard. Maintenant Fixlyy capte tout immédiatement. Parfait.',
    name: 'Nadia R.',
    role: 'Électricienne Saint-Denis',
    since: 'Cliente depuis 3 mois',
    initials: 'NR',
    color: 'bg-teal-600',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F9FC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ⭐ Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628]">
            Ce qu'ils disent de Fixlyy
          </h2>
          <p className="mt-4 text-lg text-[#0A1628]/60">
            50+ artisans IDF nous font confiance. 0 remboursements.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col gap-5 hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[#0A1628]/70 leading-relaxed flex-1 italic">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-11 h-11 ${t.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-sm">{t.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-[#0A1628]">{t.name}</p>
                  <p className="text-sm text-[#0A1628]/50">{t.role}</p>
                  <p className="text-xs text-[#2E5CFF]">{t.since}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-14 bg-[#0A1628] rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: '50+', label: 'Artisans actifs' },
            { val: '97%', label: 'Satisfaction' },
            { val: '2 847', label: 'Appels ce mois' },
            { val: '0', label: 'Remboursements' },
          ].map((s) => (
            <div key={s.label}>
              <p className="mono font-black text-3xl text-[#00D4FF]">{s.val}</p>
              <p className="text-white/50 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
