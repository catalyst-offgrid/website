export interface Project {
  title: string;
  /** Filename (in src/assets/images/experience/) of the background photo. */
  image: string;
  /**
   * Optional filename of a partner logo to overlay on the photo. If omitted,
   * `image` is assumed to already be a composite (logo + photo baked in).
   */
  logo?: string;
  body: string;
}

export const enterpriseProjects: Project[] = [
  {
    title: "GET.invest Finance Readiness Support",
    image: "get-invest.png", // composite
    body: "Catalyst is a proud member of GET.invest's Finance Readiness Support program. To date, we've supported 11 energy access enterprises, helping them de-risk key elements of their business models and enhance their bankability to investors.",
  },
  {
    title: "GOGLA ELEVATE — Investor Readiness Training",
    image: "gogla-elevate.png", // composite
    body: "In 2022, Catalyst was retained by GOGLA to deliver a series of trainings for 19 companies taking part in GOGLA ELEVATE — an investment readiness program for off-grid solar companies across Africa. Through online group modules and in-person workshops, the training cultivated the entrepreneurs' knowledge and skills in telling a compelling business story, preparing for investment, and analyzing and improving product profitability.",
  },
  {
    title: "Shell Foundation — SDG7 Disruption",
    image: "shell-sdg7.jpg",
    logo: "shell-foundation-logo.png",
    body: "In 2017, Catalyst, in partnership with Shell Foundation, developed the groundbreaking report 'Achieving SDG 7: The Need to Disrupt Off-Grid Electricity Financing in Africa', which advanced the global dialogue on how concessional capital can better support off-grid energy access.",
  },
  {
    title: "Acumen's Hardest to Reach Fund",
    image: "acumen-h2r.jpg",
    body: "Catalyst provides strategic advisory for Acumen's Hardest to Reach fund, which invests in companies delivering life-changing products and services to the world's poorest and most marginalized communities.",
  },
  {
    title: "DZUWA — Enterprise Coaching",
    image: "dzuwa.jpg",
    body: "Catalyst supports Zuwa Energy and similar last-mile distributors with hands-on enterprise coaching — helping the management teams strengthen unit economics, sharpen go-to-market strategy, and prepare for growth-stage investment.",
  },
  {
    title: "GET.invest Association Capacity Building",
    image: "mcfa.jpg",
    logo: "mcfa-logo.png",
    body: "Catalyst has been engaged to provide group capacity-building and training sessions to selected cohorts for GET.invest Mobilisation unit partner associations — including the Alliance for Rural Electrification, GOGLA, Global Distributor Collective, and StartUp Energy. The trainings are anchored around four core themes: Energy access finance; Investor relations and expectations; Business development and core operations; and Credit risk management.",
  },
];

export const insightsProjects: Project[] = [
  {
    title: "Rockefeller — Green Power Job Creation",
    image: "rockefeller-green-power.png", // composite
    body: "In 2021, the Rockefeller Foundation tasked Catalyst with quantifying the job creation potential associated with deploying distributed renewable energy (DRE) in developing countries. We developed a predictive model to forecast the full spectrum of employment — from direct deployment to downstream jobs created by reliable power access.",
  },
  {
    title: "Transforming a Billion Lives",
    image: "billion-lives.jpg",
    body: "Our model and case studies on the employment impact of distributed renewable energy provided the foundational evidence base for the Rockefeller Foundation's flagship report, 'Transforming a Billion Lives'.",
  },
  {
    title: "Powering People and Planet (P3)",
    image: "p3.jpg",
    body: "In 2024, Catalyst, in partnership with The Rockefeller Foundation, developed Powering People and Planet (P3) — an interactive framework and data platform for measuring and communicating the development and climate impacts of distributed renewable energy across emerging markets.",
  },
  {
    title: "SEforALL Sierra Leone Healthcare",
    image: "seforall-sierra-leone.jpg",
    logo: "seforall-logo.png",
    body: "Catalyst conducted an impact assessment and developmental evaluation of SEforALL's Healthcare Electrification Project in Sierra Leone. Using a mixed-methods approach, we evaluated health and environmental benefits while identifying lessons for scaling and replication, and developed a results framework and measurement tools to enhance future health facility electrification efforts.",
  },
  {
    title: "IFC PAYGo Servicing Agreement",
    image: "ifc-paygo.jpg",
    logo: "ifc-logo.png",
    body: "Catalyst supported the IFC in assessing the viability of a standardized backup servicing agreement for PAYGo businesses in the off-grid solar industry and developing a roadmap. We also developed and delivered a capacity-building curriculum for small-scale (1kW–5kW) distributed solar sales and distribution businesses in Nigeria.",
  },
  {
    title: "BRILHO — Mozambique off-grid market",
    image: "brilho.jpg",
    body: "Since 2018, Catalyst has played a key role in supporting SNV's BRILHO program, which aims to catalyze Mozambique's off-grid energy market. Catalyst has supported the design and rollout of the Market Development Fund (including RBF, catalytic grants, and TA) and implementation through due diligence of SHS, ICS, and mini-grid companies, as well as TA for distributors.",
  },
];
