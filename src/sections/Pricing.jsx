import { Check } from 'lucide-react';
import PricingCard from '../components/PricingCard';

const plans = [
  {
    plan: 'Solo',
    price: 79,
    features: [
      '150 appels/mois inclus',
      'Secrétaire IA 24/7',
      'SMS résumé en 30 sec',
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
    cta: 'Nous contacter',
    ctaVariant: 'outline',
    popular: false,
  },
];

const guarantees = [
  'Sans engagement — résiliable à tout moment',
  '7 jours gratuits sans carte bancaire',
  'Setup 30min offert',
];

export default function Pricing() {
  const scroll = () => document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="section-light py-20 md:py-28" id="tarifs">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#EEF3FF] border border-[#C5D3F8] text-[#2E5CFF] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            Tarifs transparents
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628]">
            Choisissez votre plan
          </h2>
          <p className="mt-3 text-[#64748B] max-w-md mx-auto">
            Tous les plans incluent 7 jours gratuits. Aucune surprise.
          </p>
        </div>

        {/* Cards — Pro elevated on desktop */}
        <div className="grid sm:grid-cols-3 gap-6 items-start">
          {plans.map((p, i) => (
            <div key={p.plan} className={p.popular ? 'sm:-mt-4 sm:-mb-4' : ''}>
              <PricingCard {...p} onCtaClick={scroll} />
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 flex-wrap">
          {guarantees.map(g => (
            <div key={g} className="flex items-center gap-2 text-[#64748B] text-sm">
              <Check size={15} className="text-[#10B981] flex-shrink-0" />
              {g}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
