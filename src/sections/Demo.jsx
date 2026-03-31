import { Headphones, Phone } from 'lucide-react';

export default function Demo() {
  return (
    <section className="section-white py-20 md:py-28" id="demo">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#EEF3FF] border border-[#C5D3F8] text-[#2E5CFF] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            Démonstration
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628]">
            Écoutez Fixlyy{' '}
            <span className="text-gradient">en action</span>
          </h2>
          <p className="mt-3 text-[#64748B]">Une conversation réelle entre Fixlyy et un client.</p>
        </div>

        {/* Audio player */}
        <div className="bg-[#F5F8FF] border border-[#C5D3F8] rounded-2xl p-6 sm:p-8 mb-6">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-11 h-11 bg-[#2E5CFF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Headphones size={20} className="text-[#2E5CFF]" />
            </div>
            <div>
              <p className="font-semibold text-[#0A1628] text-sm">Conversation réelle · Plombier Paris 15</p>
              <p className="text-[#94A3B8] text-xs">Durée : 1min 30s</p>
            </div>
          </div>
          <audio controls className="w-full rounded-lg">
            <source src="/demo-conversation-fixlyy.mp3" type="audio/mpeg" />
          </audio>
          <p className="text-[#94A3B8] text-xs mt-3 text-center">Audio de démonstration · Voix IA synthétisée</p>
        </div>

        {/* OR divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-[#E2E8F0]" />
          <span className="text-[#94A3B8] font-bold text-sm px-3">OU</span>
          <div className="flex-1 h-px bg-[#E2E8F0]" />
        </div>

        {/* Phone demo */}
        <div className="bg-white border border-[#DDE5F8] rounded-2xl p-8 sm:p-10 text-center shadow-sm">
          <div className="w-14 h-14 bg-[#EEF3FF] rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Phone size={26} className="text-[#2E5CFF] phone-ring" />
          </div>
          <p className="text-[#64748B] text-sm mb-3 font-medium">Appelez ce numéro pour tester en direct :</p>
          <a href="tel:+33100000000"
            className="block mono font-black text-3xl sm:text-4xl text-[#2E5CFF] hover:text-[#1E4FDD] transition-colors tracking-wider mb-4">
            +33 1 XX XX XX XX
          </a>
          <p className="text-[#94A3B8] text-sm mb-5">Gratuit · Sans engagement · Juste pour voir</p>
          <div className="inline-flex items-center gap-2 bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] text-sm font-semibold px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
            Fixlyy est en ligne maintenant
          </div>
        </div>
      </div>
    </section>
  );
}
