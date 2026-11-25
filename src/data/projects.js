// src/data/projects.js
import painelInventarioImg from '../assets/projects/painel-inventario.jpg';
import tempoEmissaoNfImg from '../assets/projects/tempo_emissao_nf.jpg';
import docmanagerImg from '../assets/projects/docmanager.jpg';
import controleNobreaksImg from '../assets/projects/controle-nobreaks.jpg';
import suporteFaqImg from '../assets/projects/suporte-faq.jpg';
import missaoEspacialImg from '../assets/projects/missao-espacial.jpg';

export default [
  {
    id: 1,
    title: "Painel de Inventário IT",
    category: "Sistemas & TI",
    description: "Visualização centralizada de 98+ estações coletadas automaticamente via agente VBS na inicialização de máquinas Windows 11, 10 e Server.",
    longDescription: "Sistema corporativo criado para automatizar a auditoria de parque computacional. Um script leve em VBScript é executado no startup de cada estação, coletando Service Tag, modelo, fabricante (Dell Inc.), processador, memória RAM, capacidade e uso de armazenamento em disco (C: e partições), além de serviços ativos e softwares homologados.",
    image: painelInventarioImg,
    tech: ["VBScript", "SQL Server", "Dashboard", "Redes & TI", "Windows Server"],
    metrics: "98 estações coletadas | 11.540 serviços ativos | 7.113 softwares",
    highlights: [
      "Coleta automatizada via inicialização de rede",
      "Indicadores de saúde de armazenamento em tempo real",
      "Filtro inteligente por IP, modelo e Service Tag",
      "Exportação e carga direta de inventário"
    ],
    liveUrl: "https://ip-inventario.vercel.app/",
    githubUrl: "https://github.com/Felocal1"
  },
  {
    id: 2,
    title: "Diagnóstico de Tempos – Emissão de NF-e",
    category: "Sistemas & TI",
    description: "Sistema analítico em tempo real para monitorar a performance de emissão fiscal (NF-e), segregando o tempo interno de preparação do ERP e o tempo de resposta da SEFAZ.",
    longDescription: "Solução corporativa desenvolvida para auditoria e eliminação de gargalos operacionais no faturamento e expedição. O sistema monitora a emissão de notas fiscais eletrônicas com filtros por filial (Eletromil - Matriz e filiais), tipo de documento e datas, discriminando exatamente quanto tempo foi gasto na preparação interna dos dados pelo ERP versus o tempo de autorização nos servidores da SEFAZ. Apresenta métricas agregadas de tempo médio (6.51s), preparação (5.65s), SEFAZ (0.87s), picos máximos e mínimos, além de grid detalhado por documento fiscal.",
    image: tempoEmissaoNfImg,
    tech: ["Next.js", "TypeScript", "React", "SQL Server", "Dashboards", "NF-e / Fiscal", "Auditoria"],
    metrics: "197+ documentos analisados | Segregação ERP vs SEFAZ | 0.66s a 68s",
    highlights: [
      "Diagnóstico preciso entre latência interna de ERP vs tempo de autorização SEFAZ",
      "Filtros avançados por filial (Eletromil), tipo de documento e intervalo de datas",
      "Painel com métricas de tempo médio total, preparação, SEFAZ, máximos e mínimos",
      "Tabela analítica de documentos com rastreamento individualizado de latência"
    ],
    liveUrl: "", // Aplicação corporativa restrita / localhost
    githubUrl: "https://github.com/Felocal1"
  },
  {
    id: 3,
    title: "DocManager - Gestão de Documentos",
    category: "Desenvolvimento Web",
    description: "Plataforma de gestão eletrônica de documentos para empresas, com pesquisa ágil por CNPJ, cadastro de clientes e auditoria de arquivos.",
    longDescription: "Aplicação voltada para controle e organização de processos empresariais. Permite a busca rápida de clientes por CNPJ com máscara e validação, acesso ao histórico completo de documentos armazenados, controle de usuários por nível de permissão e dashboard com métricas de envio diário.",
    image: docmanagerImg,
    tech: ["PHP", "Laravel", "JavaScript", "SQL Server", "Bootstrap / Tailwind"],
    metrics: "Busca instantânea por CNPJ | Gestão de múltiplos clientes",
    highlights: [
      "Consulta e validação automática por CNPJ",
      "Painel administrativo com permissões de acesso",
      "Repositório seguro de arquivos digitais",
      "Histórico de transações e envios do dia"
    ],
    liveUrl: "https://sistema-documentos-orcin.vercel.app/login",
    githubUrl: "https://github.com/Felocal1"
  },
  {
    id: 4,
    title: "Controle de Nobreaks Corporativos",
    category: "Sistemas & TI",
    description: "Sistema para catálogo, monitoramento de capacidade e rastreamento de nobreaks de alta potência distribuídos entre filiais e matriz da Eletromil.",
    longDescription: "Painel voltado para manutenção preventiva e controle de infraestrutura elétrica crítica. Registra equipamentos de marcas como APC (Smart UPS-3000), Schneider e Engetron, detalhando capacidade em VA, status operacional (Ativo/Manutenção), patrimônio, número de série e localização precisa (Servidor, Faturamento, Caixa, Telefonia, Matriz).",
    image: controleNobreaksImg,
    tech: ["PHP", "SQL Server", "Controle de Ativos", "Infraestrutura"],
    metrics: "50+ nobreaks cadastrados | Monitoramento por filial",
    highlights: [
      "Mapeamento de capacidade de carga (2200W a 3000VA)",
      "Histórico de manutenções e trocas de baterias",
      "Filtro avançado por unidade, setor e fabricante",
      "Controle de patrimônio e chamados preventivos"
    ],
    liveUrl: "https://nobreak-inventory.vercel.app/",
    githubUrl: "https://github.com/Felocal1"
  },
  {
    id: 5,
    title: "Central de Ajuda & FAQ de TI",
    category: "Sistemas & TI",
    description: "Portal interativo de autoatendimento para suporte corporativo, padronizando procedimentos comuns e agilizando resoluções de chamados.",
    longDescription: "Portal desenvolvido para sanar dúvidas frequentes de operadores e colaboradores sobre rotinas essenciais: cadastro de clientes no ERP, procedimentos para computadores inoperantes, consulta de ficha financeira em crediário, manutenção de impressoras fiscais e tratamento de erros na geração de PDFs de notas fiscais.",
    image: suporteFaqImg,
    tech: ["JavaScript", "HTML5", "CSS3 Moderno", "Suporte N1/N2", "UX/UI"],
    metrics: "Redução de chamados repetitivos | Suporte 24/7",
    highlights: [
      "Acordeão interativo e responsivo para leitura ágil",
      "Guias passo a passo ilustrados para o usuário",
      "Instruções para emissão fiscal e crediário",
      "Modo escuro e navegação simplificada"
    ],
    liveUrl: "https://suporte-loja-seven.vercel.app/",
    githubUrl: "https://github.com/Felocal1"
  },
  {
    id: 6,
    title: "Missão Espacial – Gamificação & Storytelling",
    category: "Desenvolvimento Web",
    description: "Experiência interativa de narrativa visual digital com temática espacial, animações e integração com estética sci-fi (A Saga Continua).",
    longDescription: "Projeto criativo explorando animações web, interatividade e quadrinhos digitais. Narra a jornada de um programador em um universo de ficção científica, com efeitos de portal, elementos cósmicos e nave espacial inspirados no conceito 'Desembarque e Explore'.",
    image: missaoEspacialImg,
    tech: ["React", "CSS Animations", "Storytelling", "TailwindCSS"],
    metrics: "Animações fluidas | Design imersivo",
    highlights: [
      "Cenas ilustradas em alta resolução",
      "Animações personalizadas de transição e portal",
      "Interface imersiva com trilha visual temática",
      "Compatibilidade completa com modo escuro"
    ],
    liveUrl: "https://a-saga-continua.vercel.app/",
    githubUrl: "https://github.com/Felocal1"
  }
];
