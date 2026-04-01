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
    'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 select-none';

  const variants = {
    primary:
      'bg-gradient-to-br from-[#FF6B35] to-[#FF8A5C] text-white hover:from-[#e85f28] hover:to-[#FF6B35] focus:ring-[#FF6B35] shadow-[0_4px_12px_rgba(255,107,53,0.3)] hover:shadow-[0_6px_20px_rgba(255,107,53,0.4)] hover:-translate-y-0.5 active:translate-y-0',
    outline:
      'border-2 border-[#1a1a1a] text-[#1a1a1a] bg-transparent hover:bg-[#1a1a1a] hover:text-white focus:ring-[#1a1a1a] hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-white border-2 border-[#E5E7EB] text-[#1a1a1a] hover:bg-[#F7F9FC] hover:border-[#D1D5DB] focus:ring-[#FF6B35] shadow-sm hover:-translate-y-0.5',
    ghost:
      'text-white border border-white/25 hover:bg-white/10 focus:ring-white',
    orange:
      'bg-gradient-to-br from-[#FF6B35] to-[#FF8A5C] text-white hover:from-[#e85f28] hover:to-[#FF6B35] focus:ring-[#FF6B35] shadow-[0_4px_12px_rgba(255,107,53,0.3)] hover:shadow-[0_6px_20px_rgba(255,107,53,0.4)] hover:-translate-y-0.5 active:translate-y-0',
    blue:
      'bg-[#2E5CFF] text-white hover:bg-[#1E4FDD] focus:ring-[#2E5CFF] shadow-[0_4px_12px_rgba(46,92,255,0.3)] hover:shadow-[0_6px_20px_rgba(46,92,255,0.4)] hover:-translate-y-0.5 active:translate-y-0',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-base gap-2',
    xl: 'px-10 py-4.5 text-lg gap-2.5',
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
