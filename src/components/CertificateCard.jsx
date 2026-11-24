// src/components/CertificateCard.jsx
import React from 'react';

export default function CertificateCard({ certificate, onSelect }) {
  const { title, issuer, category, badgeIcon, description, skills, pdfUrl, highlight } = certificate;

  return (
    <div className="group relative rounded-2xl bg-white dark:bg-gray-900/70 border border-gray-200/80 dark:border-gray-800/80 p-6 shadow-sm hover:shadow-2xl hover:border-indigo-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Subtle background glow on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 group-hover:bg-indigo-500/15 rounded-full blur-2xl transition duration-500 pointer-events-none" />

      <div className="space-y-4 relative z-10">
        {/* Top Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 dark:bg-indigo-950/60 border border-indigo-500/20 flex items-center justify-center text-2xl shadow-inner flex-shrink-0 group-hover:scale-110 transition-transform">
            {badgeIcon}
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
              <span>✓</span> Verificado
            </span>
            <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
              {category}
            </span>
          </div>
        </div>

        {/* Title & Issuer */}
        <div>
          <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            {issuer}
          </span>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
            {title}
          </h3>
          {highlight && (
            <p className="mt-1 text-xs font-medium text-purple-600 dark:text-purple-400">
              ✦ {highlight}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>

        {/* Skills Tag Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700/60"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="pt-5 mt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2 relative z-10">
        <button
          onClick={() => onSelect(certificate)}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm flex items-center justify-center gap-1.5 group/btn"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span>Visualizar PDF</span>
        </button>

        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition border border-gray-200 dark:border-gray-700/60"
          title="Abrir PDF em nova aba"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
