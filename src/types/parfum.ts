export interface Parfum {
    id: string;
    name: string;
    description: string;
    shortDescription: string;
    image: string;
    category: 'homme' | 'femme' | 'mixte';
    isNew?: boolean;
    isLuxury?: boolean;
    price?: number;
    notes: {
        tete: string[];
        coeur: string[];
        fond: string[];
    };
}

export interface Category {
    id: string;
    name: string;
    value: 'homme' | 'femme' | 'mixte' | 'nouveautes' | 'luxe';
}
