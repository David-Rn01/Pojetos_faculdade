import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// 1. Importamos os produtos da nossa "Database"
import { mockProducts } from '../data/products';

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // 2. Selecionamos e transformamos os produtos em slides
  // Aqui pegamos os 3 primeiros produtos. Você pode mudar o .slice() ou filtrar por categoria.
  const slides = mockProducts.slice(0, 4).map((product, index) => {
    
    // Cores de fundo para variar o visual de cada slide
    const gradients = [
      'from-blue-900 to-gray-900',
      'from-purple-900 to-gray-900',
      'from-indigo-900 to-gray-900'
    ];

    return {
      id: product.id,
      image: product.image, // Usa a imagem real do produto
      title: product.name,  // Usa o nome real
      subtitle: product.description, // Usa a descrição real
      link: `/product/${product.id}`, // Gera o link correto para a página do produto
      color: gradients[index % gradients.length], // Alterna as cores de fundo
      cta: 'Comprar Agora'
    };
  });

  // Muda o slide automaticamente a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Se não houver produtos, não renderiza nada para evitar erros
  if (slides.length === 0) return null;

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-700 group">
      
      {/* Renderiza os Slides baseados nos PRODUTOS */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Fundo com Gradiente */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-90`} />
          
          {/* Conteúdo */}
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-8 md:px-20 h-full">
            
            {/* Texto */}
            <div className="text-center md:text-left md:w-1/2 z-20 space-y-4 mt-8 md:mt-0">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight animate-fade-in-up line-clamp-2">
                {slide.title}
              </h2>
              <p className="text-lg text-gray-300 max-w-md mx-auto md:mx-0 animate-fade-in-up delay-100 line-clamp-3">
                {slide.subtitle}
              </p>
              <div className="pt-4 animate-fade-in-up delay-200">
                {/* O botão agora leva para a página do produto real */}
                <Link href={slide.link} legacyBehavior>
                  <a className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg">
                    {slide.cta}
                  </a>
                </Link>
              </div>
            </div>

            {/* Imagem do Produto */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 mt-6 md:mt-0 z-20 animate-float">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="contain"
                className="drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Botões de Navegação */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}