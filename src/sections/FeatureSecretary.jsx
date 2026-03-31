import { Clock, Brain, Mic } from 'lucide-react';

const features = [
  {
    icon: <Clock size={28} className="text-[#2E5CFF]" />,
    title: 'DISPONIBLE 24/7',
    points: ['Même à 3h du matin.', 'Même le dimanche.', 'Même pendant vos vacances.'],
  },
  {
    icon: <Brain size={28} className="text-[#00D4FF]" />,
    title: 'INTELLIGENTE',
    points: ['Comprend le français.', 'Pose les bonnes questions.', 'Détecte l\'urgence.'],
  },
  {
    icon: <Mic size={28} className="text-[#10B981]" />,
    title: 'NATURELLE',
    points: ['Voix humaine.', 'Conversations fluides.', 'Clients ne voient pas la différence.'],
  },
];

export default function FeatureSecretary() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F9FC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-[#2E5CFF] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Secrétaire IA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628]">
            Votre secrétaire qui ne dort{' '}
            <span className="text-[#2E5CFF]">JAMAIS</span>
          </h2>
          <p className="mt-4 text-lg text-[#0A1628]/60 max-w-xl mx-auto">
            Une IA formée spécifiquement pour les artisans français, qui gère chaque appel comme une vraie secrétaire.
          </p>
        </div>

        {/* Video placeholder */}
        <div className="mb-16 rounded-2xl overflow-hidden bg-[#0A1628] border border-white/10 shadow-2xl max-w-4xl mx-auto aspect-video flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2E5CFF]/20 to-transparent" />
          <div className="text-center relative z-10">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto border border-white/20 cursor-pointer hover:bg-white/20 transition-colors">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-16 border-l-white ml-1.5" style={{ borderLeftWidth: '20px' }} />
            </div>
            <p className="text-white font-semibold text-lg">Regarder la démo (2 min)</p>
            <p className="text-white/40 text-sm mt-1">Fixlyy en action — conversation réelle</p>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-5 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#F7F9FC] rounded-xl flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="font-black text-[#0A1628] text-base uppercase tracking-wide">{f.title}</h3>
              <ul className="space-y-2">
                {f.points.map((pt) => (
                  <li key={pt} className="text-[#0A1628]/60 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2E5CFF] rounded-full flex-shrink-0" />
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
