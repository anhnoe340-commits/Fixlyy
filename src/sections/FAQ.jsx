import FAQAccordion from '../components/FAQAccordion';
import Button from '../components/Button';

export default function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-[#2E5CFF] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628]">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-[#0A1628]/60">
            Tout ce que vous voulez savoir avant de vous lancer.
          </p>
        </div>

        {/* Accordion */}
        <FAQAccordion />

        {/* Bottom CTA */}
        <div className="mt-12 bg-[#F7F9FC] rounded-2xl p-8 text-center border border-gray-100">
          <p className="text-[#0A1628]/70 mb-2 font-medium">Une autre question ?</p>
          <p className="text-[#0A1628]/50 text-sm mb-5">
            Notre équipe répond sous 2h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="outline"
              size="md"
              onClick={() => window.location.href = 'mailto:noe@fixlyy.fr'}
            >
              Envoyer un email
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={() => document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Essai gratuit 7 jours →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
