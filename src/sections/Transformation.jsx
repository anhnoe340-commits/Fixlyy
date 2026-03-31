import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const before = [
  '8h/semaine admin',
  '2h/jour devis',
  '8 appels ratés/semaine',
  'Stress constant',
  '2 400€/mois perdus',
  'Client attend 2 jours',
  'Téléphone qui sonne',
];

const after = [
  '0h admin',
  '15min/jour devis',
  '0 appel raté',
  'Sérénité totale',
  '2 400€ récupérés',
  'Devis en 2 minutes',
  'Vous travaillez',
];

export default function Transformation() {
  const [callsPerWeek, setCallsPerWeek] = useState(8);

  const callsPerMonth = callsPerWeek * 4;
  const avgCallValue = 300;
  const lostRevenue = callsPerMonth * avgCallValue;
  const fixlyyCost = 79;
  const savedRevenue = lostRevenue - fixlyyCost;
  const roi = savedRevenue > 0 ? Math.round((savedRevenue / fixlyyCost) * 100) : 0;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628]">
            Votre vie <span className="text-red-400">AVANT</span> vs{' '}
            <span className="text-[#10B981]">APRÈS</span> Fixlyy
          </h2>
        </div>

        {/* Before / After */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch mb-16">
          {/* Before */}
          <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-8">
            <h3 className="font-black text-red-500 text-xl mb-6 flex items-center gap-2">
              ❌ AVANT FIXLYY
            </h3>
            <ul className="space-y-3">
              {before.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#0A1628]/70">
                  <span className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                  </span>
                  {item}
                </li>
              ))}
              <li className="font-black text-red-500 text-xl mt-4 pt-4 border-t border-red-200">
                = CHAOS
              </li>
            </ul>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-[#2E5CFF] rounded-full flex items-center justify-center shadow-lg">
              <ArrowRight size={22} className="text-white" />
            </div>
          </div>

          {/* After */}
          <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-8">
            <h3 className="font-black text-[#10B981] text-xl mb-6">
              ✅ AVEC FIXLYY
            </h3>
            <ul className="space-y-3">
              {after.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#0A1628]/70">
                  <span className="w-5 h-5 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 bg-[#10B981] rounded-full" />
                  </span>
                  {item}
                </li>
              ))}
              <li className="font-black text-[#10B981] text-xl mt-4 pt-4 border-t border-green-200">
                = CONTRÔLE
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-2xl font-bold text-[#0A1628] mb-16">
          La différence ?{' '}
          <span className="mono text-[#FF6B35] text-3xl">79€</span>
          <span className="text-[#0A1628]/50">/mois</span>
        </p>

        {/* ROI Calculator */}
        <div className="bg-[#0A1628] rounded-2xl p-8 md:p-12">
          <h3 className="text-white font-black text-2xl md:text-3xl text-center mb-2">
            Calculez vos économies
          </h3>
          <p className="text-white/50 text-center text-sm mb-10">Résultats en temps réel</p>

          <div className="max-w-lg mx-auto">
            {/* Slider input */}
            <div className="mb-8">
              <label className="text-white/80 font-medium block mb-3">
                Combien d'appels ratez-vous par semaine ?
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="30"
                  value={callsPerWeek}
                  onChange={(e) => setCallsPerWeek(Number(e.target.value))}
                  className="flex-1 accent-[#2E5CFF] h-2 rounded-lg cursor-pointer"
                />
                <div className="w-16 text-center">
                  <span className="mono font-black text-3xl text-[#00D4FF]">{callsPerWeek}</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5 text-center">
                <p className="text-red-400 text-xs font-semibold uppercase tracking-wider mb-2">Vous perdez</p>
                <p className="mono font-black text-2xl text-red-400">
                  {lostRevenue.toLocaleString('fr-FR')}€
                </p>
                <p className="text-white/40 text-xs mt-1">/mois</p>
              </div>
              <div className="bg-[#10B981]/10 border border-[#10B981]/30 rounded-xl p-5 text-center">
                <p className="text-[#10B981] text-xs font-semibold uppercase tracking-wider mb-2">Vous récupérez</p>
                <p className="mono font-black text-2xl text-[#10B981]">
                  {savedRevenue > 0 ? savedRevenue.toLocaleString('fr-FR') : 0}€
                </p>
                <p className="text-white/40 text-xs mt-1">net/mois</p>
              </div>
              <div className="bg-[#2E5CFF]/10 border border-[#2E5CFF]/40 rounded-xl p-5 text-center">
                <p className="text-[#00D4FF] text-xs font-semibold uppercase tracking-wider mb-2">ROI</p>
                <p className="mono font-black text-2xl text-[#00D4FF]">
                  {roi.toLocaleString('fr-FR')}%
                </p>
                <p className="text-white/40 text-xs mt-1">retour invest.</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="primary" size="lg">
                Récupérer mes {lostRevenue.toLocaleString('fr-FR')}€/mois
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
