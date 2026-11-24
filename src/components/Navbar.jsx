// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-indigo-600/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 font-semibold shadow-sm'
        : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60'
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
      isActive
        ? 'bg-indigo-600 text-white font-semibold'
        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/85 dark:bg-gray-950/85 border-b border-gray-200/80 dark:border-gray-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              FC
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 dark:text-white text-base tracking-tight leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Felipe Caliman
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                TI & Desenvolvimento
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            <NavLink to="/" end className={navLinkClass}>
              Início
            </NavLink>
            <NavLink to="/projetos" className={navLinkClass}>
              Projetos
            </NavLink>
            <NavLink to="/curriculo" className={navLinkClass}>
              Currículo
            </NavLink>
          </nav>

          {/* Right Action Icons & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://github.com/Felocal1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Felipe Caliman"
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60 transition"
              title="GitHub"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/felipe-caliman-831480354/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Felipe Caliman"
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800/60 transition"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <div className="h-5 w-px bg-gray-200 dark:bg-gray-800 mx-1"></div>

            <ThemeToggle />
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition focus:outline-none"
              aria-label="Menu principal"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-2 shadow-xl animate-portal">
          <NavLink
            to="/"
            end
            onClick={() => setMobileMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            Início
          </NavLink>
          <NavLink
            to="/projetos"
            onClick={() => setMobileMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            Projetos
          </NavLink>
          <NavLink
            to="/curriculo"
            onClick={() => setMobileMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            Currículo
          </NavLink>
          
          <div className="pt-2 border-t border-gray-100 dark:border-gray-800 flex items-center justify-around">
            <a
              href="https://github.com/Felocal1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 py-2"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/felipe-caliman-831480354/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 py-2 font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
