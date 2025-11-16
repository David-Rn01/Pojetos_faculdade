"use client";
import { useRouter } from 'next/router';

export default function TestPage() {
  const router = useRouter();
    return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #10182B 0%, #212C3E 50%, #303F52 100%)',
        margin: 0,
        backgroundAttachment: 'fixed',
        padding: '20px'
      }}
    >

      <div className="min-h-screen flex justify-center items-center">
      {/* 
        Outras opacidades:
        bg-blue-500/25 - 25% de opacidade
        bg-blue-500/75 - 75% de opacidade
        bg-blue-500/90 - 90% de opacidade
      */}
      
      <div className="bg-white/95 backdrop-blur-sm p-20 rounded-2xl shadow-lg w-150 text-center pt-10">
        <h1 className="text-6xl font-bold text-gray-800">
          Flashtech
        </h1>

        <p style={{marginTop: 15, marginBottom: 30}} >Sua loja de eletrônicos</p>
        <button onClick={() => router.push('/login')}
        className="mb-10 w-full bg-[#473078] hover:bg-[#634E8F] text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Enter
        </button>

        <button onClick={() => router.push('/signup')}
        className="mb-10 w-full bg-[#2F1860] hover:bg-[#432979] text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          Criar Conta
        </button>
        <a href="store" className="text-gray-600">
          Fundo com opacidade e blur
        </a>
      </div>
    </div>
    </div>
  );
}