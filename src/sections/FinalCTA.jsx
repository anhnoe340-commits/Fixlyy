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
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-[#0A1628]" id="inscription">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FF6B35]/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#2E5CFF]/8 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-white/10 border border-white/20 text-[#FF6B35] text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Dernière chance
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Vous avez lu jusqu'ici.
          </h2>
          <div className="space-y-2 text-white/70 text-base sm:text-lg">
            <p>Ça veut dire que vous en avez <strong className="text-white">MARRE</strong> de rater des appels.</p>
            <p>Que vous voulez récupérer ces{' '}
              <span className="mono font-black text-[#FF6B35] text-xl">28 800€</span>/an.
            </p>
          </div>
          <p className="mt-5 text-[#FF6B35] font-black text-lg italic">Alors faites le premier pas.</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-3 text-white/50 text-sm">
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
            className="bg-white rounded-2xl shadow-[0_16px_60px_rgba(0,0,0,0.3)] p-7 sm:p-8 space-y-5">

            {/* Prénom */}
            <div>
              <label className="block text-[#1a1a1a] text-sm font-bold mb-2">Prénom</label>
              <input {...register('prenom')} placeholder="Votre prénom"
                className="w-full bg-[#F7F9FC] border-2 border-[#E5E7EB] rounded-xl px-4 py-3.5 text-[#1a1a1a] placeholder:text-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all" />
              {errors.prenom && <p className="text-[#DC2626] text-xs mt-1.5">{errors.prenom.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#1a1a1a] text-sm font-bold mb-2">Email professionnel</label>
              <input {...register('email')} type="email" placeholder="votre@email.fr"
                className="w-full bg-[#F7F9FC] border-2 border-[#E5E7EB] rounded-xl px-4 py-3.5 text-[#1a1a1a] placeholder:text-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all" />
              {errors.email && <p className="text-[#DC2626] text-xs mt-1.5">{errors.email.message}</p>}
            </div>

            {/* Téléphone */}
            <div>
              <label className="block text-[#1a1a1a] text-sm font-bold mb-2">Téléphone</label>
              <input {...register('telephone')} type="tel" placeholder="0612345678"
                className="w-full bg-[#F7F9FC] border-2 border-[#E5E7EB] rounded-xl px-4 py-3.5 text-[#1a1a1a] placeholder:text-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all" />
              {errors.telephone && <p className="text-[#DC2626] text-xs mt-1.5">{errors.telephone.message}</p>}
            </div>

            {/* Métier */}
            <div>
              <label className="block text-[#1a1a1a] text-sm font-bold mb-2">Votre métier</label>
              <div className="grid grid-cols-2 gap-3">
                {[['plombier', '🔧 Plombier'], ['electricien', '⚡ Électricien']].map(([val, label]) => (
                  <label key={val}
                    className="flex items-center gap-2.5 bg-[#F7F9FC] border-2 border-[#E5E7EB] rounded-xl px-4 py-3.5 cursor-pointer hover:bg-[#FFF7ED] hover:border-[#FDBA74] transition-all">
                    <input type="checkbox" value={val} {...register('metier')}
                      className="w-4 h-4 accent-[#FF6B35] rounded" />
                    <span className="text-[#1a1a1a] text-sm font-medium">{label}</span>
                  </label>
                ))}
              </div>
              {errors.metier && <p className="text-[#DC2626] text-xs mt-1.5">{errors.metier.message}</p>}
            </div>

            {/* Submit */}
            <Button type="submit" variant="primary" size="xl" fullWidth>
              {loading
                ? <><Loader2 size={18} className="animate-spin" /> Envoi en cours…</>
                : <>Essayer Fixlyy 7 jours gratuit <ArrowRight size={18} /></>}
            </Button>

            <p className="text-[#9CA3AF] text-xs text-center">
              Sans carte bancaire · Setup 30min offert · On vous rappelle sous 2h
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
