import { CheckCircle2, ArrowRight } from 'lucide-react';

const genSteps = [
  'Diagnostic du problème',
  'Liste du matériel nécessaire',
  "Temps main d'œuvre estimé",
  'Calcul prix total HT/TTC',
  'PDF professionnel avec logo',
  'Envoi email client automatique',
];

export default function FeatureQuotes() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Devis automatique
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628]">
            Devis en{' '}
            <span className="text-[#10B981]">2 minutes</span>.
            <br />Pas 2 heures.
          </h2>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Steps */}
          <div className="space-y-3">
            {genSteps.map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-[#F7F9FC] rounded-xl px-5 py-4 border border-gray-100"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CheckCircle2 size={22} className="text-[#10B981] flex-shrink-0" />
                <span className="font-medium text-[#0A1628]">{step}</span>
              </div>
            ))}
          </div>

          {/* PDF preview */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
            {/* PDF Header */}
            <div className="bg-[#0A1628] p-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#2E5CFF] rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">F</span>
                </div>
                <span className="text-white font-bold text-sm">Devis — Fixlyy</span>
              </div>
              <span className="text-white/40 text-xs mono">N° 2026-0142</span>
            </div>
            {/* PDF Body */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between text-sm">
                <div>
                  <p className="font-bold text-[#0A1628]">Plomberie Martin</p>
                  <p className="text-[#0A1628]/50 text-xs">Paris, Île-de-France</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#0A1628]">M. Dupont</p>
                  <p className="text-[#0A1628]/50 text-xs">15 rue de la Paix, 75015</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs font-bold text-[#0A1628]/50 uppercase mb-3">Objet : Fuite cuisine</p>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Diagnostic', '1h', '80,00€'],
                      ["Main d'œuvre", '2h', '120,00€'],
                      ['Pièces détachées', '—', '45,00€'],
                    ].map(([label, qty, price]) => (
                      <tr key={label}>
                        <td className="py-2 text-[#0A1628]/70">{label}</td>
                        <td className="py-2 text-center text-[#0A1628]/50">{qty}</td>
                        <td className="py-2 text-right mono font-medium">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-[#0A1628]">
                      <td colSpan={2} className="py-3 font-black text-[#0A1628] uppercase text-xs tracking-wider">Total TTC</td>
                      <td className="py-3 text-right mono font-black text-[#2E5CFF] text-lg">245,00€</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="bg-[#F7F9FC] rounded-lg p-3 text-xs text-[#0A1628]/50 text-center">
                Devis valable 30 jours · Généré par Fixlyy IA
              </div>
            </div>
          </div>
        </div>

        {/* Time comparison */}
        <div className="bg-[#F7F9FC] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          <div>
            <p className="text-[#0A1628]/50 text-sm mb-1">Avant Fixlyy</p>
            <p className="font-black text-4xl text-red-400 mono">30-45 min</p>
            <p className="text-[#0A1628]/50 text-sm">par devis</p>
          </div>
          <div className="flex items-center justify-center w-10 h-10 bg-[#2E5CFF] rounded-full flex-shrink-0">
            <ArrowRight size={18} className="text-white" />
          </div>
          <div>
            <p className="text-[#0A1628]/50 text-sm mb-1">Avec Fixlyy</p>
            <p className="font-black text-4xl text-[#10B981] mono">2 min</p>
            <p className="text-[#10B981]/60 text-sm italic">(dont 1min50 pour le café ☕)</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-10 bg-[#0A1628] rounded-2xl p-8 max-w-2xl mx-auto text-center">
          <p className="text-white/20 text-6xl font-serif leading-none mb-4">"</p>
          <blockquote className="text-white text-lg leading-relaxed italic">
            Je faisais 8 devis/semaine = 6h de travail. Maintenant Fixlyy les fait. Je valide juste. 6h récupérées = 900€ de CA en plus.
          </blockquote>
          <cite className="mt-4 block text-[#00D4FF] text-sm font-semibold not-italic">
            — Marc D., plombier Paris
          </cite>
        </div>
      </div>
    </section>
  );
}
