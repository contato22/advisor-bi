import Header from "@/components/Header";
import { Settings } from "lucide-react";

export default function ConfiguracoesPage() {
  return (
    <>
      <Header title="Configurações" subtitle="Configurações do sistema · Advisor" />
      <div className="px-8 py-6">
        <div className="card p-6 flex flex-col items-center justify-center min-h-[360px] text-center">
          <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-3">
            <Settings size={22} className="text-violet-400" />
          </div>
          <div className="text-sm font-semibold text-gray-300">Configurações</div>
          <div className="text-xs text-gray-600 mt-1">Em breve</div>
        </div>
      </div>
    </>
  );
}
