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
    cta: 'Configurer ma commande →',
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
    cta: 'Nous contacter →',
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
    cta: 'Nous contacter →',
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
    <section className="section-white py-20 md:py-28 lg:py-32" id="tarifs">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="mb-16">
          <span className="inline-block bg-[#FFF7ED] border border-[#FDBA74] text-[#EA580C] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            Tarifs
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a]">
            Investis dans
            <br /><span className="highlight-italic">ta croissance.</span>
          </h2>
          <p className="mt-4 text-[#6B7280] max-w-md leading-relaxed">
            Une bonne landing page se rembourse dès les premières semaines.
          </p>
        </div>

        {/* Cards — Pro elevated on desktop */}
        <div className="grid sm:grid-cols-3 gap-6 items-start">
          {plans.map((p) => (
            <div key={p.plan} className={p.popular ? 'sm:-mt-4 sm:-mb-4' : ''}>
              <PricingCard {...p} onCtaClick={scroll} />
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 flex-wrap">
          {guarantees.map(g => (
            <div key={g} className="flex items-center gap-2 text-[#6B7280] text-sm">
              <Check size={15} className="text-[#FF6B35] flex-shrink-0" />
              {g}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
