export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  headshot?: string;
  group: "core" | "advisor";
}

export const team: TeamMember[] = [
  { name: "Dan Murphy", role: "Managing Director", bio: "Co-founder of VentureBuilder and PAYGo Lab.", group: "core" },
  { name: "Russell Lyseight", role: "Head of Enterprise Development", group: "core" },
  { name: "Ian Muir", role: "Head of Insights", group: "core" },
  { name: "Andrew Loebus", role: "Senior Associate", group: "core" },
  { name: "Henry Stanislaw", role: "Senior Associate", group: "core" },
  { name: "Itoro Atakpa", role: "Senior Associate", group: "core" },
  { name: "Kaluba Musakanya", role: "Senior Associate", group: "core" },
  { name: "Rachel McManus", role: "Senior Associate", group: "core" },
  { name: "Wangui Maina", role: "Senior Associate", group: "core" },
  {
    name: "Xan Garcia Ehrhardt",
    role: "Senior Associate",
    bio: "Xan is an energy access and decentralized rural energy distribution practitioner, having worked in senior roles with leading PAYGo companies (Mobisol, Bboxx, SolarWorks).",
    group: "core",
  },
  { name: "Jennifer Ortiz", role: "Associate", group: "core" },
  { name: "Christine Eibs Singer", role: "Senior Advisor", group: "core" },
  { name: "Shazia Khan", role: "Senior Advisor", group: "core" },
  { name: "Kat Harrison", role: "Advisor", group: "core" },

  { name: "Dima Reda", role: "Affiliated Advisor", group: "advisor" },
  { name: "Evan Colton", role: "Affiliated Advisor", group: "advisor" },
  { name: "Inka Schomer", role: "Affiliated Advisor", bio: "Inka is the director of Distill Inclusion.", group: "advisor" },
  { name: "Mayra Pereira", role: "Affiliated Advisor", bio: "Mayra is the Managing Director of Gaia Consulting.", group: "advisor" },
  { name: "Megan Shane", role: "Affiliated Advisor", group: "advisor" },
  { name: "Nthabiseng Mosia", role: "Affiliated Advisor", group: "advisor" },
];
