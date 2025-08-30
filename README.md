# AURYA ✨ - Site Web de Parfums

Un site web élégant et mystérieux pour la marque de parfums AURYA au Sénégal, construit avec React et Material UI.

## 🎯 Concept

**"L'élégance du mystère en chaque goutte"**

AURYA incarne la sophistication et le mystère à travers une collection exclusive de fragrances qui transcendent le simple plaisir olfactif, en s'inspirant de la richesse culturelle sénégalaise.

## ✨ Fonctionnalités

### 🏠 Page d'Accueil
- Bannière principale (Hero section) avec logo AURYA
- Slogan accrocheur
- Bouton "Voir nos parfums"
- Aperçu des parfums vedettes

### 🛍️ Catalogue des Parfums
- Grille responsive (4 colonnes PC, 2 tablette, 1 mobile)
- Filtres par catégorie (Homme, Femme, Mixte, Nouveautés, Luxe)
- Barre de recherche par nom ou senteur
- Cartes Material UI avec animations

### 🔍 Détails des Parfums
- Grande photo du parfum
- Description détaillée
- Notes olfactives (Tête, Cœur, Fond)
- Prix en FCFA (préparation e-commerce)

### 📖 À Propos
- Histoire et vision d'AURYA
- Photo lifestyle
- Valeurs : Mystère, Élégance, Unicité

### 📞 Contact & Réseaux
- Formulaire de contact
- Bouton WhatsApp direct
- Liens vers Instagram, Facebook
- Livraison dans tout le Sénégal

## 🚀 Technologies

- **React 18** avec TypeScript
- **Material UI (MUI)** pour l'interface
- **React Router** pour la navigation
- **Emotion** pour les styles
- **Responsive Design** mobile-first

## 🎨 Design

### Thème
- **Couleurs principales** : Noir (#000000) et Doré (#D4AF37)
- **Typographie** : Playfair Display (serif) pour les titres
- **Style** : Élégant, mystérieux, sophistiqué

### Animations
- Fade-in des parfums au scroll
- Transitions douces sur les cartes
- Effets hover élégants

## 📱 Responsive

- **Desktop** : 4 colonnes
- **Tablette** : 2 colonnes  
- **Mobile** : 1 colonne
- Navigation adaptative avec Drawer mobile

## 🏃‍♂️ Installation et Lancement

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm start

# Construire pour la production
npm run build
```

## 📁 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Navigation.tsx  # Barre de navigation
│   ├── HeroSection.tsx # Section héro
│   └── ParfumCard.tsx  # Carte de parfum
├── pages/              # Pages de l'application
│   ├── HomePage.tsx    # Page d'accueil
│   ├── ParfumsPage.tsx # Catalogue des parfums
│   ├── ParfumDetailPage.tsx # Détails d'un parfum
│   ├── AboutPage.tsx   # Page à propos
│   └── ContactPage.tsx # Page contact
├── data/               # Données des parfums
│   └── parfums.ts      # Collection de parfums
├── types/              # Types TypeScript
│   └── parfum.ts       # Interface Parfum
└── theme.ts            # Thème Material UI personnalisé
```

## 🎭 Parfums Disponibles

- **Mystère Nocturne** (Femme, Nouveau, Luxe) - 58 000 FCFA
- **Élégance Dorée** (Homme, Luxe) - 62 000 FCFA
- **Harmonie Mixte** (Mixte, Nouveau) - Prix sur demande
- **Séduction Secrète** (Femme) - Prix sur demande
- **Force Masculine** (Homme) - Prix sur demande
- **Luxe Absolu** (Mixte, Luxe) - 78 000 FCFA

## 🔮 Évolutions Futures

- Mode sombre/clair
- Carrousel d'images
- Section témoignages clients
- Intégration e-commerce
- Blog et actualités

## 📄 Licence

Projet créé pour AURYA - Tous droits réservés

---

**AURYA ✨** - L'élégance du mystère en chaque goutte
