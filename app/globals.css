import { RefreshCw, Bell } from "lucide-react";
interface HeaderProps { title: string; subtitle?: string; }
export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="flex items-center justify-between px-8 py-5 border-b border-gray-800 bg-gray-950 sticky top-0 z-10">
      <div>
        <h1 className="text-xl font-bold text-white">{title}</h1>
        {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 text-gray-500 hover:text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"><RefreshCw size={15} /></button>
        <button className="p-2 text-gray-500 hover:text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"><Bell size={15} /></button>
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-xs text-gray-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          Live · Advisor
        </div>
      </div>
    </div>
  );
}
