import { Check } from 'lucide-react';
import Button from './Button';

export default function PricingCard({ plan, price, features, cta, popular = false, ctaVariant = 'outline', onCtaClick }) {
  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col gap-6 transition-transform hover:-translate-y-1 ${
        popular
          ? 'bg-[#2E5CFF] text-white shadow-2xl shadow-blue-500/30 ring-2 ring-[#2E5CFF]'
          : 'bg-white border border-gray-200 shadow-lg'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-[#FF6B35] text-white text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
            ⭐ POPULAIRE
          </span>
        </div>
      )}

      <div>
        <h3 className={`font-bold text-sm uppercase tracking-widest mb-3 ${popular ? 'text-blue-200' : 'text-[#2E5CFF]'}`}>
          {plan}
        </h3>
        <div className="flex items-end gap-1">
          <span className={`mono font-black text-5xl ${popular ? 'text-white' : 'text-[#0A1628]'}`}>
            {price}€
          </span>
          <span className={`text-lg mb-2 ${popular ? 'text-blue-200' : 'text-gray-400'}`}>/mois</span>
        </div>
      </div>

      <ul className="space-y-3 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <Check
              size={18}
              className={`flex-shrink-0 mt-0.5 ${popular ? 'text-[#00D4FF]' : 'text-[#10B981]'}`}
            />
            <span className={`text-sm ${popular ? 'text-blue-100' : 'text-[#0A1628]/70'}`}>{f}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={popular ? 'orange' : ctaVariant}
        fullWidth
        onClick={onCtaClick}
      >
        {cta}
      </Button>
    </div>
  );
}
