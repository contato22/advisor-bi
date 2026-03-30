import Header from "@/components/Header";
import { FileText, Plus } from "lucide-react";

export default function RelatoriosPage() {
  return (
    <>
      <Header title="Relatórios" subtitle="Relatórios e documentos · Advisor" />
      <div className="px-8 py-6 space-y-4">
        <div className="flex justify-end">
          <button className="btn-primary flex items-center gap-2">
            <Plus size={14} />Novo Relatório
          </button>
        </div>
        <div className="card p-6 flex flex-col items-center justify-center min-h-[360px] text-center">
          <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-3">
            <FileText size={22} className="text-violet-400" />
          </div>
          <div className="text-sm font-semibold text-gray-300">Nenhum relatório gerado</div>
          <div className="text-xs text-gray-600 mt-1">Os relatórios aparecerão aqui quando forem criados</div>
        </div>
      </div>
    </>
  );
}
