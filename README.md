# 🌯 Snack Ça Marange — Site vitrine

Site vitrine statique (HTML / CSS / JS pur, sans framework) pour le snack **Snack Ça Marange**, à Marange-Silvange.

## Aperçu

- Page d'accueil avec héro, présentation
- Carte complète interactive (onglets) : Sandwichs, Double, Tacos, Assiettes, Burgers, Accompagnements, Barquettes, Salades, Desserts, Boissons, Menu enfant
- Galerie photo
- Bloc infos : adresse, horaires, téléphone, livraison, moyens de paiement + carte Google Maps intégrée
- 100% responsive (mobile / tablette / desktop)
- Aucune dépendance externe autre que Google Fonts (Anton, Permanent Marker, Work Sans)

## Structure du projet

```
snack-ca-marange/
├── index.html          # Page principale
├── css/
│   └── style.css        # Tous les styles
├── js/
│   ├── menu-data.js     # Les prix de la carte (facile à modifier)
│   └── script.js         # Onglets, menu mobile, interactions
├── images/               # Photos utilisées sur le site
└── README.md
```

## Modifier les prix / la carte

Ouvre `js/menu-data.js` : chaque plat est une ligne `["Nom du plat", "Prix"]`.
Ajoute, supprime ou modifie une ligne, sauvegarde, le site se met à jour automatiquement (pas besoin de toucher au HTML).

Pour les sections Tacos, Accompagnements, Barquettes et Menu enfant (mises en page spéciales), modifie directement le HTML correspondant dans `index.html`.

## Modifier les infos pratiques

Adresse, horaires, téléphone et infos de livraison se trouvent dans la section `<section id="infos">` de `index.html`.

## Lancer le site en local

Aucune installation nécessaire, c'est un site statique :

1. Télécharge / clone le dossier
2. Ouvre `index.html` dans ton navigateur

Ou avec un petit serveur local (recommandé pour que les chemins fonctionnent parfaitement) :

```bash
npx serve .
# ou
python3 -m http.server 8000
```

## Déployer gratuitement

Ce site peut être hébergé gratuitement sur :

- **GitHub Pages** : Settings → Pages → Deploy from branch → `main` / `root`
- **Netlify** : glisser-déposer le dossier sur [netlify.com/drop](https://app.netlify.com/drop)
- **Vercel** : `vercel deploy`

## Personnaliser les couleurs / polices

Tout le système de design (couleurs, typographies, rayons d'angle) est centralisé en haut de `css/style.css` dans le bloc `:root { ... }`. Change une valeur ici, elle s'applique partout sur le site.

---

Fait avec ❤️ pour Snack Ça Marange.
