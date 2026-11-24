// src/components/CertificateModal.jsx
import React from 'react';

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-gray-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-portal"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{certificate.badgeIcon}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  {certificate.category}
                </span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                  <span>✓</span> Credencial Autêntica
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-tight mt-1">
                {certificate.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={certificate.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              title="Abrir PDF em nova aba"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Fechar visualizador"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body - PDF Iframe Viewer */}
        <div className="flex-1 w-full bg-gray-950 min-h-[420px] sm:min-h-[520px]">
          <iframe
            src={`${certificate.pdfUrl}#toolbar=0&navpanes=0`}
            title={certificate.title}
            className="w-full h-full min-h-[420px] sm:min-h-[520px] border-none"
          />
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-gray-50 dark:bg-gray-900/80 border-t border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <div className="text-xs text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-800 dark:text-gray-200">Emissor:</span> {certificate.issuer}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={certificate.pdfUrl}
              download
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md transition flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Baixar Certificado em PDF</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-semibold transition"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
