import PricingCard from '../components/PricingCard';
import { Check } from 'lucide-react';

const plans = [
  {
    plan: 'Solo',
    price: 79,
    features: [
      '150 appels/mois inclus',
      'Secrétaire IA 24/7',
      'SMS résumé 30sec',
      'Génération devis auto',
      'Dashboard web',
      '1 utilisateur',
      'Support email',
    ],
    cta: 'Essayer 7 jours gratuit',
    ctaVariant: 'outline',
    popular: false,
  },
  {
    plan: 'Pro',
    price: 149,
    features: [
      'Appels ILLIMITÉS',
      'Tout Solo inclus',
      'WhatsApp temps réel',
      'Analytics avancées',
      'Templates devis perso',
      '3 utilisateurs',
      'Support prioritaire <1h',
      'Intégrations (calendrier, compta)',
    ],
    cta: 'Commencer avec Pro',
    popular: true,
  },
  {
    plan: 'Équipe',
    price: 249,
    features: [
      'Tout Pro inclus',
      '3 numéros Fixlyy',
      '10 utilisateurs',
      'API & webhooks',
      'Account Manager dédié',
      'SLA 99.9%',
      'Support <30min',
    ],
    cta: 'Contacter pour Équipe',
    ctaVariant: 'outline',
    popular: false,
  },
];

const notes = [
  'Sans engagement — Résiliable à tout moment',
  'Essai 7 jours gratuit sans carte bancaire',
  'Setup 30min offert avec notre équipe',
];

export default function Pricing() {
  const scrollToForm = () => {
    document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 bg-[#F7F9FC]" id="tarifs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-[#2E5CFF] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Tarifs simples
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628]">
            Choisissez votre plan
          </h2>
          <p className="mt-4 text-lg text-[#0A1628]/60">
            Tous les plans incluent un essai gratuit de 7 jours.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((p) => (
            <PricingCard key={p.plan} {...p} onCtaClick={scrollToForm} />
          ))}
        </div>

        {/* Notes */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {notes.map((note) => (
            <div key={note} className="flex items-center gap-2 text-[#0A1628]/60 text-sm">
              <Check size={16} className="text-[#10B981] flex-shrink-0" />
              {note}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
