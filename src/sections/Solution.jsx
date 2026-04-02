/* Rescale-style "Powerful Integrations Made Simple" */
const integrations = [
  { name: 'WhatsApp', emoji: '💬', desc: 'Résumés instantanés' },
  { name: 'Gmail', emoji: '📧', desc: 'Devis par email' },
  { name: 'Google Cal', emoji: '📅', desc: 'RDV automatiques' },
  { name: 'Stripe', emoji: '💳', desc: 'Paiements en ligne' },
  { name: 'Notion', emoji: '📝', desc: 'Base de données clients' },
  { name: 'Zapier', emoji: '⚡', desc: 'Automatisations custom' },
  { name: 'Slack', emoji: '📲', desc: 'Notifications équipe' },
  { name: 'Salesforce', emoji: '☁️', desc: 'CRM intégré' },
];

const features = [
  { val: '20+', label: 'Intégrations disponibles' },
  { val: '5 min', label: 'Setup par intégration' },
  { val: '99.9%', label: 'Uptime garanti' },
];

export default function Solution() {
  return (
    <section className="section-white py-20 md:py-28" id="fonctionnalites">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#7C3AED] mb-4">Intégrations</p>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black text-[#111827] leading-tight mb-5">
              Des intégrations{' '}
              <span className="text-italic-accent">puissantes</span>,
              <br />faciles à configurer
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-8">
              Connectez Fixlyy à vos outils existants en quelques clics. WhatsApp, email, calendrier, CRM — tout se synchronise automatiquement.
            </p>

            {/* Mini stats */}
            <div className="flex gap-8 mb-8">
              {features.map((f, i) => (
                <div key={i}>
                  <p className="text-2xl font-black text-[#7C3AED]">{f.val}</p>
                  <p className="text-xs text-[#9CA3AF] mt-0.5">{f.label}</p>
                </div>
              ))}
            </div>

            {/* Integration pill list */}
            <div className="flex flex-wrap gap-2">
              {integrations.slice(0, 5).map(int => (
                <span key={int.name} className="inline-flex items-center gap-1.5 bg-[#F5F3FF] border border-[#DDD6FE] text-[#7C3AED] text-xs font-semibold px-3 py-1.5 rounded-full">
                  {int.emoji} {int.name}
                </span>
              ))}
              <span className="inline-flex items-center bg-[#EDE9FE] text-[#7C3AED] text-xs font-semibold px-3 py-1.5 rounded-full">
                +15 autres
              </span>
            </div>
          </div>

          {/* Right — integration grid */}
          <div className="grid grid-cols-4 gap-3">
            {integrations.map((int, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-2xl p-4 flex flex-col items-center gap-2 card-hover-purple text-center">
                <span className="text-2xl">{int.emoji}</span>
                <p className="text-[11px] font-bold text-[#111827]">{int.name}</p>
                <p className="text-[9px] text-[#9CA3AF]">{int.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
