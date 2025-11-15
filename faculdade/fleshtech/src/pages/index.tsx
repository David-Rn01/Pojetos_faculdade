import Link from "next/link";
import Head from "next/head";

export default function AuthGatewayPage() {
  return (
    <>
      <Head>
        <title>Bem-vindo à Flashtech</title>
      </Head>
      
      <div className="bg-white w-full max-w-md p-8 md:p-12 rounded-2xl shadow-xl text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold text-flashtech-dark">
          Flashtech
        </h1>
        
        <p className="text-lg text-gray-600 mt-3">
          Sua loja de eletrônicos.
        </p>

        <div className="mt-10 space-y-4">
          
          <Link 
            href="/login" 
            className="block w-full text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out
                       bg-flashtech-purple hover:bg-flashtech-dark 
                       focus:outline-none focus:ring-2 focus:ring-flashtech-purple focus:ring-opacity-50"
          >
            Entrar
          </Link>
          
          <Link 
            href="/signup"
            className="block w-full text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out
                       bg-flashtech-dark hover:bg-flashtech-purple
                       focus:outline-none focus:ring-2 focus:ring-flashtech-dark focus:ring-opacity-50"
          >
            Criar Conta
          </Link>

        </div>

        <div className="mt-8">
          <Link href="/store" className="text-sm text-gray-500 hover:text-flashtech-purple hover:underline transition-colors">
            Ver produtos como visitante
          </Link>
        </div>
        
      </div>
    </>
  );
}