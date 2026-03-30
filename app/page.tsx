import Header from "@/components/Header";
import {
  Users, DollarSign, TrendingUp, Target,
  Briefcase, Activity,
} from "lucide-react";

const kpis = [
  { label: "Clientes Ativos", value: "—", icon: Users,       color: "text-violet-400",  bg: "bg-violet-500/10 border-violet-500/20" },
  { label: "AUM Total",       value: "—", icon: DollarSign,  color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  { label: "Retorno Médio",   value: "—", icon: TrendingUp,  color: "text-blue-400",    bg: "bg-blue-500/10 border-blue-500/20" },
  { label: "NPS",             value: "—", icon: Target,      color: "text-amber-400",   bg: "bg-amber-500/10 border-amber-500/20" },
];

const recentActivity = [
  { client: "—", type: "Reunião",            date: "—", status: "pendente" },
  { client: "—", type: "Relatório",          date: "—", status: "pendente" },
  { client: "—", type: "Revisão de Portfólio", date: "—", status: "pendente" },
];

export default function DashboardPage() {
  return (
    <>
      <Header title="Advisor" subtitle="Consultoria · AWQ Group" />
      <div className="px-8 py-6 space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="card p-5 flex items-start gap-4">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Activity size={15} className="text-violet-400" />
                <span className="text-sm font-semibold text-gray-200">Atividade Recente</span>
              </div>
              <span className="text-xs text-gray-600">Últimos 30 dias</span>
            </div>
            <div className="space-y-3">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-gray-800 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
                      <Briefcase size={13} className="text-gray-500" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-300">{item.client}</div>
                      <div className="text-xs text-gray-600">{item.type}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-600">{item.date}</div>
                    <span className="badge badge-yellow mt-0.5">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={15} className="text-violet-400" />
              <span className="text-sm font-semibold text-gray-200">Resumo do Mês</span>
            </div>
            {[
              { label: "Novas consultorias",  value: "—" },
              { label: "Revisões realizadas", value: "—" },
              { label: "Receita do período",  value: "—" },
              { label: "Churn",               value: "—" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-2.5 border-b border-gray-800 last:border-0">
                <span className="text-sm text-gray-500">{item.label}</span>
                <span className="text-sm font-semibold text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
