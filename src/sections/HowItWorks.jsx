/* Rescale-style "Explore Our Simple, Easy Process" → 4 numbered steps */
import { Phone, Bot, FileText, Smartphone } from 'lucide-react';
import Button from '../components/Button';

const steps = [
  {
    number: '01',
    Icon: Phone,
    title: 'Votre client appelle',
    desc: 'Votre numéro habituel sonne. Que vous soyez sous un évier, sur un toit ou en train de dîner.',
  },
  {
    number: '02',
    Icon: Bot,
    title: 'Fixlyy répond instantanément',
    desc: '"Bonjour, Plomberie Martin, je vous écoute." L\'IA pose les bonnes questions et note tout.',
  },
  {
    number: '03',
    Icon: FileText,
    title: 'Devis généré en 2 minutes',
    desc: 'Analyse → calcul → PDF pro envoyé au client. Matériel, main-d\'œuvre, total TTC inclus.',
  },
  {
    number: '04',
    Icon: Smartphone,
    title: 'SMS reçu. Vous décidez.',
    desc: 'Résumé complet sur votre téléphone en 30 secondes. Rappeler ou planifier : votre choix.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section-light py-20 md:py-28" id="comment-ca-marche">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#7C3AED] mb-4">Comment ça marche</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] leading-tight">
            Explorez notre processus{' '}
            <span className="text-italic-accent">simple et efficace</span>
          </h2>
          <p className="mt-4 text-[#6B7280] max-w-lg mx-auto leading-relaxed">
            Configurez Fixlyy une fois en 30 minutes. Il gère tout le reste 24h/24, 7j/7.
          </p>
        </div>

        {/* Steps — desktop horizontal like Rescale */}
        <div className="hidden md:grid grid-cols-4 gap-6 mb-14">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-8 left-[calc(50%+36px)] right-0 h-px bg-gradient-to-r from-[#DDD6FE] to-transparent z-0" />
              )}
              <div className="relative z-10 bg-white rounded-2xl border border-[#E5E7EB] p-6 card-hover-purple">
                {/* Step number + icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#EDE9FE] rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.Icon size={22} className="text-[#7C3AED]" />
                  </div>
                  <span className="text-xs font-black text-[#DDD6FE] tracking-widest">ÉTAPE {step.number}</span>
                </div>
                <h3 className="font-black text-[#111827] text-sm mb-2 leading-snug">{step.title}</h3>
                <p className="text-[#6B7280] text-xs leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden space-y-4 mb-10">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 bg-white rounded-2xl border border-[#E5E7EB] p-5">
              <div className="w-11 h-11 bg-[#EDE9FE] rounded-xl flex items-center justify-center flex-shrink-0">
                <step.Icon size={20} className="text-[#7C3AED]" />
              </div>
              <div>
                <span className="text-[10px] font-black text-[#A78BFA] tracking-widest">ÉTAPE {step.number}</span>
                <h3 className="font-black text-[#111827] text-sm mt-0.5 mb-1">{step.title}</h3>
                <p className="text-[#6B7280] text-xs leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg"
            onClick={() => document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' })}>
            Commencer gratuitement <span className="ml-1">→</span>
          </Button>
          <p className="mt-3 text-sm text-[#9CA3AF]">Sans carte · Setup 30min offert</p>
        </div>
      </div>
    </section>
  );
}
