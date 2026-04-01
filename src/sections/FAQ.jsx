import FAQAccordion from '../components/FAQAccordion';
import Button from '../components/Button';

export default function FAQ() {
  return (
    <section className="section-light py-20 md:py-28 lg:py-32" id="faq">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        <div className="text-center mb-14">
          <span className="inline-block bg-[#FFF7ED] border border-[#FDBA74] text-[#EA580C] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a]">
            Questions <span className="highlight-italic">fréquentes</span>
          </h2>
          <p className="mt-4 text-[#6B7280] leading-relaxed">Tout ce qu'il faut savoir avant de vous lancer.</p>
        </div>

        <FAQAccordion />

        <div className="mt-12 bg-white border-2 border-[#E5E7EB] rounded-2xl p-8 text-center shadow-sm">
          <p className="font-bold text-[#1a1a1a] mb-1 text-lg">Une autre question ?</p>
          <p className="text-[#6B7280] text-sm mb-6">Notre équipe répond sous 2h.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" size="md"
              onClick={() => { window.location.href = 'mailto:noe@fixlyy.fr'; }}>
              Envoyer un email
            </Button>
            <Button variant="primary" size="md"
              onClick={() => document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' })}>
              Essai gratuit 7 jours →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
