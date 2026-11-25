// src/components/ProjectCard.jsx
import React from 'react';

export default function ProjectCard({ project, onSelect }) {
  const { title, category, description, image, tech, metrics, highlights, liveUrl, githubUrl } = project;

  return (
    <div className="group rounded-2xl bg-white dark:bg-gray-900/70 border border-gray-200/80 dark:border-gray-800/80 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
      {/* Image Container with Overlay */}
      <div
        onClick={() => onSelect(project)}
        className="relative aspect-video overflow-hidden bg-gray-950 cursor-pointer"
        title="Clique para ampliar screenshot e ver detalhes"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category Pill */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-gray-950/80 text-white backdrop-blur-md border border-white/10 shadow-sm">
          {category}
        </span>

        {/* Hover zoom overlay indicator */}
        <div className="absolute inset-0 bg-indigo-950/50 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-sm">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
          <span>Ampliar Screenshot</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <h3
            onClick={() => onSelect(project)}
            className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer"
          >
            {title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>

          {/* Metric Badge */}
          {metrics && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{metrics}</span>
            </div>
          )}

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1 pt-1">
              {highlights.slice(0, 2).map((h, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-indigo-500 font-bold">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer info & buttons */}
        <div className="space-y-4 pt-3 border-t border-gray-100 dark:border-gray-800/80">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700/60"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Buttons Row */}
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => onSelect(project)}
              className="flex-1 py-2.5 px-3 rounded-xl bg-gray-100 dark:bg-gray-800/80 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <span>Detalhes</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>

            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold transition shadow-sm flex items-center justify-center gap-1.5"
                title="Acessar projeto online"
              >
                <span>Demo</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              <span
                className="py-2.5 px-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-medium border border-gray-200 dark:border-gray-700/60 flex items-center gap-1"
                title="Projeto de ambiente interno corporativo (Localhost)"
              >
                <span>🔒</span>
                <span>Localhost</span>
              </span>
            )}

            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition border border-gray-200 dark:border-gray-700/60"
                title="Ver repositório no GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
