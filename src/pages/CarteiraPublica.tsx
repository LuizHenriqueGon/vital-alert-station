import { Syringe, CalendarHeart, User, Baby } from "lucide-react";

const vacinas = [
  // --- CICLO INFANTIL ---
  { id: 1, nome: "BCG", idadeIdeal: "Ao nascer", doenca: "Tuberculose", gestante: false },
  { id: 2, nome: "Hepatite B", idadeIdeal: "Ao nascer", doenca: "Hepatite B", gestante: false },
  { id: 3, nome: "Poliomielite (VIP/VOP)", idadeIdeal: "2, 4 e 6 meses", doenca: "Paralisia Infantil", gestante: false },
  { id: 4, nome: "Pentavalente", idadeIdeal: "2, 4 e 6 meses", doenca: "Difteria, Tétano, Coqueluche, Hib, HepB", gestante: false },
  { id: 5, nome: "Rotavírus", idadeIdeal: "2 e 4 meses", doenca: "Diarreia por Rotavírus", gestante: false },
  { id: 6, nome: "Pneumocócica 10v", idadeIdeal: "2, 4 e 12 meses", doenca: "Pneumonia e Meningite", gestante: false },
  { id: 7, nome: "Meningocócica C", idadeIdeal: "3, 5 e 12 meses", doenca: "Meningite C", gestante: false },
  { id: 8, nome: "Febre Amarela", idadeIdeal: "9 meses e 4 anos", doenca: "Febre Amarela", gestante: false },
  { id: 9, nome: "Tríplice Viral (SCR)", idadeIdeal: "12 meses", doenca: "Sarampo, Caxumba e Rubéola", gestante: false },
  { id: 10, nome: "DTP (Reforço)", idadeIdeal: "15 meses e 4 anos", doenca: "Difteria, Tétano e Coqueluche", gestante: false },
  
  // --- CICLO GESTANTE ---
  { id: 11, nome: "dTpa (Tríplice Bacteriana)", idadeIdeal: "A partir da 20ª semana", doenca: "Coqueluche, Tétano e Difteria", gestante: true },
  { id: 12, nome: "Hepatite B (Gestante)", idadeIdeal: "3 doses (conforme histórico)", doenca: "Hepatite B e D", gestante: true },
  { id: 13, nome: "Influenza (Gripe)", idadeIdeal: "Anual (Sazonal)", doenca: "Gripe e complicações", gestante: true },
  { id: 14, nome: "VSR (Abrysvo)", idadeIdeal: "28ª a 36ª semana", doenca: "Bronquiolite no recém-nascido", gestante: true },
  { id: 15, nome: "Covid-19", idadeIdeal: "Dose anual/conforme protocolo", doenca: "Formas graves de Covid-19", gestante: true },
];

export default function CarteiraPublica() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8 bg-slate-50 min-h-screen">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">Minha Caderneta de Vacinação</h2>
          <p className="text-sm text-muted-foreground italic">Documento oficial de saúde de Luiz Henrique</p>
        </div>
        <div className="flex items-center gap-2 bg-white p-2 px-4 rounded-full border shadow-sm">
          <User className="h-4 w-4 text-blue-500" />
          <span className="text-xs font-black uppercase tracking-widest text-slate-600">Luiz Henrique</span>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="w-full max-w-5xl bg-[#fdfbf7] rounded-xl shadow-2xl overflow-hidden border border-amber-200/60 relative">
          {/* Tarja de Identificação SUS */}
          <div className="bg-blue-800 text-white p-6 text-center border-b-[10px] border-green-600">
            <h1 className="text-3xl font-serif font-bold uppercase tracking-[0.2em]">Caderneta de Saúde</h1>
            <p className="text-blue-200 text-xs mt-2 font-bold opacity-80">MINISTÉRIO DA SAÚDE - GOVERNO FEDERAL</p>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {vacinas.map((vacina) => (
              <div 
                key={vacina.id} 
                className={`p-5 bg-white border-2 rounded-xl transition-all hover:shadow-md relative overflow-hidden ${
                  vacina.gestante ? 'border-pink-200 hover:border-pink-400' : 'border-slate-100 hover:border-blue-300'
                }`}
              >
                {/* Indicador lateral de categoria */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${vacina.gestante ? 'bg-pink-400' : 'bg-blue-400'}`} />
                
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${vacina.gestante ? 'bg-pink-50' : 'bg-blue-50'}`}>
                    {vacina.gestante ? <Baby className="h-4 w-4 text-pink-600" /> : <Syringe className="h-4 w-4 text-blue-600" />}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-sm leading-tight">{vacina.nome}</h3>
                    <p className="text-[9px] text-slate-400 uppercase font-black mt-1 leading-none">Previne: {vacina.doenca}</p>
                  </div>
                </div>

                <div className={`mt-4 flex items-center gap-2 px-3 py-1.5 rounded-md text-[10px] font-black uppercase tracking-tight border ${
                  vacina.gestante 
                    ? 'bg-pink-50 text-pink-700 border-pink-100' 
                    : 'bg-green-50 text-green-700 border-green-100'
                }`}>
                  <CalendarHeart className="h-3 w-3" />
                  Aplicação: {vacina.idadeIdeal}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}