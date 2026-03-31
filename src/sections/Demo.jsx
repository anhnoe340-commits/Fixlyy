import { Headphones, Phone } from 'lucide-react';

export default function Demo() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F9FC]" id="demo">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-[#2E5CFF] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Démonstration
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628]">
            Écoutez Fixlyy <span className="text-[#2E5CFF]">en action</span>
          </h2>
        </div>

        {/* Audio player */}
        <div className="bg-[#0A1628] rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#2E5CFF]/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Headphones size={22} className="text-[#00D4FF]" />
            </div>
            <div>
              <p className="text-white font-semibold">Conversation réelle — Fixlyy avec client</p>
              <p className="text-white/40 text-sm">Durée : 1min 30s · Plombier Paris 15</p>
            </div>
          </div>
          {/* Custom audio player UI */}
          <div className="bg-white/5 rounded-xl p-5">
            <audio
              controls
              className="w-full"
              style={{ filter: 'invert(1) hue-rotate(180deg)' }}
            >
              <source src="/demo-conversation-fixlyy.mp3" type="audio/mpeg" />
              Votre navigateur ne supporte pas l'audio HTML5.
            </audio>
            <p className="text-white/30 text-xs mt-3 text-center">
              ⚠️ Audio de démonstration — Voix IA synthétisée
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-10">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-[#0A1628]/40 font-semibold text-sm px-4">OU</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Phone demo */}
        <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
          <div className="w-16 h-16 bg-[#2E5CFF]/10 rounded-full flex items-center justify-center mx-auto mb-5">
            <Phone size={28} className="text-[#2E5CFF] phone-ring" />
          </div>
          <p className="text-[#0A1628]/60 mb-3 font-medium">Appelez ce numéro pour tester en direct :</p>
          <a
            href="tel:+33100000000"
            className="inline-block mono font-black text-4xl text-[#2E5CFF] hover:text-[#1E4FDD] transition-colors tracking-widest"
          >
            +33 1 XX XX XX XX
          </a>
          <p className="mt-4 text-sm text-[#0A1628]/40">
            Gratuit · Sans engagement · Juste pour voir
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-medium px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Fixlyy est en ligne maintenant
          </div>
        </div>
      </div>
    </section>
  );
}
