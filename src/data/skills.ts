export interface Skill {
  name: string;
  image: string;
  alt: string;
}

export interface SkillGroup {
  label: string;
  items: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Back-end',
    items: [
      { name: 'Symfony', image: '/images/images-competences/symfony.webp', alt: 'Logo Symfony' },
      { name: 'Spring Boot', image: '/images/images-competences/Spring_Boot.png', alt: 'Logo Spring Boot' },
      { name: 'Node.js', image: '/images/images-competences/node_js.webp', alt: 'Logo Node.js' },
    ],
  },
  {
    label: 'Données',
    items: [
      { name: 'PostgreSQL', image: '/images/images-competences/Postgresql.png', alt: 'Logo PostgreSQL' },
      { name: 'MySQL', image: '/images/images-competences/MySQL.png', alt: 'Logo MySQL' },
      { name: 'OpenSearch', image: '/images/images-competences/opensearch.png', alt: 'Logo OpenSearch' },
    ],
  },
  {
    label: 'Outils & DevOps',
    items: [
      { name: 'Docker', image: '/images/images-competences/docker.webp', alt: 'Logo Docker' },
      { name: 'Git', image: '/images/images-competences/git.png', alt: 'Logo Git' },
      { name: 'Jira', image: '/images/images-competences/jira.svg', alt: 'Logo Jira' },
    ],
  },
];
