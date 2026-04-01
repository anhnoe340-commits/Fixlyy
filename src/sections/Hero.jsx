import { useState, useEffect, useRef } from 'react';
import Button from '../components/Button';
import { ArrowRight, ChevronDown } from 'lucide-react';

function Countdown() {
  const [count, setCount] = useState(10);
  const [isZero, setIsZero] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    setCount(10); setIsZero(false);
    timerRef.current = setInterval(() => {
      setCount(p => {
        if (p <= 1) { clearInterval(timerRef.current); setIsZero(true); setTimeout(start, 2800); return 0; }
        return p - 1;
      });
    }, 1000);
  };

  useEffect(() => { start(); return () => clearInterval(timerRef.current); }, []); // eslint-disable-line

  const r = 40, circ = 2 * Math.PI * r;
  return (
    <div className={`relative w-20 h-20 flex-shrink-0 ${isZero ? 'pulse-orange' : ''}`}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 88 88">
        <circle cx="44" cy="44" r={r} fill="none" stroke="#E5E7EB" strokeWidth="6" />
        <circle cx="44" cy="44" r={r} fill="none"
          stroke={isZero ? '#FF6B35' : '#FF6B35'} strokeWidth="6" strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={circ - (count / 10) * circ}
          className="countdown-ring" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`font-black text-2xl mono leading-none ${isZero ? 'text-[#FF6B35]' : 'text-[#1a1a1a]'}`}>
          {isZero ? '!' : count}
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-16">

      {/* Background blobs — subtle */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
        <div className="blob-animate absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#FF6B35]/5 rounded-full blur-[120px]" />
        <div className="blob-animate-alt absolute -bottom-40 -right-32 w-[500px] h-[500px] bg-[#2E5CFF]/4 rounded-full blur-[120px]" />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 text-center py-16 md:py-24">

        {/* Top badge */}
        <div className="inline-flex items-center gap-2 bg-[#FFF7ED] border border-[#FDBA74] text-[#EA580C] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-10">
          <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse flex-shrink-0" />
          50+ artisans IDF · 2 847 appels traités ce mois · 97% satisfaction
        </div>

        {/* Countdown + headline */}
        <div className="flex flex-col items-center gap-6 mb-8">
          <Countdown />

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-[#1a1a1a] leading-[1.05] tracking-tight">
            Vous avez{' '}
            <span className="highlight-italic">10 secondes</span>
            <br />pour décider.
          </h1>
        </div>

        {/* Choices */}
        <div className="max-w-2xl mx-auto space-y-3 mb-10">
          <div className="flex items-start gap-3 bg-[#FFF5F5] border-2 border-[#FECACA] rounded-2xl px-5 py-4 text-left">
            <span className="text-lg mt-0.5 flex-shrink-0">&#10060;</span>
            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
              Soit vous fermez cet onglet et continuez à perdre{' '}
              <strong className="text-[#DC2626]">2 400€/mois</strong> en appels ratés.
            </p>
          </div>
          <div className="flex items-start gap-3 bg-[#F0FDF4] border-2 border-[#BBF7D0] rounded-2xl px-5 py-4 text-left">
            <span className="text-lg mt-0.5 flex-shrink-0">&#9989;</span>
            <p className="text-[#1a1a1a] text-sm sm:text-base leading-relaxed">
              Soit <strong className="text-[#FF6B35]">Fixlyy</strong> répond à vos appels{' '}
              <strong>24/7</strong>, génère vos devis auto, vous fait gagner{' '}
              <strong className="text-[#059669]">3h/jour</strong> — pour{' '}
              <strong className="mono text-[#FF6B35] text-lg">79€</strong>
              <span className="text-[#6B7280]">/mois</span>.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center mb-6">
          <Button variant="primary" size="xl"
            onClick={() => document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' })}>
            Essayer Fixlyy gratuitement <ArrowRight size={18} />
          </Button>
          <Button variant="outline" size="xl"
            onClick={() => document.getElementById('comment-ca-marche')?.scrollIntoView({ behavior: 'smooth' })}>
            Voir comment ça marche
          </Button>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[#9CA3AF] text-xs sm:text-sm">
          <span>✓ Sans carte bancaire</span>
          <span className="hidden sm:inline">·</span>
          <span>✓ 7 jours gratuits</span>
          <span className="hidden sm:inline">·</span>
          <span>✓ Setup 30min offert</span>
          <span className="hidden sm:inline">·</span>
          <span>✓ Résiliable à tout moment</span>
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#social-proof" className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#D1D5DB] hover:text-[#FF6B35] transition-colors">
        <ChevronDown size={22} className="animate-bounce" />
      </a>
    </section>
  );
}
