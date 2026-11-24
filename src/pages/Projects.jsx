// src/pages/Projects.jsx
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['Todos', 'Sistemas & TI', 'Desenvolvimento Web'];

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          Portfólio de Aplicações
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Projetos & Sistemas Desenvolvidos
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
          Soluções práticas em operação, abrangendo painéis de inventário com coleta em VBScript, gestão eletrônica de documentos, monitoramento de infraestrutura e aplicações web.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                : 'bg-white dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/80 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            {cat} {cat === 'Todos' && `(${projects.length})`}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((proj) => (
          <ProjectCard
            key={proj.id}
            project={proj}
            onSelect={(p) => setActiveModalProject(p)}
          />
        ))}
      </div>

      {/* Modal / Lightbox for detailed view */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-gray-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-portal"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-5 sm:p-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  {activeModalProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {activeModalProject.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                aria-label="Fechar modal"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Full Screenshot */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-950 shadow-inner">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-auto object-contain max-h-[500px] mx-auto"
                />
              </div>

              {/* Metrics pill */}
              {activeModalProject.metrics && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-medium text-sm flex items-center gap-2">
                  <span className="text-lg">📊</span>
                  <span>{activeModalProject.metrics}</span>
                </div>
              )}

              {/* Detailed Description */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-gray-900 dark:text-white">
                  Sobre a Solução
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                  {activeModalProject.longDescription || activeModalProject.description}
                </p>
              </div>

              {/* Key Features */}
              {activeModalProject.highlights && (
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-gray-900 dark:text-white">
                    Funcionalidades e Diferenciais
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeModalProject.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60 text-xs sm:text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2"
                      >
                        <span className="text-indigo-500 font-bold">✓</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                  Tecnologias Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer with Action Links */}
            <div className="p-5 sm:p-6 bg-gray-50 dark:bg-gray-900/60 border-t border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                {activeModalProject.liveUrl ? (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-semibold transition shadow-md flex items-center gap-2"
                  >
                    <span>Acessar Projeto Online</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <span className="px-3.5 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium border border-gray-200 dark:border-gray-700/60 flex items-center gap-1.5">
                    <span>🔒</span>
                    <span>Ambiente Corporativo / Intranet</span>
                  </span>
                )}

                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 text-sm font-semibold transition flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>Repositório GitHub</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 rounded-xl bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold transition"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
