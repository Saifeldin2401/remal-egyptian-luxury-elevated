import imgWellness from "@/assets/journal-stars.jpg";
import imgDesert from "@/assets/divider-desert.jpg";
import imgSea from "@/assets/dest-redsea.jpg";
import imgCulinary from "@/assets/journal-dining.jpg";
import imgCulture from "@/assets/journal-artisan.jpg";
import imgNile from "@/assets/dest-aswan.jpg";

export type Experience = {
  slug: string;
  title: string;
  body: string;
  image: string;
  number: string;
};

export const experiences: Experience[] = [
  {
    slug: "wellness-rituals",
    title: "Wellness Rituals",
    body: "Hammam ceremonies, sand-scrub treatments and dawn yoga overlooking the sea. Our wellness programmes draw on ancient Egyptian and Nubian traditions.",
    image: imgWellness,
    number: "01",
  },
  {
    slug: "desert-expeditions",
    title: "Desert Expeditions",
    body: "Bedouin-guided treks through the White Desert and overnight camps under the stars. Wake to silence, coffee brewed on sand, and a horizon with no end.",
    image: imgDesert,
    number: "02",
  },
  {
    slug: "red-sea-diving",
    title: "Red Sea Diving",
    body: "Private guided dives across protected reefs of the Egyptian Red Sea. From novice snorkellers to deep-water veterans, we match the sea to the swimmer.",
    image: imgSea,
    number: "03",
  },
  {
    slug: "culinary-journeys",
    title: "Culinary Journeys",
    body: "Multi-course tasting menus rooted in Egyptian terroir and ancient grains. Every dish tells the story of a region, a season, a farmer.",
    image: imgCulinary,
    number: "04",
  },
  {
    slug: "cultural-encounters",
    title: "Cultural Encounters",
    body: "Workshops with weavers, perfumers, and ceramicists across the country. Not a performance — a conversation between guest and maker.",
    image: imgCulture,
    number: "05",
  },
  {
    slug: "nile-voyages",
    title: "Nile Voyages",
    body: "Slow sailing days aboard restored feluccas with private chefs and musicians. The Nile teaches patience — and rewards it with beauty.",
    image: imgNile,
    number: "06",
  },
];

export const getExperience = (slug: string) =>
  experiences.find((e) => e.slug === slug);
