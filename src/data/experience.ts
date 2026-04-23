export interface Project {
  slug: string;
  title: string;
  /** Filename (in src/assets/images/experience/) of the background photo. */
  image: string;
  /**
   * Optional filename of a partner logo to overlay on the photo. If omitted,
   * `image` is assumed to already be a composite (logo + photo baked in) or
   * no partner logo is available.
   */
  logo?: string;
  /**
   * Description as clean HTML (from Wix source). May contain `<a>`, `<strong>`,
   * `<em>`, `<p>`, `<ul>`, `<li>` — rendered via `set:html` in the page. See
   * `.tile-body` styles in `global.css` for link/list formatting.
   */
  body: string;
  section: "enterprise" | "strategy" | "innovation";
  /**
   * How the image should fill the tile.
   * "cover" (default) crops the photo to fill the square.
   * "contain" fits the full image inside the square with brand-blue padding —
   * used for report-cover tiles so the cover isn't cropped.
   */
  display?: "cover" | "contain";
}

export const projects: Project[] = [
  // ===== Enterprise Development =====
  {
    slug: "get-invest-finance-readiness",
    title: "GET.invest Finance Readiness Support",
    image: "get-invest.png", // composite: GET.invest logo already baked into photo
    body: `Catalyst is a proud member of <a href="https://www.get-invest.eu/finance-access-advisory/finance-readiness-support/" target="_blank" rel="noopener">GET.invest's Finance Readiness Support</a> program. To date, we've supported 11 energy access enterprises, helping them de-risk key elements of their business models and enhance their bankability to investors.`,
    section: "enterprise",
  },
  {
    slug: "gogla-elevate",
    title: "GOGLA ELEVATE \u2014 Investor Readiness Training",
    image: "gogla-elevate.png", // composite: group photo
    body: `In 2022, Catalyst was retained by GOGLA to deliver a series of trainings for 19 companies taking part in GOGLA ELEVATE - an investment readiness program for off-grid solar companies across Africa. Through a series of online group modules and in-person workshops, this training cultivated the entrepreneurs' knowledge and skills related to three core themes: telling a compelling business story, preparing for and identifying investment opportunities, and analyzing and improving the profitability of their products.`,
    section: "enterprise",
  },
  {
    slug: "shell-sdg7",
    title: "Shell Foundation \u2014 Achieving SDG 7",
    image: "shell-sdg7.jpg",
    logo: "shell-foundation-logo.png",
    body: `In 2017, Catalyst, in partnership with Shell Foundation, developed the groundbreaking report <a href="https://shellfoundation.org/wp-content/uploads/2018/10/Catalyst-Report.pdf" target="_blank" rel="noopener">Achieving SDG 7: The Need to Disrupt Off-Grid Electricity Financing in Africa</a>, highlighting the funding gap preventing universal energy access. The report examines the scale of investment required and proposes innovative financing solutions to accelerate off-grid electrification. By combining predictive modeling with enterprise-level insights, it outlines a pathway for scaling solar home systems and mini-grids, ensuring that underserved households can access modern, reliable energy.`,
    section: "enterprise",
  },
  {
    slug: "acumen-hardest-to-reach",
    title: "Acumen\u2019s Hardest to Reach Fund",
    image: "acumen-h2r.jpg",
    body: `Catalyst provides strategic advisory for <a href="https://acumen.org/programs/hardest-to-reach/" target="_blank" rel="noopener">Acumen's Hardest to Reach fund</a>. This support includes guidance on pipeline for HTR debt and equity facilities, semi-annual "state of the industry" updates, and advice on the design and deployment of technical assistance activities for companies qualified for financing under the program.`,
    section: "enterprise",
  },
  {
    slug: "dzuwa-energy",
    title: "DZUWA Energy",
    image: "dzuwa.jpg",
    body: `Catalyst has been engaged to provide group capacity-building and training sessions to selected cohorts, for GET.invest Mobilisation unit partner associations. These sessions are to be delivered to the association members including The Alliance for Rural Electrification, GOGLA, Global Distributor Collective, and StartUp Energy. These trainings have been anchored around 4 core themes: Energy access finance; Investor relations and expectations; Business development and core operations; and Credit risk management.`,
    section: "enterprise",
  },
  {
    slug: "mcfa-nefco",
    title: "Modern Cooking Facility for Africa",
    image: "solar-installer.jpg",
    body: `Catalyst was selected to and continues to establish and streamline processes for delivering technical assistance for the <a href="https://www.moderncooking.africa/" target="_blank" rel="noopener">Modern Cooking Facility for Africa</a>. We help identify, prioritize, and collaborate with NEFCO to determine the technical assistance for contracted cookstove providers and subsequently deliver that support through 4 core work packages: gender initiatives, environmental systems and monitoring, credit management, core operations, and corporate finance.`,
    section: "enterprise",
  },

  // ===== Strategy & Insights =====
  {
    slug: "rockefeller-green-power-gap",
    title: "The Green Power Gap",
    image: "rockefeller-green-power.png", // composite: report cover with title baked in
    body: `In 2024, Catalyst, in partnership with The Rockefeller Foundation, developed <a href="https://www.rockefellerfoundation.org/wp-content/uploads/2024/08/The-Green-Power-Gap-Achieving-an-Energy-Abundant-Future-for-Everyone-report-08012024.pdf" target="_blank" rel="noopener">The Green Power Gap</a> report to examine the energy shortfall across 72 developing countries and ideate innovative solutions for expanding clean energy access. The report highlights key policy and technology strategies to bypass fossil fuels, leapfrogging directly to clean energy systems that ensure sustainable growth and a resilient, energy abundant future.`,
    section: "strategy",
    display: "contain",
  },
  {
    slug: "transforming-a-billion-lives",
    title: "Transforming a Billion Lives",
    image: "billion-lives.jpg",
    body: `In 2021, the Rockefeller Foundation tasked Catalyst with quantifying the job creation potential associated with deploying DREs in developing countries. We developed a predictive model to forecast the full spectrum of employment\u2014from direct deployment to downstream jobs created by reliable power access. Our model and in-depth case studies provided the foundational evidence base for the Foundation's flagship report, '<a href="https://www.rockefellerfoundation.org/wp-content/uploads/2021/09/Transforming-a-Billion-Lives-The-Job-Creation-Potential-from-a-Green-Power-Transition-in-the-Energy-Poor-World.pdf" target="_blank" rel="noopener">Transforming a Billion Lives</a>,' shaping the narrative on how green energy investment drives economic growth and informs policy.`,
    section: "strategy",
    display: "contain",
  },
  {
    slug: "p3-geapp",
    title: "Powering People and Planet (P3)",
    image: "p3.jpg",
    body: `In 2022, Catalyst led the development of <a href="https://energyalliance.org/wp-content/uploads/2023/01/GEAPP_P3_PDF_report_120122.pdf" target="_blank" rel="noopener">Powering People and Planet (P3)</a>, GEAPP's first annual impact report, launched at COP27. The report examines GEAPP's mission, impact methodology, and global projects, providing an evidence-based assessment of progress. It offers a candid look at impact results and issues a global call to action for expanding reliable, affordable clean energy in energy-poor countries to drive sustainable development and mitigate climate change.`,
    section: "strategy",
    display: "contain",
  },
  {
    slug: "seforall-sierra-leone",
    title: "SEforALL Sierra Leone Healthcare",
    image: "seforall-sierra-leone.jpg",
    logo: "seforall-logo.png",
    body: `Catalyst conducted an impact assessment and developmental evaluation of SEforALL's Healthcare Electrification Project in Sierra Leone. The work aimed to assess the program's effectiveness in electrifying health facilities and its broader impacts on service delivery and sustainability. Using a mixed-methods approach, Catalyst evaluated health, and environmental benefits while identifying lessons for scaling and replication. The study also developed a results framework and measurement tools to enhance future health facility electrification efforts in Sierra Leone and beyond.`,
    section: "strategy",
  },
  {
    slug: "ifc-paygo",
    title: "IFC PAYGo & Nigeria Distributed Solar",
    image: "ifc-paygo.jpg",
    logo: "ifc-logo.png",
    body: `Catalyst developed and delivered a capacity-building curriculum for small-scale (1kW-5kW) distributed solar sales and distribution businesses in Nigeria to help companies scale their activities and impact through a cohort training series featuring online and in-person workshops. Catalyst has also supported the IFC in assessing the viability of a standardized backup servicing agreement for PAYGo businesses in the off-grid solar industry and developing a roadmap.`,
    section: "strategy",
  },
  {
    slug: "brilho-mozambique",
    title: "BRILHO \u2014 Mozambique Off-Grid Market",
    image: "brilho.jpg",
    body: `<p>Since 2018, Catalyst has played a key role in supporting SNV's BRILHO program, which aims to catalyze Mozambique's off-grid energy market. Catalyst has supported:</p>
<ul>
  <li>The design and rollout of the Market Development Fund, which includes RBF, catalytic grants, and TA.</li>
  <li>Implementation through due diligence of SHS, ICS, and mini-grid companies, as well as TA for distributors.</li>
  <li>Drafting of <a href="https://brilhomoz.com/documents/Resources/BRILHO_Transforming-off-grid-energy-access-in-Mozambique_FINAL.pdf" target="_blank" rel="noopener">BRILHO's flagship report</a>, highlighting achievements in financing, policy reform, institutional strengthening, and demand activation.</li>
</ul>`,
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
    heading: "Innovation",
    intro:
      "We originate, incubate, and scale breakthrough ideas to accelerate universal access to power. Through VentureBuilder, the Access Insights Platform (AIP), and the Micro Asset Finance Lab, Catalyst pairs capital, data, and hands-on venture-building to move promising innovations from concept to market.",
  },
};
