// pages/index.tsx

import Image from "next/image"; 
import { produtos } from "../data/produtos"; 

export default function Home() {
  return (
    <main>
      <div>
        <Image
          src="/images/logo.png" // Verifique se o nome do arquivo está correto
          alt="Logo Avalanches Caruaru"
          width={200}  // Você pode ajustar o tamanho
          height={150} // Você pode ajustar o tamanho
          className="logo"
        />
        <h1>Faça seu pedido!</h1>
        <p>hambúrguer</p>
        
        {/* Este é o container do grid */}
        <div className="produtos-grid"> 
          
          {/* Este é o loop .map() que cria um card para cada produto */}
          {produtos.map(produto => (
            
            // Este é o card do produto (centralizado com flex)
            <div key={produto.id} className="produto-card"> 
              <Image 
                src={produto.imagem} 
                alt={produto.nome}
                width={150}
                height={150}
              />
              <h2>{produto.nome}</h2>
              <p className="preco"> 
                R$ {produto.preco.toFixed(2)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}