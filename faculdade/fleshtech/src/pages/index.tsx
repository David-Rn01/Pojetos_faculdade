// pages/index.tsx

import Image from "next/image"; 
import { produtos } from "../data/produtos"; 

export default function Home() {
  return (
    <main>
      <div>
        <h1>Avalanches Caruaru</h1>
        <p>Welcome !</p>
        
        {/* Este é o container do grid */}
        <div className="produtos-grid"> 
          
          {/* Este é o loop .map() */}
          {produtos.map(produto => (
            
            // Este é o card do produto
            <div key={produto.id} className="produto-card"> 
              <Image 
                src={produto.imagem} 
                alt={produto.nome}
                width={150}
                height={150}
              />
              <h2>{produto.nome}</h2>
              <p>R$ {produto.preco.toFixed(2)}</p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}