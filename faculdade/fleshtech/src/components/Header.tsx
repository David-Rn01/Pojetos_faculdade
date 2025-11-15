// src/components/Header.tsx
"use client";
import Link from 'next/link';
import { useState } from 'react'; // Vamos simular o estado aqui

export default function Header() {
  // Simulação de login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-[#301860]">
          Flashtech
        </Link>
        
        {/* Links de Navegação */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/store" className="text-gray-600 hover:text-[#301860] font-medium">Loja</Link>
          <Link href="/about" className="text-gray-600 hover:text-[#301860] font-medium">Sobre Nós</Link>
          <Link href="/contact" className="text-gray-600 hover:text-[#301860] font-medium">Contato</Link>
        </div>
        
        {/* Botões de Ação */}
        <div className="flex items-center space-x-3">
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg"
            >
              Sair
            </button>
          ) : (
            <Link 
              href="/login"
              className="bg-[#301860] hover:bg-[#483078] text-white font-bold py-2 px-4 rounded-lg"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}