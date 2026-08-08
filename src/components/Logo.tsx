import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  iconOnly = false,
  size = 'md',
  variant = 'dark'
}) => {
  // Brand Colors from uploaded image
  // Icon / XR text color: #387BFF or #3B82F6
  // Text color: #FFFFFF for dark backgrounds, #0F172A for light backgrounds

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  const textColor = variant === 'light' ? 'text-slate-900' : 'text-slate-950';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Accurate SVG Mark matching Innovify XR logo */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-blue-600"
        >
          {/* Infinity / i-X ribbon loop */}
          <path
            d="M28 68 C 18 68, 12 58, 18 46 C 24 34, 38 32, 50 48 L 68 72 C 76 82, 88 78, 90 68 C 92 56, 82 46, 72 46 C 60 46, 48 62, 38 72 Z"
            stroke="currentColor"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Top-right dot */}
          <circle cx="78" cy="26" r="6" fill="currentColor" />
        </svg>
      </div>

      {!iconOnly && (
        <span className={`font-semibold tracking-tight font-heading ${textSizes[size]} ${textColor}`}>
          Innovify <span className="text-blue-600 font-bold ml-0.5">XR</span>
        </span>
      )}
    </div>
  );
};
