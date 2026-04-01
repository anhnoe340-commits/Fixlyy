import { ShieldCheck } from 'lucide-react';
import Button from '../components/Button';

export default function Guarantee() {
  return (
    <section className="section-light py-20 md:py-28 lg:py-32">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">

        {/* Shield badge */}
        <div className="inline-flex flex-col items-center gap-4 mb-10">
          <div className="w-20 h-20 bg-[#FFF7ED] border-4 border-[#FDBA74] rounded-full flex items-center justify-center">
            <ShieldCheck size={38} className="text-[#FF6B35]" />
          </div>
          <span className="bg-[#FFF7ED] border-2 border-[#FDBA74] text-[#FF6B35] font-black text-sm sm:text-base px-6 py-2.5 rounded-full">
            🛡️ 30 JOURS SATISFAIT OU REMBOURSÉ
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] mb-4">
          La garantie Fixlyy.
        </h2>
        <p className="highlight-italic text-2xl mb-8">Zéro risque.</p>

        <div className="bg-white border-2 border-[#E5E7EB] rounded-2xl p-8 md:p-10 text-left space-y-6">
          <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed text-center">
            Essayez Fixlyy <strong className="text-[#1a1a1a]">30 jours</strong>. Si vous ne récupérez pas au moins
            le prix de l'abonnement en clients sauvés,{' '}
            <strong className="text-[#FF6B35]">on vous rembourse intégralement.</strong>
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#6B7280]">
            {['Pas de question.', 'Pas de friction.', 'Juste un email.'].map(t => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />{t}
              </span>
            ))}
          </div>

          {/* Quote */}
          <div className="bg-[#0A1628] rounded-xl p-6">
            <p className="text-white/20 text-4xl font-serif leading-none mb-3">"</p>
            <p className="text-white/85 text-sm leading-relaxed italic">
              Pourquoi cette garantie ? Parce qu'on sait que ça marche.
              50 artisans utilisent Fixlyy.{' '}
              <strong className="text-[#10B981] not-italic">0 remboursements demandés.</strong>
            </p>
            <p className="text-[#FF6B35] text-sm mt-4 font-semibold not-italic">— Noé, fondateur de Fixlyy</p>
          </div>

          <p className="text-center text-[#9CA3AF] text-sm">
            Pour un remboursement :{' '}
            <a href="mailto:support@fixlyy.fr" className="text-[#FF6B35] hover:underline font-medium">
              support@fixlyy.fr
            </a>
          </p>
        </div>

        <div className="mt-8">
          <Button variant="primary" size="xl"
            onClick={() => document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' })}>
            Essayer sans risque — 30 jours →
          </Button>
        </div>
      </div>
    </section>
  );
}
