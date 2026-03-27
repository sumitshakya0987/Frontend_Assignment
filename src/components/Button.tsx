import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-[#4338CA] focus:ring-primary shadow-sm hover:shadow active:scale-[0.98]",
    secondary: "bg-[#EEF2FF] text-primary hover:bg-[#E0E7FF] focus:ring-primary active:scale-[0.98]",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 bg-white focus:ring-primary shadow-sm active:scale-[0.98]",
    ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-200"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
};
