import React from "react";
import { Plus, CheckCircle2, CircleDot, Calendar, AlertTriangle, ShieldCheck, Database, Baby } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const gruposVacinais = [
  {
    id: "criancas",
    titulo: "Crianças (0 a 9 anos)",
    progresso: 85,
    vacinas: [
      { nome: "BCG", status: "concluida", idade: "Ao nascer" },
      { nome: "Hepatite B", status: "concluida", idade: "Ao nascer" },
      { nome: "VIP/VOP", status: "concluida", idade: "2 meses" },
      { nome: "Z-Virus", status: "pendente", destaque: true, idade: "Imediato" },
    ]
  },
  {
    id: "gestantes",
    titulo: "Gestantes",
    progresso: 40,
    vacinas: [
      { nome: "dTpa (Tríplice)", status: "pendente", idade: "20ª semana" },
      { nome: "Hepatite B", status: "concluida", idade: "Esquema 3 doses" },
      { nome: "VSR (Abrysvo)", status: "pendente", destaque: true, idade: "28ª a 36ª semana" },
    ]
  },
  { id: "adolescentes", titulo: "Adolescentes", progresso: 60, vacinas: [] },
  { id: "adultos", titulo: "Adultos", progresso: 70, vacinas: [] },
];

export default function CarteiraAdmin() {
  return (
    <div className="flex-1 space-y-6 p-8 bg-slate-50 min-h-screen relative pb-24">
      <header className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-200">
            <Database className="text-white h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900 leading-none tracking-tight">Painel de Gestão Vacinal</h1>
            <p className="text-slate-400 text-xs mt-2 font-bold uppercase tracking-widest">Controle de Imunização Nacional</p>
          </div>
        </div>
        <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none px-4 py-1 font-black uppercase text-[10px] tracking-widest">
          Sistema em Tempo Real
        </Badge>
      </header>

      <Accordion type="single" collapsible defaultValue="gestantes" className="space-y-4">
        {gruposVacinais.map((grupo) => (
          <AccordionItem key={grupo.id} value={grupo.id} className="bg-white border rounded-2xl px-6 shadow-sm border-slate-200 overflow-hidden">
            <AccordionTrigger className="hover:no-underline py-5">
              <div className="flex items-center justify-between w-full pr-6">
                <div className="flex items-center gap-4">
                  {grupo.id === "gestantes" 
                    ? <Baby className="h-5 w-5 text-pink-500" /> 
                    : <ShieldCheck className="h-5 w-5 text-blue-500" />
                  }
                  <span className="font-black text-slate-700 text-lg uppercase tracking-tighter">{grupo.titulo}</span>
                </div>
                <div className="hidden md:flex items-center gap-6 w-1/3">
                  <Progress value={grupo.progresso} className={`h-2 ${grupo.id === "gestantes" ? "[&>div]:bg-pink-500" : ""}`} />
                  <span className="text-xs font-black text-slate-400">{grupo.progresso}%</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="rounded-xl border border-slate-100 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 border-b border-slate-100">
                    <tr className="text-slate-400 text-[10px] uppercase font-black tracking-widest">
                      <th className="px-6 py-4 text-left">Vacina</th>
                      <th className="px-6 py-4 text-center">Status</th>
                      <th className="px-6 py-4 text-right">Requisito do Sistema</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {grupo.vacinas.map((v, i) => (
                      <tr key={i} className={`hover:bg-slate-50/50 transition-colors ${v.destaque ? "bg-amber-50/50" : ""}`}>
                        <td className="px-6 py-4 font-bold text-slate-700">
                          {v.nome}
                          {v.destaque && <Badge className="ml-2 bg-red-600 text-white animate-pulse text-[8px] px-1 h-4">ALERTA NOVO</Badge>}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Badge variant="secondary" className={`text-[10px] font-black uppercase border-none px-3 ${
                            v.status === 'concluida' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {v.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-right text-slate-500 font-bold text-xs uppercase tracking-tighter">
                          {v.idade}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Alerta de Emergência Flutuante */}
      <div className="fixed bottom-6 right-6 w-[350px] z-50 animate-in fade-in slide-in-from-bottom-5">
        <Alert className="border-2 border-red-500 bg-white shadow-2xl p-0 overflow-hidden">
          <div className="bg-red-600 p-3 flex items-center gap-3 text-white">
            <AlertTriangle className="h-5 w-5" />
            <AlertTitle className="m-0 font-black uppercase text-[10px] tracking-widest">Alerta Crítico de Saúde</AlertTitle>
          </div>
          <AlertDescription className="p-4 text-slate-800 text-xs font-bold leading-relaxed">
            Identificada a necessidade de vacinação em massa contra <span className="underline decoration-2 text-blue-700">'Z-Virus'</span>. 
            O sistema atualizou as carteiras de Crianças e Gestantes automaticamente.
          </AlertDescription>
        </Alert>
      </div>

      <Button className="fixed bottom-10 left-1/2 -translate-x-1/2 rounded-full h-14 shadow-2xl bg-blue-600 hover:bg-blue-700 px-10 gap-3 border-4 border-white transition-transform hover:scale-105 active:scale-95">
        <Plus className="h-5 w-5" /> 
        <span className="font-black uppercase text-xs tracking-[0.1em]">Adicionar Nova Vacina (Simulação)</span>
      </Button>
    </div>
  );
}