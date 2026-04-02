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
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 select-none whitespace-nowrap';

  const variants = {
    primary:
      'bg-[#7C3AED] text-white hover:bg-[#6D28D9] focus:ring-[#7C3AED] shadow-[0_4px_16px_rgba(124,58,237,0.3)] hover:shadow-[0_6px_24px_rgba(124,58,237,0.45)] hover:-translate-y-0.5 active:translate-y-0',
    outline:
      'border-2 border-[#7C3AED] text-[#7C3AED] bg-transparent hover:bg-[#7C3AED] hover:text-white focus:ring-[#7C3AED] hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-white border-2 border-[#E5E7EB] text-[#111827] hover:bg-[#F5F3FF] hover:border-[#DDD6FE] focus:ring-[#7C3AED] shadow-sm hover:-translate-y-0.5',
    ghost:
      'text-white border border-white/25 hover:bg-white/10 focus:ring-white',
    'outline-white':
      'border-2 border-white/30 text-white bg-transparent hover:bg-white/10 focus:ring-white hover:-translate-y-0.5',
    dark:
      'bg-[#111827] text-white hover:bg-[#1F2937] focus:ring-[#111827] hover:-translate-y-0.5',
  };

  const sizes = {
    sm:  'px-5 py-2 text-sm gap-1.5',
    md:  'px-6 py-2.5 text-sm gap-2',
    lg:  'px-8 py-3.5 text-base gap-2',
    xl:  'px-10 py-4 text-lg gap-2.5',
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
