import React from "react";
import { 
  LayoutDashboard, 
  Droplets, 
  Settings, 
  BookText, 
  ShieldAlert, 
  AlertTriangle,
  ShieldCheck,
  LucideIcon
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

// --- ÍCONE PERSONALIZADO (ESCUDO + SERINGA) ---
// Criado para ser idêntico ao seu logo oficial, mas com uma injeção
const SyringeShieldIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M50 5C25 15 15 25 15 45C15 70 30 85 50 95C70 85 85 70 85 45C85 25 75 15 50 5Z"
      fill="currentColor"
    />
    <path
      d="M38 62L43 57M63 37L68 32M45 55L60 40M48 52L63 37M51 49L66 34M43 67L48 62M33 67L43 67L43 77M58 32L68 42M63 27L73 37"
      stroke="white"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="56" y="26" width="16" height="5" transform="rotate(-45 56 26)" fill="white"/>
  </svg>
);

interface MenuItem {
  title: string;
  url: string;
  icon: LucideIcon | React.ComponentType<any>;
  className?: string;
  isBrandIcon?: boolean;
}

const items: MenuItem[] = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { 
    title: "Alerta Urgente", 
    url: "/alerta-urgente", 
    icon: AlertTriangle,
    className: "text-red-500 hover:text-red-600 font-bold" 
  },
  { title: "Minha Carteira (Público)", url: "/carteira-publica", icon: BookText },
  { title: "Gestão Vacinal (Admin)", url: "/carteira-admin", icon: ShieldAlert },
  { 
    title: "Campanhas de Vacinação", 
    url: "/campanhas", 
    icon: SyringeShieldIcon, // AQUI: Agora usando o componente interno
    isBrandIcon: true 
  },
  { title: "Doação de Sangue", url: "/alertas", icon: Droplets }, // Gota mantida
  { title: "Configurações", url: "/configuracoes", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const [headerError, setHeaderError] = React.useState(false);

  return (
    <Sidebar collapsible="icon" className="border-r border-slate-200">
      <SidebarHeader className="p-4">
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'}`}>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-white">
            {!headerError ? (
              <img 
                src="/icon/icon.jpg" 
                alt="Logo" 
                className="h-full w-full object-cover"
                onError={() => setHeaderError(true)}
              />
            ) : (
              <ShieldCheck className="h-6 w-6 text-[#14A1A1]" />
            )}
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-black text-sidebar-foreground italic leading-none tracking-tight">VitalAlert</span>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Portal Saúde</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-[10px] font-black uppercase tracking-widest opacity-40">
            Navegação
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const IconComponent = item.icon;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <NavLink
                        to={item.url}
                        end={item.url === "/"}
                        className={`flex items-center gap-3 px-4 py-2.5 transition-all hover:bg-sidebar-accent ${item.className || ""}`}
                        activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-black border-r-4 border-[#14A1A1]"
                      >
                        {/* Renderiza o ícone. Se for de marca, aplica o azul teal #14A1A1 */}
                        <IconComponent className={`h-4 w-4 shrink-0 ${item.isBrandIcon ? 'text-[#14A1A1]' : ''}`} />
                        {!collapsed && <span className="text-sm tracking-tight">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
