import type { SelectHTMLAttributes, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
  required?: boolean;
  helperText?: ReactNode;
}

export const SelectField = ({ label, options, error, required, helperText, ...props }: SelectFieldProps) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-[13px] font-semibold text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select 
          className={`appearance-none w-full border rounded-lg px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white hover:border-gray-300 ${
            error ? 'border-red-500' : 'border-gray-200'
          }`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
      {helperText && !error && <span className="text-xs text-gray-500">{helperText}</span>}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};
