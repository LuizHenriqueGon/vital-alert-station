import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Droplets, MapPin, Clock, Archive } from "lucide-react";
import { bloodAlerts as initialAlerts, type BloodAlert } from "@/data/mock-data";
import { toast } from "sonner";

const urgencyConfig: Record<string, { label: string; className: string }> = {
  critico: { label: "Crítico", className: "bg-destructive text-destructive-foreground" },
  alto: { label: "Alto", className: "bg-orange-500 text-white" },
  medio: { label: "Médio", className: "bg-amber-400 text-amber-900" },
};

const allBloodTypes = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];

export default function Alertas() {
  const [alerts, setAlerts] = useState<BloodAlert[]>(initialAlerts);
  const [open, setOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [form, setForm] = useState({ urgency: "alto" as BloodAlert["urgency"], location: "", hours: "", message: "" });

  const toggleType = (type: string) => {
    setSelectedTypes((prev) => prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]);
  };

  const handleCreate = () => {
    if (selectedTypes.length === 0 || !form.location) {
      toast.error("Selecione ao menos um tipo sanguíneo e local");
      return;
    }
    const newAlert: BloodAlert = {
      id: String(Date.now()),
      bloodTypes: selectedTypes,
      urgency: form.urgency,
      location: form.location,
      hours: form.hours,
      message: form.message,
      createdAt: new Date().toISOString().split("T")[0],
      active: true,
    };
    setAlerts([newAlert, ...alerts]);
    setSelectedTypes([]);
    setForm({ urgency: "alto", location: "", hours: "", message: "" });
    setOpen(false);
    toast.success("Alerta emitido com sucesso!");
  };

  const archiveAlert = (id: string) => {
    setAlerts(alerts.map((a) => a.id === id ? { ...a, active: false } : a));
    toast.success("Alerta arquivado");
  };

  const activeAlerts = alerts.filter((a) => a.active);
  const archivedAlerts = alerts.filter((a) => !a.active);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Alertas de Doação de Sangue</h1>
          <p className="text-sm text-muted-foreground">Gerencie alertas urgentes de doação</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="h-4 w-4 mr-1" /> Novo Alerta</Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Novo Alerta de Doação</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-2">
              <div className="space-y-2">
                <Label>Tipos Sanguíneos Necessários *</Label>
                <div className="grid grid-cols-4 gap-2">
                  {allBloodTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2 rounded-lg border p-2 cursor-pointer hover:bg-muted text-sm">
                      <Checkbox checked={selectedTypes.includes(type)} onCheckedChange={() => toggleType(type)} />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>Nível de Urgência</Label>
                <Select value={form.urgency} onValueChange={(v) => setForm({ ...form, urgency: v as BloodAlert["urgency"] })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="critico">🔴 Crítico</SelectItem>
                    <SelectItem value="alto">🟠 Alto</SelectItem>
                    <SelectItem value="medio">🟡 Médio</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Local de Doação *</Label>
                <Input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="Ex: Hemocentro Regional" />
              </div>
              <div className="space-y-1.5">
                <Label>Horário de Funcionamento</Label>
                <Input value={form.hours} onChange={(e) => setForm({ ...form, hours: e.target.value })} placeholder="08:00 - 17:00" />
              </div>
              <div className="space-y-1.5">
                <Label>Mensagem / Observações</Label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Detalhes sobre a necessidade..." />
              </div>
              <Button onClick={handleCreate} className="w-full mt-2">Emitir Alerta</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Active */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Alertas Ativos ({activeAlerts.length})</h2>
        {activeAlerts.map((alert) => (
          <Card key={alert.id}>
            <CardContent className="flex items-start gap-4 p-5">
              <div className="rounded-full bg-destructive/10 p-2.5">
                <Droplets className="h-5 w-5 text-destructive" />
              </div>
              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge className={urgencyConfig[alert.urgency].className}>{urgencyConfig[alert.urgency].label}</Badge>
                  {alert.bloodTypes.map((t) => (
                    <Badge key={t} variant="outline" className="font-mono">{t}</Badge>
                  ))}
                </div>
                <p className="text-sm">{alert.message}</p>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{alert.location}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{alert.hours}</span>
                  <span>Criado em {alert.createdAt}</span>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-muted-foreground shrink-0" onClick={() => archiveAlert(alert.id)}>
                <Archive className="h-4 w-4 mr-1" /> Arquivar
              </Button>
            </CardContent>
          </Card>
        ))}
        {activeAlerts.length === 0 && (
          <Card><CardContent className="py-8 text-center text-muted-foreground">Nenhum alerta ativo</CardContent></Card>
        )}
      </div>

      {/* Archived */}
      {archivedAlerts.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Arquivados ({archivedAlerts.length})</h2>
          {archivedAlerts.map((alert) => (
            <Card key={alert.id} className="opacity-60">
              <CardContent className="flex items-start gap-4 p-5">
                <div className="rounded-full bg-muted p-2.5">
                  <Droplets className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary">{urgencyConfig[alert.urgency].label}</Badge>
                    {alert.bloodTypes.map((t) => (
                      <Badge key={t} variant="outline" className="font-mono">{t}</Badge>
                    ))}
                  </div>
                  <p className="text-sm">{alert.message}</p>
                  <p className="text-xs text-muted-foreground">{alert.createdAt} · {alert.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
