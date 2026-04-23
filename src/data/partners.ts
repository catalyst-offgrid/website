export interface Partner {
  name: string;
  logo?: string; // filename in src/assets/images/partners/; omit for text-only fallback
}

// Order mirrors the Wix home-page partner wall (4 across × 4 down).
export const partners: Partner[] = [
  // Row 1
  { name: "Acumen", logo: "acumen.png" },
  { name: "IKEA Foundation", logo: "ikea-foundation.png" },
  { name: "Lightrock", logo: "lightrock.jpg" },
  { name: "Nefco", logo: "nefco.png" },
  // Row 2
  { name: "GOGLA", logo: "gogla.png" },
  { name: "British International Investment", logo: "british-international-investment.png" },
  { name: "The Rockefeller Foundation", logo: "rockefeller-foundation.png" },
  { name: "Sustainable Energy for All", logo: "seforall.jpg" },
  // Row 3
  { name: "GET.invest", logo: "get-invest.png" },
  { name: "Global Energy Alliance for People and Planet", logo: "geapp.png" },
  { name: "Norfund", logo: "norfund.jpg" },
  { name: "IFC", logo: "ifc.png" },
  // Row 4
  { name: "Shell Foundation", logo: "shell-foundation.png" },
  { name: "Energia", logo: "energia.png" },
  { name: "The World Bank", logo: "world-bank.png" },
  { name: "Global Innovation Fund", logo: "global-innovation-fund.png" },
];

export interface Innovation {
  name: string;
  url: string;
  summary: string;
}

export const innovations: Innovation[] = [
  {
    name: "Micro Asset Finance Lab",
    url: "https://www.maf-lab.com/",
    summary:
      "The Micro Asset Finance Lab (known as the PAYGo Lab from its inception in 2023 until its rebranding in 2025) is a game-changing innovation that improves credit management and portfolio monitoring capacity across the off-grid solar industry. The Lab's team of seasoned experts works collaboratively with companies to understand the root causes of credit management challenges, and develop a comprehensive, actionable plan. We help build systems, tools and capabilities to sustainably manage a portfolio at scale.",
  },
  {
    name: "VentureBuilder",
    url: "https://www.venture-builder.com/",
    summary:
      "VentureBuilder is a financing vehicle that uses a bottom-up approach to building a portfolio of African owned and managed off-grid solar companies. In addition to equity investments, VentureBuilder provides extensive Enterprise Development Services to portfolio companies in order to accelerate their path to sustained scale. Across the continent, local distributors often have years of experience serving thousands of local customers with a variety of products. However, they lack the human and financial resources to sustainably scale their businesses. VentureBuilder's combination of patient capital and technical support will scale a new generation of local solar companies that deliver modern, affordable, and reliable electricity to millions of Africans.",
  },
  {
    name: "Access Insights Platform (AIP)",
    url: "https://accessinsights.org/",
    summary:
      "The Access Insights Platform (AIP) is an interactive, open-source data visualization and aggregation platform. It provides users the ability to understand geospatial dimensions of key factors that influence last-mile service delivery, including critical infrastructure, population and demographics, economic activity, and household socioeconomic factors. AIP's Multi-Tier Framework (MTF) module offers users the opportunity to interact with the powerful MTF survey datasets which cover household access to electricity and clean cooking and go beyond the binary approach to look at access as a spectrum of service levels experienced by households. AIP's primary objective is to help enterprises make well-informed strategic decisions in the markets in which they operate or intend to operate in the future, helping them understand opportunities and risks in geographically defined areas. It is also intended to support governments and development partners to identify opportunities and maximize the impacts of their programs.",
  },
];
