/* Rescale-style "Meet the Founders" → L'équipe Fixlyy + story */
import Button from '../components/Button';

export default function FeatureSecretary() {
  return (
    <section className="section-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#7C3AED] mb-4">L'équipe</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] leading-tight">
            Rencontrez le{' '}
            <span className="text-italic-accent">fondateur</span>
          </h2>
        </div>

        {/* Founder card — Rescale style */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-[#E5E7EB] rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center shadow-sm">

            {/* Left — avatar placeholder */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="w-28 h-28 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-3xl flex items-center justify-center text-white font-black text-4xl shadow-[0_8px_32px_rgba(124,58,237,0.3)]">
                N
              </div>
              <div>
                <p className="font-black text-xl text-[#111827]">Noé</p>
                <p className="text-[#7C3AED] font-semibold text-sm">Fondateur & CEO, Fixlyy</p>
                <p className="text-[#9CA3AF] text-sm mt-1">Paris, Île-de-France</p>
              </div>
              {/* Social */}
              <div className="flex gap-3">
                {[
                  { label: 'LinkedIn', icon: (
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                  )},
                  { label: 'Email', icon: (
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 8 10-8"/>
                    </svg>
                  )},
                ].map(({ label, icon }) => (
                  <a key={label} href="#" className="w-8 h-8 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white transition-colors">
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right — quote */}
            <div>
              <p className="text-[#DDD6FE] text-6xl font-serif leading-none mb-4">"</p>
              <blockquote className="text-[#374151] text-base sm:text-lg leading-relaxed mb-6 italic">
                J'ai créé Fixlyy après avoir accompagné des artisans qui perdaient des milliers d'euros chaque mois en appels manqués. La solution était simple : une secrétaire IA qui ne dort jamais, disponible 24/7 pour un coût 10× moins cher qu'une vraie secrétaire.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-[#F3F4F6]" />
                <span className="text-[#7C3AED] font-semibold text-sm">noe@fixlyy.fr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
