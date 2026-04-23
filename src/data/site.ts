export const site = {
  name: "Catalyst Energy Advisors",
  tagline: "Energy Access in Emerging Markets",
  url: "https://catalyst-advisors.com",
  contactEmail: "info@catalyst-advisors.com",
  formspreeEndpoint: "https://formspree.io/f/mnjlogyq",
  nav: [
    { label: "Home", href: "/" },
    { label: "Team", href: "/team" },
    { label: "Experience", href: "/experience" },
    { label: "Innovations", href: "/innovations" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: [
    { label: "Join Our Team", href: "/joinourteam" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
  socials: [] as { label: string; href: string }[],
} as const;
