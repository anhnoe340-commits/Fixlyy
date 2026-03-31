import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Comment installer Fixlyy ?',
    a: 'Une visio de 30min avec notre équipe suffit. On configure tout pour vous en direct. Vous testez immédiatement. Prêt à utiliser le jour même.',
  },
  {
    q: 'Puis-je essayer gratuitement ?',
    a: 'Oui, 7 jours gratuits. Sans carte bancaire. Accès complet à toutes les fonctionnalités. Aucun engagement.',
  },
  {
    q: 'Que se passe-t-il avec mes appels actuels ?',
    a: 'Simple redirection de votre numéro existant vers Fixlyy. Setup en 5 minutes. Aucun changement pour vos clients — ils continuent à appeler le même numéro.',
  },
  {
    q: "L'IA comprend-elle bien le français ?",
    a: "Oui, notre IA est entraînée spécifiquement pour les artisans français. Elle maîtrise le vocabulaire plomberie et électricité, et comprend 97% des conversations.",
  },
  {
    q: 'Puis-je personnaliser les messages IA ?',
    a: "100% personnalisable. Votre ton, vos formules de politesse, votre branding. L'IA parle avec votre identité.",
  },
  {
    q: 'Comment sont générés les devis ?',
    a: "L'IA analyse la conversation client, calcule matériel + main d'œuvre selon vos tarifs, génère un PDF professionnel avec votre logo. Vous validez ou ajustez avant envoi.",
  },
  {
    q: 'Puis-je résilier à tout moment ?',
    a: 'Oui, sans engagement ni frais. Résiliation en 1 clic depuis votre dashboard. Aucune question posée.',
  },
  {
    q: 'Combien de temps prend un devis ?',
    a: "2 minutes en moyenne. L'IA fait 80% du travail. Vous validez juste le montant final.",
  },
  {
    q: 'Fixlyy peut-il gérer plusieurs numéros ?',
    a: "Oui, dès le plan Équipe. Jusqu'à 3 numéros différents pour gérer plusieurs techniciens ou spécialités.",
  },
  {
    q: 'Que se passe-t-il si je dépasse 150 appels (Solo) ?',
    a: '0,50€ par appel supplémentaire, facturé en fin de mois. Ou passez en plan Pro (appels illimités à 149€/mois).',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-3">
      {faqs.map((item, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-[#F7F9FC] transition-colors group"
          >
            <span className="font-semibold text-[#0A1628] pr-4">{item.q}</span>
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F7F9FC] group-hover:bg-[#2E5CFF] group-hover:text-white flex items-center justify-center transition-all text-[#2E5CFF]">
              {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
            </span>
          </button>
          <div className={`faq-content ${openIndex === i ? 'open' : ''}`}>
            <div className="px-6 py-4 bg-[#F7F9FC] border-t border-gray-100">
              <p className="text-[#0A1628]/70 leading-relaxed">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
