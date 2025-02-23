# 🛍️ Modern E-commerce Template

Un template professionnel et moderne de site e-commerce construit avec les dernières technologies web.

## 🚀 Guide de démarrage rapide

### Prérequis

- Node.js 18.17 ou plus récent
- pnpm 8.0 ou plus récent

### Installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/modern-ecommerce-template.git
cd modern-ecommerce-template
```

2. Installez les dépendances :
```bash
pnpm install
```

3. Créez un fichier `.env` à la racine du projet et ajoutez les variables d'environnement nécessaires :
```env
NEXT_PUBLIC_API_URL=votre_api_url
```

4. Lancez le serveur de développement :
```bash
pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 📦 Structure du projet

```
├── src/
│   ├── app/           # Pages de l'application
│   ├── components/    # Composants React réutilisables
│   ├── lib/          # Utilitaires et configurations
│   ├── store/        # État global (Zustand)
│   └── styles/       # Styles globaux
├── public/           # Fichiers statiques
└── package.json      # Dépendances et scripts
```

## 🛠️ Construit avec

- [Next.js 14](https://nextjs.org/) - Framework React avec rendu serveur
- [React 18](https://reactjs.org/) - Bibliothèque UI
- [TypeScript](https://www.typescriptlang.org/) - Pour un code plus robuste
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- [shadcn/ui](https://ui.shadcn.com/) - Composants UI réutilisables
- [Zustand](https://zustand-demo.pmnd.rs/) - Gestion d'état
- [Framer Motion](https://www.framer.com/motion/) - Animations

## ✨ Fonctionnalités

- 🎨 Design responsive et moderne
- 🌓 Mode sombre/clair
- 🛒 Panier d'achat persistant
- 💳 Processus de paiement intuitif
- 🔍 Filtres de recherche avancés
- ⚡ Performance optimisée

## 🔄 Scripts disponibles

- `pnpm dev` - Lance le serveur de développement
- `pnpm build` - Crée une version de production
- `pnpm start` - Lance la version de production
- `pnpm lint` - Vérifie le code avec ESLint
- `pnpm test` - Lance les tests

## 📝 Commandes Git conventionnelles

- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Mise en forme
- `refactor`: Refactorisation
- `test`: Tests
- `chore`: Maintenance

## 📱 Responsive Design

Le template est optimisé pour :
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1440px+)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou créer une pull request.

## 📄 License

MIT