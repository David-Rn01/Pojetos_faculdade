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
    price: 4299.90, 
    image: 'https://www.magazineluiza.com.br/samsung-galaxy-s25-ultra-5g-256gb-galaxy-ai-titanio-azul-69-12gb-ram-cam-quadrupla-200-50-10-50mp-bateria-5000mah-dual-chip/p/238920600/te/g25u/?&seller_id=magazineluiza&utm_source=google&utm_medium=cpc&utm_term=79684&utm_campaign=google_eco_per_ven_pla_mob_apo_1p_te-csp&utm_content=&partner_id=79684&gclsrc=aw.ds&gad_source=1&gad_campaignid=22578732921&gbraid=0AAAAAD4zZmSb5jRtGR85sdAqNSJdXMUlc&gclid=CjwKCAiA8vXIBhAtEiwAf3B-g-abF9Q0yRqyD-b9Pe6Y0eOhXGceW76806KLoHmLjzMs2a7hw1Vo-RoCMkUQAvD_BwE',
    images: [
        'https://m.media-amazon.com/images/I/51Adgl-DQtL._AC_SY300_SX300_QL70_ML2_.jpg',
        'https://m.media-amazon.com/images/I/81I-Gk-S8qL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/81qYRRavI2L._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/81mI8-S-h-L._AC_SL1500_.jpg'
    ],
    colors: ['Titânio Preto', 'Titânio Branco', 'Titânio Azul'],
    category: 'Smartphones',
    description: 'O Smartphone Pro X redefine a velocidade. Com chip A17, câmera de 48MP e tela ProMotion de 120Hz, é a ferramenta definitiva para criadores.',
    details: [
        'Tela: 6.7" Super Retina XDR',
        'Chip: A17 Pro',
        'Material: Titânio grau 5',
        'Conexão: USB-C 3.0'
    ]
  },
  { 
    id: '2', 
    name: 'Notebook UltraSlim Flashtech', 
    price: 7599.00, 
    image: 'https://www.magazineluiza.com.br/macbook-air-apple-13-chip-m4-cpu-10-nucleos-gpu-8-nucleos-neural-engine-16-nucleos-16gb-ram-ssd-256gb-meia-noite-mw123bz-a/p/bee45d2jg5/in/mack/?seller_id=kabum',
    images: [
        'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/7106jNnZa+L._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71oT-8W5-XL._AC_SL1500_.jpg'
    ],
    colors: ['Cinza Espacial', 'Prata'],
    category: 'Notebooks',
    description: 'Leve, poderoso e pronto para tudo. O UltraSlim vem com o novo processador M3, 18 horas de bateria e uma tela Liquid Retina espetacular.',
    details: [
        'Tela: 14.2" Liquid Retina',
        'Chip: M3 com GPU 10 núcleos',
        'Memória: 16GB RAM Unificada',
        'Armazenamento: 512GB SSD'
    ]
  },
  { 
    id: '3', 
    name: 'Fone de Ouvido Flashtech Bass', 
    price: 899.90, 
    image: 'https://www.magazineluiza.com.br/airpods-4-apple-com-estojo-de-recarga-usb-c-branco-mxp63bz-a/p/dfa1g7kfb4/ea/aair/?seller_id=kabum',
    images: [
        'https://m.media-amazon.com/images/I/61v02CJ6cJL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/719hDk8t0iL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71b2Vl-5-7L._AC_SL1500_.jpg'
    ],
    colors: ['Preto Fosco', 'Branco Neve'],
    category: 'Acessórios',
    description: 'Sinta a batida. Cancelamento de ruído ativo de nível profissional, som imersivo 360 e um design confortável para usar o dia todo.',
    details: [
        'Cancelamento de Ruído: Ativo (ANC)',
        'Bateria: 24h (com estojo)',
        'Resistência: IPX7 (água e suor)'
    ]
  },
  { 
    id: '4', 
    name: 'Smartwatch 2.0 GPS', 
    price: 1899.50, 
    image: 'https://www.magazineluiza.com.br/apple-watch-se-3-gps-caixa-estelar-de-aluminio-40mm-pulseira-esportiva-estelar-p-m/p/240598400/te/wats/?seller_id=magazineluiza',
    images: [
        'https://m.media-amazon.com/images/I/61s4-e5v0ZL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71L-l1jK1dL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71XMTLtZd5L._AC_SL1500_.jpg'
    ],
    colors: ['Preto Meia-noite', 'Estelar', 'Vermelho'],
    category: 'Acessórios',
    description: 'Seu parceiro de treino ideal. Com GPS integrado, monitoramento cardíaco avançado e resistência à água, o Smartwatch 2.0 acompanha seu ritmo.',
    details: [
        'Tela: OLED Sempre Ativa',
        'Sensores: Cardíaco, Oxigênio no sangue',
        'Conectividade: GPS + Cellular'
    ]
  },
  { 
    id: '5', 
    name: 'Carregador Rápido 65W', 
    price: 299.00, 
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