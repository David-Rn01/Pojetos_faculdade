import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Users, AddUser } from '@/data/users';

export default function SignUpPage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  //uma variável para armazenar os dados do novo usuário
  let novoUsuario: Users = {
    name: name,
    born: "",
    email: email,
    password: password1,
    cell: "",
    cpf: "",
    cep: "",
    adress: ""
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sign up attempt...');
    // Lógica de criação de conta...
    if (password2 === password1){
      //se as senhas coincidirem chama o método para cadastrar usuário
      AddUser(novoUsuario);
      router.push('/login'); // Redireciona para login após criar conta
    } 
  };

  return (
    <>
      <Head>
        <title>Criar Conta - Flashtech</title>
      </Head>

      {/* 1. centraliza todo o conteudo*/}
      <div className="h-full flex items-center justify-center mt-20 mb-30">

        <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full">
          
          <div className="text-center mb-8">
            <svg className="w-12 h-12 mx-auto text-[#483078] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h1 className="text-3xl font-bold text-white mt-2">Flashtech</h1>
            <p className="text-gray-300 text-lg mt-1">Crie sua conta</p>
          </div>

          {/* cria o campo nome, email e senha e confirm senha, a cada alteração é setado em sua devida variável*/}
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome Completo</label>
                <input type="text" 
                id="name"
                placeholder="Seu nome" 
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#483078]" 
                value = {name}
                onChange={(e) => setName(e.target.value)}
                required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">E-mail</label>
                <input type="email" 
                id="email" 
                name="email" 
                placeholder="seuemail@exemplo.com" 
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#483078]" 
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                required />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Senha</label>
                <input type="password" 
                id="password" 
                name="password" 
                placeholder="••••••••" 
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#483078]" 
                value = {password1}
                onChange = {(e) => setPassword(e.target.value)}
                required />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300 mb-1">Confirmar Senha</label>
                <input type="password" 
                id="confirm-password" 
                name="confirm-password" 
                placeholder="••••••••" 
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#483078]" 
                value = {password2}
                onChange={(e) => setPassword2(e.target.value)}
                required />
              </div>
              {/*ao clicar no botão dispara o método inicial para criar o usuário */}
              <button type="submit" className="w-full p-3 rounded-lg text-white font-bold text-lg bg-linear-to-r from-[#301860] to-[#483078] hover:opacity-90 transition-opacity duration-200">
                Criar Conta
              </button>
            </div>
          </form>

            {/*link para logar com uma contra ja existente  */}
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

      </div>
    </>
  );
}