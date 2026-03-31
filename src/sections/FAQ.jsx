import FAQAccordion from '../components/FAQAccordion';
import Button from '../components/Button';

export default function FAQ() {
  return (
    <section className="section-light py-20 md:py-28" id="faq">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        <div className="text-center mb-12">
          <span className="inline-block bg-[#EEF3FF] border border-[#C5D3F8] text-[#2E5CFF] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628]">
            Questions fréquentes
          </h2>
          <p className="mt-3 text-[#64748B]">Tout ce qu'il faut savoir avant de vous lancer.</p>
        </div>

        <FAQAccordion />

        <div className="mt-10 bg-white border border-[#DDE5F8] rounded-2xl p-7 text-center shadow-sm">
          <p className="font-semibold text-[#0A1628] mb-1">Une autre question ?</p>
          <p className="text-[#64748B] text-sm mb-5">Notre équipe répond sous 2h.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="secondary" size="md"
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
