# Audrey GREFFE — Kinésiologue praticienne en Adaptogenèse

Site vitrine professionnel construit avec **Next.js 14** (App Router), prêt pour déploiement sur **Vercel**.

## Démarrage

```bash
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:3000`.

## Déploiement sur Vercel

1. Poussez ce dépôt sur GitHub
2. Importez le projet dans [Vercel](https://vercel.com)
3. Vercel détectera automatiquement Next.js — cliquez sur **Deploy**

## Images à remplacer

Placez vos propres images dans `public/images/` :

| Fichier | Usage |
|---|---|
| `hero.jpg` | Image principale (bandeau d'accueil — séance de kinésiologie) |
| `seance-bg.jpg` | Arrière-plan de la section « Déroulement d'une séance » (plante + table de massage) |

Les fichiers actuels sont des placeholders SVG.

## Structure

```
app/
  layout.tsx      — Layout racine (métadonnées, polices)
  page.tsx        — Page d'accueil (toutes les sections)
  globals.css     — Styles globaux
components/
  Navbar.tsx      — Barre de navigation fixe avec scroll-spy
  TestimonialCarousel.tsx — Carrousel d'avis clients
public/images/    — Images du site
```
