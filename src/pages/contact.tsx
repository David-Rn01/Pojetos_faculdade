import Head from 'next/head';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mensagem enviada:', formData);
    alert('Mensagem enviada com sucesso! (Simulação)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Head>
        <title>Contato - Flashtech</title>
      </Head>

      <main className="w-full py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Cabeçalho da Página */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Fale Conosco</h1>
            <p className="text-gray-400 text-lg">
              Tem alguma dúvida ou sugestão? Estamos aqui para ajudar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* --- COLUNA DA ESQUERDA: INFORMAÇÕES --- */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg h-fit">
              <h2 className="text-2xl font-bold text-white mb-6">Informações de Contato</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900/30 p-3 rounded-lg">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">E-mail</h3>
                    <p className="text-gray-400">contato@flashtech.com</p>
                    <p className="text-gray-400">suporte@flashtech.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900/30 p-3 rounded-lg">
                    <Phone className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Telefone</h3>
                    <p className="text-gray-400">(11) 99999-9999</p>
                    <p className="text-gray-400">Seg-Sex, 9h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900/30 p-3 rounded-lg">
                    <MapPin className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Endereço</h3>
                    <p className="text-gray-400">Av. Paulista, 1000 - Bela Vista</p>
                    <p className="text-gray-400">São Paulo - SP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- COLUNA DA DIREITA: FORMULÁRIO --- */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    // AQUI ESTÁ A MUDANÇA: bg-white e text-gray-900 (Preto)
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="voce@exemplo.com"
                    // AQUI ESTÁ A MUDANÇA: bg-white e text-gray-900 (Preto)
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Como podemos ajudar?"
                    rows={4}
                    // AQUI ESTÁ A MUDANÇA: bg-white e text-gray-900 (Preto)
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar Mensagem
                </button>

              </form>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}