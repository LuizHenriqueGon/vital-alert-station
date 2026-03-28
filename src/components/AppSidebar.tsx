import { 
  LayoutDashboard, 
  Syringe, 
  Droplets, 
  Settings, 
  BookOpen, 
  ShieldAlert, 
  AlertTriangle 
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

// Definição dos itens de navegação
const items = [
  { 
    title: "Dashboard", 
    url: "/", 
    icon: LayoutDashboard 
  },
  { 
    title: "Alerta Urgente", 
    url: "/alerta-urgente", 
    icon: AlertTriangle,
    className: "text-red-500 hover:text-red-600" 
  },
  { 
    title: "Minha Carteira (Público)", 
    url: "/carteira-publica", 
    icon: BookOpen 
  },
  { 
    title: "Gestão Vacinal (Admin)", 
    url: "/carteira-admin", 
    icon: ShieldAlert 
  },
  { 
    title: "Campanhas de Vacinação", 
    url: "/campanhas", 
    icon: Syringe 
  },
  { 
    title: "Doação de Sangue", 
    url: "/alertas", 
    icon: Droplets 
  },
  { 
    title: "Configurações", 
    url: "/configuracoes", 
    icon: Settings 
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        {!collapsed ? (
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <Syringe className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-black text-sidebar-foreground tracking-tight">VitalAlert</p>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Portal da Saúde</p>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Syringe className="h-5 w-5" />
            </div>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-[10px] font-black uppercase tracking-widest opacity-50">
            Menu Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={`flex items-center gap-3 px-4 py-2 transition-all hover:bg-sidebar-accent ${item.className || ""}`}
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-bold border-r-4 border-primary"
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {!collapsed && <span className="text-sm tracking-tight">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}