// src/pages/Resume.jsx
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import resumeContent from '../Resume.md?raw';
import certificates from '../data/certificates';
import CertificateCard from '../components/CertificateCard';
import CertificateModal from '../components/CertificateModal';

export default function Resume() {
  const [showRawMarkdown, setShowRawMarkdown] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const experiences = [
    {
      role: 'Analista de TI',
      company: 'Eletromil',
      period: 'Experiência Corporativa',
      description: 'Atuação estratégica na infraestrutura, bancos de dados e sistemas de gestão.',
      points: [
        'Implementação e atualização contínua de sistemas ERP.',
        'Manutenção, otimização e suporte a banco de dados relacional (SQL Server, Assenture, FoxPro).',
        'Suporte técnico especializado a usuários e resolução de incidentes críticos de TI.',
        'Auditoria e controle de estações e ativos da rede com rotinas automatizadas.'
      ]
    },
    {
      role: 'Assistente Desenvolvedor Jr.',
      company: 'Pharma Gestão',
      period: 'Desenvolvimento de Software',
      description: 'Criação e sustentação de funcionalidades para sistema ERP corporativo.',
      points: [
        'Desenvolvimento e manutenção de módulos em PHP, Laravel, SQL, HTML, CSS e JavaScript.',
        'Criação de telas intuitivas, relatórios e automações de processos internos.',
        'Suporte técnico a regras de negócio e correção preventiva de bugs.'
      ]
    },
    {
      role: 'Diagramador / Suporte de TI',
      company: 'ESAB (Escola Aberta do Brasil)',
      period: 'Design & Tecnologia',
      description: 'Produção digital de conteúdos acadêmicos e suporte técnico institucional.',
      points: [
        'Diagramação de conteúdos acadêmicos e produção de apostilas digitais (e-books).',
        'Criação e tratamento de imagens e banners promocionais (Photoshop, Illustrator, InDesign).',
        'Cadastro de conteúdos e banco de questões em ambiente de aprendizagem online.',
        'Suporte de TI com configuração de softwares, impressoras e manutenção de hardware.'
      ]
    },
    {
      role: 'Assistente Administrativo / Tesouraria',
      company: 'Buteri Comércio e Representações Ltda',
      period: 'Gestão Financeira & Administrativa',
      description: 'Controle de processos financeiros, fluxo de pagamentos e negociações.',
      points: [
        'Elaboração de planilhas financeiras avançadas e relatórios gerenciais.',
        'Controle de contas a pagar e receber e conciliação bancária.',
        'Gestão documental e previsão orçamentária.',
        'Negociações comerciais e administração de benefícios corporativos.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Graduação em Análise e Desenvolvimento de Sistemas (ADS)',
      institution: 'Universidade Estácio de Sá',
      status: 'Concluído em 11/2022'
    },
    {
      degree: 'Técnico em Administração',
      institution: 'Colégio Vasco Coutinho',
      status: 'Concluído em 12/2000'
    }
  ];

  const skills = [
    { name: 'SQL Server', category: 'Database' },
    { name: 'PHP & Laravel', category: 'Backend' },
    { name: 'JavaScript & React', category: 'Frontend' },
    { name: 'Inteligência Artificial & LLMs', category: 'AI' },
    { name: 'Chatbots & Agentes Autônomos', category: 'AI' },
    { name: 'Python', category: 'Backend' },
    { name: 'Power BI', category: 'Analytics' },
    { name: 'HTML5, CSS3 & Tailwind', category: 'Frontend' },
    { name: 'Bootstrap 5', category: 'Frontend' },
    { name: 'Suporte Técnico & Hardware', category: 'Infra' },
    { name: 'VBScript & Automação', category: 'Scripts' },
    { name: 'Git & GitHub', category: 'Tools' }
  ];

  const additionalCourses = [
    'Power BI – Hashtag Treinamentos Online',
    'Montagem e Manutenção de Computadores – Microcamp',
    'Designer Gráfico – Corel Draw, Photoshop, Illustrator e InDesign',
    'Informática Avançada – Pacote Office'
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      {/* Top Profile / Header Card */}
      <section className="relative rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800/80 p-6 sm:p-10 shadow-sm overflow-hidden">
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
          {/* Avatar Badge */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white font-black text-4xl shadow-xl shadow-indigo-500/25 flex-shrink-0">
            FC
          </div>

          {/* Info */}
          <div className="space-y-3 text-center sm:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 text-xs font-semibold">
              Currículo Profissional
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Felipe Silva Lopes Caliman
            </h1>

            <p className="text-base sm:text-lg font-medium text-indigo-600 dark:text-indigo-400">
              Desenvolvedor de Software & Analista de TI
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Profissional de TI com sólida vivência em suporte corporativo, implantação de sistemas ERP, desenvolvimento web (PHP, Laravel, JavaScript, React), administração de bancos de dados SQL Server e capacitações práticas em Inteligência Artificial e Automação de Agentes.
            </p>

            {/* Contact Pills */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              <a
                href="mailto:lipecaliman81@gmail.com"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                <span>✉️</span>
                <span>lipecaliman81@gmail.com</span>
              </a>

              <a
                href="https://wa.me/5527992339090"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
              >
                <span>📱</span>
                <span>(27) 99233-9090</span>
              </a>

              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800">
                <span>📍</span>
                <span>Vila Velha, ES – Brasil</span>
              </span>

              <a
                href="https://www.linkedin.com/in/felipe-caliman-831480354/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 hover:underline"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Felocal1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:underline"
              >
                GitHub
              </a>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-4">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-500/20 transition flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                <span>Imprimir / Salvar PDF</span>
              </button>

              <a
                href="../Resume.md"
                download="Curriculo_Felipe_Caliman.md"
                className="px-5 py-2.5 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 font-semibold text-xs sm:text-sm transition flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Baixar Documento (.md)</span>
              </a>

              <button
                onClick={() => setShowRawMarkdown(!showRawMarkdown)}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                {showRawMarkdown ? 'Ocultar Texto Markdown' : 'Ver Markdown Original'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Raw Markdown view if requested */}
      {showRawMarkdown && (
        <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm animate-portal">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">
            <h3 className="text-base font-bold text-gray-900 dark:text-white">
              Visualização Renderizada do Arquivo Resume.md
            </h3>
            <button
              onClick={() => setShowRawMarkdown(false)}
              className="text-xs text-gray-500 hover:text-gray-800 dark:hover:text-white"
            >
              Fechar
            </button>
          </div>
          <article className="prose dark:prose-invert max-w-none text-sm leading-relaxed">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{resumeContent}</ReactMarkdown>
          </article>
        </section>
      )}

      {/* Professional Experience Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-lg">
            💼
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Experiência Profissional
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Trajetória corporativa e realizações técnicas
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 shadow-sm hover:border-indigo-500/40 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {exp.role}{' '}
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                    • {exp.company}
                  </span>
                </h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  {exp.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4">
                {exp.description}
              </p>

              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-indigo-500 font-bold leading-none mt-1">▸</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Certificates & Credentials Showcase */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg">
              📜
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Certificações & Credenciais Verificadas
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Documentos oficiais em PDF com visualizador interativo integrado
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            5 Certificados Disponíveis
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              onSelect={(c) => setSelectedCertificate(c)}
            />
          ))}
        </div>
      </section>

      {/* Academic Education Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg">
            🎓
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Formação Acadêmica
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Qualificação formal e graduação
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 shadow-sm"
            >
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                {edu.degree}
              </h3>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                {edu.institution}
              </p>
              <div className="mt-3 inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                {edu.status}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold text-lg">
            ⚡
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Competências Técnicas
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Ferramentas e domínios aplicados
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 shadow-sm">
          <div className="flex flex-wrap gap-2.5">
            {skills.map((s, idx) => (
              <div
                key={idx}
                className="px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/80 flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200"
              >
                <span>{s.name}</span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  {s.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Courses & Languages */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Additional Courses */}
        <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">📚</span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Outras Capacitações & Formações
            </h3>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            {additionalCourses.map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-indigo-500 font-bold">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🌐</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Idiomas
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold text-gray-800 dark:text-gray-200">
                <span>Inglês</span>
                <span className="text-xs text-indigo-600 dark:text-indigo-400">Intermediário</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-2 rounded-full w-3/5" />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 pt-1">
                Leitura técnica de documentação e comunicação profissional.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5">
              <span>●</span> Português Nativo
            </span>
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  );
}
