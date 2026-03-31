import CountdownTimer from '../components/CountdownTimer';
import Button from '../components/Button';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628]">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 gradient-animated opacity-80"
        style={{
          background:
            'linear-gradient(135deg, #0A1628 0%, #0D1F3C 25%, #0A2550 50%, #0D1F3C 75%, #0A1628 100%)',
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(46,92,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(46,92,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2E5CFF]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00D4FF]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 md:py-40">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#2E5CFF]/20 border border-[#2E5CFF]/40 text-[#00D4FF] text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
          50+ artisans IDF nous font confiance
        </div>

        {/* Countdown */}
        <div className="flex justify-center mb-8">
          <CountdownTimer />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
          Vous avez 10 secondes
          <br />
          <span className="text-[#2E5CFF]">pour décider.</span>
        </h1>

        {/* Choice */}
        <div className="max-w-3xl mx-auto mb-10 space-y-4">
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5">
            <p className="text-white/70 text-lg">
              Soit vous fermez cet onglet et continuez à perdre{' '}
              <strong className="text-red-400">2 400€/mois.</strong>
            </p>
          </div>

          <div className="bg-[#2E5CFF]/10 border border-[#2E5CFF]/40 rounded-2xl p-5">
            <p className="text-white text-lg leading-relaxed">
              Soit vous découvrez comment <strong className="text-[#00D4FF]">Fixlyy</strong> répond à vos appels{' '}
              <strong>24/7</strong>, génère vos devis automatiquement, et vous fait gagner{' '}
              <strong className="text-[#10B981]">3h par jour.</strong>
            </p>
          </div>

          <p className="text-2xl font-bold text-white">
            Pour le prix d'un seul appel raté :{' '}
            <span className="mono text-[#FF6B35] text-3xl">79€</span>
            <span className="text-white/60 text-lg">/mois</span>
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">
            Je choisis Fixlyy <ArrowRight size={20} />
          </Button>
          <Button variant="ghost" size="lg">
            <ArrowDown size={20} /> Montrez-moi comment
          </Button>
        </div>

        {/* Trust */}
        <p className="mt-6 text-white/40 text-sm">
          Sans carte bancaire · Sans engagement · Setup 30min offert
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs">Défiler</span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
