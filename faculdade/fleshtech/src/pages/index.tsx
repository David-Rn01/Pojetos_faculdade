import Link from "next/link";
import Head from "next/head";

export default function AuthGatewayPage() {
  return (
    <>
      <Head>
        <title>Bem-vindo à Flashtech</title>
      </Head>
      
      {/* O layout de fundo (gradiente, centralizado) 
        será controlado pelo _app.tsx 
      */}
      <div className="bg-white w-full max-w-md p-8 md:p-12 rounded-2xl shadow-xl text-center">
        
        {/* Logo/Nome da Loja */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#301860]">
          Flashtech
        </h1>
        
        {/* Slogan */}
        <p className="text-lg text-gray-600 mt-3">
          Sua loja de eletrônicos.
        </p>

        {/* Container dos Botões */}
        <div className="mt-10 space-y-4">
          
          {/* Botão 1: Entrar (Leva para a página de login) */}
          <Link 
            href="/login" 
            className="block w-full text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out
                       bg-[#483078] hover:bg-[#301860] 
                       focus:outline-none focus:ring-2 focus:ring-[#483078] focus:ring-opacity-50"
          >
            Entrar
          </Link>
          
          {/* Botão 2: Criar Conta (Leva para a página de signup) */}
          <Link 
            href="/signup"
            className="block w-full text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out
                       bg-[#301860] hover:bg-[#483078]
                       focus:outline-none focus:ring-2 focus:ring-[#301860] focus:ring-opacity-50"
          >
            Criar Conta
          </Link>

        </div>

        {/* Link Secundário (Leva para a loja) */}
        <div className="mt-8">
          <Link href="/store" className="text-sm text-gray-500 hover:text-[#483078] hover:underline transition-colors">
            Ver produtos como visitante
          </Link>
        </div>
        
      </div>
    </>
  );
}