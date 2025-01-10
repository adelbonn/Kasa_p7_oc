# Kasa

Kasa est une application pour une agance de location d'appartement entre particuliers.
Ce projet a été réalisé dans le cadre du parcours Intégrateur Web chez Openclassroom.

##Tables des matières

- [Description](#description)
- [Isntallation](#Installation)
- [Utilisation](#Utilisation)
- [Fonctionnalités](#Fonctionnalités)
- [Technologies](#Technologies)
- [Notes supplémentaires](#Notes supplémentaires)
- [Contributeurs](#Contributeur)
- [Licence](#Licence)
- [Recommandations](#Recommandations)

## Description (Scénario)

Kasa est une application de location d'appartements entre particuliers. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d'appartements entre particuliers en France.
Ce projet vise a refondre l'application existante en utilisant un stack Javascript moderne avec React pour le Front-end et NodeJs pour le back-end.

## Installation

Pour installer et éxécuter ce projet localement, suivez les étapes ci-dessous:

1. Clonez le repository Github :

```bash
git clone https://github.com/adelbonn/kasa_p7_oc.git
cd Kasa_p7_oc

2. Installez les dépendances :

```bash
npm install
```

3. Démarrez l'application : 

```bash
npm run dev
```

## Utilisation 

Une fois l'application démarée, vous pouvez y accéder via votre navigateur à l'adrsse suivante : `http://localhost:5173`.

## Fonctionnalités

- **Navigation** : Utilisation de React Router pour la navigation entre les différentes pages de l'application.
- **Galeries d'images** : Défilement des photos avec gestion des extrémités (première et dernière image). 
- **Collapse** : Composant repliables pour afficher ds informations supplémentaires.
- **Page d'erreur** : Redirection vers la page d'erreur 404 en cas de route inexistante.
- **Slideshow** : Composant de diaporama pour afficher les images des propriétés.
- **Responsive Design** : Interface utilisateur responsive basée sur la maquettes Figma.

## Techonologies

- **React** : Bibliothèque Javascript pour la création d'interfaces utilisateur.
- **React Router** : Bibliothèque pour la gestion du routage dans les applications React.
- **Vite** : Outil de build rapide pour les projets front-end modernes.

## Contributeur

-**Adel Bonn** - Intégrateur Web 

## Licence

Ce projet est sous licence MIT
Voir le ficheir Licence pour plus de détails

## Notes supplémentaires

- **Maquettes Figma** : La maquette du projet est fournie par Openclassrooms et disponible sur Figma et inclue toutes les ressources nécessaire (logos, icônes...)
- **Données JSON** : Les données des annonces sont extraites d'un fichier JSON foruni.
- **Animations CSS** : Implémentation d'animations Css pour les menus déroulant et autres interactions utilisateur.

##Recommandations
- **Documentation de Vite** : [Vite Documentation](https://vitejs.dev/guide/)
- **Documentation de React Router** : [React Router Documentation](https://reactrouter.com/)
- **Documentation de Sass** : [Sass Documentation](https://sass-lang.com/documentation)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
