import { Check } from 'lucide-react';
import Button from './Button';

export default function PricingCard({ plan, price, features, cta, popular = false, ctaVariant = 'outline', onCtaClick }) {
  return (
    <div className={`relative rounded-2xl flex flex-col gap-6 transition-all duration-200 hover:-translate-y-1
      ${popular
        ? 'bg-white border-3 border-[#FF6B35] p-8 shadow-[0_8px_40px_rgba(255,107,53,0.15)]'
        : 'bg-white border-2 border-[#E5E7EB] p-8 shadow-sm hover:shadow-md hover:border-[#D1D5DB]'
      }`}
      style={popular ? { borderWidth: '3px' } : {}}>

      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A5C] text-white text-xs font-black px-5 py-1.5 rounded-full whitespace-nowrap shadow-lg tracking-wide uppercase">
            ⭐ Le plus populaire
          </span>
        </div>
      )}

      {/* Plan name */}
      <div>
        <p className={`text-xs font-black uppercase tracking-widest mb-3 ${popular ? 'text-[#FF6B35]' : 'text-[#9CA3AF]'}`}>
          {plan}
        </p>
        <div className="flex items-end gap-1.5">
          <span className={`mono font-black text-5xl leading-none text-[#1a1a1a] ${popular ? 'text-gradient' : ''}`}>
            {price}€
          </span>
          <span className="text-base mb-1 text-[#9CA3AF]">/mois</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <Check size={16} className={`flex-shrink-0 mt-0.5 ${popular ? 'text-[#FF6B35]' : 'text-[#10B981]'}`} />
            <span className="text-sm leading-snug text-[#6B7280]">{f}</span>
          </li>
        ))}
      </ul>

      <Button variant={popular ? 'primary' : ctaVariant} fullWidth onClick={onCtaClick}>
        {cta}
      </Button>
    </div>
  );
}
