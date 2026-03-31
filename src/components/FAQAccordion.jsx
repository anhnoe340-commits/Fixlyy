import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'Comment installer Fixlyy ?', a: 'Une visio de 30 min avec notre équipe suffit. On configure tout pour vous. Vous testez en direct. Opérationnel le jour même.' },
  { q: 'Puis-je essayer gratuitement ?', a: '7 jours gratuits, sans carte bancaire, accès complet. Aucun engagement.' },
  { q: 'Que se passe-t-il avec mes appels actuels ?', a: 'Simple redirection de votre numéro en 5 minutes. Aucun changement pour vos clients.' },
  { q: "L'IA comprend-elle bien le français ?", a: "Oui, entraînée spécifiquement pour les artisans. Vocabulaire plomberie & électricité. 97% de compréhension." },
  { q: 'Puis-je personnaliser les messages IA ?', a: "100% personnalisable : votre ton, vos formules, votre branding. L'IA parle avec votre identité." },
  { q: 'Comment sont générés les devis ?', a: "L'IA analyse la conversation, calcule matériel + main d'œuvre, génère un PDF pro avec votre logo. Vous validez avant envoi." },
  { q: 'Puis-je résilier à tout moment ?', a: 'Oui, sans frais ni délai. En 1 clic depuis votre dashboard.' },
  { q: 'Combien de temps prend un devis ?', a: "2 minutes en moyenne. L'IA fait 80% du travail, vous validez juste." },
  { q: 'Fixlyy peut-il gérer plusieurs numéros ?', a: "Oui, dès le plan Équipe. Jusqu'à 3 numéros pour plusieurs techniciens." },
  { q: 'Que se passe-t-il si je dépasse 150 appels (Solo) ?', a: '0,50€/appel supplémentaire. Ou passez au plan Pro (illimité à 149€/mois).' },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-2.5">
      {faqs.map((item, i) => (
        <div key={i} className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 ${open === i ? 'border-[#C5D3F8] shadow-sm' : 'border-[#DDE5F8]'}`}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left hover:bg-[#F5F8FF] transition-colors group">
            <span className={`font-semibold pr-4 text-sm sm:text-base transition-colors ${open === i ? 'text-[#2E5CFF]' : 'text-[#0A1628]'}`}>
              {item.q}
            </span>
            <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${open === i ? 'bg-[#2E5CFF] text-white' : 'bg-[#F0F4FF] text-[#2E5CFF] group-hover:bg-[#DDE5F8]'}`}>
              {open === i ? <Minus size={14} /> : <Plus size={14} />}
            </span>
          </button>
          <div className={`faq-content ${open === i ? 'open' : ''}`}>
            <p className="px-5 sm:px-6 pb-4 text-[#64748B] text-sm leading-relaxed">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
