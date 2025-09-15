"use client"; 

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        {/* -- Seção Principal do Cabeçalho (Título e Botão Hambúrguer) -- */}
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar no logo
          >
            Transição em Preto e Branco
          </Link>
          
          {/* -- Navegação para Telas Maiores (Desktop) -- */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              <li><Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link href="/sobre" className="text-gray-600 hover:text-blue-600">Sobre</Link></li>
              <li><Link href="/blogs" className="text-gray-600 hover:text-blue-600">Blog</Link></li>
            </ul>
          </nav>

          {/* -- Botão Hambúrguer para Telas Pequenas (Mobile) -- */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                // Ícone "X" (fechar)
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                // Ícone "Hambúrguer" (abrir)
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              )}
            </button>
          </div>
        </div>

        {/* -- Menu Dropdown para Mobile (aparece quando o estado isMenuOpen é true) -- */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav>
              <ul className="flex flex-col items-center space-y-4">
                 <li><Link href="/" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                 <li><Link href="/sobre" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Sobre</Link></li>
                 <li><Link href="/blogs" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}