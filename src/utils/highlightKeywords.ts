const KEYWORDS = [
  'Elasticsearch / OpenSearch',
  'Symfony UX Live Components',
  'Gravity Forms',
  'API REST',
  'APIs tierces',
  'Express.js',
  'Spring Boot',
  'Live Components',
  'vanillaCalendar',
  'OpenSearch',
  'Elasticsearch',
  'PostgreSQL',
  'JavaScript',
  'endpoints',
  'webhooks',
  'Node.js',
  'Next.js',
  'Symfony',
  'Doctrine',
  'HubSpot',
  'Diabolocom',
  'Nausys',
  'Docker',
  'OAuth',
  'Discord',
  'Twig',
  'MySQL',
  'Jira',
  'CRUD',
  'APIs',
  'DDEV',
  'SOA',
  'PHP',
  'API',
  'CI/CD',
  'Agile',
  'recherche avancée',
  'services métier',
  'services tiers',
  'intégrations externes',
  'intégrations',
  'architectures',
  'performances',
  'production',
  'Full Stack',
  'Pair programming',
  'back-end',
  'back-office',
  'back-offices',
  'CRM',
  'LFG',
  'PvM',
];

const PLACEHOLDER_PREFIX = '%%KW';
const PLACEHOLDER_SUFFIX = '%%';

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function highlightKeywords(text: string): string {
  const matches: string[] = [];
  let result = text;

  const sorted = [...KEYWORDS].sort((a, b) => b.length - a.length);

  for (const keyword of sorted) {
    const regex = new RegExp(escapeRegex(keyword), 'gi');
    result = result.replace(regex, (match) => {
      const index = matches.push(match) - 1;
      return `${PLACEHOLDER_PREFIX}${index}${PLACEHOLDER_SUFFIX}`;
    });
  }

  return result.replace(
    new RegExp(`${PLACEHOLDER_PREFIX}(\\d+)${PLACEHOLDER_SUFFIX}`, 'g'),
    (_, index) => `<strong class="kw">${matches[Number(index)]}</strong>`,
  );
}
