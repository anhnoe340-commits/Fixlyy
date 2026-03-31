import { ShieldCheck } from 'lucide-react';
import Button from '../components/Button';

export default function Guarantee() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Big badge */}
        <div className="inline-flex flex-col items-center gap-3 mb-10">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <ShieldCheck size={48} className="text-[#10B981]" />
          </div>
          <div className="bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] font-black text-lg md:text-xl px-8 py-3 rounded-2xl">
            🛡️ 30 JOURS SATISFAIT OU REMBOURSÉ
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628] mb-8">
          Notre garantie simple
        </h2>

        <div className="bg-[#F7F9FC] rounded-2xl border border-gray-100 p-8 md:p-12 space-y-6">
          <p className="text-[#0A1628]/70 text-lg leading-relaxed">
            Essayez Fixlyy pendant <strong className="text-[#0A1628]">30 jours</strong>.<br />
            Si vous ne récupérez pas AU MOINS le prix de l'abonnement en clients sauvés,{' '}
            <strong className="text-[#10B981]">on vous rembourse intégralement.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center text-[#0A1628]/60 text-base">
            <span>Pas de question.</span>
            <span className="hidden sm:inline text-gray-300">·</span>
            <span>Pas de friction.</span>
            <span className="hidden sm:inline text-gray-300">·</span>
            <span>Juste un email.</span>
          </div>

          <div className="bg-[#0A1628] rounded-xl p-6 text-left">
            <p className="text-white/30 text-4xl font-serif mb-3">"</p>
            <p className="text-white leading-relaxed italic">
              Pourquoi cette garantie ?<br />
              Parce qu'on sait que ça marche.<br />
              50 artisans utilisent Fixlyy.<br />
              <strong className="text-[#10B981] not-italic">0 remboursements demandés.</strong>
            </p>
            <p className="text-[#00D4FF] text-sm mt-4 font-semibold not-italic">— Noé, fondateur de Fixlyy</p>
          </div>

          <p className="text-[#0A1628]/40 text-sm">
            Remboursement : <a href="mailto:support@fixlyy.fr" className="text-[#2E5CFF] hover:underline">support@fixlyy.fr</a>
          </p>
        </div>

        <div className="mt-8">
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Essayer sans risque →
          </Button>
        </div>
      </div>
    </section>
  );
}
