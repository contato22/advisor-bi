import Header from "@/components/Header";
import { BarChart3, TrendingUp, Target } from "lucide-react";

export default function DesempenhoPage() {
  return (
    <>
      <Header title="Desempenho" subtitle="Métricas de desempenho · Advisor" />
      <div className="px-8 py-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Retorno Médio", value: "—", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
            { label: "Benchmark",     value: "—", icon: Target,     color: "text-blue-400",    bg: "bg-blue-500/10 border-blue-500/20" },
            { label: "Alpha",         value: "—", icon: BarChart3,  color: "text-violet-400",  bg: "bg-violet-500/10 border-violet-500/20" },
          ].map((kpi) => (
            <div key={kpi.label} className="card p-5 flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${kpi.bg}`}>
                <kpi.icon size={18} className={kpi.color} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{kpi.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{kpi.label}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="card p-6 flex flex-col items-center justify-center min-h-[300px] text-center">
          <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-3">
            <BarChart3 size={22} className="text-violet-400" />
          </div>
          <div className="text-sm font-semibold text-gray-300">Dados de desempenho em configuração</div>
          <div className="text-xs text-gray-600 mt-1">As métricas serão exibidas após integração</div>
        </div>
      </div>
    </>
  );
}
