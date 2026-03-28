
# 🏥 Conecta à Vida - Portal Administrativo de Postos de Saúde

<p align="center">
<strong>Um portal completo e moderno para a administração de postos de saúde, focado na gestão ágil de campanhas de vacinação e alertas urgentes de doação de sangue.</strong>
</p>

<p align="center">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
<img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18.3.1">
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
<img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue?style=for-the-badge" alt="Status: Em Desenvolvimento.">
</p>

<p align="center">
<a href="#" title="Clique para acessar o portal em produção">
<img src="https://img.shields.io/badge/Acessar%20Portal-2563EB?style=for-the-badge&logo=vercel&logoColor=white" alt="Acessar o Portal">
</a>
</p>

## 📖 Sobre o Projeto

O **Conecta à Vida** é uma plataforma inovadora desenvolvida para facilitar o dia a dia de administradores de postos de saúde. Com um design clean e moderno (fundo branco com acentos em azul corporativo), o sistema permite o controle total de campanhas de vacinação, gestão de estoques de doses e a emissão rápida de alertas para doação de sangue, tudo centralizado em uma interface altamente responsiva.

Nesta fase inicial, a aplicação atua como um robusto Front-end (SPA) com dados mockados, estruturando toda a interface de usuário e a lógica de apresentação antes da integração com um backend real.

-----

## ✨ Funcionalidades

O sistema foi desenhado para otimizar o fluxo de trabalho administrativo de uma unidade de saúde.

### Visão Geral & Dashboard:

  * 📊 **Métricas em Tempo Real:** Cards dinâmicos mostrando campanhas ativas, doses aplicadas no mês, alertas emitidos e agendamentos diários.
  * 📈 **Análise Visual:** Gráficos interativos (via Recharts) de vacinações pelas últimas 8 semanas.
  * 📱 **Layout Responsivo:** Sidebar colapsável e interface adaptável para tablets e desktops.

### Gestão de Campanhas de Vacinação:

  * 📋 **Tabelas de Controle:** Acompanhamento de todas as campanhas (nome, período, status, doses aplicadas vs. disponíveis).
  * ➕ **Criação e Edição:** Formulários detalhados para inclusão de vacinas, faixa etária alvo, documentos exigidos e controle de estoque de doses.
  * 👥 **Agendamentos:** Listagem completa de pacientes agendados, horários e status de atendimento.

### Alertas de Doação de Sangue:

  * 🩸 **Painel de Urgências:** Emissão e gestão de alertas classificados por urgência (Crítico em Vermelho, Alto em Laranja, Médio em Amarelo).
  * 🎯 **Filtro Específico:** Direcionamento preciso de tipos sanguíneos necessários (A+, O-, AB+, etc.), locais de doação e horários de funcionamento.

-----

## 🚀 O que foi Melhorado?

Este projeto adota o que há de mais moderno no ecossistema de desenvolvimento Front-end:

  * **Arquitetura Baseada em Componentes:** Uso extensivo do **Shadcn UI** e **Radix UI** para componentes acessíveis e modulares.
  * **Performance de Build:** Substituição de bundlers tradicionais pelo **Vite**, garantindo um tempo de inicialização ultrarrápido (HMR).
  * **Tipagem Estática:** Todo o código foi escrito em **TypeScript**, reduzindo drasticamente os erros em tempo de execução e melhorando o auto-complete (IntelliSense).
  * **Estilização Ágil:** Implementação do **Tailwind CSS** para criar uma interface limpa, padronizada e facilmente escalável.

-----

## 🧠 Dificuldades Enfrentadas

Durante o desenvolvimento da interface, os principais desafios foram:

1.  **Mocking Complexo:** Estruturar dados falsos (mock-data) que simulassem perfeitamente as relações de banco de dados entre Campanhas, Agendamentos e Pacientes.
2.  **Gerenciamento de Estado de UI:** Manter a consistência de navegação entre a Sidebar principal, modais (Dialogs) e formulários complexos (React Hook Form + Zod).
3.  **Responsividade de Gráficos:** Adaptar os componentes do Recharts para que não quebrassem o layout em dispositivos móveis ou tablets.

-----

## 🛠️ Tecnologias Utilizadas

### **Frontend & Interface**

  * **Biblioteca Principal:** React 18.3.1
  * **Linguagem:** TypeScript
  * **Ferramenta de Build:** Vite
  * **Roteamento:** React Router Dom 6.30.1
  * **Estilização:** Tailwind CSS & Tailwind Animate
  * **Componentes Base:** Radix UI (Shadcn UI)
  * **Gerenciamento de Formulários:** React Hook Form + Zod (Validação)
  * **Ícones:** Lucide React
  * **Gráficos:** Recharts

### **Ambiente e Testes**

  * **Linting:** ESLint 9 + TypeScript ESLint
  * **Testes:** Vitest + Playwright (E2E)

-----

## ⚙️ Começando

Siga os passos abaixo para rodar o projeto localmente na sua máquina:

### 1\. Clonar e Instalar Dependências

Abra seu terminal, navegue até a pasta desejada e execute:

```bash
# Clone o repositório (caso já não o tenha feito)
git clone <URL_DO_SEU_REPOSITORIO>

# Entre no diretório do projeto
cd conecta-a-vida

# Instale todas as dependências do package.json (Pode usar npm, yarn, pnpm ou bun)
npm install
```

### 2\. Executar o Servidor de Desenvolvimento

Após a instalação, inicie o servidor com o Vite:

```bash
npm run dev
```

  * A aplicação estará disponível no seu navegador, geralmente no endereço: `http://localhost:5173`.

-----

## 👨‍💻 Autor

Desenvolvido por **Luiz Henrique**
*Estudante de Análise e Desenvolvimento de Sistemas*

-----

\<p align="center"\>
\<i\>(Adicione aqui uma screenshot ou GIF do seu Dashboard no futuro)\</i\><br>
\<img width="800" alt="Dashboard Preview" src="./public/placeholder.svg" /\>
\</p\>

© 2026 Conecta à Vida. Todos os direitos reservados.

-----

Gostaria de aproveitar e já adicionar alguma informação específica sobre o backend que será construído no futuro, ou deixamos o documento focado no Front-end por enquanto?
