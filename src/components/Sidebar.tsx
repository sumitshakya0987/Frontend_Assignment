import type { ReactNode } from 'react';
import { 
  Box, Sparkles, Book, Send, Server, List, Play, CheckSquare, Clock, 
  Shield, BookOpen, Key, Users, Settings2 
} from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside className="w-62 bg-white border-r border-gray-100 h-full overflow-y-auto flex flex-col pt-6 pb-4 shrink-0">
      <div className="flex-1 px-3 space-y-7">
        
        {/* MY PROJECTS */}
        <div>
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2.5 px-3">MY PROJECTS</h3>
          <ul className="space-y-0.5">
            <NavItem icon={<Box size={16} />} label="Agents" />
            <NavItem icon={<Sparkles size={16} />} label="AI Models" />
            <NavItem icon={<Book size={16} />} label="Library" />
          </ul>
        </div>

        {/* ORCHESTRATOR */}
        <div>
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2.5 px-3">ORCHESTRATOR</h3>
          <ul className="space-y-0.5">
            <NavItem icon={<Send size={16} />} label="Published" />
            <NavItem icon={<Server size={16} />} label="Machines" />
            <NavItem icon={<List size={16} />} label="Queues" />
            <NavItem icon={<Play size={16} />} label="Triggers" />
            <NavItem icon={<CheckSquare size={16} />} label="Jobs" />
            <NavItem icon={<Clock size={16} />} label="Executions" />
            <NavItem icon={<Shield size={16} />} label="Vault" />
            <NavItem icon={<BookOpen size={16} />} label="Knowledge Base" active />
            <NavItem icon={<Key size={16} />} label="Key Store" />
          </ul>
        </div>

        {/* ADMIN */}
        <div>
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2.5 px-3">ADMIN</h3>
          <ul className="space-y-0.5">
            <NavItem icon={<Users size={16} />} label="Tenant" />
            <NavItem icon={<Settings2 size={16} />} label="Integrations" />
          </ul>
        </div>
      </div>
    </aside>
  );
};

const NavItem = ({ icon, label, active = false }: { icon: ReactNode, label: string, active?: boolean }) => {
  return (
    <li>
      <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-[13.5px] font-medium ${
        active 
          ? 'bg-[#EEF2FF] text-primary' 
          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 group'
      }`}>
        <span className={active ? 'text-primary' : 'text-gray-400 group-hover:text-gray-500 transition-colors'}>
          {icon}
        </span>
        {label}
      </button>
    </li>
  );
};
