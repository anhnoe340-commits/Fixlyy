import { CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  'Diagnostic du problème client',
  'Liste du matériel nécessaire',
  "Estimation du temps de main d'œuvre",
  'Calcul prix total HT / TTC',
  'PDF professionnel à votre logo',
  'Envoi automatique par email au client',
];

export default function FeatureQuotes() {
  return (
    <section className="section-white py-20 md:py-28 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            Devis automatique
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a]">
            Devis en{' '}
            <span className="highlight-italic">2 minutes</span>.
            <br />Pas 2 heures.
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-14">

          {/* Steps list */}
          <div className="space-y-3">
            <p className="text-sm font-bold text-[#9CA3AF] uppercase tracking-widest mb-5">
              Ce que fait Fixlyy automatiquement :
            </p>
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-3 bg-white border-2 border-[#E5E7EB] rounded-xl px-5 py-4 hover:border-[#FF6B35] transition-colors">
                <CheckCircle2 size={18} className="text-[#FF6B35] flex-shrink-0" />
                <span className="text-sm font-medium text-[#1a1a1a]">{s}</span>
              </div>
            ))}
          </div>

          {/* PDF Preview */}
          <div className="bg-white rounded-2xl border-2 border-[#E5E7EB] shadow-lg overflow-hidden">
            <div className="bg-[#0A1628] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#FF6B35] rounded flex items-center justify-center">
                  <span className="text-white text-xs font-black">F</span>
                </div>
                <span className="text-white font-bold text-sm">Devis Fixlyy</span>
              </div>
              <span className="text-white/40 text-xs mono">N° 2026-0142</span>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between text-sm">
                <div>
                  <p className="font-bold text-[#1a1a1a]">Plomberie Martin</p>
                  <p className="text-[#9CA3AF] text-xs">Paris, Île-de-France</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#1a1a1a]">M. Dupont</p>
                  <p className="text-[#9CA3AF] text-xs">15 rue de la Paix, 75015</p>
                </div>
              </div>
              <div className="border-t-2 border-[#F3F4F6] pt-4">
                <p className="text-xs font-bold text-[#9CA3AF] uppercase mb-3 tracking-wider">Fuite cuisine</p>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-[#F3F4F6]">
                    {[['Diagnostic', '1h', '80,00€'], ["Main d'œuvre", '2h', '120,00€'], ['Pièces', '—', '45,00€']].map(([l, q, p]) => (
                      <tr key={l}>
                        <td className="py-2.5 text-[#6B7280]">{l}</td>
                        <td className="py-2.5 text-center text-[#9CA3AF]">{q}</td>
                        <td className="py-2.5 text-right mono font-medium text-[#1a1a1a]">{p}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-[#1a1a1a]">
                      <td colSpan={2} className="py-3 font-black text-[#1a1a1a] uppercase text-xs tracking-wider">Total TTC</td>
                      <td className="py-3 text-right mono font-black text-[#FF6B35] text-lg">245,00€</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="bg-[#F7F9FC] rounded-lg p-3 text-xs text-[#9CA3AF] text-center">
                Devis valable 30 jours · Généré par Fixlyy IA en 2 min
              </div>
            </div>
          </div>
        </div>

        {/* Time comparison */}
        <div className="bg-white rounded-2xl border-2 border-[#E5E7EB] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          <div>
            <p className="text-[#9CA3AF] text-xs font-bold uppercase tracking-widest mb-2">Avant Fixlyy</p>
            <p className="mono font-black text-4xl text-[#DC2626]">30–45 min</p>
            <p className="text-[#9CA3AF] text-sm mt-1">par devis</p>
          </div>
          <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0">
            <ArrowRight size={18} className="text-white" />
          </div>
          <div>
            <p className="text-[#9CA3AF] text-xs font-bold uppercase tracking-widest mb-2">Avec Fixlyy</p>
            <p className="mono font-black text-4xl text-[#059669]">2 min</p>
            <p className="text-[#059669]/60 text-sm mt-1 italic">dont 1min50 pour le café ☕</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-10 bg-[#0A1628] rounded-2xl p-8 max-w-2xl mx-auto text-center">
          <p className="text-white/20 text-5xl font-serif leading-none mb-3">"</p>
          <blockquote className="text-white/90 text-base leading-relaxed italic">
            Je faisais 8 devis/semaine = 6h de travail. Maintenant Fixlyy les fait. Je valide juste. 6h récupérées = 900€ de CA en plus.
          </blockquote>
          <cite className="mt-4 block text-[#FF6B35] text-sm font-semibold not-italic">— Marc D., plombier Paris</cite>
        </div>
      </div>
    </section>
  );
}
