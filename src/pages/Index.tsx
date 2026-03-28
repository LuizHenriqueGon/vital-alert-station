import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Syringe, Activity, Droplets, CalendarDays } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { campaigns, bloodAlerts, weeklyVaccinations, appointments } from "@/data/mock-data";
import { Link } from "react-router-dom";

const statusColor: Record<string, string> = {
  ativa: "bg-emerald-100 text-emerald-700",
  encerrada: "bg-muted text-muted-foreground",
  rascunho: "bg-amber-100 text-amber-700",
  pausada: "bg-orange-100 text-orange-700",
};

const urgencyLabel: Record<string, { label: string; className: string }> = {
  critico: { label: "Crítico", className: "bg-destructive text-destructive-foreground" },
  alto: { label: "Alto", className: "bg-orange-500 text-white" },
  medio: { label: "Médio", className: "bg-amber-400 text-amber-900" },
};

const activeCampaigns = campaigns.filter((c) => c.status === "ativa").length;
const totalApplied = campaigns.reduce((s, c) => s + c.appliedDoses, 0);
const activeAlerts = bloodAlerts.filter((a) => a.active).length;
const todayAppointments = appointments.length;

const metrics = [
  { label: "Campanhas Ativas", value: activeCampaigns, icon: Syringe, color: "text-primary" },
  { label: "Doses Aplicadas", value: totalApplied.toLocaleString("pt-BR"), icon: Activity, color: "text-emerald-600" },
  { label: "Alertas Emitidos", value: activeAlerts, icon: Droplets, color: "text-destructive" },
  { label: "Agendamentos Hoje", value: todayAppointments, icon: CalendarDays, color: "text-amber-600" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground text-sm">Visão geral do posto de saúde</p>
      </div>

      {/* Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m) => (
          <Card key={m.label}>
            <CardContent className="flex items-center gap-4 p-5">
              <div className={`rounded-lg bg-muted p-2.5 ${m.color}`}>
                <m.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">{m.value}</p>
                <p className="text-xs text-muted-foreground">{m.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Vacinações por Semana</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={weeklyVaccinations}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="week" className="text-xs" tick={{ fill: "hsl(215 14% 46%)" }} />
                <YAxis className="text-xs" tick={{ fill: "hsl(215 14% 46%)" }} />
                <Tooltip
                  contentStyle={{
                    borderRadius: "0.5rem",
                    border: "1px solid hsl(214 32% 91%)",
                    fontSize: "0.75rem",
                  }}
                />
                <Bar dataKey="vaccinations" fill="hsl(217 91% 60%)" radius={[4, 4, 0, 0]} name="Vacinações" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Active Alerts */}
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="text-base">Alertas de Sangue</CardTitle>
            <Link to="/alertas" className="text-xs text-primary hover:underline">Ver todos</Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {bloodAlerts.filter((a) => a.active).map((alert) => (
              <div key={alert.id} className="flex items-start gap-3 rounded-lg border p-3">
                <Badge className={urgencyLabel[alert.urgency].className}>
                  {urgencyLabel[alert.urgency].label}
                </Badge>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{alert.bloodTypes.join(", ")}</p>
                  <p className="text-xs text-muted-foreground truncate">{alert.message}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Campaigns */}
      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle className="text-base">Próximas Campanhas</CardTitle>
          <Link to="/campanhas" className="text-xs text-primary hover:underline">Ver todas</Link>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {campaigns.filter((c) => c.status !== "encerrada").slice(0, 4).map((c) => (
              <div key={c.id} className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="text-sm font-medium">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.startDate} → {c.endDate}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">{c.appliedDoses}/{c.totalDoses} doses</span>
                  <Badge variant="outline" className={statusColor[c.status]}>{c.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
