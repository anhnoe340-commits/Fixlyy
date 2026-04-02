/* Rescale-style "Ready? Let's Talk!" with large background text */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import Button from '../components/Button';

const schema = z.object({
  prenom: z.string().min(2, 'Min 2 caractères').max(50),
  email: z.string().email('Email invalide'),
  telephone: z.string().regex(/^(\+33|0033|0)[1-9](\d{2}){4}$/, 'Format : 0612345678'),
  metier: z.array(z.string()).min(1, 'Sélectionnez au moins un métier'),
});

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { metier: [] },
  });

  const onSubmit = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden" id="inscription"
      style={{ background: 'linear-gradient(160deg, #0F0A2E 0%, #1C1045 50%, #0F0A2E 100%)' }}>

      {/* Large background text — Rescale style */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden"
        style={{ bottom: '-0.15em' }}>
        <span className="text-white/[0.04] font-black select-none leading-none"
          style={{ fontSize: 'clamp(80px, 18vw, 220px)', letterSpacing: '-0.02em' }}>
          fixlyy
        </span>
      </div>

      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#7C3AED]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#A78BFA]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Left — copy */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#A78BFA] mb-5">Dernière étape</p>
            <h2 className="text-4xl sm:text-5xl md:text-[52px] font-black text-white leading-tight mb-6">
              Prêt à commencer ?<br />
              <span className="text-italic-accent">Parlons-en.</span>
            </h2>
            <div className="space-y-3 text-white/65 text-base sm:text-lg mb-10">
              <p>Vous en avez <strong className="text-white">MARRE</strong> de rater des appels.</p>
              <p>Récupérez vos{' '}
                <span className="font-black text-[#A78BFA] text-xl">28 800€</span>
                <span className="text-white/50">/an</span> dès maintenant.
              </p>
            </div>

            {/* Trust cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '🛡️', label: '30 jours', sub: 'Satisfait ou remboursé' },
                { icon: '⚡', label: '30 minutes', sub: 'Setup complet offert' },
                { icon: '📞', label: '7 jours', sub: 'Essai 100% gratuit' },
                { icon: '✈️', label: 'Sans carte', sub: 'Aucun engagement' },
              ].map((t, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
                  <span className="text-xl flex-shrink-0">{t.icon}</span>
                  <div>
                    <p className="font-bold text-white text-sm">{t.label}</p>
                    <p className="text-white/45 text-xs">{t.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          {submitted ? (
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 text-center">
              <CheckCircle2 size={52} className="text-[#A78BFA] mx-auto mb-4" />
              <h3 className="text-white font-black text-2xl mb-3">C'est parti ! 🎉</h3>
              <p className="text-white/75 text-lg">
                On vous appelle <strong className="text-white">sous 2h</strong> pour le setup.
              </p>
              <p className="text-white/50 text-sm mt-2">Vérifiez aussi votre email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate
              className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-7 sm:p-8 space-y-4">

              <h3 className="font-black text-[#111827] text-xl mb-1">Commencer gratuitement</h3>
              <p className="text-[#9CA3AF] text-sm mb-5">Réponse sous 2h · Setup 30min offert</p>

              <div>
                <label className="block text-[#374151] text-sm font-semibold mb-2">Prénom</label>
                <input {...register('prenom')} placeholder="Votre prénom"
                  className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#111827] placeholder:text-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all" />
                {errors.prenom && <p className="text-red-500 text-xs mt-1">{errors.prenom.message}</p>}
              </div>

              <div>
                <label className="block text-[#374151] text-sm font-semibold mb-2">Email professionnel</label>
                <input {...register('email')} type="email" placeholder="votre@email.fr"
                  className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#111827] placeholder:text-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all" />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-[#374151] text-sm font-semibold mb-2">Téléphone</label>
                <input {...register('telephone')} type="tel" placeholder="0612345678"
                  className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#111827] placeholder:text-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all" />
                {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone.message}</p>}
              </div>

              <div>
                <label className="block text-[#374151] text-sm font-semibold mb-2">Votre métier</label>
                <div className="grid grid-cols-2 gap-3">
                  {[['plombier', '🔧 Plombier'], ['electricien', '⚡ Électricien']].map(([val, label]) => (
                    <label key={val}
                      className="flex items-center gap-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-3 cursor-pointer hover:bg-[#F5F3FF] hover:border-[#DDD6FE] transition-all">
                      <input type="checkbox" value={val} {...register('metier')}
                        className="w-4 h-4 accent-[#7C3AED] rounded" />
                      <span className="text-[#111827] text-sm font-medium">{label}</span>
                    </label>
                  ))}
                </div>
                {errors.metier && <p className="text-red-500 text-xs mt-1">{errors.metier.message}</p>}
              </div>

              <Button type="submit" variant="primary" size="lg" fullWidth>
                {loading
                  ? <><Loader2 size={16} className="animate-spin" /> Envoi en cours…</>
                  : <>Essayer Fixlyy gratuitement <ArrowRight size={16} /></>}
              </Button>

              <p className="text-[#9CA3AF] text-xs text-center">
                Sans carte bancaire · Résiliable à tout moment
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
