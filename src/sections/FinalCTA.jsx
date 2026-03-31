import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import Button from '../components/Button';

const schema = z.object({
  prenom: z.string().min(2, 'Min 2 caractères').max(50, 'Max 50 caractères'),
  email: z.string().email('Email invalide'),
  telephone: z
    .string()
    .regex(
      /^(\+33|0033|0)[1-9](\d{2}){4}$/,
      'Format français requis (ex: 0612345678)'
    ),
  metier: z.array(z.string()).min(1, 'Sélectionnez au moins un métier'),
});

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { metier: [] },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    console.log('Form data:', data);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28 bg-[#0A1628]" id="inscription">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#FF6B35]/20 text-[#FF6B35] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#FF6B35]/30">
            Dernière chance
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Vous avez lu jusqu'ici.
          </h2>
          <div className="mt-6 space-y-2 text-white/70 text-lg">
            <p>Ça veut dire que vous êtes sérieux.</p>
            <p>Que vous en avez <strong className="text-white">MARRE</strong> de rater des appels.</p>
            <p>Que vous voulez récupérer ces <span className="mono text-[#FF6B35] font-black text-2xl">28 800€</span>/an.</p>
          </div>
          <p className="mt-6 text-[#00D4FF] font-black text-xl">Alors faites le premier pas.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-white/50 text-sm">
            <span>✓ Pas d'engagement</span>
            <span>✓ Pas de risque</span>
            <span>✓ 7 jours pour tester</span>
          </div>
        </div>

        {/* Form or success */}
        {submitted ? (
          <div className="bg-[#10B981]/10 border border-[#10B981]/30 rounded-2xl p-10 text-center">
            <CheckCircle2 size={56} className="text-[#10B981] mx-auto mb-4" />
            <h3 className="text-white font-black text-2xl mb-3">
              C'est parti ! 🎉
            </h3>
            <p className="text-white/70 text-lg mb-2">
              On vous appelle <strong className="text-white">sous 2h</strong> pour le setup.
            </p>
            <p className="text-white/50 text-sm">
              Vérifiez aussi votre email pour la confirmation.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5"
            noValidate
          >
            {/* Prénom */}
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Prénom
              </label>
              <input
                {...register('prenom')}
                placeholder="Votre prénom"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#2E5CFF] focus:border-transparent"
              />
              {errors.prenom && (
                <p className="text-red-400 text-xs mt-1">{errors.prenom.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="votre@email.fr"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#2E5CFF] focus:border-transparent"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Téléphone */}
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Téléphone
              </label>
              <input
                {...register('telephone')}
                type="tel"
                placeholder="0612345678"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#2E5CFF] focus:border-transparent"
              />
              {errors.telephone && (
                <p className="text-red-400 text-xs mt-1">{errors.telephone.message}</p>
              )}
            </div>

            {/* Métier */}
            <div>
              <label className="block text-white/80 text-sm font-medium mb-3">
                Votre métier
              </label>
              <div className="flex gap-4">
                {['plombier', 'electricien'].map((m) => (
                  <label
                    key={m}
                    className="flex-1 flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3 cursor-pointer hover:bg-white/15 transition-colors"
                  >
                    <input
                      type="checkbox"
                      value={m}
                      {...register('metier')}
                      className="w-4 h-4 accent-[#2E5CFF]"
                    />
                    <span className="text-white capitalize">
                      {m === 'plombier' ? '🔧 Plombier' : '⚡ Électricien'}
                    </span>
                  </label>
                ))}
              </div>
              {errors.metier && (
                <p className="text-red-400 text-xs mt-1">{errors.metier.message}</p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="orange"
              size="lg"
              fullWidth
              className="mt-2"
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Envoi en cours…
                </>
              ) : (
                <>
                  Essayer Fixlyy 7 jours gratuit
                  <ArrowRight size={20} />
                </>
              )}
            </Button>

            <p className="text-white/30 text-sm text-center leading-relaxed">
              Sans carte bancaire · Setup 30min offert · On vous appelle sous 2h
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
