export interface Campaign {
  id: string;
  name: string;
  description: string;
  ageRange: string;
  documents: string;
  startDate: string;
  endDate: string;
  hours: string;
  totalDoses: number;
  appliedDoses: number;
  status: "rascunho" | "ativa" | "pausada" | "encerrada";
}

export interface BloodAlert {
  id: string;
  bloodTypes: string[];
  urgency: "critico" | "alto" | "medio";
  location: string;
  hours: string;
  message: string;
  createdAt: string;
  active: boolean;
}

export interface Vaccination {
  id: string;
  patientName: string;
  date: string;
  dose: string;
  campaignId: string;
}

export interface Appointment {
  id: string;
  time: string;
  patientName: string;
  status: "confirmado" | "pendente" | "cancelado";
  campaignId: string;
}

export const campaigns: Campaign[] = [
  {
    id: "1",
    name: "Campanha de Gripe 2026",
    description: "Vacinação anual contra Influenza para grupos prioritários",
    ageRange: "60+ anos",
    documents: "RG, CPF, Cartão SUS",
    startDate: "2026-03-01",
    endDate: "2026-05-31",
    hours: "08:00 - 17:00",
    totalDoses: 5000,
    appliedDoses: 3247,
    status: "ativa",
  },
  {
    id: "2",
    name: "COVID-19 - Dose de Reforço",
    description: "Dose de reforço bivalente para maiores de 18 anos",
    ageRange: "18+ anos",
    documents: "RG, CPF, Cartão SUS, Comprovante de doses anteriores",
    startDate: "2026-02-15",
    endDate: "2026-06-30",
    hours: "08:00 - 16:00",
    totalDoses: 8000,
    appliedDoses: 5120,
    status: "ativa",
  },
  {
    id: "3",
    name: "Sarampo - Campanha Emergencial",
    description: "Vacinação emergencial contra sarampo em áreas de surto",
    ageRange: "6 meses - 49 anos",
    documents: "RG, CPF, Cartão SUS",
    startDate: "2026-04-01",
    endDate: "2026-04-30",
    hours: "07:00 - 19:00",
    totalDoses: 3000,
    appliedDoses: 0,
    status: "rascunho",
  },
  {
    id: "4",
    name: "Poliomielite - Gotinha",
    description: "Campanha nacional de vacinação contra poliomielite",
    ageRange: "0 - 5 anos",
    documents: "Certidão de Nascimento, Cartão SUS",
    startDate: "2025-10-01",
    endDate: "2025-11-30",
    hours: "08:00 - 17:00",
    totalDoses: 2000,
    appliedDoses: 1876,
    status: "encerrada",
  },
  {
    id: "5",
    name: "Febre Amarela",
    description: "Vacinação de rotina contra febre amarela",
    ageRange: "9 meses - 59 anos",
    documents: "RG, CPF, Cartão SUS",
    startDate: "2026-03-15",
    endDate: "2026-04-15",
    hours: "08:00 - 12:00",
    totalDoses: 1500,
    appliedDoses: 890,
    status: "pausada",
  },
];

export const bloodAlerts: BloodAlert[] = [
  {
    id: "1",
    bloodTypes: ["O-", "O+"],
    urgency: "critico",
    location: "Hemocentro Regional - Sala 3",
    hours: "07:00 - 18:00",
    message: "Estoque crítico de sangue tipo O. Necessidade urgente de doadores.",
    createdAt: "2026-03-27",
    active: true,
  },
  {
    id: "2",
    bloodTypes: ["AB-"],
    urgency: "alto",
    location: "Posto de Coleta - Ala B",
    hours: "08:00 - 16:00",
    message: "Estoque baixo de sangue AB negativo para cirurgias programadas.",
    createdAt: "2026-03-25",
    active: true,
  },
  {
    id: "3",
    bloodTypes: ["A+", "A-", "B+"],
    urgency: "medio",
    location: "Hemocentro Regional",
    hours: "08:00 - 17:00",
    message: "Reposição de estoque para manter níveis adequados.",
    createdAt: "2026-03-20",
    active: true,
  },
  {
    id: "4",
    bloodTypes: ["B-"],
    urgency: "alto",
    location: "Posto de Coleta Central",
    hours: "07:00 - 19:00",
    message: "Emergência cirúrgica requer doações de B negativo.",
    createdAt: "2026-03-15",
    active: false,
  },
];

export const vaccinations: Vaccination[] = [
  { id: "1", patientName: "Maria Silva", date: "2026-03-27", dose: "1ª Dose", campaignId: "1" },
  { id: "2", patientName: "João Santos", date: "2026-03-27", dose: "Dose Única", campaignId: "1" },
  { id: "3", patientName: "Ana Oliveira", date: "2026-03-26", dose: "Dose Única", campaignId: "1" },
  { id: "4", patientName: "Carlos Souza", date: "2026-03-26", dose: "Dose Única", campaignId: "2" },
  { id: "5", patientName: "Fernanda Lima", date: "2026-03-25", dose: "Reforço", campaignId: "2" },
];

export const appointments: Appointment[] = [
  { id: "1", time: "08:00", patientName: "Roberto Alves", status: "confirmado", campaignId: "1" },
  { id: "2", time: "08:30", patientName: "Luciana Costa", status: "confirmado", campaignId: "1" },
  { id: "3", time: "09:00", patientName: "Pedro Mendes", status: "pendente", campaignId: "1" },
  { id: "4", time: "09:30", patientName: "Juliana Ferreira", status: "cancelado", campaignId: "2" },
  { id: "5", time: "10:00", patientName: "Marcos Ribeiro", status: "pendente", campaignId: "2" },
];

export const weeklyVaccinations = [
  { week: "Sem 1", vaccinations: 320 },
  { week: "Sem 2", vaccinations: 410 },
  { week: "Sem 3", vaccinations: 380 },
  { week: "Sem 4", vaccinations: 520 },
  { week: "Sem 5", vaccinations: 470 },
  { week: "Sem 6", vaccinations: 590 },
  { week: "Sem 7", vaccinations: 540 },
  { week: "Sem 8", vaccinations: 620 },
];
