export type Service = {
  title: string;
  body: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  body: string;
};

export const services: Service[] = [
  {
    title: "Hotel Operations",
    body: "End-to-end day-to-day operation of boutique hotels and resorts, from front of house to F&B. We run properties as if they were our own — because that level of care is the only standard worth keeping.",
  },
  {
    title: "Revenue Management",
    body: "Pricing strategy, distribution and demand forecasting calibrated to luxury positioning. We blend data science with market intuition to maximise both ADR and guest perception.",
  },
  {
    title: "Hospitality Consulting",
    body: "Strategic advisory for owners, developers and investors entering the Egyptian market. From feasibility studies to brand audits, we give you the clarity to move with confidence.",
  },
  {
    title: "Resort Development",
    body: "Concept, masterplanning, and creative direction for new builds and conversions. We work from day one alongside architects, interior designers and landscape firms.",
  },
  {
    title: "Guest Experience Design",
    body: "Choreography of every guest touchpoint — arrival, room, ritual, departure. We map the emotional arc of a stay and design each moment to feel inevitable.",
  },
  {
    title: "Staff Training",
    body: "Service academies that build a uniquely Egyptian standard of warmth and craft. Our programmes blend technical hospitality skills with cultural storytelling.",
  },
  {
    title: "Brand Positioning",
    body: "Identity, story and visual world that make a property unmistakable. We create brands that attract the right guest and repel mediocrity.",
  },
  {
    title: "Pre-Opening Services",
    body: "Recruiting, systems, SOPs and soft-launch programmes that set the tone from day one. A hotel's first hundred days define its next thousand.",
  },
];

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Discovery", body: "We listen. Your vision, your land, your constraints. We study the place, the market, the story waiting to be told." },
  { step: "02", title: "Strategy", body: "Feasibility, positioning, financial modelling. We build the business case and the creative brief side by side." },
  { step: "03", title: "Design", body: "Architecture, interiors, identity, experience mapping. Every decision is made through the lens of the guest." },
  { step: "04", title: "Launch", body: "Recruiting, training, systems, soft-opening. We sweat the invisible details so the first guest feels they're the thousandth." },
];
