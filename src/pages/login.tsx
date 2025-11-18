import Head from 'next/head';
import Link from 'next/link';
import { Lock, Mail } from 'lucide-react'; // Ícones (opcional, mas fica bom)

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login - Flashtech</title>
      </Head>

      {/* 1. ADICIONE ESTE DIV "wrapper" PARA CENTRALIZAR */}
      <div className="h-full flex items-center justify-center mt-30 mb-30">

        {/* 2. ESTA É A SUA CAIXA ROXA (baseada na imagem) */}
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full">
          
          <div className="text-center mb-8">
            <svg className="mx-auto h-12 w-12 text-[#483078]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h1 className="text-3xl font-bold text-white mt-2">
              Flashtech
            </h1>
            <p className="text-gray-300">
              Entre na sua conta
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">
                E-mail
              </label>
              <input 
                type="email" 
                id="email"
                placeholder="voce@exemplo.com"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#483078]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="password">
                Senha
              </label>
              <input 
                type="password" 
                id="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#483078]"
              />
            </div>
            
            <div className="text-right">
              <a href="#" className="text-sm text-blue-400 hover:underline">
                Esqueceu a senha?
              </a>
            </div>

            <button 
              type="submit"
              className="block w-full text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out
                         bg-[#483078] hover:bg-[#301860] focus:outline-none focus:ring-2 focus:ring-[#483078] focus:ring-opacity-50"
            >
              Entrar
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-8">
            Não tem uma conta?{' '}
            <Link href="/signup" legacyBehavior>
              <a className="font-medium text-blue-400 hover:underline">
                Criar conta
              </a>
            </Link>
          </p>

        </div>

      </div> {/* 3. FECHE O DIV "wrapper" */}
    </>
  );
}