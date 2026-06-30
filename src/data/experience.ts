export interface Project {
  slug: string;
  title: string;
  /** Filename (in src/assets/images/experience/) of the background photo. */
  image: string;
  /** Single partner logo filename. */
  logo?: string;
  /** Multiple logos rendered side-by-side across the top of the tile. Overrides `logo`. */
  logos?: string[];
  /** Make the badge logo larger (e.g. Acumen, GOGLA, SEforALL). */
  logoLarge?: boolean;
  /** Description as clean HTML (from Wix source). */
  body: string;
  section: "enterprise" | "strategy" | "innovation";
  /** "cover" (default) crops to fill; "contain" fits inside with padding for report covers. */
  display?: "cover" | "contain";
  /** Suppress the corner badge shown on the non-hover tile (e.g. when the cover photo already carries the logo). Does not affect the hover overlay. */
  noBadge?: boolean;
  /** Pin up to four logos to the corners of the hover overlay, with body text reserved to fall between them. Overrides the standard single logo row. */
  cornerLogos?: {
    topLeft?: string;
    topRight?: string;
    bottomLeft?: string;
    bottomRight?: string;
  };
}

export const projects: Project[] = [
  // ===== Enterprise Development =====
  // Row 1
  {
    slug: "get-invest-finance-readiness",
    title: "GET.invest Finance Readiness Support",
    image: "get-invest-backdrop.jpg",
    logo: "get-invest-logo.svg",
    body: `Catalyst is a proud member of <a href="https://www.get-invest.eu/finance-access-advisory/finance-readiness-support/" target="_blank" rel="noopener">GET.invest's Finance Readiness Support</a> program. To date, we've supported 11 energy access enterprises, helping them de-risk key elements of their business models and enhance their bankability to investors.`,
    section: "enterprise",
  },
  {
    slug: "mcfa-nefco",
    title: "Modern Cooking Facility for Africa",
    image: "mcfa-backdrop.jpg",
    logos: ["mcfa-logo.png", "nefco-logo.png"],
    body: `Catalyst was selected to and continues to establish and streamline processes for delivering technical assistance for the <a href="https://www.moderncooking.africa/" target="_blank" rel="noopener">Modern Cooking Facility for Africa</a>. We help identify, prioritize, and collaborate with NEFCO to determine the technical assistance for contracted cookstove providers and subsequently deliver that support through 4 core work packages: gender initiatives, environmental systems and monitoring, credit management, core operations, and corporate finance.`,
    section: "enterprise",
  },
  // Row 2
  {
    slug: "acumen-hardest-to-reach",
    title: "Acumen\u2019s Hardest to Reach Fund",
    image: "acumen-backdrop.jpg",
    logo: "acumen-logo.png",
    logoLarge: true,
    body: `Catalyst provides strategic advisory for <a href="https://acumen.org/programs/hardest-to-reach/" target="_blank" rel="noopener">Acumen's Hardest to Reach fund</a>. This support includes guidance on pipeline for HTR debt and equity facilities, semi-annual "state of the industry" updates, and advice on the design and deployment of technical assistance activities for companies qualified for financing under the program.`,
    section: "enterprise",
  },
  {
    slug: "ifc-paygo",
    title: "IFC Nigeria Distributor TA",
    image: "ifc-nigeria-backdrop.jpg",
    logo: "ifc-logo.png",
    body: `Catalyst developed and delivered a capacity-building curriculum for small-scale (1kW-5kW) distributed solar sales and distribution businesses in Nigeria to help companies scale their activities and impact through a cohort training series featuring online and in-person workshops. Catalyst has also supported the IFC in assessing the viability of a standardized backup servicing agreement for PAYGo businesses in the off-grid solar industry and developing a roadmap.`,
    section: "enterprise",
  },
  // Row 3
  {
    slug: "gogla-elevate",
    title: "GOGLA ELEVATE \u2014 Investor Readiness Training",
    image: "gogla-elevate-backdrop.png",
    logo: "gogla-logo.png",
    logoLarge: true,
    body: `In 2022, Catalyst was retained by GOGLA to deliver a series of trainings for 19 companies taking part in GOGLA ELEVATE - an investment readiness program for off-grid solar companies across Africa. Through a series of online group modules and in-person workshops, this training cultivated the entrepreneurs' knowledge and skills related to three core themes: telling a compelling business story, preparing for and identifying investment opportunities, and analyzing and improving the profitability of their products.`,
    section: "enterprise",
  },
  {
    slug: "get-invest-mobilisation",
    title: "GET.invest Mobilisation partner associations",
    image: "group-capacity-building-backdrop.png",
    logos: [
      "startup-energy-logo.webp",
      "gdc-logo.png",
      "alliance-rural-electrification-logo.png",
      "gogla-logo.png",
      "get-invest-logo.svg",
    ],
    body: `Catalyst has been engaged to provide group capacity-building and training sessions to selected cohorts, for GET.invest Mobilisation unit partner associations. These sessions are to be delivered to the association members including The Alliance for Rural Electrification, GOGLA, Global Distributor Collective, and StartUp Energy. These trainings have been anchored around 4 core themes: Energy access finance; Investor relations and expectations; Business development and core operations; and Credit risk management.`,
    section: "enterprise",
  },

  // ===== Strategy & Insights =====
  {
    slug: "geapp-lightrock-structuring-the-last-mile",
    title: "Structuring for the Last Mile",
    image: "structuring-the-last-mile.jpg",
    body: `In 2026, Catalyst co-authored <a href="https://energyalliance.org/wp-content/uploads/2026/06/1.-Structuring-For-The-Last-Mile-Full-Report.pdf" target="_blank" rel="noopener">Structuring for the Last Mile</a>, a think piece on financing the next era of African electrification, with the financial and technical support of Lightrock, GEA, and the Rockefeller Foundation. The report pinpoints what's holding the next wave of electrification back — customers whose needs are structurally different, delivery too fragmented to bring down costs, and private capital mispriced because risk is misallocated — and proposes a new financing architecture to mobilize investment at the scale, and least cost, the last mile now requires.`,
    section: "strategy",
    noBadge: true,
    cornerLogos: {
      topLeft: "geapp-logo-white.png",
      topRight: "lightrock-logo.png",
      bottomRight: "rockefeller-logo-white.png",
    },
  },
  {
    slug: "rockefeller-green-power-gap",
    title: "The Green Power Gap",
    image: "green-power-gap-backdrop.png",
    logo: "rockefeller-logo.png",
    body: `In 2024, Catalyst, in partnership with The Rockefeller Foundation, developed <a href="https://www.rockefellerfoundation.org/wp-content/uploads/2024/08/The-Green-Power-Gap-Achieving-an-Energy-Abundant-Future-for-Everyone-report-08012024.pdf" target="_blank" rel="noopener">The Green Power Gap</a> report to examine the energy shortfall across 72 developing countries and ideate innovative solutions for expanding clean energy access. The report highlights key policy and technology strategies to bypass fossil fuels, leapfrogging directly to clean energy systems that ensure sustainable growth and a resilient, energy abundant future.`,
    section: "strategy",
    noBadge: true,
    cornerLogos: { topLeft: "rockefeller-logo-white.png" },
  },
  {
    slug: "brilho-mozambique",
    title: "BRILHO \u2014 Mozambique Off-Grid Market",
    image: "brilho-backdrop.jpg",
    logo: "brilho-logo.png",
    body: `<p>Since 2018, Catalyst has played a key role in supporting SNV's BRILHO program, which aims to catalyze Mozambique's off-grid energy market. Catalyst has supported:</p>
<ul>
  <li>The design and rollout of the Market Development Fund, which includes RBF, catalytic grants, and TA.</li>
  <li>Implementation through due diligence of SHS, ICS, and mini-grid companies, as well as TA for distributors.</li>
  <li>Drafting of <a href="https://brilhomoz.com/documents/Resources/BRILHO_Transforming-off-grid-energy-access-in-Mozambique_FINAL.pdf" target="_blank" rel="noopener">BRILHO's flagship report</a>, highlighting achievements in financing, policy reform, institutional strengthening, and demand activation.</li>
</ul>`,
    section: "strategy",
  },
  {
    slug: "geapp-powering-the-last-mile",
    title: "Powering the Last Mile",
    image: "powering-the-last-mile.jpg",
    logo: "geapp-logo-white.png",
    cornerLogos: { topRight: "geapp-logo-white.png" },
    body: `In 2025, Catalyst led the development of <a href="https://energyalliance.org/wp-content/uploads/2025/03/Universal-Access-Coalition-for-LAC-January-2025-Report.pdf" target="_blank" rel="noopener">Powering the Last Mile</a> for GEAPP — a flagship report charting how to achieve universal energy access across Latin America and the Caribbean. Working through the region's newly formed Universal Access Coalition, Catalyst analyzed the barriers to last-mile electrification across eight focus countries and authored eight detailed country deep-dives alongside the regional report. Together they set out a coordinated, actionable path to bring modern energy to the roughly 16 million people in the region who still live without it.`,
    section: "strategy",
  },
  {
    slug: "p3-geapp",
    title: "Powering People and Planet (P3)",
    image: "p3-backdrop.jpg",
    logo: "geapp-logo.svg",
    body: `In 2022, Catalyst led the development of <a href="https://energyalliance.org/wp-content/uploads/2023/01/GEAPP_P3_PDF_report_120122.pdf" target="_blank" rel="noopener">Powering People and Planet (P3)</a>, GEAPP's first annual impact report, launched at COP27. The report examines GEAPP's mission, impact methodology, and global projects, providing an evidence-based assessment of progress. It offers a candid look at impact results and issues a global call to action for expanding reliable, affordable clean energy in energy-poor countries to drive sustainable development and mitigate climate change.`,
    section: "strategy",
    noBadge: true,
    cornerLogos: { topLeft: "geapp-logo-white.png" },
  },
  {
    slug: "shell-sdg7",
    title: "Shell Foundation \u2014 Achieving SDG 7",
    image: "shell-sdg7-backdrop.jpg",
    logo: "shell-foundation-logo.png",
    body: `In 2017, Catalyst, in partnership with Shell Foundation, developed the groundbreaking report <a href="https://shellfoundation.org/wp-content/uploads/2018/10/Catalyst-Report.pdf" target="_blank" rel="noopener">Achieving SDG 7: The Need to Disrupt Off-Grid Electricity Financing in Africa</a>, highlighting the funding gap preventing universal energy access. The report examines the scale of investment required and proposes innovative financing solutions to accelerate off-grid electrification. By combining predictive modeling with enterprise-level insights, it outlines a pathway for scaling solar home systems and mini-grids, ensuring that underserved households can access modern, reliable energy.`,
    section: "strategy",
  },
  {
    slug: "seforall-sierra-leone",
    title: "SEforALL Sierra Leone Healthcare",
    image: "seforall-backdrop.jpg",
    logo: "seforall-logo.png",
    logoLarge: true,
    body: `Catalyst conducted an impact assessment and developmental evaluation of SEforALL's Healthcare Electrification Project in Sierra Leone. The work aimed to assess the program's effectiveness in electrifying health facilities and its broader impacts on service delivery, patient outcomes, and sustainability. Using a mixed-methods approach, Catalyst is evaluating health, economic, and environmental benefits while identifying lessons for scaling and replication. The study also developed a results framework and measurement tools to enhance future health facility electrification efforts in Sierra Leone and beyond.`,
    section: "strategy",
  },
  {
    slug: "transforming-a-billion-lives",
    title: "Transforming a Billion Lives",
    image: "billion-lives-backdrop.jpg",
    logo: "rockefeller-logo.png",
    noBadge: true,
    body: `In 2021, the Rockefeller Foundation tasked Catalyst with quantifying the job creation potential associated with deploying DREs in developing countries. We developed a predictive model to forecast the full spectrum of employment\u2014from direct deployment to downstream jobs created by reliable power access. Our model and in-depth case studies provided the foundational evidence base for the Foundation's flagship report, '<a href="https://www.rockefellerfoundation.org/wp-content/uploads/2021/09/Transforming-a-Billion-Lives-The-Job-Creation-Potential-from-a-Green-Power-Transition-in-the-Energy-Poor-World.pdf" target="_blank" rel="noopener">Transforming a Billion Lives</a>,' shaping the narrative on how green energy investment drives economic growth and informs policy.`,
    section: "strategy",
  },
];

export const sectionCopy = {
  enterprise: {
    heading: "Enterprise Development",
    intro:
      "Thanks to our industry DNA, we thrive when mentoring and coaching energy access companies. Check out a few examples of Catalyst\u2019s enterprise development activities below.",
  },
  strategy: {
    heading: "Strategy & Insights",
    intro:
      "Catalyst delivers market intelligence, financial analysis, and strategic advisory to key energy access stakeholders. We assess investment trends, evaluate program and project performance, and generate actionable insights to drive sector growth and impact.",
  },
  innovation: {
    heading: "Impact Studio",
    intro:
      "The Impact Studio is Catalyst’s platform for designing and scaling market-shaping solutions that accelerate energy access. We originate, incubate, and scale demand-led initiatives — pairing capital, data, and hands-on venture-building to move promising ideas from concept to scale.",
  },
};
