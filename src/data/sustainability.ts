import { Leaf, Palette, HandHeart } from "lucide-react";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export type Pillar = {
  icon: ComponentType<LucideProps>;
  title: string;
  body: string;
};

export type ImpactStat = {
  value: number;
  suffix?: string;
  label: string;
};

export const pillars: Pillar[] = [
  {
    icon: Leaf,
    title: "Land",
    body: "Every property is built in dialogue with its landscape — minimal footprint, native materials, and zero single-use plastic. We design to disappear into the environment.",
  },
  {
    icon: Palette,
    title: "Culture",
    body: "We hire locally, train rigorously, and celebrate the artisans who give each region its identity. Cultural production is not decoration — it is the soul of a stay.",
  },
  {
    icon: HandHeart,
    title: "Community",
    body: "A share of every stay funds education, conservation and women-led enterprises near each property. Hospitality should enrich not just guests but the places they visit.",
  },
];

export const impactStats: ImpactStat[] = [
  { value: 100, suffix: "%", label: "Local Hiring Commitment" },
  { value: 0, label: "Single-Use Plastic Target" },
  { value: 5, label: "Community Partnerships Planned" },
  { value: 2, label: "Conservation Initiatives" },
];
