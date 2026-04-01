import { Clock, Brain, Mic } from 'lucide-react';

const features = [
  {
    Icon: Clock, color: '#FF6B35', lightBg: '#FFF7ED',
    title: 'Disponible 24/7',
    points: ['Même à 3h du matin.', 'Même le dimanche.', 'Même pendant vos vacances.'],
  },
  {
    Icon: Brain, color: '#7C3AED', lightBg: '#F3EEFF',
    title: 'Intelligente',
    points: ['Comprend le français.', 'Pose les bonnes questions.', 'Détecte l\'urgence.'],
  },
  {
    Icon: Mic, color: '#059669', lightBg: '#ECFDF5',
    title: 'Naturelle',
    points: ['Voix humaine.', 'Conversations fluides.', 'Vos clients ne voient pas la différence.'],
  },
];

export default function FeatureSecretary() {
  return (
    <section className="section-light py-20 md:py-28 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#FFF7ED] border border-[#FDBA74] text-[#EA580C] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            Secrétaire IA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a]">
            Votre secrétaire qui ne dort{' '}
            <span className="highlight-italic">JAMAIS</span>
          </h2>
          <p className="mt-5 text-[#6B7280] max-w-lg mx-auto leading-relaxed">
            Formée spécifiquement pour les artisans français — vocabulaire plomberie, électricité, urgences.
          </p>
        </div>

        {/* Video demo */}
        <div className="mb-14 rounded-2xl overflow-hidden bg-[#0A1628] border-2 border-[#E5E7EB] shadow-2xl max-w-4xl mx-auto aspect-video flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/15 to-[#2E5CFF]/5" />
          <div className="text-center relative z-10 px-4">
            <button className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
              <div className="w-0 h-0 ml-1"
                style={{ borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '18px solid white' }} />
            </button>
            <p className="text-white font-semibold text-base sm:text-lg">Regarder la démo — 2 minutes</p>
            <p className="text-white/40 text-sm mt-1">Fixlyy en action · Conversation réelle</p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title}
              className="bg-white rounded-2xl border-2 border-[#E5E7EB] p-8 flex flex-col gap-5 hover:border-[#FF6B35] hover:shadow-[0_8px_16px_rgba(255,107,53,0.1)] hover:-translate-y-1 transition-all duration-200">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: f.lightBg }}>
                <f.Icon size={22} style={{ color: f.color }} />
              </div>
              <h3 className="font-black text-[#1a1a1a] uppercase tracking-wide text-sm">{f.title}</h3>
              <ul className="space-y-2.5">
                {f.points.map(pt => (
                  <li key={pt} className="flex items-center gap-2 text-[#6B7280] text-sm">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: f.color }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
