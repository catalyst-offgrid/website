export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  /** Filename in src/assets/images/team/ — imported dynamically on the team page */
  headshot?: string;
  linkedin?: string;
  group: "core" | "advisor";
}

/**
 * Core team in the page-rendered order (matches Team.png).
 * Bios are verbatim from the saved Wix HTML at:
 *   Existing Website Resources/Team/Meet Our Experts _ Catalyst Energy Advisors Team.html
 */
export const team: TeamMember[] = [
  {
    name: "Andrew Loebus",
    role: "Senior Associate",
    bio: "Andrew has over a decade of experience working across Africa in agriculture, education and clean energy access. He previously worked as Africa Operations Manager at Fenix International, and helped develop and implement the Beyond the Grid Fund for Africa results-based funding facility.",
    headshot: "andrew-loebus.png",
    linkedin: "https://www.linkedin.com/in/andrew-loebus-bb8602b1/",
    group: "core",
  },
  {
    name: "Christine Eibs Singer",
    role: "Senior Advisor",
    bio: "Christine has 25+ years of experience in decentralized energy enterprise development and finance, strategy, and partnerships. She previously served as Senior Advisor to Sustainable Energy for All, co-founder and CEO of E+Co, and a Director of SELCO India.",
    headshot: "christine-eibs-singer.png",
    linkedin: "https://www.linkedin.com/in/christine-eibs-singer-a43412a/",
    group: "core",
  },
  {
    name: "Dan Murphy",
    role: "Managing Director",
    bio: "Dan has 20+ years experience working in over 30 African countries. Prior to founding Catalyst, he co-founded Côte d\u2019Ivoire\u2019s first PAYGo solar company, and spent 15 years at the World Bank in a variety of operational roles. Co-founder of VentureBuilder and PAYGo Lab.",
    headshot: "dan-murphy.png",
    linkedin: "https://www.linkedin.com/in/djmurphy5/",
    group: "core",
  },
  {
    name: "Henry Stanislaw",
    role: "Senior Associate",
    bio: "Prior to Catalyst, Henry worked for Fenix International and ENGIE Energy Access in market expansion, business strategy and project management roles that saw him support the launch of Fenix Côte d\u2019Ivoire, and work on the design and implementation of the ENGIE Energy Access integration.",
    headshot: "henry-stanislaw.png",
    linkedin: "https://www.linkedin.com/in/henrystanislaw/",
    group: "core",
  },
  {
    name: "Ian Muir",
    role: "Head of Insights",
    bio: "Ian has 20 years of energy-sector experience, with expertise in the technology and business models driving off-grid solar, mini-grids, and clean cooking. Prior to joining Catalyst, he held roles at the World Bank, EarthSpark International, and PFC Energy (now S&P Global). He is also currently a Fellow at the Energy for Growth Hub.",
    headshot: "ian-muir.png",
    linkedin: "https://www.linkedin.com/in/iandmuir/",
    group: "core",
  },
  {
    name: "Itoro Atakpa",
    role: "Senior Associate",
    bio: "Itoro is an interdisciplinary engineer with seven years of experience, including as a renewable energy researcher & consultant. She has experience supporting various clients with renewable energy & e-mobility rollout in the U.S., Latin America & sub-Saharan Africa.",
    headshot: "itoro-atakpa.png",
    linkedin: "https://www.linkedin.com/in/itoro-atakpa-462397123/",
    group: "core",
  },
  {
    name: "Jennifer Ortiz",
    role: "Associate",
    bio: "Jennifer is an environmental and energy engineer with over five years of experience in project management and education. Before joining Catalyst, she was an energy researcher at the International Energy Agency (IEA) focusing on the energy transition in emerging economies.",
    headshot: "jennifer-ortiz.png",
    linkedin: "https://www.linkedin.com/in/jennifercortiz/",
    group: "core",
  },
  {
    name: "Kaluba Musakanya",
    role: "Senior Associate",
    bio: "Kaluba leads teams on several Catalyst assignments. Former advisor at GIZ Zambia, with a focus on renewable energy, including a secondment to the Zambian Solar Industry Association. While at Solar Aid, project managed an FCDO-funded rural healthcare electrification program.",
    headshot: "kaluba-musakanya.png",
    linkedin: "https://www.linkedin.com/in/kaluba-emma-musakanya-907112186/",
    group: "core",
  },
  {
    name: "Kat Harrison",
    role: "Head of Impact",
    bio: "Kat is a leader in the off-grid energy sector for customer voice and impact. She has been working on understanding, measuring, and sharing insights on the impact of energy access for end-users for over a decade, having specialised in impact measurement, M&E, and insights for international development for ~20 years.",
    headshot: "kat-harrison.jpg",
    linkedin: "https://www.linkedin.com/in/katjharrison/",
    group: "core",
  },
  {
    name: "Rachel McManus",
    role: "Senior Associate",
    bio: "Rachel spent seven years as a practitioner with EarthSpark International, leading its spin-off Haitian social enterprise, Enèji Pwòp. She is an operations specialist with experience developing training programs and leading business processes in the nonprofit and social entrepreneurship sector.",
    headshot: "rachel-mcmanus.png",
    linkedin: "https://www.linkedin.com/in/rachel-mcmanus-28552922/",
    group: "core",
  },
  {
    name: "Russell Lyseight",
    role: "Head of Enterprise Development",
    bio: "Russell brings expertise in leadership and organisational culture, risk management, financial services, and project management to Catalyst. Most recently, he led the Global Distributors Collective (GDC), supporting 200 last-mile distributors across 60 countries. He also served as Managing Director of a solar/clean cooking social enterprise in Zambia, and spent 15 years in UK financial services.",
    headshot: "russell-lyseight.jpg",
    linkedin: "https://www.linkedin.com/in/russell-lyseight-23a1874/",
    group: "core",
  },
  {
    name: "Shazia Khan",
    role: "Senior Advisor",
    bio: "Shazia is an advisor who guides companies bringing transformative technologies to emerging markets. She has 20 years of experience in the energy space and is the former Founder and CEO of EcoEnergy. She is an attorney with a concentration in energy and international business.",
    headshot: "shazia-khan.png",
    linkedin: "https://www.linkedin.com/in/shazia-a-khan-9a604812/",
    group: "core",
  },
  {
    name: "Wangui Maina",
    role: "Senior Associate",
    bio: "Wangui is a finance professional with over 10 years of experience in the corporate and energy access sectors. This includes finance roles at d.light Ltd. Previously she held financial roles at Ezra (Fintech).",
    headshot: "wangui-maina.png",
    linkedin: "https://www.linkedin.com/in/rebecca-maina-financedirector/",
    group: "core",
  },
  {
    name: "Xan Garcia Ehrhardt",
    role: "Senior Associate",
    bio: "Xan is energy access and decentralized rural energy distribution practitioner, having worked in senior roles with leading PAYGo companies (Mobisol, Bboxx, SolarWorks).",
    headshot: "xan-garcia-ehrhardt.png",
    linkedin: "https://www.linkedin.com/in/xanluisgarcia/",
    group: "core",
  },

  {
    name: "Christian Yesashimwe",
    role: "Affiliated Advisor",
    bio: "Christian is an energy access researcher with eight years of experience in Africa and the US. At UC Berkeley, he researches clean energy technologies and business models for low-resource settings. He has led energy programs in East Africa and advised Grand Challenges Canada and Siemens Stiftung.",
    group: "advisor",
  },
  {
    name: "Dima Reda",
    role: "Affiliated Advisor",
    bio: "Dima has 20 years experience in natural resource management, climate change, gender, and monitoring and evaluation (M&E). She is the President and Founder of Nataij Group. Previously, she served as the Results Based Management Coordinator at the Global Environment Facility.",
    group: "advisor",
  },
  {
    name: "Evan Colton",
    role: "Affiliated Advisor",
    bio: "Evan is a business strategist with broad experience in emerging markets, clean energy, and the technology industry. He co-founded energy efficiency startup Incenergy and helped launch Asha, a Nairobi-based software startup company.",
    group: "advisor",
  },
  {
    name: "Inka Schomer",
    role: "Affiliated Advisor",
    bio: "Inka is the director of Distill Inclusion. With a career spanning over 15 years, she specializes in helping infrastructure stakeholders think practically through their gender equality and social inclusion challenges and opportunities to ensure they are responsive to change and well-positioned for business opportunities.",
    group: "advisor",
  },
  {
    name: "Jamie Yang",
    role: "Affiliated Advisor",
    bio: "Jamie is an energy access entrepreneur and engineer with 15+ years of experience bringing clean infrastructure to off-grid communities. He founded EGG-energy in Tanzania, scaling it to 1,000+ installations, and led early-stage energy access investing at Facebook. At Ukama, a connectivity startup, he has worn many hats, from power engineer to finance.",
    group: "advisor",
  },
  {
    name: "Marta Cenzato",
    role: "Affiliated Advisor",
    bio: "Marta brings expertise in business analytics and techno-economic modeling across energy sectors. As an Analyst at SEA Milan Airports, she supported investment decisions through economic modeling. Her experience includes consulting at BIP and co-founding a waste-to-hydrogen venture.",
    group: "advisor",
  },
  {
    name: "Mayra Pereira",
    role: "Affiliated Advisor",
    bio: "Mayra is the Managing Director of Gaia Consulting. Mayra has led several environmental and social impact assessment projects. She is the President of the Lusophone Renewable Energy Association, a Board Member of the Mozambique Renewable Energy Association, and a founding member of the Mozambique Women of Energy.",
    group: "advisor",
  },
  {
    name: "Megan Shane",
    role: "Affiliated Advisor",
    bio: "Megan is a cross-functional organizational development leader with over 10 years of experience powering impact cultures, strategic differentiation, and multi-stakeholder action agendas across the corporate, non-profit, and public sectors.",
    group: "advisor",
  },
  {
    name: "Nthabiseng Mosia",
    role: "Affiliated Advisor",
    bio: "Nthabiseng is an entrepreneur and researcher with over 10 years of experience building and scaling energy access solutions in West Africa. She co-founded Easy Solar, a paygo solar and C&I provider in Liberia and Sierra Leone, and is now pursuing a PhD at the University of Cape Town on renewable energy investment and market design.",
    group: "advisor",
  },
];

export function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("");
}
