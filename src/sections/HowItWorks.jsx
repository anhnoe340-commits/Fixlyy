import { Phone, Bot, FileText, Smartphone } from 'lucide-react';
import Button from '../components/Button';

const steps = [
  {
    number: '01',
    Icon: Phone,
    color: '#FF6B35',
    lightBg: '#FFF7ED',
    title: 'Votre client appelle',
    desc: 'Pendant que vous êtes sous un évier, sur un chantier, ou en train de dîner.',
    note: 'Votre numéro habituel — rien ne change pour lui.',
  },
  {
    number: '02',
    Icon: Bot,
    color: '#7C3AED',
    lightBg: '#F3EEFF',
    title: 'Fixlyy répond instantanément',
    desc: '"Bonjour, Plomberie Martin, je vous écoute." — Pose les bonnes questions automatiquement.',
    note: '97% de compréhension · Voix naturelle',
    bubble: true,
  },
  {
    number: '03',
    Icon: FileText,
    color: '#059669',
    lightBg: '#ECFDF5',
    title: 'Devis généré en 2 minutes',
    desc: 'IA analyse → calcule → génère PDF → envoie au client par email.',
    note: 'Diagnostic · Matériel · Main d\'œuvre',
  },
  {
    number: '04',
    Icon: Smartphone,
    color: '#EA580C',
    lightBg: '#FFF7ED',
    title: 'SMS reçu. Vous décidez.',
    desc: 'Résumé complet + lien devis en 30 secondes. Rappeler ou ignorer : votre choix.',
    note: 'Zéro appel manqué · Zéro stress',
  },
];

export default function HowItWorks() {
  return (
    <section className="section-light py-20 md:py-28 lg:py-32" id="comment-ca-marche">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#FFF7ED] border border-[#FDBA74] text-[#EA580C] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            Simple comme bonjour
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a]">
            4 étapes. <span className="highlight-italic">C'est tout.</span>
          </h2>
          <p className="mt-4 text-[#6B7280] max-w-lg mx-auto leading-relaxed">
            Configurez une fois. Fixlyy s'occupe du reste, 24h/24, 7j/7.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-5 mb-14">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              {/* Connector */}
              {i < 3 && (
                <div className="absolute top-7 left-[calc(50%+28px)] right-0 h-px bg-[#E5E7EB] z-0" />
              )}
              {/* Icon */}
              <div className="relative z-10 mb-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border-2 border-[#E5E7EB]"
                  style={{ background: step.lightBg }}>
                  <step.Icon size={24} style={{ color: step.color }} />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1a1a1a] rounded-full flex items-center justify-center">
                  <span className="text-white font-black text-[10px] mono">{step.number.slice(1)}</span>
                </div>
              </div>
              <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide leading-snug mb-2">
                {step.title}
              </h3>
              {step.bubble ? (
                <div className="bg-[#F7F9FC] border-2 border-[#E5E7EB] rounded-xl rounded-tl-none px-3 py-2 text-[#6B7280] text-xs italic mb-2">
                  {step.desc}
                </div>
              ) : (
                <p className="text-[#6B7280] text-xs leading-relaxed mb-2">{step.desc}</p>
              )}
              <p className="text-[10px] font-semibold tracking-wide" style={{ color: step.color }}>{step.note}</p>
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden flex flex-col mb-10">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 pb-7 last:pb-0 relative">
              {/* Vertical line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[22px] top-11 bottom-0 w-px bg-[#E5E7EB]" />
              )}
              {/* Icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm border-2 border-[#E5E7EB]"
                  style={{ background: step.lightBg }}>
                  <step.Icon size={18} style={{ color: step.color }} />
                </div>
              </div>
              {/* Text */}
              <div className="pt-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="mono text-xs font-black text-[#9CA3AF]">{step.number}</span>
                  <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide">{step.title}</h3>
                </div>
                {step.bubble ? (
                  <div className="bg-[#F7F9FC] border-2 border-[#E5E7EB] rounded-lg rounded-tl-none px-3 py-2 text-[#6B7280] text-sm italic mb-1.5">
                    {step.desc}
                  </div>
                ) : (
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-1.5">{step.desc}</p>
                )}
                <p className="text-xs font-semibold" style={{ color: step.color }}>{step.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="primary" size="xl"
            onClick={() => document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' })}>
            Essayer Fixlyy 7 jours gratuit
          </Button>
          <p className="mt-4 text-sm text-[#9CA3AF]">Sans carte bancaire · Setup 30min offert</p>
        </div>
      </div>
    </section>
  );
}
