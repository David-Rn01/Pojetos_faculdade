import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter(); // Hook para navegação

  return (
    // Fundo gradiente
    <div style={{backgroundColor: `liner-gradient(to bottom, #f3f4f6, #e5e7eb)`}}>
      
      {/* 1. ADICIONE ESTA LINHA PARA CENTRALIZAR */}
      <div className="h-full flex items-center justify-center content-center justify-items-center mt-30 mb-30">

        {/* Card Principal / box dos elementos */}
        <div className="bg-gray-800 backdrop-blur-sm p-20 rounded-2xl shadow-lg w-150 text-center pt-10">
          {/*<sgv> adiciona o logo do raio acima da box */}
          <svg className="w-12 h-12 mx-auto text-[#483078] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          
          {/*Titulo flashtech*/}
          <h1 className="text-4xl md:text-5xl font-bold text-amber-50">
            Flashtech
          </h1>
          
          {/*texto descritivo */}
          <p className="text-lg text-amber-50 mt-3">
            Sua loja de eletrônicos.
          </p>

          {/* Container dos Botões */}
          <div className="mt-10 space-y-4">
            <button 
              onClick={() => router.push('/login')}
              className="block w-full text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out
                           bg-[#483078] hover:bg-[#301860] focus:outline-none focus:ring-2 focus:ring-[#483078] focus:ring-opacity-50"
            >
              Entrar
            </button>
            
            <button 
              onClick={() => router.push('/signup')}
              className="block w-full text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out
                           bg-[#301860] hover:bg-[#483078] focus:outline-none focus:ring-2 focus:ring-[#301860] focus:ring-opacity-50"
            >
              Criar Conta
            </button>
          </div>

          {/* Link Secundário */}
          <div className="mt-8">
            <button 
              onClick={() => router.push('/store')}
              className="text-sm text-blue-200 hover:text-blue-500 hover:underline transition-colors"
            >
              Ver produtos como visitante
            </button>
          </div>
          
        </div>

      </div> {/* 2. FECHE O DIV DE CENTRALIZAÇÃO AQUI */}
    </div>
  );
}