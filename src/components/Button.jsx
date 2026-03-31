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
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary:
      'bg-[#2E5CFF] text-white hover:bg-[#1E4FDD] focus:ring-[#2E5CFF] shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    outline:
      'border-2 border-[#2E5CFF] text-[#2E5CFF] hover:bg-[#2E5CFF] hover:text-white focus:ring-[#2E5CFF]',
    ghost: 'text-white hover:bg-white/10 focus:ring-white',
    orange:
      'bg-[#FF6B35] text-white hover:bg-[#e55a24] focus:ring-[#FF6B35] shadow-lg hover:shadow-xl hover:-translate-y-0.5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={[
        base,
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </button>
  );
}
