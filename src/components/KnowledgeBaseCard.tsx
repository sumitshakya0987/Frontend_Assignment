import { MoreVertical } from 'lucide-react';

interface KnowledgeBaseCardProps {
  title: string;
  description: string;
  dateStr: string;
}

export const KnowledgeBaseCard = ({ title, description, dateStr }: KnowledgeBaseCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-45 hover:shadow-md transition-all group">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-gray-900 leading-tight">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600 p-1 -mr-1 rounded-md hover:bg-gray-100 transition-colors">
          <MoreVertical size={18} />
        </button>
      </div>
      
      <p className="text-[13px] text-gray-500 leading-relaxed flex-1 line-clamp-3">
        {description}
      </p>
      
      <div className="mt-4 pt-4 border-t border-gray-50 text-[11px] font-medium text-gray-400">
        Created On: {dateStr}
      </div>
    </div>
  );
};
