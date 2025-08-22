import { BodyType, GenderType, PrismaClient, SeasonType, SizeType } from '@prisma/client'

const prisma = new PrismaClient()

async function createPajamas() {
  const pajamasData = [
    {
      name: 'Arctic Comfort',
      description: 'Pijama masculino em soft premium com detalhes em xadrez azul, ideal para noites frias',
      image: 'https://carrefourbr.vtexassets.com/arquivos/ids/180590878/conjunto-de-pijamas-cuffbow-fluffy-fleece-pijamas-de-inverno-familia.jpg?v=638680958154470000',
      price: 129.99,
      season: SeasonType.WINTER,
      type: BodyType.ADULT,
      gender: GenderType.MALE,
      favorite: false,
      onSale: false,
      salePercent: 10
    },
    {
      name: 'Night Forest',
      description: 'Conjunto em flanela estampada com motivos de floresta em tons de verde escuro',
      image: 'https://cdn.awsli.com.br/800x800/1398/1398809/produto/111210422/0ea9d6980f.jpg',
      price: 149.99,
      season: SeasonType.WINTER,
      type: BodyType.CHILD,
      gender: GenderType.MALE,
      favorite: false,
      onSale: false,
      salePercent: 20
    },
    {
      name: 'Summer Breeze',
      description: 'Pijama feminino em malha fresca com estampa floral delicada em tons pastéis',
      image: 'https://pijamaonline.vteximg.com.br/arquivos/ids/175869-1000-1000/00009492_4extra_pijama-masculino-regata-bcjn-algodao-palmeira.jpg?v=638369666180300000',
      price: 89.99,
      season: SeasonType.SUMMER,
      type: BodyType.ADULT,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: false,
      salePercent: 40
    },
    {
      name: 'Ocean Dreams',
      description: 'Conjunto short doll em tecido leve com estampa de conchas marinhas',
      image: 'https://praqnome.cdn.magazord.com.br/img/2023/05/produto/3990/6152-azul-indigo-5.jpeg?ims=650x975',
      price: 79.99,
      season: SeasonType.SUMMER,
      type: BodyType.ADULT,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: true,
      salePercent: 15
    },
    {
      name: 'Starry Night',
      description: 'Pijama unissex com estampa de estrelas e constelações em fundo azul marinho',
      image: 'https://misspijama.cdn.magazord.com.br/img/2024/08/produto/2561/3004-pijama-americano-mescla-estrela-3.jpg',
      price: 119.99,
      season: SeasonType.WINTER,
      type: BodyType.ADULT,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: true,
      salePercent: 20
    },
    {
      name: 'Little Explorer',
      description: 'Pijama infantil com estampa de dinossauros em fundo azul marinho',
      image: 'https://modamada.com.br/wp-content/uploads/2023/06/pijama-4-1.jpeg',
      price: 69.99,
      season: SeasonType.WINTER,
      type: BodyType.CHILD,
      gender: GenderType.MALE,
      favorite: false,
      onSale: false,
      salePercent: 20
    },
    {
      name: 'Sweet Dreams',
      description: 'Conjunto infantil em malha com unicórnios e arco-íris em tons pastel',
      image: 'https://images.tcdn.com.br/img/img_prod/792409/pijama_infantil_juvenil_feminino_sweet_dreams_c_shorts_pink_1022_1_3de9c7921e92336237d29f06527f7068.jpg',
      price: 59.99,
      season: SeasonType.SUMMER,
      type: BodyType.CHILD,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: false,
      salePercent: 30
    },
    {
      name: 'Mountain Cabin',
      description: 'Pijama masculino em flanela xadrez vermelho e preto estilo lenhador',
      image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/7d833ccf-6085-40a3-84be-37d282944396.__CR0,0,300,300_PT0_SX300_V1___.png',
      price: 139.99,
      season: SeasonType.WINTER,
      type: BodyType.ADULT,
      gender: GenderType.MALE,
      favorite: false,
      onSale: false,
      salePercent: 20
    },
    {
      name: 'Spring Blossom',
      description: 'Conjunto feminino em cetim com estampa de flores de cerejeira',
      image: 'https://ae01.alicdn.com/kf/S6eab8a5a01e04ca990d5b8d73713db685.jpg_640x640q90.jpg',
      price: 159.99,
      season: SeasonType.SUMMER,
      type: BodyType.ADULT,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: false,
      salePercent: 10
    },
    {
      name: 'Space Explorer',
      description: 'Pijama infantil com estampa de planetas e foguetes em fundo escuro',
      image: 'https://ph-cdn3.ecosweb.com.br/imagens01/foto/mkp240/pijamas/pijamas-para-meninas/pijama-infantil-manga-longa-foguete_2362075_600_1.jpg',
      price: 79.99,
      season: SeasonType.WINTER,
      type: BodyType.CHILD,
      gender: GenderType.MALE,
      favorite: false,
      onSale: true,
      salePercent: 10
    },
    {
      name: 'Tropical Paradise',
      description: 'Short doll feminino com estampa de flamingos e folhagens tropicais',
      image: 'https://cdn.awsli.com.br/2500x2500/279/279989/produto/211458620/flamingo-kids-iyhu6elr42.jpg',
      price: 89.99,
      season: SeasonType.SUMMER,
      type: BodyType.ADULT,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: false,
      salePercent: 80
    },
    {
      name: 'Autumn Leaves',
      description: 'Pijama unissex em malha com estampa de folhas em tons de outono',
      image: 'https://images.tcdn.com.br/img/img_prod/970725/blusa_pijama_unissex_manga_longa_estampa_outono_15057_1_a1c62611fb818fa2c12538b99ac29b2c.jpg',
      price: 119.99,
      season: SeasonType.AUTUMN,
      type: BodyType.ADULT,
      gender: GenderType.MALE,
      favorite: false,
      onSale: false,
      salePercent: 50
    },
    {
      name: 'Fairy Tales',
      description: 'Pijama infantil com estampa de fadas e castelos em tons pastéis',
      image: 'https://oibem.vtexassets.com/arquivos/ids/450840/Pijama_Infantil_Menina_Fadas_B_630.jpg?v=638840576895830000',
      price: 69.99,
      season: SeasonType.SUMMER,
      type: BodyType.CHILD,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: false,
      salePercent: 40
    },
    {
      name: 'Midnight Blue',
      description: 'Conjunto masculino em cetim azul marinho com listras sutis',
      image: 'https://m.media-amazon.com/images/I/31tNnbaFioL._SY1000_.jpg',
      price: 169.99,
      season: SeasonType.WINTER,
      type: BodyType.ADULT,
      gender: GenderType.MALE,
      favorite: false,
      onSale: true,
      salePercent: 25
    },
    {
      name: 'Garden Party',
      description: 'Pijama feminino em viscose com estampa de rosas e borboletas',
      image: 'https://caeju.cdn.magazord.com.br/img/2023/10/produto/5389/pijama-feminino-borboleta-rosa-toy2138-02-1.jpg?ims=fit-in/800x1200',
      price: 129.99,
      season: SeasonType.SUMMER,
      type: BodyType.ADULT,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: false,
      salePercent: 0
    },
    {
      name: 'Cozy Winter',
      description: 'Pijama masculino em plush com detalhes em moletom e acabamento premium',
      image: 'https://images.tcdn.com.br/img/img_prod/726359/pijama_masc_longo_plush_1375_2_bdc7ae9713fc1327ac6b59e93ad362e3.jpg',
      price: 189.99,
      season: SeasonType.WINTER,
      type: BodyType.ADULT,
      gender: GenderType.MALE,
      favorite: false,
      onSale: false,
      salePercent: 10
    },
    {
      name: 'Summer Nights',
      description: 'Short doll feminino em tecido leve com estampa de estrelas cadentes',
      image: 'https://50461.cdn.simplo7.net/static/50461/sku/pijama-feminino-pijama-curto-short-doll-estrelas--p-1591212618449.jpg',
      price: 99.99,
      season: SeasonType.SUMMER,
      type: BodyType.ADULT,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: true,
      salePercent: 15
    },
    {
      name: 'Safari Adventure',
      description: 'Pijama infantil com estampa de animais da selva em tons terrosos',
      image: 'https://theminiforest.vteximg.com.br/arquivos/ids/224226-560-735/30005_pijama-infantil-meia-estacao_the-mini-forest_squirrel_menino-de-pijama.png?v=638612255406630000',
      price: 75.99,
      season: SeasonType.WINTER,
      type: BodyType.CHILD,
      gender: GenderType.MALE,
      favorite: false,
      onSale: false,
      salePercent: 20
    },
    {
      name: 'Moonlight Garden',
      description: 'Conjunto feminino em cetim com estampas florais noturnas',
      image: 'https://izzychic.com.br/cdn/shop/files/S91adb867a34b43279d4350cbe469334b7_1000x.jpg?v=1691527529',
      price: 179.99,
      season: SeasonType.SUMMER,
      type: BodyType.ADULT,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: false,
      salePercent: 70
    },
    {
      name: 'Winter Wonderland',
      description: 'Pijama infantil com tema natalino e detalhes em pelúcia',
      image: 'https://caeju.cdn.magazord.com.br/img/2023/10/produto/5310/pijama-infantil-feminino-doce-de-natal-toy1845-03-1.jpg?ims=fit-in/800x1200',
      price: 89.99,
      season: SeasonType.WINTER,
      type: BodyType.CHILD,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: true,
      salePercent: 20
    },
    {
      name: 'Ocean Breeze',
      description: 'Pijama masculino em algodão com estampa de ondas em tons de azul',
      image: 'https://beblast.cdn.magazord.com.br/img/2022/09/produto/1485/pijama-verao-masculino-plus-size-de-algodao.jpg?ims=630x945',
      price: 139.99,
      season: SeasonType.SUMMER,
      type: BodyType.ADULT,
      gender: GenderType.MALE,
      favorite: false,
      onSale: false,
      salePercent: 10
    },
    {
      name: 'Enchanted Forest',
      description: 'Pijama de Natal Dr. Seuss Grinch',
      image: 'https://m.media-amazon.com/images/I/51VCjhSWuBL._SY350_.jpg',
      price: 79.99,
      season: SeasonType.WINTER,
      type: BodyType.CHILD,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: false,
      salePercent: 20
    },
    {
      name: 'Mountain Lodge',
      description: 'Conjunto masculino em flanela com estampa xadrez em tons terrosos',
      image: 'https://images.tcdn.com.br/img/img_prod/726359/pijama_masc_aberto_longo_em_flanela_xadrez_1663_1_56013e07046fbe136342b65708a3a0b5.jpg',
      price: 159.99,
      season: SeasonType.WINTER,
      type: BodyType.ADULT,
      gender: GenderType.MALE,
      favorite: false,
      onSale: true,
      salePercent: 30
    },
    {
      name: 'Floral Dreams',
      description: 'Pijama feminino em viscose com delicadas flores em aquarela',
      image: 'https://images.tcdn.com.br/img/img_prod/726359/pijama_fem_aberto_calca_e_manga_curta_viscose_floral_1623_1_d769f99dbb618cf653dbc91f5f59c488.jpg',
      price: 145.99,
      season: SeasonType.SUMMER,
      type: BodyType.ADULT,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: false,
      salePercent: 10
    },
    {
      name: 'Racing Cars',
      description: 'Pijama infantil com estampas de carros de corrida em fundo azul',
      image: 'https://torratorra.vtexassets.com/arquivos/ids/2378545/667140000410276.jpg?v=638756601533700000',
      price: 69.99,
      season: SeasonType.SUMMER,
      type: BodyType.CHILD,
      gender: GenderType.MALE,
      favorite: false,
      onSale: true,
      salePercent: 10
    },
    {
      name: 'Nordic Winter',
      description: 'Conjunto masculino em soft com estampa de padrões nórdicos',
      image: 'https://ateliejoaovieira.com.br/cdn/shop/files/3697b1c607f332ae4a61a5fdae84f69a_8d64a7a1-b90d-4da6-90c4-44ef59b91463_288x.jpg?v=1749144481',
      price: 199.99,
      season: SeasonType.WINTER,
      type: BodyType.ADULT,
      gender: GenderType.MALE,
      favorite: false,
      onSale: false,
      salePercent: 0
    },
    {
      name: 'Butterfly Garden',
      description: 'Short doll infantil com estampa de borboletas coloridas',
      image: 'https://adaptive-images.uooucdn.com.br/tr:w-1100,h-1594,c-at_max,pr-true,q-90/a22426-ogxytnphtt0/pv/d7/0f/3e/28fbd9bee4af1c45c3b5fe7565.jpg',
      price: 79.99,
      season: SeasonType.SUMMER,
      type: BodyType.CHILD,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: false,
      salePercent: 20
    },
    {
      name: 'Autumn Comfort',
      description: 'Pijama feminino em malha canelada com detalhes em renda',
      image: 'https://ticialoungewear.com.br/cdn/shop/files/Conj_Joy_5.jpg?v=1724445528',
      price: 169.99,
      season: SeasonType.WINTER,
      type: BodyType.ADULT,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: true,
      salePercent: 25
    },
    {
      name: 'Superhero Dreams',
      description: 'Pijama infantil com estampas de super-heróis em cores vibrantes',
      image: 'https://ph-cdn3.ecosweb.com.br/imagens01/foto/mkp240/pijamas/pijamas-para-meninos/pijama-manga-curta-infantil-masculi_2361176_301_1.jpg',
      price: 85.99,
      season: SeasonType.SUMMER,
      type: BodyType.CHILD,
      gender: GenderType.MALE,
      favorite: false,
      onSale: false,
      salePercent: 10
    },
    {
      name: 'Marine Life',
      description: 'Conjunto masculino com estampa de âncoras e elementos náuticos',
      image: 'https://pijamaonline.vteximg.com.br/arquivos/ids/161756-551-683/00005723_1still_camisola-gestante-any-any-viscolycra-floral-ancora.jpg?v=636090271679070000',
      price: 149.99,
      season: SeasonType.SUMMER,
      type: BodyType.ADULT,
      gender: GenderType.MALE,
      favorite: false,
      onSale: false,
      salePercent: 0
    }
  ]

  for (const pajama of pajamasData) {
    await prisma.pajama.create({
      data: {
        ...pajama,
        pajamaSize: {
          create: [
            { size: SizeType.PP, stockQuantity: 10 },
            { size: SizeType.P, stockQuantity: 15 },
            { size: SizeType.M, stockQuantity: 20 },
            { size: SizeType.G, stockQuantity: 15 },
            { size: SizeType.GG, stockQuantity: 10 }
          ]
        }
      }
    })
  }
}

export async function seed() {
  // Create admin user
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      name: 'Admin User',
      username: 'Admin',
      email: 'admin@example.com',
      // password: 'ybp_whf3wxn2xdr6MTE'
      password: '$2a$12$y7AWvv8D1P9AVn2G8XkNZOXyrMZ658QFJyR.2kxM.oP/wmgB/.7.2',
    },
  })

  // Create pajamas
  await createPajamas()
}

seed()
  .then(() => {
    console.log('Seeding completed successfully.')
    prisma.$disconnect()
    process.exit(0)
  })
  .catch((error) => {
    console.error('Error during seeding:', error)
    prisma.$disconnect()
    process.exit(1)
  })
