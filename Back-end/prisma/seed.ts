import { BodyType, GenderType, PrismaClient, SeasonType, SizeType } from '@prisma/client'

const prisma = new PrismaClient()

async function createPajamas() {
  const pajamasData = [
    {
      name: 'Arctic Comfort',
      description: 'Pijama masculino em soft premium com detalhes em xadrez azul, ideal para noites frias',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/7618163028846795450_0',
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
      image: 'http://googleusercontent.com/image_collection/image_retrieval/632983514337349163_0',
      price: 149.99,
      season: SeasonType.WINTER,
      type: BodyType.ADULT,
      gender: GenderType.MALE,
      favorite: false,
      onSale: false,
      salePercent: 20
    },
    {
      name: 'Summer Breeze',
      description: 'Pijama feminino em malha fresca com estampa floral delicada em tons pastéis',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/11886172474400748795_0',
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
      image: 'http://googleusercontent.com/image_collection/image_retrieval/15551919343196967956_0',
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
      image: 'http://googleusercontent.com/image_collection/image_retrieval/7583261537723985514_0',
      price: 119.99,
      season: SeasonType.WINTER,
      type: BodyType.ADULT,
      gender: GenderType.MALE,
      favorite: false,
      onSale: true,
      salePercent: 20
    },
    {
      name: 'Little Explorer',
      description: 'Pijama infantil com estampa de dinossauros em fundo azul marinho',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/9996912513721111582_0',
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
      image: 'http://googleusercontent.com/image_collection/image_retrieval/8253416225138991535_0',
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
      image: 'http://googleusercontent.com/image_collection/image_retrieval/3676037682189551591_0',
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
      image: 'http://googleusercontent.com/image_collection/image_retrieval/10741642136878756709_0',
      price: 159.99,
      season: SeasonType.SPRING,
      type: BodyType.ADULT,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: false,
      salePercent: 10
    },
    {
      name: 'Space Explorer',
      description: 'Pijama infantil com estampa de planetas e foguetes em fundo escuro',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/4898211836515878482_0',
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
      image: 'http://googleusercontent.com/image_collection/image_retrieval/9095108247271243553_0',
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
      image: 'http://googleusercontent.com/image_collection/image_retrieval/13704334155294754496_0',
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
      image: 'http://googleusercontent.com/image_collection/image_retrieval/9925933836149119147_0',
      price: 69.99,
      season: SeasonType.SPRING,
      type: BodyType.CHILD,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: false,
      salePercent: 40
    },
    {
      name: 'Midnight Blue',
      description: 'Conjunto masculino em cetim azul marinho com listras sutis',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/13144594824730347432_0',
      price: 169.99,
      season: SeasonType.AUTUMN,
      type: BodyType.ADULT,
      gender: GenderType.MALE,
      favorite: false,
      onSale: true,
      salePercent: 25
    },
    {
      name: 'Garden Party',
      description: 'Pijama feminino em viscose com estampa de rosas e borboletas',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/11167863785064617148_0',
      price: 129.99,
      season: SeasonType.SPRING,
      type: BodyType.ADULT,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: false,
      salePercent: 0
    },
    {
      name: 'Cozy Winter',
      description: 'Pijama masculino em plush com detalhes em moletom e acabamento premium',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/16574714972778805096_0',
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
      image: 'http://googleusercontent.com/image_collection/image_retrieval/9489178015199916245_0',
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
      image: 'http://googleusercontent.com/image_collection/image_retrieval/4743058411450939182_0',
      price: 75.99,
      season: SeasonType.SPRING,
      type: BodyType.CHILD,
      gender: GenderType.MALE,
      favorite: false,
      onSale: false,
      salePercent: 20
    },
    {
      name: 'Moonlight Garden',
      description: 'Conjunto feminino em cetim com estampas florais noturnas',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/16213988188748433119_0',
      price: 179.99,
      season: SeasonType.AUTUMN,
      type: BodyType.ADULT,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: false,
      salePercent: 70
    },
    {
      name: 'Winter Wonderland',
      description: 'Pijama infantil com tema natalino e detalhes em pelúcia',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/2482410733572768537_0',
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
      image: 'http://googleusercontent.com/image_collection/image_retrieval/14013824645870116505_0',
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
      description: 'Pijama infantil com estampa de fadas e duendes em fundo verde',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/17290865680376364195_0',
      price: 79.99,
      season: SeasonType.SPRING,
      type: BodyType.CHILD,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: false,
      salePercent: 20
    },
    {
      name: 'Mountain Lodge',
      description: 'Conjunto masculino em flanela com estampa xadrez em tons terrosos',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/15760832821893029095_0',
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
      image: 'http://googleusercontent.com/image_collection/image_retrieval/10566867711012146127_0',
      price: 145.99,
      season: SeasonType.SPRING,
      type: BodyType.ADULT,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: false,
      salePercent: 10
    },
    {
      name: 'Racing Cars',
      description: 'Pijama infantil com estampas de carros de corrida em fundo azul',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/11491429120178068979_0',
      price: 69.99,
      season: SeasonType.AUTUMN,
      type: BodyType.CHILD,
      gender: GenderType.MALE,
      favorite: false,
      onSale: true,
      salePercent: 10
    },
    {
      name: 'Nordic Winter',
      description: 'Conjunto masculino em soft com estampa de padrões nórdicos',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/5749372798317902452_0',
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
      image: 'http://googleusercontent.com/image_collection/image_retrieval/1970636413846276759_0',
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
      image: 'http://googleusercontent.com/image_collection/image_retrieval/2007274616375854313_0',
      price: 169.99,
      season: SeasonType.AUTUMN,
      type: BodyType.ADULT,
      gender: GenderType.FEMALE,
      favorite: false,
      onSale: true,
      salePercent: 25
    },
    {
      name: 'Superhero Dreams',
      description: 'Pijama infantil com estampas de super-heróis em cores vibrantes',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/14428019122265547095_0',
      price: 85.99,
      season: SeasonType.SPRING,
      type: BodyType.CHILD,
      gender: GenderType.MALE,
      favorite: false,
      onSale: false,
      salePercent: 10
    },
    {
      name: 'Marine Life',
      description: 'Conjunto masculino com estampa de âncoras e elementos náuticos',
      image: 'http://googleusercontent.com/image_collection/image_retrieval/9154884612757468170_0',
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
