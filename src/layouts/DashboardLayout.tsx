import { useState } from 'react';
import type { ReactNode } from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white font-sans text-gray-800 relative">
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      
      <div className="flex flex-1 overflow-hidden relative w-full">
        {/* Desktop Sidebar */}
        <div className="hidden md:block h-full z-10 relative shrink-0">
          <Sidebar />
        </div>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div className="md:hidden absolute inset-0 z-50 flex overflow-hidden">
            <div 
              className="absolute inset-0 bg-darknav/40 backdrop-blur-[2px] transition-opacity" 
              onClick={() => setIsSidebarOpen(false)}
            />
            <div className="relative h-full bg-white flex flex-col animate-in slide-in-from-left duration-300 ease-out z-10 shadow-2xl">
              <Sidebar />
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-[#F8FAFC] w-full min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
};
