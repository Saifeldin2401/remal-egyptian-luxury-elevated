export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const team: TeamMember[] = [
  {
    name: "Omar El-Sayed",
    role: "Founder & CEO",
    bio: "Former VP of Operations at a leading Middle Eastern hotel group. Omar founded REMAL with a conviction that Egyptian hospitality deserved a globally recognised standard.",
    initials: "OE",
  },
  {
    name: "Layla Mahmoud",
    role: "Creative Director",
    bio: "Architect and interior designer trained in London and Cairo. Layla leads REMAL's visual identity and property design, ensuring every space tells an Egyptian story.",
    initials: "LM",
  },
  {
    name: "Karim Farouk",
    role: "Head of Operations",
    bio: "Twenty years in luxury hotel operations across Egypt, Jordan and the UAE. Karim builds the systems and teams that turn vision into daily excellence.",
    initials: "KF",
  },
  {
    name: "Nadia Hassan",
    role: "Sustainability Lead",
    bio: "Environmental scientist and former NGO director. Nadia ensures every REMAL property regenerates more than it consumes — land, culture and community.",
    initials: "NH",
  },
];
