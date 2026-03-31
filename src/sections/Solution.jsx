import { Phone, FileText, MessageSquare } from 'lucide-react';

export default function Solution() {
  return (
    <section className="py-20 md:py-28 bg-white" id="fonctionnalites">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-[#2E5CFF] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            La solution
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628] leading-tight">
            Fixlyy = Votre secrétaire IA
            <br />
            <span className="text-[#2E5CFF]">pendant que VOUS travaillez</span>
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="rounded-2xl border border-gray-100 bg-[#F7F9FC] p-8 flex flex-col gap-5">
            <div className="w-14 h-14 bg-[#2E5CFF]/10 rounded-xl flex items-center justify-center">
              <Phone size={28} className="text-[#2E5CFF]" />
            </div>
            <h3 className="font-black text-[#0A1628] text-lg uppercase tracking-wide">
              Répond 24/7 à vos appels
            </h3>
            <div className="space-y-2 text-[#0A1628]/70">
              <p>Client appelle à 21h le dimanche ?</p>
              <p className="font-bold text-[#2E5CFF] text-lg">Fixlyy décroche.</p>
              <p>Pose les bonnes questions.</p>
              <p>Note tout automatiquement.</p>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-[#10B981]">Vous ? Vous dormez tranquille.</p>
            </div>
          </div>

          {/* Feature 2 - Accent */}
          <div className="rounded-2xl bg-[#0A1628] p-8 flex flex-col gap-5 shadow-xl">
            <div className="w-14 h-14 bg-[#2E5CFF]/30 rounded-xl flex items-center justify-center">
              <FileText size={28} className="text-[#00D4FF]" />
            </div>
            <h3 className="font-black text-white text-lg uppercase tracking-wide">
              Génère vos devis automatiquement
            </h3>
            <div className="space-y-1 text-white/60 text-sm">
              <p className="text-white/80">Fuite d'eau cuisine ? Fixlyy calcule :</p>
              <ul className="mt-3 space-y-1.5">
                {[
                  ['Diagnostic', '80€'],
                  ['Main d\'œuvre', '120€'],
                  ['Pièces', '45€'],
                ].map(([label, val]) => (
                  <li key={label} className="flex justify-between text-white/60">
                    <span>{label}</span>
                    <span className="mono font-semibold text-white/80">{val}</span>
                  </li>
                ))}
                <li className="flex justify-between border-t border-white/20 pt-1.5 text-white font-black">
                  <span>Total</span>
                  <span className="mono text-[#00D4FF]">245€ TTC</span>
                </li>
              </ul>
            </div>
            <p className="font-bold text-[#00D4FF]">PDF envoyé au client en 2 min.</p>
            <div className="mt-auto pt-4 border-t border-white/10">
              <p className="font-semibold text-[#10B981]">Vous ? Vous validez en 1 clic.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl border border-gray-100 bg-[#F7F9FC] p-8 flex flex-col gap-5">
            <div className="w-14 h-14 bg-[#2E5CFF]/10 rounded-xl flex items-center justify-center">
              <MessageSquare size={28} className="text-[#2E5CFF]" />
            </div>
            <h3 className="font-black text-[#0A1628] text-lg uppercase tracking-wide">
              SMS résumé en 30 secondes
            </h3>
            {/* SMS mockup */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
              <p className="text-xs text-gray-400 mb-2 font-medium">SMS reçu — Fixlyy</p>
              <div className="text-sm space-y-1 font-mono text-[#0A1628]">
                <p>🔔 <strong>M. Dupont</strong></p>
                <p>⚠️ Urgence : OUI</p>
                <p>🔧 Fuite cuisine</p>
                <p>📍 15 rue X, 75015</p>
                <p>💶 Budget : 200-300€</p>
                <p>📞 06 12 34 56 78</p>
                <p className="text-[#2E5CFF]">📄 [Devis PDF]</p>
                <p className="font-bold text-[#FF6B35]">Rappeler ?</p>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-[#10B981]">Vous décidez. En 5 secondes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
