import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const pairs = [
  ['8h/semaine admin', '0h admin'],
  ['2h/jour devis', '15 min/jour'],
  ['8 appels ratés/sem.', '0 appel raté'],
  ['Stress constant', 'Sérénité totale'],
  ['2 400€/mois perdus', '2 400€ récupérés'],
  ['Client attend 2 jours', 'Devis en 2 minutes'],
  ['Téléphone qui sonne', 'Vous travaillez'],
];

export default function Transformation() {
  const [calls, setCalls] = useState(8);
  const lost = calls * 4 * 300;
  const saved = Math.max(0, lost - 79);
  const roi = saved > 0 ? Math.round((saved / 79) * 100) : 0;

  return (
    <section className="section-white py-20 md:py-28 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#FFF7ED] border border-[#FDBA74] text-[#EA580C] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a]">
            Votre vie <span className="text-[#DC2626]">AVANT</span> vs{' '}
            <span className="text-[#059669]">APRÈS</span>
          </h2>
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-2xl border-2 border-[#E5E7EB] overflow-hidden shadow-sm mb-8">
          {/* Header row */}
          <div className="grid grid-cols-[1fr_auto_1fr] bg-[#F7F9FC] border-b-2 border-[#E5E7EB]">
            <div className="px-5 py-3.5 text-center">
              <span className="text-sm font-black text-[#DC2626] uppercase tracking-wider">❌ Avant</span>
            </div>
            <div className="w-px bg-[#E5E7EB]" />
            <div className="px-5 py-3.5 text-center">
              <span className="text-sm font-black text-[#059669] uppercase tracking-wider">✅ Avec Fixlyy</span>
            </div>
          </div>

          {/* Rows */}
          {pairs.map(([b, a], i) => (
            <div key={i} className={`grid grid-cols-[1fr_auto_1fr] ${i % 2 === 0 ? 'bg-white' : 'bg-[#F7F9FC]'} border-b border-[#F3F4F6] last:border-0`}>
              <div className="px-5 py-3.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]/40 flex-shrink-0" />
                <span className="text-sm text-[#6B7280] line-through decoration-[#DC2626]/30">{b}</span>
              </div>
              <div className="w-px bg-[#F3F4F6]" />
              <div className="px-5 py-3.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669] flex-shrink-0" />
                <span className="text-sm font-semibold text-[#1a1a1a]">{a}</span>
              </div>
            </div>
          ))}

          {/* Footer row */}
          <div className="grid grid-cols-[1fr_auto_1fr] bg-[#F7F9FC] border-t-2 border-[#E5E7EB]">
            <div className="px-5 py-4 text-center">
              <span className="font-black text-[#DC2626] text-base">= CHAOS</span>
            </div>
            <div className="w-px bg-[#E5E7EB]" />
            <div className="px-5 py-4 text-center">
              <span className="font-black text-[#059669] text-base">= CONTRÔLE</span>
            </div>
          </div>
        </div>

        <p className="text-center text-lg font-bold text-[#6B7280] mb-14">
          La différence ?{' '}
          <span className="mono text-[#FF6B35] text-2xl font-black">79€</span>
          <span className="text-[#9CA3AF]">/mois</span>
        </p>

        {/* ROI Calculator */}
        <div className="bg-white rounded-2xl border-2 border-[#E5E7EB] shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden">
          {/* Orange header */}
          <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A5C] px-8 py-6 text-center">
            <h3 className="text-white font-black text-xl md:text-2xl">Calculez vos économies</h3>
            <p className="text-white/75 text-sm mt-1">Déplacez le curseur — résultats en temps réel</p>
          </div>

          <div className="p-8">
            {/* Slider */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-[#1a1a1a] font-semibold text-sm">
                  Appels ratés par semaine
                </label>
                <span className="mono font-black text-3xl text-[#FF6B35]">{calls}</span>
              </div>
              <input type="range" min="0" max="30" value={calls}
                onChange={e => setCalls(+e.target.value)}
                className="w-full h-2 accent-[#FF6B35] rounded-full cursor-pointer" />
              <div className="flex justify-between text-xs text-[#9CA3AF] mt-1.5">
                <span>0</span><span>15</span><span>30</span>
              </div>
            </div>

            {/* Results */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-[#FFF5F5] border-2 border-[#FECACA] rounded-xl p-5 text-center">
                <p className="text-[#DC2626] text-xs font-bold uppercase tracking-wider mb-2">Vous perdez</p>
                <p className="mono font-black text-2xl text-[#DC2626]">{lost.toLocaleString('fr-FR')}€</p>
                <p className="text-[#9CA3AF] text-xs mt-1">/mois actuellement</p>
              </div>
              <div className="bg-[#F0FDF4] border-2 border-[#BBF7D0] rounded-xl p-5 text-center">
                <p className="text-[#059669] text-xs font-bold uppercase tracking-wider mb-2">Vous récupérez</p>
                <p className="mono font-black text-2xl text-[#059669]">{saved.toLocaleString('fr-FR')}€</p>
                <p className="text-[#9CA3AF] text-xs mt-1">net/mois</p>
              </div>
              <div className="bg-[#FFF7ED] border-2 border-[#FDBA74] rounded-xl p-5 text-center">
                <p className="text-[#FF6B35] text-xs font-bold uppercase tracking-wider mb-2">ROI</p>
                <p className="mono font-black text-2xl text-[#FF6B35]">{roi.toLocaleString('fr-FR')}%</p>
                <p className="text-[#9CA3AF] text-xs mt-1">retour sur invest.</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="primary" size="xl"
                onClick={() => document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' })}>
                Récupérer mes {lost.toLocaleString('fr-FR')}€/mois <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
