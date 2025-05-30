# Documentation technique — fontshare

## 1. Présentation générale

**fontshare** est une application web développée avec **Nuxt.js 3** en JavaScript.  
Elle permet de partager, explorer et intégrer des polices de caractères via une interface moderne.

Le projet combine frontend Vue 3 et backend API dans un même dépôt.

---

## 2. Structure du projet

Voici l’organisation principale :

- **assets/** : ressources statiques (images, styles, polices locales)  
- **components/** : composants Vue.js réutilisables  
- **composables/** : fonctions composables avec Composition API  
- **layouts/** : templates de mise en page globale  
- **middleware/** : scripts exécutés avant le rendu des pages  
- **pages/** : pages Vue.js, routage automatique  
- **plugins/** : plugins Vue/Nuxt  
- **public/** : ressources accessibles publiquement  
- **server/** : backend API  
  - **api/** : endpoints API REST  
  - **plugins/** : plugins côté serveur  
  - **utils/** : fonctions utilitaires serveur  
- **stores/** : gestion d’état globale avec Pinia  
- **nuxt.config.js** : configuration Nuxt.js  
- **package.json** : dépendances et scripts  
- **README.md** : documentation initiale  

---

## 3. Composants clés

### 3.1 Pages (`pages/`)

- `index.vue` : page d’accueil affichant la liste des polices  
- `font/[id].vue` : page détail pour une police, dynamique selon `id`  

### 3.2 Composants (`components/`)

Liste des composants présents :  

- `FontFamilySelector.vue` : sélecteur de familles de polices  
- `FontList.vue` : liste affichant les polices disponibles  
- `FontPreview.vue` : aperçu dynamique d’une police avec texte custom  
- `SearchInput.vue` : champ de recherche pour filtrer les polices  
- `ThemeToggle.vue` : bouton pour changer le thème clair/sombre  

### 3.3 Stores (`stores/`)

- `fonts.js` : gestion de l’état des polices, actions pour charger les données, filtrage, sélection  

### 3.4 Backend API (`server/api/`)

- `fonts.js` : endpoint qui renvoie les données des polices au format JSON  
- Autres endpoints gérant des fonctionnalités API du projet  

---

## 4. Fonctionnement global

1. L’utilisateur arrive sur la page d’accueil (`/`).  
2. La page utilise le store Pinia (`fonts.js`) pour charger les polices via `/api/fonts`.  
3. Le composant `FontList.vue` affiche la liste des polices.  
4. L’utilisateur peut rechercher via `HeroSection.vue`.  
5. Cliquer sur une police ouvre la page détail correspondante (`font/[font].vue`) qui affiche un aperçu.

---

## 5. Configuration principale (`nuxt.config.js`)

- Modules utilisés : `@pinia/nuxt`, `@nuxtjs/tailwindcss`  
- Configuration des plugins, des alias, et options de build  
- Paramétrage du serveur et middleware  

---

## 6. Développement & contribution

### Étapes principales

- Cloner le dépôt  
- Installer les dépendances :  npm install
- Lancer le mode développement :  npm run dev

### Scripts utiles

- `npm run dev` : serveur de développement  
- `npm run build` : build production  
- `npm run start` : démarrer en production  
- `npm run lint` : vérifier la qualité du code  

---

## 7. Technologies utilisées

- Nuxt.js 3 (Vue 3 Composition API)  
- Pinia (gestion d’état)  
- TailwindCSS (style)  
- npm (gestionnaire de paquets)  
- JavaScript (sans TypeScript)  

---

## 8. Résumé

fontshare est une application Nuxt.js en JavaScript combinant frontend Vue 3 et backend API, offrant une interface claire et modulaire pour la gestion et la visualisation des polices web.

---

Si tu souhaites que je détaille un composant précis ou les endpoints API, dis-le-moi !

