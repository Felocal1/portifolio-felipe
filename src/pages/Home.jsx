// src/pages/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import astronautImg from '../assets/astronaut.png';
import projects from '../data/projects';
import certificates from '../data/certificates';
import CertificateCard from '../components/CertificateCard';
import CertificateModal from '../components/CertificateModal';

export default function Home() {
  const [activeCert, setActiveCert] = useState(null);
  const featuredProjects = projects.slice(0, 3);
  const featuredCertificates = certificates.slice(0, 3);

  return (
    <div className="space-y-20 md:space-y-28">
      {/* Hero Section */}
      <section className="relative pt-4 sm:pt-8 md:pt-12">
        {/* Background glow circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Disponível para Projetos & Oportunidades em TI
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.15]">
              Construindo sistemas sólidos,{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                dashboards e automações
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              Olá! Sou <strong className="text-gray-900 dark:text-white font-semibold">Felipe Caliman</strong>, profissional de Tecnologia da Informação graduado em ADS. Atuo com desenvolvimento de software (<span className="text-indigo-600 dark:text-indigo-400 font-medium">PHP, Laravel, JavaScript, React</span>), banco de dados (<span className="text-indigo-600 dark:text-indigo-400 font-medium">SQL Server</span>), relatórios no <span className="text-indigo-600 dark:text-indigo-400 font-medium">Power BI</span> e inteligência artificial aplicada.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/projetos"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 group"
              >
                <span>Explorar Projetos</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                to="/curriculo"
                className="px-6 py-3.5 rounded-xl bg-white dark:bg-gray-800/80 hover:bg-gray-50 dark:hover:bg-gray-700/80 text-gray-800 dark:text-gray-200 font-semibold border border-gray-200 dark:border-gray-700/80 shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Ver Currículo & Certificados</span>
              </Link>

              <a
                href="https://wa.me/5527992339090"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 font-medium transition flex items-center gap-2"
              >
                <span>WhatsApp: (27) 99233-9090</span>
              </a>
            </div>
          </div>

          {/* Hero Visual / Space Concept */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 group-hover:opacity-60 blur-xl transition duration-500" />
              
              <div className="relative bg-gradient-to-b from-gray-900 to-slate-900 rounded-2xl p-6 sm:p-8 border border-gray-800 shadow-2xl flex flex-col items-center text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl" />
                
                <img
                  src={astronautImg}
                  alt="Missão Espacial - Desembarque e Explore"
                  className="w-48 sm:w-56 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />

                <div className="mt-4 space-y-1">
                  <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase">
                    Missão Dev
                  </div>
                  <h3 className="text-xl font-bold text-white">Desembarque e Explore</h3>
                  <p className="text-xs text-gray-400">
                    Sistemas corporativos, automação com scripts e soluções web
                  </p>
                </div>

                {/* Floating Tech Badges */}
                <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-gray-800/90 text-indigo-300 border border-gray-700">PHP & Laravel</span>
                  <span className="px-2.5 py-1 rounded-lg bg-gray-800/90 text-purple-300 border border-gray-700">SQL Server</span>
                  <span className="px-2.5 py-1 rounded-lg bg-gray-800/90 text-pink-300 border border-gray-700">React & JS</span>
                  <span className="px-2.5 py-1 rounded-lg bg-gray-800/90 text-amber-300 border border-gray-700">Agentes & IA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Counter Section */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 shadow-sm hover:border-indigo-500/40 transition">
          <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">+4 Anos</div>
          <div className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">Experiência em TI</div>
          <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Suporte técnico, ERPs e desenvolvimento</div>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 shadow-sm hover:border-indigo-500/40 transition">
          <div className="text-3xl sm:text-4xl font-extrabold text-purple-600 dark:text-purple-400">98+</div>
          <div className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">Estações Gerenciadas</div>
          <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Auditoria automatizada com scripts VBS</div>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 shadow-sm hover:border-indigo-500/40 transition">
          <div className="text-3xl sm:text-4xl font-extrabold text-pink-600 dark:text-pink-400">ADS</div>
          <div className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">Ensino Superior Concluído</div>
          <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Estácio de Sá (Nov/2022)</div>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 shadow-sm hover:border-indigo-500/40 transition">
          <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">6 Certificações</div>
          <div className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">IA, Copilot & Dev</div>
          <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Credenciais em PDF autênticas</div>
        </div>
      </section>

      {/* Tech Stack Categories */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Competências Técnicas & Tecnologias
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Conjunto de ferramentas e linguagens aplicadas em rotinas corporativas reais e criação de software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xl mb-4">
              💻
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Desenvolvimento Web</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Linguagens e frameworks para sistemas escaláveis.</p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">PHP & Laravel</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">JavaScript (ES6+)</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">React</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">HTML5 & CSS3</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">Tailwind & Bootstrap</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xl mb-4">
              🤖
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Inteligência Artificial & Python</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Modelos de IA, agentes autônomos e scripts Python.</p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">IA Generativa & LLMs</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">Chatbots & Copilots</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">Agentes Inteligentes</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">Python</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">Java + IA</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold text-xl mb-4">
              🗄️
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Banco de Dados & BI</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Armazenamento, consultas e inteligência analítica.</p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">SQL Server</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">Power BI</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">Modelagem Relacional</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">Consultas Complexas</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">Manutenção de DB</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xl mb-4">
              ⚙️
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Sistemas & Infra TI</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Estabilidade, suporte ao usuário e gestão de parque.</p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">Suporte N1/N2/N3</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">ERP (Assenture, FoxPro)</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">Scripts VBScript</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">Impressoras Fiscais</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">Git & GitHub</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Projetos em Destaque
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Casos práticos desenvolvidos para resolver demandas reais de empresas e usuários.
            </p>
          </div>
          <Link
            to="/projetos"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group"
          >
            <span>Ver todos os projetos ({projects.length})</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((proj) => (
            <div
              key={proj.id}
              className="group rounded-2xl bg-white dark:bg-gray-900/70 border border-gray-200/80 dark:border-gray-800/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-950">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-950/80 text-white backdrop-blur-md border border-white/10">
                  {proj.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200/40 dark:border-indigo-800/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to="/projetos"
                      className="flex-1 text-center py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-xs font-semibold text-gray-800 dark:text-gray-200 transition-colors"
                    >
                      Detalhes
                    </Link>

                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
                        title="Abrir projeto online"
                      >
                        <span>Demo</span>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Showcase Section */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider mb-2">
              Credenciais & Conhecimento Contínuo
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Certificações em IA & Desenvolvimento
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Capacitações práticas em Inteligência Artificial Moderna, Agentes Autônomos, Python, Java e Web Full-Stack com certificados em PDF autênticos.
            </p>
          </div>
          <Link
            to="/curriculo"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group"
          >
            <span>Ver todas as certificações ({certificates.length})</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCertificates.map((cert) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              onSelect={(c) => setActiveCert(c)}
            />
          ))}
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white p-8 sm:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-4 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Vamos trabalhar juntos em soluções de alto impacto?
          </h2>
          <p className="text-indigo-200 text-sm sm:text-base">
            Estou à disposição para atuar em suporte especializado de TI, implantação de sistemas corporativos e desenvolvimento de novas aplicações.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <a
              href="mailto:lipecaliman81@gmail.com"
              className="px-6 py-3 rounded-xl bg-white text-indigo-900 font-bold hover:bg-indigo-50 shadow-md hover:-translate-y-0.5 transition"
            >
              Enviar E-mail (lipecaliman81@gmail.com)
            </a>
            <a
              href="https://www.linkedin.com/in/felipe-caliman-831480354/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-sm border border-white/20 transition"
            >
              Conectar no LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Modal for PDF Viewer */}
      {activeCert && (
        <CertificateModal
          certificate={activeCert}
          onClose={() => setActiveCert(null)}
        />
      )}
    </div>
  );
}
