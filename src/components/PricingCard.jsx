/* Rescale-style pricing card */
import { Check } from 'lucide-react';
import Button from './Button';

export default function PricingCard({ plan, price, features, cta, popular = false, ctaVariant = 'outline', onCtaClick }) {
  return (
    <div className={`relative rounded-2xl flex flex-col gap-6 transition-all duration-200
      ${popular
        ? 'bg-[#7C3AED] p-8 shadow-[0_16px_60px_rgba(124,58,237,0.35)] hover:-translate-y-1'
        : 'bg-white border border-[#E5E7EB] p-8 shadow-sm card-hover-purple'
      }`}>

      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-white text-[#7C3AED] text-xs font-black px-5 py-1.5 rounded-full whitespace-nowrap shadow-lg tracking-wide uppercase">
            ✦ Le plus populaire
          </span>
        </div>
      )}

      {/* Plan name */}
      <div>
        <p className={`text-xs font-black uppercase tracking-widest mb-3 ${popular ? 'text-[#DDD6FE]' : 'text-[#7C3AED]'}`}>
          {plan}
        </p>
        <div className="flex items-end gap-1.5">
          <span className={`font-black text-5xl leading-none ${popular ? 'text-white' : 'text-[#111827]'}`}>
            {price}€
          </span>
          <span className={`text-base mb-1 ${popular ? 'text-[#DDD6FE]' : 'text-[#9CA3AF]'}`}>/mois</span>
        </div>
      </div>

      {/* Divider */}
      <div className={`h-px ${popular ? 'bg-white/20' : 'bg-[#F3F4F6]'}`} />

      {/* Features */}
      <ul className="space-y-3 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <Check size={15} className={`flex-shrink-0 mt-0.5 ${popular ? 'text-[#A78BFA]' : 'text-[#7C3AED]'}`} />
            <span className={`text-sm leading-snug ${popular ? 'text-[#EDE9FE]' : 'text-[#6B7280]'}`}>{f}</span>
          </li>
        ))}
      </ul>

      <Button variant={popular ? 'outline-white' : ctaVariant} fullWidth onClick={onCtaClick}>
        {cta}
      </Button>
    </div>
  );
}
