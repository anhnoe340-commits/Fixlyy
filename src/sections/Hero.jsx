import { ArrowRight, Phone, CheckCircle2, Star } from 'lucide-react';
import Button from '../components/Button';

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main dashboard card */}
      <div className="bg-white rounded-2xl shadow-[0_20px_80px_rgba(124,58,237,0.15)] border border-[#E5E7EB] overflow-hidden">
        {/* Top bar */}
        <div className="bg-[#7C3AED] px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="11" height="11" fill="white">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-white font-bold text-xs">Fixlyy Dashboard</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-400 rounded-full pulse-dot" />
            <span className="text-white/70 text-[10px]">En ligne</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-0 border-b border-[#F3F4F6]">
          {[
            { label: 'Appels ce mois', val: '2 847', color: '#7C3AED' },
            { label: 'Devis générés', val: '384', color: '#059669' },
            { label: 'Clients satisfaits', val: '97%', color: '#EA580C' },
          ].map((s, i) => (
            <div key={i} className={`px-4 py-3 ${i < 2 ? 'border-r border-[#F3F4F6]' : ''}`}>
              <p className="font-black text-lg" style={{ color: s.color }}>{s.val}</p>
              <p className="text-[10px] text-[#9CA3AF] mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-[#374151]">Appels traités — 7 derniers jours</p>
            <span className="text-[10px] bg-[#EDE9FE] text-[#7C3AED] px-2 py-0.5 rounded-full font-semibold">+12%</span>
          </div>
          {/* Bar chart */}
          <div className="flex items-end gap-1.5 h-16">
            {[65, 82, 55, 90, 78, 95, 88].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full rounded-t-sm transition-all" style={{
                  height: `${h}%`,
                  background: i === 5
                    ? 'linear-gradient(180deg,#7C3AED,#A78BFA)'
                    : 'linear-gradient(180deg,#DDD6FE,#EDE9FE)',
                }} />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {['L','M','M','J','V','S','D'].map(d => (
              <span key={d} className="flex-1 text-center text-[9px] text-[#9CA3AF]">{d}</span>
            ))}
          </div>
        </div>

        {/* Recent calls */}
        <div className="px-5 pb-4 space-y-2">
          <p className="text-xs font-semibold text-[#374151] mb-2">Derniers appels</p>
          {[
            { name: 'M. Dupont', type: 'Urgence fuite', time: 'Il y a 3 min', status: 'Devis envoyé', color: '#059669' },
            { name: 'Mme Martin', type: 'Installation élec', time: 'Il y a 18 min', status: 'RDV planifié', color: '#7C3AED' },
            { name: 'M. Bernard', type: 'Dépannage', time: 'Il y a 1h', status: 'Rappel prévu', color: '#EA580C' },
          ].map((c, i) => (
            <div key={i} className="flex items-center justify-between py-1.5 border-b border-[#F9FAFB] last:border-0">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#EDE9FE] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={10} className="text-[#7C3AED]" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#111827]">{c.name}</p>
                  <p className="text-[9px] text-[#9CA3AF]">{c.type} · {c.time}</p>
                </div>
              </div>
              <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full" style={{
                background: `${c.color}15`, color: c.color
              }}>{c.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge — top left */}
      <div className="absolute -left-8 top-12 float-card bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-[#E5E7EB] px-4 py-3 hidden sm:block">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-[#EDE9FE] rounded-xl flex items-center justify-center flex-shrink-0">
            <CheckCircle2 size={16} className="text-[#7C3AED]" />
          </div>
          <div>
            <p className="font-black text-sm text-[#111827]">+2 400€</p>
            <p className="text-[10px] text-[#9CA3AF]">récupérés ce mois</p>
          </div>
        </div>
      </div>

      {/* Floating badge — bottom right */}
      <div className="absolute -right-6 bottom-12 float-card-alt bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-[#E5E7EB] px-4 py-3 hidden sm:block">
        <div className="flex items-center gap-2.5">
          <div className="flex -space-x-1.5">
            {['#7C3AED','#059669','#EA580C'].map((c, i) => (
              <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-black text-white" style={{ background: c }}>
                {['MD','AK','SL'][i]}
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={9} className="text-[#7C3AED] fill-[#7C3AED]" />)}
            </div>
            <p className="text-[10px] text-[#9CA3AF]">50+ artisans actifs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16" style={{
      background: 'linear-gradient(160deg, #FFFFFF 0%, #F5F3FF 35%, #EDE9FE 60%, #FFFFFF 100%)'
    }}>

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob-animate absolute -top-48 -right-24 w-[500px] h-[500px] bg-[#7C3AED]/8 rounded-full blur-[100px]" />
        <div className="blob-animate-alt absolute -bottom-48 -left-24 w-[400px] h-[400px] bg-[#A78BFA]/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#7C3AED]/5 rounded-full blur-[80px]" />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#7C3AED 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left — text */}
          <div className="text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#DDD6FE] text-[#7C3AED] text-xs font-semibold px-4 py-2 rounded-full mb-8 shadow-sm">
              <span className="w-2 h-2 bg-[#7C3AED] rounded-full pulse-dot" />
              50+ artisans IDF · 2 847 appels traités · 97% satisfaction
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-[52px] lg:text-[60px] font-black text-[#111827] leading-[1.05] tracking-tight mb-6">
              Gérez vos clients avec{' '}
              <span className="text-italic-accent">l'IA 24/7</span>
            </h1>

            <p className="text-[#6B7280] text-lg leading-relaxed mb-8 max-w-lg">
              Fixlyy répond à vos appels, génère vos devis en 2 minutes et vous
              envoie un résumé par SMS. Vous travaillez, elle gère.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button variant="primary" size="lg"
                onClick={() => document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' })}>
                Essayer gratuitement <ArrowRight size={16} />
              </Button>
              <Button variant="secondary" size="lg"
                onClick={() => document.getElementById('comment-ca-marche')?.scrollIntoView({ behavior: 'smooth' })}>
                Voir comment ça marche
              </Button>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#9CA3AF]">
              {['Sans carte bancaire', '7 jours gratuits', 'Setup 30min offert', 'Résiliable à tout moment'].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#7C3AED]" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — dashboard mockup */}
          <div className="relative md:pl-4">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
