"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Users, LineChart, BarChart3,
  FileText, Settings, ArrowLeft, ChevronRight,
} from "lucide-react";

const nav = [
  { label: "Visão Geral",  href: "/",              icon: LayoutDashboard },
  { label: "Clientes",     href: "/clientes",       icon: Users },
  { label: "Portfólio",    href: "/portfolio",      icon: LineChart },
  { label: "Desempenho",   href: "/desempenho",     icon: BarChart3 },
  { label: "Relatórios",   href: "/relatorios",     icon: FileText },
  { label: "Configurações",href: "/configuracoes",  icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 shrink-0 flex flex-col h-screen bg-gray-950 border-r border-gray-800">
      {/* Logo */}
      <div className="px-4 py-5 border-b border-gray-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">A</span>
          </div>
          <div>
            <div className="text-sm font-bold text-white">Advisor</div>
            <div className="text-xs text-gray-500">AWQ Group</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {nav.map((item) => {
          const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                active
                  ? "bg-violet-600/20 text-violet-300 font-medium"
                  : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/60"
              }`}
            >
              <item.icon size={16} />
              <span className="flex-1">{item.label}</span>
              {active && <ChevronRight size={13} className="text-violet-400" />}
            </Link>
          );
        })}
      </nav>

      {/* Back to AWQ */}
      <div className="px-3 py-4 border-t border-gray-800">
        <a
          href="https://contato22.github.io/awq/business-units/"
          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-gray-500 hover:text-gray-300 hover:bg-gray-800/60 transition-colors"
        >
          <ArrowLeft size={13} />
          <span>Voltar ao AWQ</span>
        </a>
      </div>
    </aside>
  );
}
