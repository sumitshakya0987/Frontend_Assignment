import type { InputHTMLAttributes, ReactNode } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
  helperText?: ReactNode;
}

export const InputField = ({ label, error, required, helperText, ...props }: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-[13px] font-semibold text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input 
        className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 ${
          error ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
        }`}
        {...props}
      />
      {helperText && !error && <span className="text-xs text-gray-500">{helperText}</span>}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};
