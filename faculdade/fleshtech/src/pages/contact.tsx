export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-128px)] max-w-3xl">
      <h1 className="text-5xl font-bold text-center text-[#301860] mb-8">Fale Conosco</h1>
      <p className="text-lg text-center text-gray-700 mb-10">
        Tem alguma dúvida, sugestão ou precisa de suporte? Nossa equipe está pronta para ajudar!
      </p>
      
      <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200">
        <form>
          <div className="grid grid-cols-5 md:grid-cols-5 gap-1 mb-5">
            <div>
              <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">Nome</label>
              <input type="text" id="firstName" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#483078]" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">Sobrenome</label>
              <input type="text" id="lastName" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#483078]" />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="contactEmail" className="block text-sm font-bold text-gray-700 mb-2">E-mail</label>
            <input type="email" id="contactEmail" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#483078]" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Sua Mensagem</label>
            <textarea id="message" rows={5} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[]"></textarea>
          </div>
          <button 
            type="submit"
            className="w-full p-3 rounded-lg text-white font-bold text-lg bg-gradient-to-r from-[] to-[] hover:opacity-90 transition-opacity duration-200"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}