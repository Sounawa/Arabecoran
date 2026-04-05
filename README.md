[README.md](https://github.com/user-attachments/files/26488094/README.md)
# 🕌 Marathon Coran

> Apprendre le Coran par les racines arabes — pour les enfants de 7 à 12 ans

[![Déployé sur GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-déployé-7C5CFC?style=flat-square&logo=github)](https://pages.github.com)
[![Licence libre](https://img.shields.io/badge/licence-libre-51CF66?style=flat-square)](LICENSE)

## 🎯 Le concept

**Marathon Coran** est un projet éducatif open-source qui permet aux enfants d'apprendre le vocabulaire du Coran en décryptant les **racines arabes** à l'origine de chaque mot. L'objectif : atteindre **88 % de compréhension** du Coran en progressant à travers 4 paliers de difficulté.

Chaque mini-cours dure **5 à 8 minutes** et suit un format simple et ludique :

1. 📖 **Lire le verset** — le texte arabe avec sa traduction en français
2. 🔍 **Décrypter les mots** — chaque mot est analysé avec sa racine, son sens et une astuce de mémorisation
3. 🧠 **Passer le quiz** — un mini-quiz de 3 à 4 questions pour vérifier la compréhension
4. ⭐ **Gagner des XP** — des points d'expérience, des étoiles et des confettis récompensent la progression

## 📚 Palier 1 — Les Petites Sourates

Le premier palier couvre les **29 sourates les plus courtes du Coran** :

| Groupe | Sourates |
|--------|----------|
| Al-Fatiha | Sourate 1 |
| Juz 'Amma | Sourates 78 à 114 |

- **88 mini-cours** au total
- **669 mots** analysés avec leurs racines
- **430 racines** arabes distinctes
- **344 questions** de quiz

## 🎨 Conçu pour les enfants

Le design est spécialement adapté aux enfants de 7 à 12 ans :

- **Police Nunito** — une fonte arrondie et lisible
- **Couleurs vives** — palette joyeuse à 7 couleurs pour les familles de racines
- **Emojis** partout pour rendre l'apprentissage fun et visuel
- **Confettis** 🎉 — une pluie de 120 confettis quand le quiz est réussi avec 3 étoiles
- **Gamification** — XP, étoiles, streak de jours consécutifs
- **Responsive** — fonctionne sur téléphone, tablette et ordinateur
- **Texte arabe** — police Scheherazade New pour une lecture claire

## 📁 Structure du projet

```
marathon-coran-site/
├── index.html              # Page d'accueil
├── style.css               # Design system enfant-friendly
├── script.js               # Interactions de l'accueil
├── README.md               # Ce fichier
└── palier1/
    ├── index.html          # Liste des 88 leçons
    ├── lesson.html         # Page de cours (verset + mots + quiz)
    └── lessons-data.js     # Données des 88 leçons
```

## 🚀 Installation locale

Aucune dépendance requise — c'est du HTML/CSS/JS pur.

1. Clone ce dépôt :
   ```bash
   git clone https://github.com/TON-USER/marathon-coran.git
   cd marathon-coran
   ```

2. Ouvre `index.html` dans ton navigateur, ou lance un serveur local :
   ```bash
   # Python
   python -m http.server 8000

   # Node.js
   npx serve .
   ```

3. Rends-toi sur `http://localhost:8000`

## 🌐 Déploiement sur GitHub Pages

1. Crée un dépôt sur GitHub
2. Pousse les fichiers du dossier `marathon-coran-site/` à la racine du dépôt
3. Dans **Settings > Pages**, sélectionne la branche `main` et le dossier `/ (root)`
4. Ton site sera disponible sur `https://TON-USER.github.io/marathon-coran/`

## 🔒 Vie privée

- **Aucune donnée envoyée sur un serveur** — la progression est sauvegardée dans le `localStorage` du navigateur
- **Aucun cookie tiers** ni service d'analytics
- **Aucune inscription** ni compte nécessaire

## 🛠️ Technologies

- **HTML5** / **CSS3** / **JavaScript** vanilla
- **Google Fonts** : Nunito, Scheherazade New, Amiri
- **API Alquran Cloud** : texte uthmani des versets (appel dynamique lors des leçons)

## 📋 Feuille de route

| Palier | Contenu | Statut |
|--------|---------|--------|
| ✅ Palier 1 | Les Petites Sourates (1, 78-114) | Terminé |
| 🔜 Palier 2 | Sourates du Cœur (Rahman, Yasin, Mulk…) | À venir |
| 🔜 Palier 3 | Fondamentales (Kahf, Maryam, Yusuf…) | À venir |
| 🔜 Palier 4 | Les Grandes Sourates (Baqarah, Imran…) | À venir |

## 🤝 Contribuer

Les contributions sont les bienvenues ! Que ce soit pour :

- Corriger une erreur de racine ou de traduction
- Ajouter de nouvelles sourates
- Améliorer le design ou l'accessibilité
- Traduire le contenu dans d'autres langues

1. Fork le dépôt
2. Crée une branche : `git checkout -b ma-feature`
3. Commit : `git commit -m 'Ajout de X'`
4. Push : `git push origin ma-feature`
5. Ouvre une Pull Request

## 📄 Licence

Projet éducatif libre. Utilisation et modification gratuites.
