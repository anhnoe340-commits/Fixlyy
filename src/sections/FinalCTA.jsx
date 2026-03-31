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

  const onSubmit = async (data) => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#2E5CFF]" id="inscription">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00D4FF]/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Dernière chance
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Vous avez lu jusqu'ici.
          </h2>
          <div className="space-y-2 text-white/75 text-base sm:text-lg">
            <p>Ça veut dire que vous en avez <strong className="text-white">MARRE</strong> de rater des appels.</p>
            <p>Que vous voulez récupérer ces{' '}
              <span className="mono font-black text-white text-xl">28 800€</span>/an.
            </p>
          </div>
          <p className="mt-5 text-[#00D4FF] font-black text-lg">Alors faites le premier pas.</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-3 text-white/60 text-sm">
            <span>✓ Pas d'engagement</span>
            <span>✓ Pas de risque</span>
            <span>✓ 7 jours pour tester</span>
          </div>
        </div>

        {/* Form / Success */}
        {submitted ? (
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-10 text-center">
            <CheckCircle2 size={52} className="text-[#10B981] mx-auto mb-4" />
            <h3 className="text-white font-black text-2xl mb-3">C'est parti ! 🎉</h3>
            <p className="text-white/75 text-lg">
              On vous appelle <strong className="text-white">sous 2h</strong> pour le setup.
            </p>
            <p className="text-white/50 text-sm mt-2">Vérifiez aussi votre email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate
            className="bg-white rounded-2xl shadow-[0_16px_60px_rgba(0,0,0,0.2)] p-7 sm:p-8 space-y-4">

            {/* Prénom */}
            <div>
              <label className="block text-[#0A1628] text-sm font-semibold mb-1.5">Prénom</label>
              <input {...register('prenom')} placeholder="Votre prénom"
                className="w-full bg-[#F5F8FF] border border-[#DDE5F8] rounded-xl px-4 py-3 text-[#0A1628] placeholder:text-[#94A3B8] text-sm focus:outline-none focus:ring-2 focus:ring-[#2E5CFF] focus:border-transparent transition-all" />
              {errors.prenom && <p className="text-[#DC2626] text-xs mt-1">{errors.prenom.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#0A1628] text-sm font-semibold mb-1.5">Email professionnel</label>
              <input {...register('email')} type="email" placeholder="votre@email.fr"
                className="w-full bg-[#F5F8FF] border border-[#DDE5F8] rounded-xl px-4 py-3 text-[#0A1628] placeholder:text-[#94A3B8] text-sm focus:outline-none focus:ring-2 focus:ring-[#2E5CFF] focus:border-transparent transition-all" />
              {errors.email && <p className="text-[#DC2626] text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Téléphone */}
            <div>
              <label className="block text-[#0A1628] text-sm font-semibold mb-1.5">Téléphone</label>
              <input {...register('telephone')} type="tel" placeholder="0612345678"
                className="w-full bg-[#F5F8FF] border border-[#DDE5F8] rounded-xl px-4 py-3 text-[#0A1628] placeholder:text-[#94A3B8] text-sm focus:outline-none focus:ring-2 focus:ring-[#2E5CFF] focus:border-transparent transition-all" />
              {errors.telephone && <p className="text-[#DC2626] text-xs mt-1">{errors.telephone.message}</p>}
            </div>

            {/* Métier */}
            <div>
              <label className="block text-[#0A1628] text-sm font-semibold mb-2">Votre métier</label>
              <div className="grid grid-cols-2 gap-3">
                {[['plombier', '🔧 Plombier'], ['electricien', '⚡ Électricien']].map(([val, label]) => (
                  <label key={val}
                    className="flex items-center gap-2.5 bg-[#F5F8FF] border border-[#DDE5F8] rounded-xl px-4 py-3 cursor-pointer hover:bg-[#EEF3FF] hover:border-[#C5D3F8] transition-all">
                    <input type="checkbox" value={val} {...register('metier')}
                      className="w-4 h-4 accent-[#2E5CFF] rounded" />
                    <span className="text-[#0A1628] text-sm font-medium">{label}</span>
                  </label>
                ))}
              </div>
              {errors.metier && <p className="text-[#DC2626] text-xs mt-1">{errors.metier.message}</p>}
            </div>

            {/* Submit */}
            <Button type="submit" variant="orange" size="xl" fullWidth>
              {loading
                ? <><Loader2 size={18} className="animate-spin" /> Envoi en cours…</>
                : <>Essayer Fixlyy 7 jours gratuit <ArrowRight size={18} /></>}
            </Button>

            <p className="text-[#94A3B8] text-xs text-center">
              Sans carte bancaire · Setup 30min offert · On vous rappelle sous 2h
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
