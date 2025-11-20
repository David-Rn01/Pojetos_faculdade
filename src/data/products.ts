// Este é o nosso "banco de dados" de produtos.

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string; // Imagem principal (para o card)
  images: string[]; // Galeria de imagens (para a página de detalhes)
  colors: string[]; // Opções de cores
  category: string;
  description: string;
  details: string[];
}

export const mockProducts: Product[] = [
  { 
    id: '1', 
    name: 'Smartphone Pro X (128GB)', 
    price: 7649.00, 
    image: 'https://m.media-amazon.com/images/I/61DQDWS45CL._AC_SX425_.jpg',
    images: [
        'https://m.media-amazon.com/images/I/61DQDWS45CL._AC_SX425_.jpg',
        'https://m.media-amazon.com/images/I/61ZCfdn4wEL._AC_SX425_.jpg',
        'https://m.media-amazon.com/images/I/71YIkrQRuyL._AC_SX425_.jpg',
        'https://m.media-amazon.com/images/I/71UWP+YktoL._AC_SX425_.jpg'
    ],
    colors: ['Titânio Cinza', 'Preto Ônix', 'Branco Pérola'],
    category: 'Smartphones',
    description: 'Celular Samsung Galaxy S25 Ultra 5G, 256GB, 12GB RAM, Câmera Quádrupla de 200+50+10+50, Tela Grande de 6.9", Titânio Cinza',
    details: [
        'Tela: 6.7" Super Retina XDR',
        'snapdragon 8 Gen 3',
        'Material: Titânio grau 5',
        'Câmera: Tripla 48MP + 12MP + 12MP',
        'Bateria: Até 23 horas de reprodução de vídeo'
    ]
  },
  { 
    id: '2', 
    name: 'macBook Air UltraSlim M4', 
    price: 9015.50, 
    image: 'https://m.media-amazon.com/images/I/51xUXDpOifL._AC_SX342_.jpg',
    images: [
        'https://m.media-amazon.com/images/I/518QcC9GpDL._AC_SX342_.jpg',
        'https://m.media-amazon.com/images/I/51Fqdb2iQIL._AC_SX342_.jpg',
        'https://m.media-amazon.com/images/I/51xUXDpOifL._AC_SX342_.jpg',
        'https://m.media-amazon.com/images/I/41ZB3oRQm5L._AC_SL1000_.jpg',
    ],
    colors: ['Prata', 'Cinza Espacial', 'Dourado'],
    category: 'Notebooks',
    description: 'Leve, potente e elegante. O MacBook Air UltraSlim com chip M4 oferece desempenho excepcional em um design ultrafino e leve.',
    details: [
        'Tela: Retina de 13.6"',
        'Processador: Apple M4',
        'Memória RAM: 16GB',
        'Armazenamento: 512GB SSD',
        'Bateria: Até 18 horas de uso'
    ]
  },
  { 
    id: '3', 
    name: 'Aipods 4ª Geração Flashtech', 
    price: 1149.90, 
    image: 'https://m.media-amazon.com/images/I/41WMBnjyitL._AC_SX342_.jpg',
    images: [
        'https://m.media-amazon.com/images/I/41WMBnjyitL._AC_SX342_.jpg',
        'https://m.media-amazon.com/images/I/41paWip4xcL._AC_SX342_.jpg',
        'https://m.media-amazon.com/images/I/51vWvXkZRwL._AC_SX342_.jpg'
    ],
    colors: [ 'Branco', ],
    category: 'Áudio',
    description: 'Mergulhe no som com o Fone de Ouvido Flashtech Bass. Drivers de alta fidelidade e cancelamento de ruído ativo para uma experiência sonora imersiva.',
    details: [
        'Tipo: Over-Ear com Cancelamento de Ruído Ativo',
    ]
  },
  { 
    id: '4', 
    name: 'apple watch Se 3', 
    price: 3200.50, 
    image: 'https://www.magazineluiza.com.br/apple-watch-se-3-gps-caixa-estelar-de-aluminio-40mm-pulseira-esportiva-estelar-p-m/p/240598400/te/wats/?seller_id=magazineluiza',
    images: [
        'https://m.media-amazon.com/images/I/41H4AoY5xbL._AC_SX342_.jpg',
        'https://m.media-amazon.com/images/I/41-c3pK4VvL._AC_SX342_.jpg',
        'https://m.media-amazon.com/images/I/71XMTLtZd5L._AC_SL1500_.jpg'
    ],
    colors: ['luz das estrelas','Creme', 'black'],
    category: 'Acessórios',
    description: 'Apple Watch SE GPS • Caixa estelar de alumínio – 40 mm • Pulseira esportiva estelar – M/G',
    details: [
        'Tecnologia de conectividade	Bluetooth, USB, Wi-F',
        'Sensores: Cardíaco, Oxigênio no sangue',
        'Conectividade: GPS + Cellular',
        'Tamanho da tela	40', 
    ]
  },
  { 
    id: '5', 
    name: 'Carregador Rápido 65W', 
    price: 150.00, 
    image: 'https://www.magazineluiza.com.br/carregador-usb-c-certificado-pela-apple-pacote-de-2-m-para-iphone-lightning-kruidvat/p/kb5h0j5c6d/te/spcl/?seller_id=nocnocestadosunidos',
    images: [
        'https://m.media-amazon.com/images/I/51j3fP-y6dL._AC_SL1000_.jpg',
        'https://m.media-amazon.com/images/I/61g+w0Wj-oL._AC_SL1500_.jpg'
    ],
    colors: ['Branco', 'Preto'],
    category: 'Outros',
    description: 'Carregue tudo com um único adaptador. Tecnologia GaN para carregamento ultrarrápido de 65W em um tamanho compacto.',
    details: [
        'Potência: 65W',
        'Portas: 2x USB-C, 1x USB-A',
        'Tecnologia: GaN (Nitreto de Gálio)'
    ]
  },
  { 
    id: '6', 
    name: 'Mouse Gamer Pro', 
    price: 499.00, 
    image: 'https://www.magazineluiza.com.br/mouse-gamer-sem-fio-logitech-g-pro-x-superlight-2-dex-lightspeed-44-000-dpi-design-assimetrico-para-destros-branco-910-007364/p/dd55f17b6e/in/rato/?seller_id=kabum',
    images: [
        'https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71b3O-XaD+L._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/61+3+8-1-5L._AC_SL1500_.jpg'
    ],
    colors: ['Preto RGB', 'Branco RGB'],
    category: 'Periféricos',
    description: 'Precisão cirúrgica. Sensor de 25K DPI, switches ópticos e design ultraleve para você dominar qualquer partida.',
    details: [
        'DPI: 25.000',
        'Botões: 6 programáveis',
        'Peso: 63g',
        'Iluminação: RGB personalizável'
    ]
  },
  { 
    id: '7', 
    name: 'Monitor UltraWide 34"', 
    price: 2799.00, 
    image: 'https://m.media-amazon.com/images/I/71-6j-a7uGL._AC_SL1500_.jpg',
    images: [
        'https://m.media-amazon.com/images/I/71-6j-a7uGL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/81+M-j-i-7L._AC_SL1500_.jpg'
    ],
    colors: ['Preto'],
    category: 'Monitores',
    description: 'Expanda seus horizontes. Monitor curvo UltraWide com taxa de atualização de 144Hz para imersão total em jogos e produtividade.',
    details: [
        'Resolução: WQHD (3440 x 1440)',
        'Painel: IPS Curvo',
        'Taxa de Atualização: 144Hz',
        'Tempo de Resposta: 1ms'
    ]
  },
  { 
    id: '8', 
    name: 'Teclado Mecânico RGB', 
    price: 699.00, 
    image: 'https://m.media-amazon.com/images/I/716+3-1-5L._AC_SL1500_.jpg',
    images: [
        'https://m.media-amazon.com/images/I/716+3-1-5L._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71b3O-XaD+L._AC_SL1500_.jpg'
    ],
    colors: ['Switch Blue', 'Switch Red', 'Switch Brown'],
    category: 'Periféricos',
    description: 'Digite com estilo e precisão. Teclado mecânico com switches trocáveis, estrutura em alumínio e iluminação RGB por tecla.',
    details: [
        'Formato: TKL (Tenkeyless)',
        'Conexão: USB-C removível',
        'Keycaps: PBT Double-shot'
    ]
  },
   { 
    id: '9', 
    name: 'Teclado Mecânico RGB', 
    price: 699.00, 
    image: 'https://m.media-amazon.com/images/I/716+3-1-5L._AC_SL1500_.jpg',
    images: [
        'https://m.media-amazon.com/images/I/716+3-1-5L._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71b3O-XaD+L._AC_SL1500_.jpg'
    ],
    colors: ['Switch Blue', 'Switch Red', 'Switch Brown'],
    category: 'Periféricos',
    description: 'Digite com estilo e precisão. Teclado mecânico com switches trocáveis, estrutura em alumínio e iluminação RGB por tecla.',
    details: [
        'Formato: TKL (Tenkeyless)',
        'Conexão: USB-C removível',
        'Keycaps: PBT Double-shot'
    ]
  },
   { 
    id: '10', 
    name: 'Teclado Mecânico RGB', 
    price: 699.00, 
    image: 'https://m.media-amazon.com/images/I/716+3-1-5L._AC_SL1500_.jpg',
    images: [
        'https://m.media-amazon.com/images/I/716+3-1-5L._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71b3O-XaD+L._AC_SL1500_.jpg'
    ],
    colors: ['Switch Blue', 'Switch Red', 'Switch Brown'],
    category: 'Periféricos',
    description: 'Digite com estilo e precisão. Teclado mecânico com switches trocáveis, estrutura em alumínio e iluminação RGB por tecla.',
    details: [
        'Formato: TKL (Tenkeyless)',
        'Conexão: USB-C removível',
        'Keycaps: PBT Double-shot'
    ]
  },
   { 
    id: '11', 
    name: 'Teclado Mecânico RGB', 
    price: 699.00, 
    image: 'https://m.media-amazon.com/images/I/716+3-1-5L._AC_SL1500_.jpg',
    images: [
        'https://m.media-amazon.com/images/I/716+3-1-5L._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71b3O-XaD+L._AC_SL1500_.jpg'
    ],
    colors: ['Switch Blue', 'Switch Red', 'Switch Brown'],
    category: 'Periféricos',
    description: 'Digite com estilo e precisão. Teclado mecânico com switches trocáveis, estrutura em alumínio e iluminação RGB por tecla.',
    details: [
        'Formato: TKL (Tenkeyless)',
        'Conexão: USB-C removível',
        'Keycaps: PBT Double-shot'
    ]
  },
   { 
    id: '12', 
    name: 'Teclado Mecânico RGB', 
    price: 699.00, 
    image: 'https://m.media-amazon.com/images/I/716+3-1-5L._AC_SL1500_.jpg',
    images: [
        'https://m.media-amazon.com/images/I/716+3-1-5L._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71b3O-XaD+L._AC_SL1500_.jpg'
    ],
    colors: ['Switch Blue', 'Switch Red', 'Switch Brown'],
    category: 'Periféricos',
    description: 'Digite com estilo e precisão. Teclado mecânico com switches trocáveis, estrutura em alumínio e iluminação RGB por tecla.',
    details: [
        'Formato: TKL (Tenkeyless)',
        'Conexão: USB-C removível',
        'Keycaps: PBT Double-shot'
    ]
  },
];