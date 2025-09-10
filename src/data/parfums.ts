import { Parfum } from '../types/parfum';

export const parfums: Parfum[] = [
  {
    id: '1',
    name: 'Bleu de Chanel EDP',
    description: 'Parfum masculin de la maison Chanel. Eau de parfum. Fragrance fraîche et moderne.',
    shortDescription: 'Parfum masculin Chanel ',
    image: '/images/Bleu De Chanel EDP - 3_4.jpg',
    category: 'homme',
    isLuxury: true,
    price: 12000,
    notes: {
      tete: ['Citron', 'Menthe', 'Pamplemousse rose'],
      coeur: ['Gingembre', 'Jasmin', 'Neroli'],
      fond: ['Encens', 'Santal', 'Cèdre']
    }
  },
  {
    id: '2',
    name: 'Dior Sauvage EDP',
    description: 'Parfum masculin de la maison Dior. Eau de parfum 100ml. Fragrance audacieuse et moderne.',
    shortDescription: 'Parfum masculin Dior 100ml',
    image: '/images/diorsauvage.jpg',
    category: 'homme',
    isLuxury: true,
    price: 13000,
    notes: {
      tete: ['Calabre', 'Bergamote', 'Poivre'],
      coeur: ['Sichuan', 'Ambroxan'],
      fond: ['Labdanum', 'Ambre']
    }
  },
  {
    id: '3',
    name: 'J\'adore Dior EDP',
    description: 'Parfum féminin de la maison Dior. Eau de parfum. Fragrance lumineuse et sensuelle.',
    shortDescription: 'Parfum féminin Dior',
    image: '/images/jadore.jpg',
    category: 'femme',
    isLuxury: true,
    price: 10000,
    notes: {
      tete: ['Ylang-ylang', 'Bergamote'],
      coeur: ['Rose', 'Jasmin'],
      fond: ['Ambre', 'Musc']
    }
  },
  {
    id: '4',
    name: 'One Million Paco Rabanne EDP',
    description: 'Parfum masculin de la maison Paco Rabanne. Eau de parfum. Fragrance audacieuse et distinctive.',
    shortDescription: 'Parfum masculin Paco Rabanne',
    image: '/images/onemillion.jpg',
    category: 'homme',
    isLuxury: true,
    price: 13000,
    notes: {
      tete: ['Pamplemousse', 'Menthe'],
      coeur: ['Rose', 'Épices'],
      fond: ['Cuir blanc', 'Ambre']
    }
  },
  {
    id: '5',
    name: 'Poison Dior EDP',
    description: 'Parfum féminin de la maison Dior. Eau de parfum. Fragrance intense et envoûtante.',
    shortDescription: 'Parfum féminin Dior',
    image: '/images/poison.jpg',
    category: 'femme',
    isLuxury: true,
    price: 12000,
    notes: {
      tete: ['Tubéreuse', 'Jasmin'],
      coeur: ['Rose', 'Oeillet'],
      fond: ['Ambre', 'Vanille']
    }
  },
  {
    id: '6',
    name: 'Scandale Jean Paul Gaultier EDP',
    description: 'Parfum féminin de la maison Jean Paul Gaultier. Eau de parfum. Fragrance audacieuse et distinctive.',
    shortDescription: 'Parfum féminin Jean Paul Gaultier',
    image: '/images/scandale2.jpg',
    category: 'femme',
    isLuxury: true,
    price: 13000,
    notes: {
      tete: ['Framboise', 'Rose'],
      coeur: ['Jasmin', 'Tubéreuse'],
      fond: ['Patchouli', 'Vanille']
    }
  },
  {
    id: '7',
    name: 'Musk tahara',
    description: 'Parfum unisexe de la maison Mugler. Eau de parfum. Fragrance sensuelle et enveloppante.',
    shortDescription: 'Parfum unisexe Mugler',
    image: '/images/musk2.jpg',
    category: 'mixte',
    isLuxury: true,
    price: 2000,
    notes: {
      tete: ['Bergamote', 'Lavande'],
      coeur: ['Musc', 'Jasmin'],
      fond: ['Santal', 'Ambre']
    }
  },
  {
    id: '8',
    name: 'Terre d\'Hermès ',
    description: 'Parfum masculin de la maison Hermès. Eau de parfum. Fragrance sophistiquée et naturelle.',
    shortDescription: 'Parfum masculin Hermès',
    image: '/images/terredherme.jpg',
    category: 'homme',
    isLuxury: true,
    price: 15000,
    notes: {
      tete: ['Orange', 'Pamplemousse'],
      coeur: ['Flint', 'Rose'],
      fond: ['Cèdre', 'Patchouli']
    }
  },
  {
    id: '9',
    name: 'Interdit Givenchy ',
    description: 'Parfum féminin de la maison Givenchy. Eau de parfum. Fragrance audacieuse et distinctive.',
    shortDescription: 'Parfum féminin Givenchy',
    image: '/images/interdit.jpg',
    category: 'femme',
    isLuxury: true,
    price: 15000,
    notes: {
      tete: ['Bergamote', 'Rose'],
      coeur: ['Jasmin', 'Tubéreuse'],
      fond: ['Vanille', 'Ambre']
    }
  },
  {
    id: '10',
    name: 'Bois d\'Argent Dior',
    description: 'Parfum masculin de la maison Dior. Eau de parfum 100ml. Fragrance élégante et raffinée.',
    shortDescription: 'Parfum masculin Dior 100ml',
    image: '/images/boidargent.jpg',
    category: 'homme',
    isLuxury: true,
    price: 15000,
    notes: {
      tete: ['Bergamote', 'Lavande'],
      coeur: ['Bois de rose', 'Iris'],
      fond: ['Santal', 'Ambre']
    }
  },
  {
    id: '11',
    name: 'Moussuf',
    description: 'Parfum masculin traditionnel. Eau de parfum. Fragrance authentique et envoûtante.',
    shortDescription: 'Parfum masculin traditionnel',
    image: '/images/moussuf.jpg',
    category: 'homme',
    isLuxury: true,
    price: 12000,
    notes: {
      tete: ['Bergamote', 'Citron'],
      coeur: ['Musc', 'Ambre'],
      fond: ['Bois de santal', 'Vanille']
    }
  },
  {
    id: '12',
    name: 'Moussouf',
    description: 'Parfum feminin traditionnel. Eau de parfum . Fragrance authentique et envoûtante.',
    shortDescription: 'Parfum feminin traditionnel',
    image: '/images/moussouf2.jpg',
    category: 'femme',
    isLuxury: true,
    price: 12000,
    notes: {
      tete: ['Bergamote', 'Citron'],
      coeur: ['Musc', 'Ambre'],
      fond: ['Bois de santal', 'Vanille']
    }
  },
  {
    id: '13',
    name: 'Black Sense Femme',
    description: 'Parfum féminin élégant et sophistiqué. Eau de parfum. Fragrance moderne et sensuelle.',
    shortDescription: 'Parfum féminin élégant et sophistiqué',
    image: '/images/blacksensef.jpg',
    category: 'femme',
    isLuxury: false,
    price: 5000,
    notes: {
      tete: ['Bergamote', 'Pamplemousse'],
      coeur: ['Rose', 'Jasmin'],
      fond: ['Musc', 'Bois de santal']
    }
  },
  {
    id: '14',
    name: 'Black Sense Homme',
    description: 'Parfum masculin moderne et viril. Eau de parfum. Fragrance puissante et charismatique.',
    shortDescription: 'Parfum masculin moderne et viril',
    image: '/images/blacksensehomme.jpg',
    category: 'homme',
    isLuxury: false,
    price: 5000,
    notes: {
      tete: ['Citron', 'Lavande'],
      coeur: ['Géranium', 'Poivre'],
      fond: ['Bois de cèdre', 'Ambre']
    }
  },
  {
    id: '15',
    name: 'Private',
    description: 'Parfum exclusif et mystérieux. Eau de parfum. Fragrance unique et envoûtante.',
    shortDescription: 'Parfum exclusif et mystérieux',
    image: '/images/private.jpg',
    category: 'mixte',
    isLuxury: true,
    price: 6000,
    notes: {
      tete: ['Néroli', 'Cardamome'],
      coeur: ['Rose noire', 'Patchouli'],
      fond: ['Oud', 'Vanille']
    }
  }

];

export const categories = [
  { id: '1', name: 'Homme', value: 'homme' as const },
  { id: '2', name: 'Femme', value: 'femme' as const },
  { id: '3', name: 'Mixte', value: 'mixte' as const },
  { id: '4', name: 'Nouveautés', value: 'nouveautes' as const },
  { id: '5', name: 'Luxe', value: 'luxe' as const }
];
