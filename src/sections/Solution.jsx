import { Phone, FileText, MessageSquare } from 'lucide-react';

export default function Solution() {
  return (
    <section className="section-light py-20 md:py-28" id="fonctionnalites">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#EEF3FF] border border-[#C5D3F8] text-[#2E5CFF] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            La solution Fixlyy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628] leading-tight">
            Votre secrétaire IA
            <br /><span className="text-gradient">pendant que VOUS travaillez</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-xl mx-auto">
            Fixlyy gère tous vos appels, génère vos devis et vous envoie un résumé en 30 secondes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-[#DDE5F8] p-7 flex flex-col gap-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 bg-[#EEF3FF] rounded-xl flex items-center justify-center">
              <Phone size={24} className="text-[#2E5CFF]" />
            </div>
            <div>
              <h3 className="font-black text-[#0A1628] text-base uppercase tracking-wide mb-3">
                Répond 24/7 à vos appels
              </h3>
              <div className="space-y-1.5 text-sm text-[#64748B]">
                <p>Client appelle à 21h un dimanche ?</p>
                <p className="font-bold text-[#2E5CFF]">Fixlyy décroche.</p>
                <p>Pose les bonnes questions, note tout.</p>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-[#F0F4FF]">
              <p className="text-sm font-semibold text-[#10B981]">→ Vous dormez tranquille.</p>
            </div>
          </div>

          {/* Card 2 — featured */}
          <div className="bg-[#2E5CFF] rounded-2xl p-7 flex flex-col gap-5 shadow-[0_8px_40px_rgba(46,92,255,0.3)] hover:-translate-y-1 transition-all duration-200">
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
              <p className="mt-3 text-sm font-bold text-[#00D4FF]">PDF envoyé au client en 2 min.</p>
            </div>
            <div className="mt-auto pt-4 border-t border-white/15">
              <p className="text-sm font-semibold text-white/80">→ Vous validez en 1 clic.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-[#DDE5F8] p-7 flex flex-col gap-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 bg-[#EEF3FF] rounded-xl flex items-center justify-center">
              <MessageSquare size={24} className="text-[#2E5CFF]" />
            </div>
            <div>
              <h3 className="font-black text-[#0A1628] text-base uppercase tracking-wide mb-3">
                SMS résumé en 30 sec
              </h3>
              {/* SMS */}
              <div className="bg-[#F5F8FF] rounded-xl border border-[#DDE5F8] p-4">
                <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider mb-2">SMS · Fixlyy</p>
                <div className="text-xs space-y-1 font-mono text-[#0A1628]">
                  <p>🔔 <strong>M. Dupont</strong></p>
                  <p>⚠️ Urgence : OUI</p>
                  <p>🔧 Fuite cuisine · Paris 15</p>
                  <p>💶 Budget 200-300€</p>
                  <p>📞 06 12 34 56 78</p>
                  <p className="text-[#2E5CFF] font-bold">📄 [Devis PDF]</p>
                </div>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-[#F0F4FF]">
              <p className="text-sm font-semibold text-[#10B981]">→ Vous décidez en 5 sec.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
