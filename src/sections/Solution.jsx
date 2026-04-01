import { Phone, FileText, MessageSquare } from 'lucide-react';

export default function Solution() {
  return (
    <section className="section-white py-20 md:py-28 lg:py-32" id="fonctionnalites">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#FFF7ED] border border-[#FDBA74] text-[#EA580C] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            La solution Fixlyy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight">
            Votre secrétaire IA
            <br /><span className="highlight-italic">pendant que VOUS travaillez</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#6B7280] max-w-xl mx-auto leading-relaxed">
            Fixlyy gère tous vos appels, génère vos devis et vous envoie un résumé en 30 secondes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl border-2 border-[#E5E7EB] p-8 flex flex-col gap-5 hover:border-[#FF6B35] hover:shadow-[0_8px_16px_rgba(255,107,53,0.1)] hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 bg-[#FFF7ED] rounded-xl flex items-center justify-center">
              <Phone size={24} className="text-[#FF6B35]" />
            </div>
            <div>
              <h3 className="font-black text-[#1a1a1a] text-base uppercase tracking-wide mb-3">
                Répond 24/7 à vos appels
              </h3>
              <div className="space-y-1.5 text-sm text-[#6B7280] leading-relaxed">
                <p>Client appelle à 21h un dimanche ?</p>
                <p className="font-bold text-[#FF6B35]">Fixlyy décroche.</p>
                <p>Pose les bonnes questions, note tout.</p>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-[#F3F4F6]">
              <p className="text-sm font-semibold text-[#059669]">→ Vous dormez tranquille.</p>
            </div>
          </div>

          {/* Card 2 — featured (orange) */}
          <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF8A5C] rounded-2xl p-8 flex flex-col gap-5 shadow-[0_8px_40px_rgba(255,107,53,0.25)] hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center">
              <FileText size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-black text-white text-base uppercase tracking-wide mb-3">
                Génère vos devis auto
              </h3>
              <div className="bg-white/10 rounded-xl p-4 space-y-1.5 text-sm">
                {[['Diagnostic', '80€'], ["Main d'œuvre", '120€'], ['Pièces', '45€']].map(([l, v]) => (
                  <div key={l} className="flex justify-between text-white/75">
                    <span>{l}</span>
                    <span className="mono font-semibold text-white/90">{v}</span>
                  </div>
                ))}
                <div className="flex justify-between border-t border-white/20 pt-1.5 font-black text-white">
                  <span>Total TTC</span>
                  <span className="mono">245€</span>
                </div>
              </div>
              <p className="mt-3 text-sm font-bold text-white/90">PDF envoyé au client en 2 min.</p>
            </div>
            <div className="mt-auto pt-4 border-t border-white/15">
              <p className="text-sm font-semibold text-white/80">→ Vous validez en 1 clic.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border-2 border-[#E5E7EB] p-8 flex flex-col gap-5 hover:border-[#FF6B35] hover:shadow-[0_8px_16px_rgba(255,107,53,0.1)] hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 bg-[#FFF7ED] rounded-xl flex items-center justify-center">
              <MessageSquare size={24} className="text-[#FF6B35]" />
            </div>
            <div>
              <h3 className="font-black text-[#1a1a1a] text-base uppercase tracking-wide mb-3">
                SMS résumé en 30 sec
              </h3>
              {/* SMS */}
              <div className="bg-[#F7F9FC] rounded-xl border-2 border-[#E5E7EB] p-4">
                <p className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider mb-2">SMS · Fixlyy</p>
                <div className="text-xs space-y-1 font-mono text-[#1a1a1a]">
                  <p>🔔 <strong>M. Dupont</strong></p>
                  <p>⚠️ Urgence : OUI</p>
                  <p>🔧 Fuite cuisine · Paris 15</p>
                  <p>💶 Budget 200-300€</p>
                  <p>📞 06 12 34 56 78</p>
                  <p className="text-[#FF6B35] font-bold">📄 [Devis PDF]</p>
                </div>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-[#F3F4F6]">
              <p className="text-sm font-semibold text-[#059669]">→ Vous décidez en 5 sec.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
