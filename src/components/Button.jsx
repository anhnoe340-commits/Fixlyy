export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  type = 'button',
  onClick,
  className = '',
}) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 select-none';

  const variants = {
    primary:
      'bg-[#2E5CFF] text-white hover:bg-[#1E4FDD] focus:ring-[#2E5CFF] shadow-[0_4px_24px_rgba(46,92,255,0.35)] hover:shadow-[0_6px_32px_rgba(46,92,255,0.45)] hover:-translate-y-0.5 active:translate-y-0',
    outline:
      'border-2 border-[#2E5CFF] text-[#2E5CFF] bg-white hover:bg-[#2E5CFF] hover:text-white focus:ring-[#2E5CFF] hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-white border border-[#DDE5F8] text-[#0A1628] hover:bg-[#F5F8FF] focus:ring-[#2E5CFF] shadow-sm hover:-translate-y-0.5',
    ghost:
      'text-white border border-white/25 hover:bg-white/10 focus:ring-white',
    orange:
      'bg-[#FF6B35] text-white hover:bg-[#e85f28] focus:ring-[#FF6B35] shadow-[0_4px_24px_rgba(255,107,53,0.4)] hover:shadow-[0_6px_32px_rgba(255,107,53,0.5)] hover:-translate-y-0.5 active:translate-y-0',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-base gap-2',
    lg: 'px-7 py-3.5 text-base gap-2',
    xl: 'px-9 py-4 text-lg gap-2.5',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={[base, variants[variant], sizes[size], fullWidth ? 'w-full' : '', className]
        .filter(Boolean).join(' ')}
    >
      {children}
    </button>
  );
}
