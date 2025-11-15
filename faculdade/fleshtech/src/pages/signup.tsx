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
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-[calc(100vh-128px)] flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md">
        
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
            <button 
              type="button"
              onClick={() => router.push('/login')}
              className="font-medium text-[#483078] hover:text-opacity-80 ml-1"
            >
              Entrar
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}