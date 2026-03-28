import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppLayout } from "@/components/AppLayout";

// Páginas do Sistema
import Index from "./pages/Index";
import Campanhas from "./pages/Campanhas";
import CampanhaDetalhes from "./pages/CampanhaDetalhes";
import Alertas from "./pages/Alertas";
import Configuracoes from "./pages/Configuracoes";
import NotFound from "./pages/NotFound";

// Novas Páginas Implementadas
import CarteiraPublica from "./pages/CarteiraPublica";
import CarteiraAdmin from "./pages/CarteiraAdmin";
import AlertaUrgente from "./pages/AlertaUrgente";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            {/* Dashboard e Alertas de Emergência */}
            <Route path="/" element={<Index />} />
            <Route path="/alerta-urgente" element={<AlertaUrgente />} /> 
            
            {/* Módulo de Carteira de Vacinação */}
            <Route path="/carteira-publica" element={<CarteiraPublica />} />
            <Route path="/carteira-admin" element={<CarteiraAdmin />} />
            
            {/* Gestão e Configurações */}
            <Route path="/campanhas" element={<Campanhas />} />
            <Route path="/campanhas/:id" element={<CampanhaDetalhes />} />
            <Route path="/alertas" element={<Alertas />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            
            {/* Erro 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;