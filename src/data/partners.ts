export interface Partner {
  name: string;
  logo: string; // filename in src/assets/images/partners/
}

export const partners: Partner[] = [
  { name: "Acumen", logo: "acumen.png" },
  { name: "GOGLA", logo: "gogla.png" },
  { name: "Energia", logo: "energia.png" },
  { name: "Nefco", logo: "nefco.png" },
  { name: "Global Innovation Fund", logo: "global-innovation-fund.png" },
  { name: "GET.invest", logo: "get-invest.png" },
  { name: "The Rockefeller Foundation", logo: "rockefeller-foundation.png" },
  { name: "IKEA Foundation", logo: "ikea-foundation.png" },
  { name: "Lightrock", logo: "lightrock.jpg" },
  { name: "IFC", logo: "ifc.png" },
  { name: "Shell Foundation", logo: "shell-foundation.png" },
  { name: "GEAPP", logo: "geapp.png" },
  { name: "Norfund", logo: "norfund.jpg" },
  { name: "Sustainable Energy for All", logo: "seforall.jpg" },
  { name: "British International Investment", logo: "british-international-investment.png" },
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
