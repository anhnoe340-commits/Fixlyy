import { Check } from 'lucide-react';
import Button from './Button';

export default function PricingCard({ plan, price, features, cta, popular = false, ctaVariant = 'outline', onCtaClick }) {
  return (
    <div className={`relative rounded-2xl flex flex-col gap-6 transition-all duration-200 hover:-translate-y-1
      ${popular
        ? 'bg-[#2E5CFF] p-8 shadow-[0_16px_60px_rgba(46,92,255,0.35)]'
        : 'bg-white border border-[#DDE5F8] p-8 shadow-sm hover:shadow-md'
      }`}>

      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-[#FF6B35] text-white text-xs font-black px-5 py-1.5 rounded-full whitespace-nowrap shadow-lg tracking-wide uppercase">
            ⭐ Le plus populaire
          </span>
        </div>
      )}

      {/* Plan name */}
      <div>
        <p className={`text-xs font-black uppercase tracking-widest mb-3 ${popular ? 'text-blue-200' : 'text-[#2E5CFF]'}`}>
          {plan}
        </p>
        <div className="flex items-end gap-1.5">
          <span className={`mono font-black text-5xl leading-none ${popular ? 'text-white' : 'text-[#0A1628]'}`}>
            {price}€
          </span>
          <span className={`text-base mb-1 ${popular ? 'text-blue-200' : 'text-[#94A3B8]'}`}>/mois</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-2.5 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <Check size={16} className={`flex-shrink-0 mt-0.5 ${popular ? 'text-[#00D4FF]' : 'text-[#10B981]'}`} />
            <span className={`text-sm leading-snug ${popular ? 'text-blue-100' : 'text-[#64748B]'}`}>{f}</span>
          </li>
        ))}
      </ul>

      <Button variant={popular ? 'orange' : ctaVariant} fullWidth onClick={onCtaClick}>
        {cta}
      </Button>
    </div>
  );
}
