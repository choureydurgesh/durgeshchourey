// Single source of truth for the site's content. Update this file as the journey progresses.

export type Status = 'done' | 'now' | 'next' | 'planned';

export const profile = {
  name: 'Durgesh Chourey',
  role: 'Software Engineer → DevOps & DevSecOps',
  location: 'Helmond / Eindhoven, NL',
  linkedin: 'https://linkedin.com/in/durgeshchourey',
  github: 'https://github.com/choureydurgesh',
};

export const pipeline: { label: string; security?: boolean }[] = [
  { label: 'code' },
  { label: 'secret scan', security: true },
  { label: 'build' },
  { label: 'test' },
  { label: 'vuln scan', security: true },
  { label: 'SBOM + sign', security: true },
  { label: 'deploy' },
  { label: 'policy check', security: true },
  { label: 'monitor' },
];

export const stages: { when: string; title: string; text: string; status: Status }[] = [
  { when: 'Nov 2026', title: '0 · Setup', text: 'Cloud accounts with budget alerts, GitHub cleanup, this website.', status: 'now' },
  { when: 'Nov – Dec', title: '1 · Foundations', text: 'Linux, networking (DNS, TCP/IP, TLS, CIDR), Git, Bash, YAML.', status: 'next' },
  { when: 'Jan – Feb 2027', title: '2 · Cloud basics: AWS + Azure', text: 'IAM, compute, storage, networking, cost. This site gets an AWS twin on S3 + CloudFront.', status: 'planned' },
  { when: 'Mar – Apr', title: '3 · Containers & CI/CD', text: 'Docker, GitHub Actions, first security scanners (Gitleaks, Trivy).', status: 'planned' },
  { when: 'May – Jun', title: '4 · Infrastructure as Code', text: 'Terraform, remote state, modules, policy checks with Checkov.', status: 'planned' },
  { when: 'Jul – Sep', title: '5 · Azure deep-dive + Kubernetes', text: 'Azure administration, AKS, Helm, Azure DevOps, Prometheus & Grafana.', status: 'planned' },
  { when: 'Oct – Nov', title: '6 · DevSecOps capstone', text: 'SAST/DAST, SBOMs, image signing, Kyverno policies, GitOps with Argo CD.', status: 'planned' },
];

export const projects: { title: string; text: string; tags: string[]; href?: string; status?: string }[] = [
  {
    title: 'durgeshchourey.com',
    text: 'This website: Next.js on Vercel behind Cloudflare, with strict security headers. Next it gets an AWS and Azure twin built with Terraform and deployed by CI/CD.',
    tags: ['Next.js', 'Vercel', 'Cloudflare', 'Security headers'],
    href: 'https://github.com/choureydurgesh/durgeshchourey',
    status: 'live · v1',
  },
  {
    title: 'KlaarVoorNL',
    text: 'Dutch learning platform from A0 to B2 with practice exams for the Inburgeringsexamen and Staatsexamen NT2. Server-side grading, Supabase auth and row-level security.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Vercel'],
    href: 'https://klaarvoornl.vercel.app',
    status: 'live',
  },
  {
    title: 'BelastingBuddy RAG',
    text: 'An AI assistant that helps people understand Dutch tax filing: required documents, deadlines and steps, answered from curated tax knowledge.',
    tags: ['Python', 'RAG', 'LLM'],
    href: 'https://github.com/choureydurgesh/belastingbuddy-rag',
  },
  {
    title: 'GitHub Actions practice',
    text: 'Hands-on exercises with GitHub Actions workflows: triggers, jobs, linting and the building blocks of CI pipelines.',
    tags: ['GitHub Actions', 'CI', 'YAML'],
    href: 'https://github.com/choureydurgesh/github-actions',
  },
  {
    title: 'Linux server from zero',
    text: 'Provision and harden a Linux server: SSH keys only, firewall, Nginx, and Bash automation for backups and health checks.',
    tags: ['Linux', 'Bash', 'Security'],
    status: 'coming Dec 2026',
  },
  {
    title: 'Secure delivery platform',
    text: 'Capstone: SAST, SBOM, signed images, policy enforcement and GitOps deployment to Kubernetes, demonstrated on OWASP Juice Shop.',
    tags: ['Kubernetes', 'Cosign', 'Kyverno', 'Argo CD'],
    status: 'coming Nov 2027',
  },
];

export const experience: { dates: string; title: string; org: string; points: string[] }[] = [
  {
    dates: 'Sep 2025 – present',
    title: 'Software Engineer',
    org: 'Brunel · Eindhoven',
    points: [
      'Infrastructure automation with Terraform and Ansible; CI/CD pipelines in GitHub Actions',
      'Security scanning in pipelines (secrets, dependencies, images) and SonarQube code quality',
      'Docker and Kubernetes deployments; Prometheus and Grafana monitoring',
    ],
  },
  {
    dates: 'Apr 2025 – Aug 2025',
    title: 'Software Engineer',
    org: 'Canon Production Printing (via Brunel) · Venlo',
    points: ['Embedded C++ control software for high-speed media transport, with control loops up to 500 Hz, diagnostics and calibration'],
  },
  {
    dates: 'Jan 2024 – Jan 2025',
    title: 'Software Engineer',
    org: 'Philips (via Yacht) · Eindhoven',
    points: ['CI/CD workflows in Azure DevOps and Jenkins; TDD/BDD; SAFe'],
  },
  {
    dates: 'Jun 2022 – Nov 2023',
    title: 'Software Engineer',
    org: 'Kverneland (via Yacht) · Nieuw-Vennep',
    points: ['High-reliability software features with automated testing workflows'],
  },
  {
    dates: 'Sep 2019 – Apr 2022',
    title: 'Software Engineer',
    org: 'Dekimo Experts · Delft / Rotterdam',
    points: ['Jenkins pipelines, build machines and Linux administration for cross-platform CI'],
  },
  {
    dates: 'Oct 2015 – Jul 2019',
    title: 'Software Engineer',
    org: 'Capgemini · Bengaluru, India',
    points: ['Middleware for data processing, system integration and data acquisition'],
  },
];

export const skills: { group: string; items: string }[] = [
  { group: 'Cloud', items: 'AWS (EC2, S3, IAM, VPC, Lambda) · Azure (learning: AKS, Key Vault, Entra ID)' },
  { group: 'CI/CD', items: 'GitHub Actions · Jenkins · Azure DevOps' },
  { group: 'Infrastructure as Code', items: 'Terraform · Ansible' },
  { group: 'Containers', items: 'Docker · Kubernetes · Helm' },
  { group: 'Security', items: 'Gitleaks · Trivy · SonarQube · OWASP · OIDC' },
  { group: 'Observability', items: 'Prometheus · Grafana · structured logging' },
  { group: 'Languages', items: 'Python · Bash · C/C++ · TypeScript · YAML' },
  { group: 'Ways of working', items: 'Linux · Git · Agile / Scrum / SAFe' },
];

export const certs: { name: string; target: string; status: Status }[] = [
  { name: 'AWS Certified Cloud Practitioner', target: 'Jan 2027', status: 'planned' },
  { name: 'Microsoft AZ-900 Azure Fundamentals', target: 'Feb 2027', status: 'planned' },
  { name: 'HashiCorp Terraform Associate (004)', target: 'Jun 2027', status: 'planned' },
  { name: 'Microsoft AZ-104 Azure Administrator', target: 'Aug 2027', status: 'planned' },
  { name: 'KCNA: Kubernetes & Cloud Native Associate', target: 'Nov 2027', status: 'planned' },
];
