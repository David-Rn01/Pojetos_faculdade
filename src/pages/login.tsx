import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MockUsers as mok, VerifyUsers} from '@/data/users';

export default function LoginPage() {
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Impede a página de recarregar
    setError('');
    
    console.log("Tentando logar com:", email, password); // Para ver no Console (F12)

    //verifica na lista de usuários pelo email e a senha digitados
  if(VerifyUsers(email, password)){
    router.push('/store');
  } else{
    setError('E-mail ou senha incorretos.')
  }
};

return (
    <>
      <Head>
        <title>Login - Flashtech</title>
      </Head>

      <div className="h-full flex items-center justify-center py-12">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full">
          
          <div className="text-center mb-8">
            <svg className="w-12 h-12 mx-auto text-[#483078] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h1 className="text-3xl font-bold text-white mt-2">Flashtech</h1>
            <p className="text-gray-300">Entre na sua conta</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* cria o campo email e senha, a cada alteração é setado na variável email ou senha*/}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">
                E-mail ou Usuário
              </label>
              <input 
                type="text" 
                id="email"
                placeholder="admin.com"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#483078]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="password">
                Senha
              </label>
              <input 
                type="password" 
                id="password"
                placeholder="123456"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#483078]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            {/*em caso de erro dispara a mensagem do método acima */}
            {error && (
              <p className="text-center text-red-400 text-sm bg-red-900/20 p-2 rounded">
                {error}
              </p>
            )}

            {/* O botão deve ser type="submit" */}
            <button 
              type="submit"
              className="block w-full text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out
                         bg-[#483078] hover:bg-[#301860] focus:outline-none focus:ring-2 focus:ring-[#483078] focus:ring-opacity-50"
            >
              Entrar
            </button>
          </form>

            {/*link para criar conta ou entrar como visitante sem uma conta */}
          <p className="text-center text-sm text-gray-400 mt-8">
            Não tem uma conta?{' '}
            <Link href="/signup" legacyBehavior>
              <a className="font-medium text-blue-400 hover:underline">
                Criar conta
              </a>
            </Link>
          </p>

        </div>
      </div>
    </>
  );
}