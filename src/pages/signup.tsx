import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SignUpPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sign up attempt...');
    // Lógica de criação de conta...
    router.push('/login'); // Redireciona para login após criar conta
  };

  return (
    <>
      <Head>
        <title>Criar Conta - Flashtech</title>
      </Head>

      {/* 1. ADICIONE ESTE DIV "wrapper" PARA CENTRALIZAR */}
      <div className="h-full flex items-center justify-center mt-20 mb-30">

        {/* 2. ESTA É A SUA CAIXA ROXA (com classes corrigidas) */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full">
          
          <div className="text-center mb-8">
            <svg className="w-12 h-12 mx-auto text-[#483078]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h1 className="text-3xl font-bold text-white mt-2">Flashtech</h1>
            <p className="text-gray-300 text-lg mt-1">Crie sua conta</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome Completo</label>
                <input type="text" id="name" name="name" placeholder="Seu nome" className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#483078]" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">E-mail</label>
                <input type="email" id="email" name="email" placeholder="voce@exemplo.com" className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#483078]" required />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Senha</label>
                <input type="password" id="password" name="password" placeholder="••••••••" className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#483078]" required />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300 mb-1">Confirmar Senha</label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="••••••••" className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#483078]" required />
              </div>
              <button type="submit" className="w-full p-3 rounded-lg text-white font-bold text-lg bg-gradient-to-r from-[#301860] to-[#483078] hover:opacity-90 transition-opacity duration-200">
                Criar Conta
              </button>
            </div>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-400">
              Já tem uma conta?
              <Link href="/login" legacyBehavior>
                <a className="font-medium text-blue-400 hover:underline ml-1">
                   Entrar
                </a>
              </Link>
            </p>
          </div>
        </div>
        {/* FIM DA CAIXA ROXA */}

      </div> {/* 3. FECHE O DIV "wrapper" */}
    </>
  );
}