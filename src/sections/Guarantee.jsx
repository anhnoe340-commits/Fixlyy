import { ShieldCheck } from 'lucide-react';
import Button from '../components/Button';

export default function Guarantee() {
  return (
    <section className="section-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">

        {/* Shield badge */}
        <div className="inline-flex flex-col items-center gap-4 mb-10">
          <div className="w-20 h-20 bg-[#ECFDF5] border-4 border-[#A7F3D0] rounded-full flex items-center justify-center">
            <ShieldCheck size={38} className="text-[#059669]" />
          </div>
          <span className="bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] font-black text-sm sm:text-base px-6 py-2.5 rounded-full">
            🛡️ 30 JOURS SATISFAIT OU REMBOURSÉ
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628] mb-8">
          Notre garantie simple
        </h2>

        <div className="bg-[#F5F8FF] border border-[#C5D3F8] rounded-2xl p-8 md:p-10 text-left space-y-6">
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed text-center">
            Essayez Fixlyy <strong className="text-[#0A1628]">30 jours</strong>. Si vous ne récupérez pas au moins
            le prix de l'abonnement en clients sauvés,{' '}
            <strong className="text-[#059669]">on vous rembourse intégralement.</strong>
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#64748B]">
            {['Pas de question.', 'Pas de friction.', 'Juste un email.'].map(t => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#059669] rounded-full" />{t}
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
            <p className="text-[#00D4FF] text-sm mt-4 font-semibold not-italic">— Noé, fondateur de Fixlyy</p>
          </div>

          <p className="text-center text-[#94A3B8] text-sm">
            Pour un remboursement :{' '}
            <a href="mailto:support@fixlyy.fr" className="text-[#2E5CFF] hover:underline font-medium">
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
