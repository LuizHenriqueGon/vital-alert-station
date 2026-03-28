import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Calendar, Clock, FileText, Users } from "lucide-react";
import { campaigns, vaccinations, appointments } from "@/data/mock-data";

const statusColor: Record<string, string> = {
  ativa: "bg-emerald-100 text-emerald-700",
  encerrada: "bg-muted text-muted-foreground",
  rascunho: "bg-amber-100 text-amber-700",
  pausada: "bg-orange-100 text-orange-700",
};

const appointmentStatusColor: Record<string, string> = {
  confirmado: "bg-emerald-100 text-emerald-700",
  pendente: "bg-amber-100 text-amber-700",
  cancelado: "bg-red-100 text-red-700",
};

export default function CampanhaDetalhes() {
  const { id } = useParams();
  const campaign = campaigns.find((c) => c.id === id);

  if (!campaign) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-muted-foreground mb-4">Campanha não encontrada</p>
        <Button variant="outline" asChild><Link to="/campanhas">Voltar</Link></Button>
      </div>
    );
  }

  const pct = campaign.totalDoses ? Math.round((campaign.appliedDoses / campaign.totalDoses) * 100) : 0;
  const remaining = campaign.totalDoses - campaign.appliedDoses;
  const campaignVaccinations = vaccinations.filter((v) => v.campaignId === campaign.id);
  const campaignAppointments = appointments.filter((a) => a.campaignId === campaign.id);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/campanhas"><ArrowLeft className="h-4 w-4" /></Link>
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">{campaign.name}</h1>
            <Badge variant="outline" className={statusColor[campaign.status]}>{campaign.status}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">{campaign.description}</p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <Calendar className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Período</p>
              <p className="text-sm font-medium">{campaign.startDate} → {campaign.endDate}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <Clock className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Horário</p>
              <p className="text-sm font-medium">{campaign.hours}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <Users className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Faixa Etária</p>
              <p className="text-sm font-medium">{campaign.ageRange}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <FileText className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Documentos</p>
              <p className="text-sm font-medium truncate">{campaign.documents}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stock Indicator */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Controle de Estoque</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>Doses aplicadas: <strong>{campaign.appliedDoses.toLocaleString("pt-BR")}</strong></span>
            <span>Total: <strong>{campaign.totalDoses.toLocaleString("pt-BR")}</strong></span>
          </div>
          <Progress value={pct} className="h-3" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{pct}% utilizado</span>
            <span className={remaining < 500 ? "text-destructive font-medium" : ""}>
              {remaining.toLocaleString("pt-BR")} restantes
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="vacinados">
        <TabsList>
          <TabsTrigger value="vacinados">Vacinados ({campaignVaccinations.length})</TabsTrigger>
          <TabsTrigger value="agendamentos">Agendamentos ({campaignAppointments.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="vacinados">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Paciente</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Dose</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {campaignVaccinations.map((v) => (
                    <TableRow key={v.id}>
                      <TableCell className="font-medium">{v.patientName}</TableCell>
                      <TableCell>{v.date}</TableCell>
                      <TableCell><Badge variant="secondary">{v.dose}</Badge></TableCell>
                    </TableRow>
                  ))}
                  {campaignVaccinations.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center text-muted-foreground py-8">Nenhum vacinado registrado</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="agendamentos">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Horário</TableHead>
                    <TableHead>Paciente</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {campaignAppointments.map((a) => (
                    <TableRow key={a.id}>
                      <TableCell className="font-medium">{a.time}</TableCell>
                      <TableCell>{a.patientName}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={appointmentStatusColor[a.status]}>{a.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                  {campaignAppointments.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center text-muted-foreground py-8">Nenhum agendamento</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
