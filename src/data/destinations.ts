import redsea from "@/assets/dest-redsea.jpg";
import sinai from "@/assets/dest-sinai.jpg";
import northcoast from "@/assets/dest-northcoast.jpg";
import cairo from "@/assets/dest-cairo.jpg";
import luxor from "@/assets/dest-luxor.jpg";
import aswan from "@/assets/dest-aswan.jpg";
import siwa from "@/assets/dest-siwa.jpg";

export type Destination = {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  intro: string;
  body: string;
  image: string;
};

export const destinations: Destination[] = [
  {
    slug: "red-sea",
    name: "Red Sea",
    region: "Coast",
    tagline: "Where coral gardens meet quiet luxury.",
    intro:
      "A shoreline of glassy turquoise water, sandstone cliffs, and a coral reef written into legend.",
    body: "Our Red Sea operations celebrate the rhythm of the sea — barefoot mornings on the jetty, slow afternoons under linen, and dinners that begin when the sun touches the horizon.",
    image: redsea,
  },
  {
    slug: "sinai",
    name: "Sinai",
    region: "Mountains",
    tagline: "Sacred peaks under a watchful sky.",
    intro:
      "Bedouin trails, granite mountains and the deepest silence we have ever known.",
    body: "We design retreats that move with the desert — open-air sleeping platforms, candlelit dinners in the wadi, and morning walks that end at a still pool of cold spring water.",
    image: sinai,
  },
  {
    slug: "north-coast",
    name: "North Coast",
    region: "Mediterranean",
    tagline: "A whitewashed pause along the Mediterranean.",
    intro:
      "Olive groves and limewashed walls, where the sea is the only soundtrack.",
    body: "Our North Coast properties are studies in quiet — minimalist architecture, slow service rituals, and the kind of food you remember years later.",
    image: northcoast,
  },
  {
    slug: "cairo",
    name: "Cairo",
    region: "City",
    tagline: "A rooftop above a thousand years.",
    intro:
      "An old city that hums beneath your feet — domes, lanterns, and the call of the muezzin.",
    body: "We curate intimate residences and rooftop dining experiences that frame Cairo at its most cinematic — at dusk, when the city begins to glow.",
    image: cairo,
  },
  {
    slug: "luxor",
    name: "Luxor",
    region: "Nile Valley",
    tagline: "The light of the ancients.",
    intro:
      "Sandstone temples, hot air at dawn, and a river that has carried stories for five thousand years.",
    body: "Our Luxor stays bring guests inside the ritual of the place — private temple visits at golden hour, breakfasts on the West Bank, and balloon flights over the valley.",
    image: luxor,
  },
  {
    slug: "aswan",
    name: "Aswan",
    region: "Nile Valley",
    tagline: "Where the Nile slows to amber.",
    intro:
      "Granite islands, Nubian colour, and feluccas drifting against a copper sky.",
    body: "We work with Nubian artisans and chefs to create stays that feel woven into the river — slow sailing days, candlelit dinners on sand bars, and music that lasts past midnight.",
    image: aswan,
  },
  {
    slug: "siwa",
    name: "Siwa",
    region: "Oasis",
    tagline: "An oasis suspended in salt and palm.",
    intro:
      "A remote oasis at the edge of the Great Sand Sea, mineral lakes the colour of glass.",
    body: "Mudbrick suites, salt pools, hand-pressed olive oil, and the kind of stars you forget exist. Our Siwa retreats are deliberately small.",
    image: siwa,
  },
];

export const getDestination = (slug: string) =>
  destinations.find((d) => d.slug === slug);