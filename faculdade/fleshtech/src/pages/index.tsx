import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter(); // Hook para navegação

  return (
    // Fundo gradiente
    <div style={{backgroundColor: `liner-gradient(to bottom, #f3f4f6, #e5e7eb)`}}>

      {/* Card Principal */}
      <div className="bg-white/95 backdrop-blur-sm p-20 rounded-2xl shadow-lg w-150 text-center pt-10">
        
        <h1 className="text-4xl md:text-5xl font-bold text-[#301860]">
          Flashtech
        </h1>
        
        <p className="text-lg text-gray-600 mt-3">
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
            className="text-sm text-gray-500 hover:text-[#483078] hover:underline transition-colors"
          >
            Ver produtos como visitante
          </button>
        </div>
        
      </div>
    </div>
  );
}