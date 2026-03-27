import { useState } from 'react';
import { Search, Plus, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, X } from 'lucide-react';
import { Button } from '../components/Button';
import { KnowledgeBaseCard } from '../components/KnowledgeBaseCard';
import { InputField } from '../components/InputField';
import { SelectField } from '../components/SelectField';

// Dummy data
const cardData = Array(6).fill({
  title: 'Test',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  dateStr: '14/07/2025'
});

export const KnowledgeBasePage = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#fcfcfc] relative overflow-hidden">
      <div className="flex-1 overflow-hidden flex flex-col pt-8 px-6 sm:px-10 pb-4">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6 shrink-0">
          <h1 className="text-[22px] font-bold text-gray-900 tracking-tight">Knowledge Base</h1>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-70 border border-gray-200 rounded-lg py-2 pl-10 pr-4 text-[13.5px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder-gray-400 bg-white shadow-sm transition-all"
              />
            </div>
            <Button onClick={() => setIsPanelOpen(true)} icon={<Plus size={16} />}>
              Create New
            </Button>
          </div>
        </div>

        {/* Grid Area */}
        <div className="flex-1 overflow-y-auto pb-4 min-h-0 pr-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-max">
            {cardData.map((data, idx) => (
              <KnowledgeBaseCard 
                key={idx}
                title={data.title}
                description={data.description}
                dateStr={data.dateStr}
              />
            ))}
          </div>
        </div>

        {/* Pagination Footer */}
        <div className="mt-4 pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between text-[13px] font-semibold text-gray-600 bg-transparent gap-4 shrink-0">
          <span className="text-gray-900 tracking-wide">6 rows</span>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span>Rows per page</span>
              <select className="border border-gray-200 rounded-md py-1 px-1.5 text-gray-900 bg-white outline-none focus:border-primary transition-colors hover:border-gray-300">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
            </div>
            
            <div className="flex items-center gap-6 ml-4">
              <span className="font-medium text-gray-800">page 1 of 1</span>
              <div className="flex gap-2 text-gray-400">
                <button className="p-1 border border-gray-200 rounded text-gray-400 hover:bg-gray-50 hover:text-gray-700 transition-colors bg-white shadow-sm"><ChevronsLeft size={16}/></button>
                <button className="p-1 border border-gray-200 rounded text-gray-400 hover:bg-gray-50 hover:text-gray-700 transition-colors bg-white shadow-sm"><ChevronLeft size={16}/></button>
                <button className="p-1 border border-gray-200 rounded text-gray-400 hover:bg-gray-50 hover:text-gray-700 transition-colors bg-white shadow-sm"><ChevronRight size={16}/></button>
                <button className="p-1 border border-gray-200 rounded text-gray-400 hover:bg-gray-50 hover:text-gray-700 transition-colors bg-white shadow-sm"><ChevronsRight size={16}/></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-over Panel for Create New */}
      {isPanelOpen && (
        <div className="absolute inset-0 z-50 flex justify-end overflow-hidden">
          <div 
            className="absolute inset-0 bg-darknav/20 backdrop-blur-[1px] transition-opacity" 
            onClick={() => setIsPanelOpen(false)} 
          />
          <div className="relative w-full max-w-110 h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 ease-out border-l border-gray-100">
            {/* Header */}
            <div className="flex justify-between items-start pt-6 px-6 pb-4">
              <div>
                <h2 className="text-[17px] font-bold text-gray-900 leading-tight tracking-tight">Create New Knowledge Base</h2>
                <p className="text-[13px] text-gray-500 mt-1">
                  Best for quick answers from documents, websites and text files.
                </p>
              </div>
              <button 
                onClick={() => setIsPanelOpen(false)}
                className="text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-1.5 -mr-1.5 -mt-1 rounded-lg transition-colors"
                title="Close sidebar"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Content Form */}
            <div className="flex-1 overflow-y-auto px-6 py-2 flex flex-col gap-5">
              <InputField 
                label="Name (Cannot be edited later)" 
                required 
                placeholder="Name" 
              />
              
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-[13px] font-semibold text-gray-800">
                  Description
                </label>
                <textarea 
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 resize-none hover:border-gray-300 min-h-27.5"
                  placeholder="Description"
                ></textarea>
              </div>

              <SelectField 
                label="Vector Store" 
                required
                options={[{ value: 'Qdrant', label: 'Qdrant' }, { value: 'Pinecone', label: 'Pinecone' }]}
                defaultValue="Qdrant"
              />

              <SelectField 
                label="LLM Embedding Model" 
                required
                options={[{ value: 'text-embedding-ada-002', label: 'text-embedding-ada-002' }, { value: 'text-embedding-3-small', label: 'text-embedding-3-small' }]}
                defaultValue="text-embedding-ada-002"
              />
            </div>
            
            {/* Footer */}
            <div className="p-6 pt-4 mt-auto flex justify-end bg-white">
              <Button onClick={() => setIsPanelOpen(false)}>
                Create
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
