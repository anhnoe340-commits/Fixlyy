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
    <section className="section-light py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#EEF3FF] border border-[#C5D3F8] text-[#2E5CFF] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628]">
            Votre vie <span className="text-[#DC2626]">AVANT</span> vs{' '}
            <span className="text-[#10B981]">APRÈS</span>
          </h2>
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-2xl border border-[#DDE5F8] overflow-hidden shadow-sm mb-8">
          {/* Header row */}
          <div className="grid grid-cols-[1fr_auto_1fr] bg-[#F5F8FF] border-b border-[#DDE5F8]">
            <div className="px-5 py-3 text-center">
              <span className="text-sm font-black text-[#DC2626] uppercase tracking-wider">❌ Avant</span>
            </div>
            <div className="w-px bg-[#DDE5F8]" />
            <div className="px-5 py-3 text-center">
              <span className="text-sm font-black text-[#10B981] uppercase tracking-wider">✅ Avec Fixlyy</span>
            </div>
          </div>

          {/* Rows */}
          {pairs.map(([b, a], i) => (
            <div key={i} className={`grid grid-cols-[1fr_auto_1fr] ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFBFF]'} border-b border-[#F0F4FF] last:border-0`}>
              <div className="px-5 py-3.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]/40 flex-shrink-0" />
                <span className="text-sm text-[#64748B] line-through decoration-[#DC2626]/30">{b}</span>
              </div>
              <div className="w-px bg-[#F0F4FF]" />
              <div className="px-5 py-3.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] flex-shrink-0" />
                <span className="text-sm font-semibold text-[#0A1628]">{a}</span>
              </div>
            </div>
          ))}

          {/* Footer row */}
          <div className="grid grid-cols-[1fr_auto_1fr] bg-[#F5F8FF]">
            <div className="px-5 py-4 text-center">
              <span className="font-black text-[#DC2626] text-base">= CHAOS</span>
            </div>
            <div className="w-px bg-[#DDE5F8]" />
            <div className="px-5 py-4 text-center">
              <span className="font-black text-[#10B981] text-base">= CONTRÔLE</span>
            </div>
          </div>
        </div>

        <p className="text-center text-lg font-bold text-[#64748B] mb-12">
          La différence ?{' '}
          <span className="mono text-[#2E5CFF] text-2xl font-black">79€</span>
          <span className="text-[#94A3B8]">/mois</span>
        </p>

        {/* ROI Calculator — light */}
        <div className="bg-white rounded-2xl border border-[#C5D3F8] shadow-[0_4px_32px_rgba(46,92,255,0.08)] overflow-hidden">
          {/* Blue header */}
          <div className="bg-[#2E5CFF] px-8 py-6 text-center">
            <h3 className="text-white font-black text-xl md:text-2xl">Calculez vos économies</h3>
            <p className="text-white/70 text-sm mt-1">Déplacez le curseur — résultats en temps réel</p>
          </div>

          <div className="p-8">
            {/* Slider */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-[#0A1628] font-semibold text-sm">
                  Appels ratés par semaine
                </label>
                <span className="mono font-black text-3xl text-[#2E5CFF]">{calls}</span>
              </div>
              <input type="range" min="0" max="30" value={calls}
                onChange={e => setCalls(+e.target.value)}
                className="w-full h-2 accent-[#2E5CFF] rounded-full cursor-pointer" />
              <div className="flex justify-between text-xs text-[#94A3B8] mt-1.5">
                <span>0</span><span>15</span><span>30</span>
              </div>
            </div>

            {/* Results */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-[#FFF5F5] border border-[#FECACA] rounded-xl p-5 text-center">
                <p className="text-[#DC2626] text-xs font-bold uppercase tracking-wider mb-2">Vous perdez</p>
                <p className="mono font-black text-2xl text-[#DC2626]">{lost.toLocaleString('fr-FR')}€</p>
                <p className="text-[#94A3B8] text-xs mt-1">/mois actuellement</p>
              </div>
              <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5 text-center">
                <p className="text-[#059669] text-xs font-bold uppercase tracking-wider mb-2">Vous récupérez</p>
                <p className="mono font-black text-2xl text-[#059669]">{saved.toLocaleString('fr-FR')}€</p>
                <p className="text-[#94A3B8] text-xs mt-1">net/mois</p>
              </div>
              <div className="bg-[#EEF3FF] border border-[#C5D3F8] rounded-xl p-5 text-center">
                <p className="text-[#2E5CFF] text-xs font-bold uppercase tracking-wider mb-2">ROI</p>
                <p className="mono font-black text-2xl text-[#2E5CFF]">{roi.toLocaleString('fr-FR')}%</p>
                <p className="text-[#94A3B8] text-xs mt-1">retour sur invest.</p>
              </div>
            </div>

            <div className="mt-7 text-center">
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
