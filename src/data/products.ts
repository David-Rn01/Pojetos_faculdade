// Este é o nosso "banco de dados" de produtos.

//define o modelo de dados padão para os produtos
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

//lista de todos os produtos
export const mockProducts: Product[] = [
  { 
    id: '1', 
    name: 'Sansung s25 Ultra', 
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
    image: 'https://m.media-amazon.com/images/I/41H4AoY5xbL._AC_SX342_.jpg',
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
        'https://m.media-amazon.com/images/I/5166ogGvNYL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/61PduSmu8GL._AC_SL1500_.jpg'
    ],
    colors: ['Branco'],
    category: 'Outros',
    description: 'Conecte seu aparelho com conector Lightning a um dispositivo com porta USB-C ou Thunderbolt 3 (USB-C) para recarregar e sincronizar. Você também pode conectá-lo ao seu iPad com USB-C para recarregar. Você também pode usar este cabo com o adaptador de energia USB-C da Apple de 18W, 20W, 29W, 30W, 61W, 87W ou 96W para recarregar seu aparelho com iOS e ainda aproveitar o recurso de recarga rápida em alguns modelos de iPhone e iPad.',
    details: [
        'Marca	Apple',
        'Tipo de conector	Lightning, USB tipo C',
        'Tipo de cabo	USB',
        'Dispositivos compatíveis	Smartphone',
        'Características especiais	Carregamento rápido'
    ]
  },
  { 
    id: '6', 
    name: 'Mouse Gamer Sem Fio Logitech G Pro X Superlight 2 DEX, Lightspeed, 44.000 DPI, Design Assimétrico para Destros', 
    price: 750.00, 
    image: 'https://www.magazineluiza.com.br/mouse-gamer-sem-fio-logitech-g-pro-x-superlight-2-dex-lightspeed-44-000-dpi-design-assimetrico-para-destros-branco-910-007364/p/dd55f17b6e/in/rato/?seller_id=kabum',
    images: [
        'https://m.magazineluiza.com.br/a-static/420x420/mouse-gamer-sem-fio-logitech-g-pro-x-superlight-2-dex-lightspeed-44-000-dpi-design-assimetrico-para-destros-branco-910-007364/kabum/677447/7cec25fda2017d278f2e40c0696cd7b0.jpeg',
        'https://m.media-amazon.com/images/I/61r-cOXR-eL._AC_SY450_.jpg',
        'https://m.media-amazon.com/images/I/81IF75prsAL._AC_SY450_.jpg'
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
        'https://m.media-amazon.com/images/I/81x-2JD6s7L._AC_SX679_.jpg',
        'https://m.media-amazon.com/images/I/81dyiwWPbXL._AC_SX679_.jpg'
    ],
    colors: ['fosco'],
    category: 'Monitores',
    description: 'MONITOR SAMSUNG ODYSSEY OLED G9 49 Tela curva de 49" Dual QHD. Com uma tela Super Ultra-Wide.Monitor Oled. Monitor 49" curvo. Com uma tela Super Ultra-Wide',
    details: [
        'Marca	Samsung',
        'Tamanho da tela	49 Polegadas',
        'Resolução	DQHD (5,120 x 1,440)',
        'Proporção de tela	32:9',
        'Descrição da superfície da tela	Fosco'
    ]
  },
  { 
    id: '8', 
    name: 'Teclado Mecânico para Games Hykekit x FGG MADLIONS MAD 60 HE RGB 60%',
    price: 533.00, 
    image: 'https://m.media-amazon.com/images/I/716+3-1-5L._AC_SL1500_.jpg',
    images: [
        'https://m.media-amazon.com/images/I/61ZPIlnLfBL._AC_SY450_.jpg',
        'https://m.media-amazon.com/images/I/61hYZOix4lL._AC_SX300_SY300_QL70_ML2_.jpg'
    ],
    colors: ['teclado preto', 'teclado branco'],
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
    name: 'Cadeira Gamer XT Racer Reclinável Giratória Preta Platinum W Series', 
    price: 1044.00, 
    image: 'https://m.media-amazon.com/images/I/716+3-1-5L._AC_SL1500_.jpg',
    images: [
        'http://localhost:3000/_next/image?url=https%3A%2F%2Fm.magazineluiza.com.br%2Fa-static%2F420x420%2Fcadeira-gamer-xt-racer-reclinavel-giratoria-preta-platinum-w-series%2Fmagazineluiza%2F225508500%2F7e722a70bce5446135ccc95881e8e5a1.jpg&w=1080&q=75',
        'https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/p/g/pg-mry-blks01312679.jpg'
    ],
    colors: ['Preto'],
    category: 'Periféricos',
    description: 'cadeira gamer reclinável com suporte lombar e almofada para cabeça, design ergonômico para conforto prolongado durante jogos.',
    details: [
        'Estrutura: Aço reforçado',
        'Revestimento: Couro PU premium',
        'Ajustes: Altura, inclinação e apoio de braço 4D'
    ]
  },
   { 
    id: '10', 
    name: 'Mesa Gamer KBM', 
    price: 799.00, 
    image: 'https://m.media-amazon.com/images/I/716+3-1-5L._AC_SL1500_.jpg',
    images: [
        'https://m.media-amazon.com/images/I/71zC-rO-UQL._AC_SX679_.jpg',
        'https://m.media-amazon.com/images/I/617R75NGlBL._AC_SX679_.jpg'
    ],
    colors: ['Preto'],
    category: 'Acessórios',
    description: 'Mesa, gamer, Escrivaninha.',
    details: [
        'Marca	Genérico',
        'Forma	Retangular',
        'Design de mesa	Escrivaninha',
        'Dimensões do produto	60P x 120L x 73A centímetros',
        'Cor	Preto',
        'Etilo Gamer'
    ]
  },
   { 
    id: '11', 
    name: 'Mouse Dazz', 
    price: 74.00, 
    image: 'https://m.media-amazon.com/images/I/716+3-1-5L._AC_SL1500_.jpg',
    images: [
        'http://localhost:3000/_next/image?url=https%3A%2F%2Fm.magazineluiza.com.br%2Fa-static%2F420x420%2Fmousepad-dazz-hybrid-daskmat-octopus-extra-grande-900x400mm-borda-costurada-preto-estampado-62000141%2Fkabum%2F363053%2Fc0cbfad01e3a670aeccec1f2a66607a8.jpeg&w=1080&q=75',
        'https://th.bing.com/th/id/OIP.1Zx1WIaXueRD1npyufB-uQHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'
    ],
    colors: ['Ligh','Dark'],
    category: 'Periféricos',
    description: 'Mouse pad Polvo',
    details: []
       
  },
   { 
    id: '12', 
    name: 'Gabinete Gamer Aquário Em Vidro Com 4 Fans Rgb Gb1797 Cor Branco', 
    price: 379.00, 
    image: 'https://m.media-amazon.com/images/I/716+3-1-5L._AC_SL1500_.jpg',
    images: [
        'http://localhost:3000/_next/image?url=https%3A%2F%2Fm.magazineluiza.com.br%2Fa-static%2F420x420%2Fgabinete-gamer-rise-mode-galaxy-glass-mid-tower-atx-lateral-e-frontal-em-vidro-temperado-sem-fans-branco-rm-ga-gg-fw%2Fkabum%2F320909%2Fa5c9fdb01abf19fe8e1479f87bce1852.jpeg&w=1080&q=75',
        'https://http2.mlstatic.com/D_Q_NP_949300-MLA91558405584_092025-F.webp'
    ],
    colors: ['Branco'],
    category: 'Periféricos',
    description: 'Digite com estilo e precisão. Teclado mecânico com switches trocáveis, estrutura em alumínio e iluminação RGB por tecla.',
    details: [
        'Tipo mini tower.',
        'Compatível con placas mãe Micro-ATX',
        'Inclui 4 fans rgb.'
    ]
  },
];