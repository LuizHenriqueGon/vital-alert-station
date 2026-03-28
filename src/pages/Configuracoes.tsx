import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function Configuracoes() {
  const [form, setForm] = useState({
    name: "UBS Centro",
    address: "Rua São Paulo, 1234 - Centro, São Paulo - SP",
    phone: "(11) 3456-7890",
    email: "ubscentro@saude.sp.gov.br",
    monFri: "07:00 - 19:00",
    sat: "08:00 - 12:00",
    sun: "Fechado",
  });

  const handleSave = () => {
    toast.success("Configurações salvas com sucesso!");
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold">Configurações</h1>
        <p className="text-sm text-muted-foreground">Informações do posto de saúde</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Dados do Posto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label>Nome do Posto</Label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="space-y-1.5">
            <Label>Endereço</Label>
            <Input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Telefone</Label>
              <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div className="space-y-1.5">
              <Label>E-mail</Label>
              <Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Horário de Funcionamento</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label>Segunda a Sexta</Label>
            <Input value={form.monFri} onChange={(e) => setForm({ ...form, monFri: e.target.value })} />
          </div>
          <div className="space-y-1.5">
            <Label>Sábado</Label>
            <Input value={form.sat} onChange={(e) => setForm({ ...form, sat: e.target.value })} />
          </div>
          <div className="space-y-1.5">
            <Label>Domingo / Feriados</Label>
            <Input value={form.sun} onChange={(e) => setForm({ ...form, sun: e.target.value })} />
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="w-full sm:w-auto">Salvar Configurações</Button>
    </div>
  );
}
