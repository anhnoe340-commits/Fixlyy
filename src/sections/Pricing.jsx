/* Rescale-style "Explore Our Plans" */
import { Check } from 'lucide-react';
import PricingCard from '../components/PricingCard';

const plans = [
  {
    plan: 'Essentiel',
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
    plan: 'Avancé',
    price: 149,
    features: [
      'Appels ILLIMITÉS',
      'Tout Essentiel inclus',
      'WhatsApp temps réel',
      'Analytics avancées',
      'Templates devis perso',
      '3 utilisateurs',
      'Support prioritaire <1h',
      'Intégrations calendrier/compta',
    ],
    cta: 'Nous contacter →',
    popular: true,
  },
  {
    plan: 'Entreprise',
    price: 249,
    features: [
      'Tout Avancé inclus',
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
  'Sans engagement',
  '7 jours gratuits sans carte',
  'Setup 30min offert',
  'Remboursé si insatisfait',
];

export default function Pricing() {
  const scroll = () => document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="section-light py-20 md:py-28" id="tarifs">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#7C3AED] mb-4">Tarifs</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] leading-tight">
            Explorez nos{' '}
            <span className="text-italic-accent">forfaits</span>
          </h2>
          <p className="mt-4 text-[#6B7280] max-w-md mx-auto leading-relaxed">
            Tous les plans incluent 7 jours gratuits. Aucune surprise, aucun frais caché.
          </p>
        </div>

        {/* Cards — middle elevated */}
        <div className="grid sm:grid-cols-3 gap-6 items-start mb-10">
          {plans.map((p) => (
            <div key={p.plan} className={p.popular ? 'sm:-mt-4 sm:-mb-4' : ''}>
              <PricingCard {...p} onCtaClick={scroll} />
            </div>
          ))}
        </div>

        {/* Guarantee row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 flex-wrap">
          {guarantees.map(g => (
            <div key={g} className="flex items-center gap-2 text-[#6B7280] text-sm">
              <Check size={14} className="text-[#7C3AED] flex-shrink-0" />
              {g}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
