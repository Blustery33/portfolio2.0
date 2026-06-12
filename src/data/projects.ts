import { social } from './social';

export type ProjectType = 'pro' | 'perso';

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  type: ProjectType;
  typeLabel: 'Professionnel' | 'Personnel';
  meta?: string;
  teaser: string;
  stack: string[];
  challenge: string;
  features?: string[];
  backend: string[];
  built: string[];
  images?: ProjectImage[];
  statusNote?: string;
  links: { label: string; url: string }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'zaap-gg',
    title: 'Zaap.gg',
    subtitle: 'Hub communautaire LFG pour joueurs Dofus',
    type: 'perso',
    typeLabel: 'Personnel',
    meta: 'En cours de développement',
    teaser:
      'Mise en relation entre joueurs PvM pour donjons et succès : annonces, candidatures, chat et notifications.',
    stack: ['Symfony', 'Next.js', 'PostgreSQL', 'Docker'],
    challenge:
      'Projet fan en cours de développement. L’objectif est de créer un hub communautaire Dofus dédié au PvM, pour faciliter la recherche de coéquipiers autour des donjons et des succès — avec une expérience réactive, lisible et fidèle à l’univers du jeu.',
    features: [
      'Publier des annonces de groupe (recrutement)',
      'Se proposer en tant que joueur disponible',
      'Candidater et inviter des joueurs en quelques clics',
      'Échanger via un chat intégré à l’application',
      'Annonces actives 24 h, puis réactivables 24 h supplémentaires',
    ],
    backend: [
      'API REST Symfony — architecture modulaire, logique métier LFG',
      'Authentification OAuth Discord et gestion des sessions',
      'PostgreSQL : joueurs, annonces, candidatures, conversations',
      'Notifications in-app + webhooks Discord (premier message, nouvelle candidature)',
      'Cycle de vie des annonces : expiration 24 h et réactivation',
      'Conteneurisation Docker pour le développement et le déploiement',
    ],
    built: [
      'Conception du schéma de données et des endpoints API',
      'Parcours de création et de consultation des annonces',
      'Système de candidature / invitation entre joueurs',
      'Messagerie intégrée liée aux annonces et aux profils',
      'Interface visuelle : ambiances, classes et cartes inspirées de l’univers Dofus',
    ],
    images: [
      {
        src: '/images/images-projets/zaapgg/page_annonce.png',
        alt: 'Liste des annonces de groupe Zaap.gg',
        caption: 'Page des annonces — recherche de coéquipiers',
      },
      {
        src: '/images/images-projets/zaapgg/tunnel_annonce.png',
        alt: 'Formulaire de création d\'une annonce Zaap.gg',
        caption: 'Tunnel de création d’annonce',
      },
      {
        src: '/images/images-projets/zaapgg/lfg_succes.png',
        alt: 'Interface de recherche de groupe pour un succès Dofus',
        caption: 'Recherche de groupe — succès',
      },
    ],
    statusNote: 'Site en développement — pas encore en ligne.',
    links: [
      { label: 'GitHub', url: social.github },
    ],
    featured: true,
  },
  {
    slug: 'yacht-charter',
    title: 'Dream Yacht Charter',
    subtitle: 'Plateforme de réservation yacht charter',
    type: 'pro',
    typeLabel: 'Professionnel',
    meta: 'Programisto · client Dream Yacht Charter',
    teaser:
      'Développement back-end et front-end pour la plateforme de réservation de croisières en yacht.',
    stack: ['PHP', 'OpenSearch', 'JavaScript', 'vanillaCalendar', 'Docker'],
    challenge:
      'Optimiser la recherche de yachts à travers un catalogue volumineux avec filtres avancés, pagination performante et tunnel de réservation fluide.',
    backend: [
      'Architecture PHP orientée services (SOA)',
      'Requêtes OpenSearch optimisées pour la recherche et le filtrage',
      'Intégrations API tierces (Nausys, HubSpot, Gravity Forms)',
      'Environnement Docker / DDEV, méthode Agile (Jira)',
    ],
    built: [
      'Refonte de la barre de recherche : vanillaCalendar côté front, logique de disponibilités branchée sur OpenSearch',
      'Refonte de la page listing : filtres front & back unifiés et connectés à OpenSearch',
      'Modules back-end pour le tunnel de réservation',
      'Connexion aux APIs Nausys et HubSpot pour la synchronisation des données',
      'Optimisation des performances de requêtes sur catalogue volumineux',
    ],
    images: [
      {
        src: '/images/images-projets/dreamyacht/search_bar_dream_yacht.png',
        alt: 'Barre de recherche Dream Yacht Worldwide avec calendrier de sélection de dates',
        caption:
          'Barre de recherche — refonte complète avec vanillaCalendar et back OpenSearch',
      },
      {
        src: '/images/images-projets/dreamyacht/listing_page_dream_yacht.png',
        alt: 'Page listing Dream Yacht avec filtres latéraux et résultats de charters',
        caption:
          'Listing — refonte complète des filtres front & back branchés à OpenSearch',
      },
    ],
    links: [
      { label: 'GitHub', url: social.github },
    ],
    featured: true,
  },
  {
    slug: 'youschool-crm',
    title: 'YouSchool CRM',
    subtitle: 'Interface de gestion d\'utilisateurs',
    type: 'pro',
    typeLabel: 'Professionnel',
    meta: 'YouSchool',
    teaser:
      'Back-office CRM pour le suivi des apprenants : gestion des profils, données métier et interface dynamique.',
    stack: ['Symfony', 'PHP', 'Twig', 'MySQL'],
    challenge:
      'Construire un outil interne fiable pour le suivi commercial et pédagogique des étudiants, avec des interfaces réactives et une base de données structurée.',
    backend: [
      'Symfony : entités, repositories, services métier',
      'Symfony UX Live Components pour l’interactivité serveur',
      'Base MySQL : modélisation, migrations, requêtes optimisées',
      'CRUD complet sur les profils apprenants et données associées',
    ],
    built: [
      'Création de la base de données et des entités Doctrine',
      'Développement des contrôleurs et services back-end',
      'Interfaces Twig dynamiques avec Live Components',
      'Outil Node.js/Express complémentaire pour le suivi d’appels (API Diabolocom)',
    ],
    links: [
      { label: 'GitHub', url: social.github },
    ],
    featured: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
