import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Search, Eye } from "lucide-react";
import { campaigns as initialCampaigns, type Campaign } from "@/data/mock-data";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const statusColor: Record<string, string> = {
  ativa: "bg-emerald-100 text-emerald-700",
  encerrada: "bg-muted text-muted-foreground",
  rascunho: "bg-amber-100 text-amber-700",
  pausada: "bg-orange-100 text-orange-700",
};

export default function Campanhas() {
  const [campaignsList, setCampaignsList] = useState<Campaign[]>(initialCampaigns);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("todos");
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "", description: "", ageRange: "", documents: "",
    startDate: "", endDate: "", hours: "", totalDoses: "",
    status: "rascunho" as Campaign["status"],
  });

  const filtered = campaignsList.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "todos" || c.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const handleCreate = () => {
    if (!form.name || !form.startDate || !form.endDate) {
      toast.error("Preencha os campos obrigatórios");
      return;
    }
    const newCampaign: Campaign = {
      id: String(Date.now()),
      ...form,
      totalDoses: Number(form.totalDoses) || 0,
      appliedDoses: 0,
    };
    setCampaignsList([newCampaign, ...campaignsList]);
    setForm({ name: "", description: "", ageRange: "", documents: "", startDate: "", endDate: "", hours: "", totalDoses: "", status: "rascunho" });
    setOpen(false);
    toast.success("Campanha criada com sucesso!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Campanhas de Vacinação</h1>
          <p className="text-sm text-muted-foreground">Gerencie as campanhas do posto</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="h-4 w-4 mr-1" /> Nova Campanha</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Nova Campanha de Vacinação</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-2">
              <div className="space-y-1.5">
                <Label>Nome da Vacina *</Label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ex: Campanha de Gripe 2026" />
              </div>
              <div className="space-y-1.5">
                <Label>Descrição</Label>
                <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Detalhes da campanha" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label>Faixa Etária</Label>
                  <Input value={form.ageRange} onChange={(e) => setForm({ ...form, ageRange: e.target.value })} placeholder="Ex: 60+ anos" />
                </div>
                <div className="space-y-1.5">
                  <Label>Doses Disponíveis</Label>
                  <Input type="number" value={form.totalDoses} onChange={(e) => setForm({ ...form, totalDoses: e.target.value })} placeholder="0" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>Documentos Necessários</Label>
                <Input value={form.documents} onChange={(e) => setForm({ ...form, documents: e.target.value })} placeholder="RG, CPF, Cartão SUS" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label>Data Início *</Label>
                  <Input type="date" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <Label>Data Fim *</Label>
                  <Input type="date" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label>Horário de Atendimento</Label>
                  <Input value={form.hours} onChange={(e) => setForm({ ...form, hours: e.target.value })} placeholder="08:00 - 17:00" />
                </div>
                <div className="space-y-1.5">
                  <Label>Status</Label>
                  <Select value={form.status} onValueChange={(v) => setForm({ ...form, status: v as Campaign["status"] })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rascunho">Rascunho</SelectItem>
                      <SelectItem value="ativa">Ativa</SelectItem>
                      <SelectItem value="pausada">Pausada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button onClick={handleCreate} className="w-full mt-2">Criar Campanha</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="flex flex-col sm:flex-row gap-3 p-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" placeholder="Buscar campanha..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="ativa">Ativa</SelectItem>
              <SelectItem value="rascunho">Rascunho</SelectItem>
              <SelectItem value="pausada">Pausada</SelectItem>
              <SelectItem value="encerrada">Encerrada</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campanha</TableHead>
                <TableHead>Período</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Doses</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((c) => {
                const pct = c.totalDoses ? Math.round((c.appliedDoses / c.totalDoses) * 100) : 0;
                return (
                  <TableRow key={c.id}>
                    <TableCell>
                      <p className="font-medium">{c.name}</p>
                      <p className="text-xs text-muted-foreground">{c.ageRange}</p>
                    </TableCell>
                    <TableCell className="text-sm">{c.startDate} → {c.endDate}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={statusColor[c.status]}>{c.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <span className="text-sm">{c.appliedDoses}/{c.totalDoses}</span>
                        <div className="h-1.5 w-20 rounded-full bg-muted">
                          <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" asChild>
                        <Link to={`/campanhas/${c.id}`}><Eye className="h-4 w-4" /></Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                    Nenhuma campanha encontrada
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
