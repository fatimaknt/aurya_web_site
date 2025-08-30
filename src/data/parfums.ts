import { Parfum } from '../types/parfum';

export const parfums: Parfum[] = [
  {
    id: '1',
    name: 'Mystère Nocturne',
    description: 'Un parfum mystérieux et envoûtant qui évoque la nuit étoilée. Une composition sophistiquée qui révèle ses secrets au fil du temps.',
    shortDescription: 'Mystérieux et envoûtant',
    image: '/images/parfum1.jpg',
    category: 'femme',
    isNew: true,
    isLuxury: true,
    price: 58000,
    notes: {
      tete: ['Bergamote', 'Rose noire'],
      coeur: ['Jasmin', 'Iris'],
      fond: ['Musc blanc', 'Bois de santal']
    }
  },
  {
    id: '2',
    name: 'Élégance Dorée',
    description: 'L\'essence même du luxe et de la sophistication. Un parfum qui incarne la grandeur et l\'élégance intemporelle.',
    shortDescription: 'Luxueux et sophistiqué',
    image: '/images/parfum2.jpg',
    category: 'homme',
    isLuxury: true,
    price: 62000,
    notes: {
      tete: ['Vétiver', 'Bergamote'],
      coeur: ['Lavande', 'Cardamome'],
      fond: ['Ambre', 'Bois de oud']
    }
  },
  {
    id: '3',
    name: 'Harmonie Mixte',
    description: 'Une fragrance universelle qui transcende les genres. Équilibrée et harmonieuse, elle s\'adapte à chaque personnalité.',
    shortDescription: 'Universel et équilibré',
    image: '/images/parfum3.jpg',
    category: 'mixte',
    isNew: true,
    notes: {
      tete: ['Citron', 'Bergamote'],
      coeur: ['Fleur d\'oranger', 'Rose'],
      fond: ['Musc', 'Vanille']
    }
  },
  {
    id: '4',
    name: 'Séduction Secrète',
    description: 'Un parfum qui révèle sa sensualité progressivement. Une invitation au mystère et à la découverte.',
    shortDescription: 'Sensuel et mystérieux',
    image: '/images/parfum4.jpg',
    category: 'femme',
    notes: {
      tete: ['Pêche', 'Framboise'],
      coeur: ['Gardenia', 'Tubéreuse'],
      fond: ['Patchouli', 'Vanille']
    }
  },
  {
    id: '5',
    name: 'Force Masculine',
    description: 'Un parfum puissant et affirmé qui incarne la force et la détermination. Pour l\'homme qui sait ce qu\'il veut.',
    shortDescription: 'Puissant et affirmé',
    image: '/images/parfum5.jpg',
    category: 'homme',
    notes: {
      tete: ['Poivre noir', 'Bergamote'],
      coeur: ['Cèdre', 'Vétiver'],
      fond: ['Cuir', 'Bois de oud']
    }
  },
  {
    id: '6',
    name: 'Luxe Absolu',
    description: 'Le summum du raffinement et de l\'excellence. Un parfum d\'exception pour ceux qui recherchent l\'unique.',
    shortDescription: 'Exceptionnel et raffiné',
    image: '/images/parfum6.jpg',
    category: 'mixte',
    isLuxury: true,
    price: 78000,
    notes: {
      tete: ['Safran', 'Rose de Damas'],
      coeur: ['Oud', 'Jasmin'],
      fond: ['Ambre gris', 'Bois de oud']
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
