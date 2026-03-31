import { useState, useEffect, useRef } from 'react';

export default function CountdownTimer() {
  const [count, setCount] = useState(10);
  const [isZero, setIsZero] = useState(false);
  const intervalRef = useRef(null);

  const startCountdown = () => {
    setCount(10);
    setIsZero(false);
    intervalRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setIsZero(true);
          setTimeout(startCountdown, 3000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    startCountdown();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const progress = (count / 10) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`relative w-24 h-24 ${isZero ? 'pulse-orange' : ''}`}>
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={radius} fill="none"
            stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
          <circle cx="50" cy="50" r={radius} fill="none"
            stroke={isZero ? '#FF6B35' : '#2E5CFF'}
            strokeWidth="7" strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            className="countdown-ring" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`font-black text-3xl mono leading-none transition-colors duration-300 ${isZero ? 'text-[#FF6B35]' : 'text-white'}`}>
            {isZero ? '!' : count}
          </span>
        </div>
      </div>
      {isZero && (
        <p className="text-[#FF6B35] font-bold text-sm tracking-widest uppercase animate-pulse">
          Alors ?
        </p>
      )}
    </div>
  );
}
