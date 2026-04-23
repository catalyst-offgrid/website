export interface Partner {
  name: string;
  logo?: string;
  url?: string;
}

export const partners: Partner[] = [
  { name: "VentureBuilder", url: "https://www.venture-builder.com/" },
  { name: "Access Insights Platform", url: "https://accessinsights.org/" },
  { name: "MAF Lab", url: "https://www.maf-lab.com/" },
];

export interface Innovation {
  name: string;
  url: string;
  summary: string;
}

export const innovations: Innovation[] = [
  {
    name: "VentureBuilder",
    url: "https://www.venture-builder.com/",
    summary: "A platform supporting early-stage energy access enterprises with capital, capacity, and community.",
  },
  {
    name: "Access Insights Platform",
    url: "https://accessinsights.org/",
    summary: "Open-access data infrastructure for the off-grid solar industry, enabling better decisions across the sector.",
  },
  {
    name: "MAF Lab",
    url: "https://www.maf-lab.com/",
    summary: "Formerly PAYGo Lab — a research and development hub advancing multi-asset financing models for energy access.",
  },
];
