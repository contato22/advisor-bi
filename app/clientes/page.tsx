import Header from "@/components/Header";
import { Users, Search, Filter } from "lucide-react";

export default function ClientesPage() {
  return (
    <>
      <Header title="Clientes" subtitle="Gestão de clientes · Advisor" />
      <div className="px-8 py-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar cliente..."
                className="pl-9 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-violet-500 w-64"
              />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-400 hover:text-gray-200 transition-colors">
              <Filter size={14} />Filtrar
            </button>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Users size={14} />Novo Cliente
          </button>
        </div>
        <div className="card p-6 flex flex-col items-center justify-center min-h-[360px] text-center">
          <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-3">
            <Users size={22} className="text-violet-400" />
          </div>
          <div className="text-sm font-semibold text-gray-300">Nenhum cliente cadastrado</div>
          <div className="text-xs text-gray-600 mt-1">Adicione clientes para começar a gestão</div>
        </div>
      </div>
    </>
  );
}
