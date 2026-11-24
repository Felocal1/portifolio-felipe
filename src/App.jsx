// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors selection:bg-indigo-500 selection:text-white">
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/curriculo" element={<Resume />} />
          </Routes>
        </main>

        {/* Modern Footer */}
        <footer className="border-t border-gray-200/80 dark:border-gray-800/80 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm py-8 transition-colors mt-auto">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Felipe Silva Lopes Caliman
              </span>
              <span>•</span>
              <span>Desenvolvedor & Analista de TI</span>
            </div>

            <div className="flex items-center gap-6">
              <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                Início
              </Link>
              <Link to="/projetos" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                Projetos
              </Link>
              <Link to="/curriculo" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                Currículo
              </Link>
              <a
                href="mailto:lipecaliman81@gmail.com"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                Contato
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
