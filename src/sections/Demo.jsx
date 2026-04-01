import { Headphones, Phone } from 'lucide-react';

export default function Demo() {
  return (
    <section className="section-light py-20 md:py-28 lg:py-32" id="demo">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#FFF7ED] border border-[#FDBA74] text-[#EA580C] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            Démonstration
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a]">
            Écoutez Fixlyy{' '}
            <span className="highlight-italic">en action</span>
          </h2>
          <p className="mt-4 text-[#6B7280] leading-relaxed">Une conversation réelle entre Fixlyy et un client.</p>
        </div>

        {/* Audio player */}
        <div className="bg-white border-2 border-[#E5E7EB] rounded-2xl p-6 sm:p-8 mb-6">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-11 h-11 bg-[#FFF7ED] rounded-xl flex items-center justify-center flex-shrink-0">
              <Headphones size={20} className="text-[#FF6B35]" />
            </div>
            <div>
              <p className="font-semibold text-[#1a1a1a] text-sm">Conversation réelle · Plombier Paris 15</p>
              <p className="text-[#9CA3AF] text-xs">Durée : 1min 30s</p>
            </div>
          </div>
          <audio controls className="w-full rounded-lg">
            <source src="/demo-conversation-fixlyy.mp3" type="audio/mpeg" />
          </audio>
          <p className="text-[#9CA3AF] text-xs mt-3 text-center">Audio de démonstration · Voix IA synthétisée</p>
        </div>

        {/* OR divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-[#E5E7EB]" />
          <span className="text-[#9CA3AF] font-bold text-sm px-3">OU</span>
          <div className="flex-1 h-px bg-[#E5E7EB]" />
        </div>

        {/* Phone demo */}
        <div className="bg-white border-2 border-[#E5E7EB] rounded-2xl p-8 sm:p-10 text-center shadow-sm">
          <div className="w-14 h-14 bg-[#FFF7ED] rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Phone size={26} className="text-[#FF6B35] phone-ring" />
          </div>
          <p className="text-[#6B7280] text-sm mb-3 font-medium">Appelez ce numéro pour tester en direct :</p>
          <a href="tel:+33100000000"
            className="block mono font-black text-3xl sm:text-4xl text-[#FF6B35] hover:text-[#e85f28] transition-colors tracking-wider mb-4">
            +33 1 XX XX XX XX
          </a>
          <p className="text-[#9CA3AF] text-sm mb-5">Gratuit · Sans engagement · Juste pour voir</p>
          <div className="inline-flex items-center gap-2 bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] text-sm font-semibold px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
            Fixlyy est en ligne maintenant
          </div>
        </div>
      </div>
    </section>
  );
}
