import React from "react";
import { 
  AlertOctagon, 
  MapPin, 
  Activity, 
  ShieldAlert, 
  Info, 
  BellRing,
  ArrowRight,
  Stethoscope
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AlertaUrgente() {
  const dataAtual = new Date().toLocaleString('pt-BR');

  return (
    <div className="flex-1 space-y-6 p-8 bg-red-50/30 min-h-screen pb-20">
      {/* Banner de Impacto - Breaking News */}
      <div className="bg-red-600 text-white p-4 rounded-xl shadow-lg flex items-center justify-between animate-pulse">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-2 rounded-full">
            <BellRing className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-black uppercase tracking-tighter italic">Alerta Crítico: Surto Identificado</h1>
            <p className="text-xs font-bold opacity-90 uppercase">Notificação oficial do Ministério da Saúde</p>
          </div>
        </div>
        <Badge className="bg-white text-red-600 font-black px-4 py-1">EM TEMPO REAL</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Coluna Principal: Detalhes do Surto */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-2 border-red-200 shadow-xl overflow-hidden">
            <CardHeader className="bg-white border-b flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-black text-red-700 uppercase tracking-tight">
                  Surto de Dengue Tipo 4
                </CardTitle>
                <p className="text-slate-500 text-sm font-medium mt-1">Atualizado em: {dataAtual}</p>
              </div>
              <AlertOctagon className="h-10 w-10 text-red-600" />
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              {/* Informações Geográficas */}
              <div className="flex items-start gap-4 p-6 bg-slate-100 rounded-2xl border border-slate-200">
                <MapPin className="h-8 w-8 text-red-600 mt-1" />
                <div>
                  <h3 className="font-black text-slate-800 uppercase text-sm">Área Principal Afetada</h3>
                  <p className="text-2xl font-bold text-slate-700">Região Sudeste - Estado de São Paulo</p>
                  <p className="text-slate-500 text-sm mt-1">Foco identificado em Bragança Paulista e regiões metropolitanas.</p>
                </div>
              </div>

              {/* Dados Estatísticos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white border-2 border-red-100 rounded-xl text-center">
                  <Activity className="h-5 w-5 text-red-600 mx-auto mb-2" />
                  <p className="text-[10px] font-black text-slate-400 uppercase">Casos Confirmados</p>
                  <p className="text-2xl font-black text-red-600">1.284</p>
                </div>
                <div className="p-4 bg-white border-2 border-orange-100 rounded-xl text-center">
                  <Stethoscope className="h-5 w-5 text-orange-500 mx-auto mb-2" />
                  <p className="text-[10px] font-black text-slate-400 uppercase">Em Investigação</p>
                  <p className="text-2xl font-black text-orange-500">456</p>
                </div>
                <div className="p-4 bg-white border-2 border-blue-100 rounded-xl text-center">
                  <ShieldAlert className="h-5 w-5 text-blue-500 mx-auto mb-2" />
                  <p className="text-[10px] font-black text-slate-400 uppercase">Zonas de Risco</p>
                  <p className="text-2xl font-black text-blue-500">12</p>
                </div>
              </div>

              {/* Descrição e Orientações */}
              <div className="space-y-4">
                <h3 className="text-lg font-black text-slate-800 uppercase flex items-center gap-2">
                  <Info className="h-5 w-5 text-red-600" /> Protocolos de Segurança
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50 border-l-4 border-red-600 rounded-r-xl">
                    <p className="font-bold text-red-800 text-sm">Eliminar Focos de Água</p>
                    <p className="text-xs text-red-700 mt-1 italic">Verifique vasos, pneus e calhas diariamente.</p>
                  </div>
                  <div className="p-4 bg-red-50 border-l-4 border-red-600 rounded-r-xl">
                    <p className="font-bold text-red-800 text-sm">Uso de Repelente</p>
                    <p className="text-xs text-red-700 mt-1 italic">Recomendado a cada 4 horas para moradores da zona afetada.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Barra Lateral: Notícias Recentes e Botões */}
        <div className="space-y-6">
          <Card className="border-none shadow-lg">
            <CardHeader className="bg-slate-800 text-white rounded-t-xl">
              <CardTitle className="text-sm font-black uppercase tracking-widest">Feed de Notícias</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              {[
                "Governo libera verba emergencial para hospitais.",
                "Início da nebulização (fumacê) nos bairros centrais.",
                "Postos de saúde estendem horário até às 22h.",
                "Nova remessa de vacinas contra dengue chega amanhã."
              ].map((news, i) => (
                <div key={i} className="flex gap-3 pb-3 border-b last:border-0 last:pb-0">
                  <div className="h-2 w-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <p className="text-xs font-bold text-slate-600 leading-snug">{news}</p>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-xs font-black uppercase text-blue-600 mt-2">
                Ver Todas as Notícias <ArrowRight className="h-3 w-3 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-blue-900 text-white border-none shadow-xl">
            <CardContent className="p-6 text-center space-y-4">
              <ShieldAlert className="h-12 w-12 mx-auto text-blue-300" />
              <h3 className="font-black uppercase tracking-tight italic">Está com Febre?</h3>
              <p className="text-xs text-blue-200 font-medium">Não tome medicamentos por conta própria. Procure a Unidade Básica de Saúde (UBS) mais próxima.</p>
              <Button className="w-full bg-white text-blue-900 hover:bg-blue-50 font-black uppercase text-xs">
                Mapa de Unidades de Saúde
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}