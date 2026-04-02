/* Rescale-style "Burning Questions" */
import FAQAccordion from '../components/FAQAccordion';
import Button from '../components/Button';

export default function FAQ() {
  return (
    <section className="section-white py-20 md:py-28" id="faq">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#7C3AED] mb-4">FAQ</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] leading-tight">
            Vos questions{' '}
            <span className="text-italic-accent">sur Fixlyy</span>
          </h2>
          <p className="mt-4 text-[#6B7280] leading-relaxed">Tout ce qu'il faut savoir avant de vous lancer.</p>
        </div>

        <FAQAccordion />

        <div className="mt-10 bg-[#F5F3FF] border border-[#DDD6FE] rounded-2xl p-8 text-center">
          <p className="font-bold text-[#111827] mb-1 text-lg">Une autre question ?</p>
          <p className="text-[#6B7280] text-sm mb-6">Notre équipe répond sous 2h.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="secondary" size="md"
              onClick={() => { window.location.href = 'mailto:noe@fixlyy.fr'; }}>
              Écrire à Noé
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
