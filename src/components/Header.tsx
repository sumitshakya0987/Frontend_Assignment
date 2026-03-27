import { Search, Bell, ChevronDown, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick?: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="h-18 bg-darknav text-white flex items-center justify-between px-4 sm:px-6 border-b border-gray-800 shrink-0">
      <div className="flex items-center gap-3 sm:gap-8">
        
        {/* Hamburger Menu for Mobile */}
        <button 
          onClick={onMenuClick}
          className="md:hidden text-gray-400 hover:text-white p-1.5 -ml-1.5 rounded-lg transition-colors focus:ring-2 focus:ring-primary focus:outline-none"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        <div className="flex items-center gap-2 text-primary">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-white text-lg">
            {/* Custom abstract logo */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 22H22L12 2Z" fill="currentColor" />
            </svg>
          </div>
          <span className="font-bold text-[19px] sm:text-xl tracking-wide text-white">Worcspace</span>
        </div>
        
        <button className="hidden sm:flex items-center gap-2 text-[13px] bg-[#221D52] px-3.5 py-1.5 rounded-full hover:bg-[#2A2466] transition-colors border border-gray-700/50">
          Worcspace 1 <ChevronDown size={14} className="text-gray-400" />
        </button>
      </div>

      <div className="flex-1 max-w-lg px-4 hidden md:block ml-8">
        <div className="relative group">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={16} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-[#1A1644] border border-gray-700/50 rounded-lg py-2 pl-10 pr-12 text-sm text-gray-200 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-gray-500 transition-all shadow-sm"
          />
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 border border-gray-600 rounded px-1.5 py-0.5 bg-[#221D52]">
            ⌘K
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-5">
        <button className="text-gray-400 hover:text-white transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-darknav"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-[#3B357B] flex items-center justify-center text-[11px] sm:text-xs font-semibold border-2 border-[#453E8A] text-white cursor-pointer hover:bg-[#4a4399] transition-colors shadow-sm">
          SS
        </div>
      </div>
    </header>
  );
};
