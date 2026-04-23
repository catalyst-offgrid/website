export interface ExpertiseArea {
  title: string;
  body: string;
  /** If true, render with gold background (alternates in the grid). */
  accent?: boolean;
}

export const expertise: ExpertiseArea[] = [
  {
    title: "Research and Analysis",
    body: "We've undertaken some of the industry's most groundbreaking research and analysis related to energy access strategy and finance, including climate change considerations.",
    accent: true,
  },
  {
    title: "Enterprise Development",
    body: "Our seasoned team of industry practitioners brings their wealth of experience to bear in advising, mentoring, and partnering with local entrepreneurs that are tackling the energy access challenge.",
  },
  {
    title: "Due Diligence",
    body: "Our deep industry experience enables us to bring a rigorous and pragmatic lens to the due diligence work we undertake on behalf of investors.",
    accent: true,
  },
  {
    title: "Credit risk management",
    body: "Extending credit to unbanked customers has unlocked a revolution in the energy access sector, known as Pay-as-you go (PAYGo). Our team leverages its experience in building asset financing businesses to help clients move beyond traditional PAYGo toward specialized micro asset finance models.",
  },
  {
    title: "Program design and implementation",
    body: "We design and deliver energy access programs that are grounded in local market realities and unlock scaled impact.",
  },
  {
    title: "Monitoring, Evaluation, and Learning (MEL)",
    body: "We help clients develop rigorous and pragmatic approaches to measuring impacts, including developing tools and methodologies that are designed to be mainstreamed in core client activities.",
    accent: true,
  },
  {
    title: "Climate change and a just energy transition",
    body: "To support the global transition away from fossil-fuel-based energy, we conduct a range of modeling for clients, including on GHG emissions trajectories, lifecycle emissions analysis, and carbon finance opportunities.",
  },
];
