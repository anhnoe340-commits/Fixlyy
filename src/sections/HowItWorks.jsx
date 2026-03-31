import { Phone, Bot, FileText, Smartphone } from 'lucide-react';
import Button from '../components/Button';

const steps = [
  {
    number: '1',
    icon: <Phone size={32} className="text-[#2E5CFF]" />,
    title: 'Votre client appelle',
    desc: 'Pendant que vous êtes sous un évier, sur un chantier, ou en train de dîner.',
    note: 'Votre numéro habituel. Rien ne change pour lui.',
  },
  {
    number: '2',
    icon: <Bot size={32} className="text-[#00D4FF]" />,
    title: 'Fixlyy répond instantanément',
    desc: '"Bonjour, Plomberie Martin, je vous écoute."',
    note: 'Questions intelligentes posées automatiquement. 97% de compréhension.',
    bubble: true,
  },
  {
    number: '3',
    icon: <FileText size={32} className="text-[#10B981]" />,
    title: 'Devis généré en 2 minutes',
    desc: "L'IA analyse la conversation, calcule le prix, génère un PDF professionnel et l'envoie au client.",
    note: '→ Diagnostic → Matériel → Main d\'œuvre → PDF',
  },
  {
    number: '4',
    icon: <Smartphone size={32} className="text-[#FF6B35]" />,
    title: 'Vous recevez un SMS. Vous décidez.',
    desc: 'Toutes les infos + lien devis en 30 secondes. Rappeler ou pas : votre choix.',
    note: 'Zéro appel manqué. Zéro stress.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F9FC]" id="comment-ca-marche">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-[#2E5CFF] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Simple comme bonjour
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628]">
            4 étapes. C'est tout.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line desktop */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#2E5CFF] via-[#00D4FF] to-[#FF6B35] z-0" />

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4">
                {/* Icon circle */}
                <div className="relative">
                  <div className="w-28 h-28 rounded-full bg-white border-2 border-gray-200 shadow-lg flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#0A1628] rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-sm">{step.number}</span>
                  </div>
                </div>

                <h3 className="font-black text-[#0A1628] text-base uppercase tracking-wide leading-tight">
                  {step.title}
                </h3>

                {step.bubble ? (
                  <div className="bg-white rounded-2xl rounded-tl-none border border-blue-100 shadow-sm px-4 py-3 text-[#0A1628] text-sm font-medium italic">
                    {step.desc}
                  </div>
                ) : (
                  <p className="text-[#0A1628]/60 text-sm leading-relaxed">{step.desc}</p>
                )}

                <p className="text-xs text-[#2E5CFF] font-medium">{step.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="primary" size="lg">
            Essayer Fixlyy 7 jours gratuit
          </Button>
          <p className="mt-3 text-sm text-[#0A1628]/40">Sans carte bancaire · Setup 30min offert</p>
        </div>
      </div>
    </section>
  );
}
