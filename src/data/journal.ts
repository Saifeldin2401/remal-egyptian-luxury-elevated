import a from "@/assets/journal-artisan.jpg";
import b from "@/assets/journal-dining.jpg";
import c from "@/assets/dest-luxor.jpg";
import d from "@/assets/dest-siwa.jpg";
import e from "@/assets/feature-pool.jpg";
import f from "@/assets/dest-redsea.jpg";

export type Story = {
  slug: string;
  eyebrow: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  featured: boolean;
  date: string;
  readTime: string;
};

export const stories: Story[] = [
  {
    slug: "hands-that-shape-a-stay",
    eyebrow: "Craft",
    title: "The Hands That Shape a Stay",
    excerpt: "How we work with weavers, ceramicists and perfumers across Egypt to give each property a sense of place.",
    body: `There is a kind of quiet knowledge that lives only in the hands. In a village north of Luxor, a woman named Fatima has been weaving palm fronds since she was eight. Her mother taught her; her grandmother taught her mother. The pattern is not written down anywhere — it is remembered, the way a song is remembered.

At REMAL, we believe that luxury is not the absence of labour but the honouring of it. Every property we design begins with a conversation with local artisans. We do not import a generic 'luxury' aesthetic and drop it onto Egyptian soil. We start with the soil itself — with the clay, the reed, the pigment — and ask the people who have worked with it for generations what they see in it.

Fatima's baskets now sit beside the bathtubs in our Red Sea villas. A ceramicist from Fayoum made the coffee cups for our Cairo residence. A perfumer in Aswan distilled the scent that greets guests at our Nile properties — frankincense, dried rose, and something he would not name.

This is not decoration. It is dialogue. And it transforms a hotel room into a place that could exist nowhere else.`,
    image: a,
    featured: true,
    date: "2025-03-12",
    readTime: "6 min read",
  },
  {
    slug: "a-table-in-the-sand",
    eyebrow: "Experience",
    title: "A Table in the Sand",
    excerpt: "Notes from a private dinner under the Sinai sky — where the menu was written by the land itself.",
    body: `The table arrived at sunset. It was carried across the sand by four men who had been doing this for years — setting tables in places where no table should reasonably stand. The linen was weighted at the corners with smooth white stones. The candles were lit before the wind could find them.

Our guest was a woman from London who had never seen the Milky Way. She arrived in a white dress that caught the last light, and when she sat down, she was silent for a long time. The desert does that. It gives you silence like a gift.

The menu was simple: bread baked that morning in a clay oven, olive oil from Siwa, grilled fish caught at dawn, and dates so soft they dissolved on the tongue. There was no menu card. The chef stood at a distance, watching, and came forward only when the guest asked about the bread.

She stayed until midnight. She did not look at her phone once. When she left, she said something that has stayed with me: "I didn't know food could feel like this." Neither did we, until we started setting tables in the sand.`,
    image: b,
    featured: false,
    date: "2025-02-28",
    readTime: "5 min read",
  },
  {
    slug: "light-of-luxor-at-dawn",
    eyebrow: "Place",
    title: "The Light of Luxor at Dawn",
    excerpt: "A morning walk among the temples, told in temperature and breath. Some places don't need a guidebook.",
    body: `The light in Luxor at 5:47 AM is not golden. It is older than gold. It falls across the Colossi of Memnon like something that has been travelling for thousands of years — which, of course, it has.

I have walked the West Bank at dawn more times than I can count, and it is never the same. Some mornings the air is so still you can hear your own footsteps on the sand. Other mornings, a wind comes up from the south and carries the smell of dust and sugarcane, and the temples seem to breathe.

The tourists have not arrived yet. The boats are still moored on the east bank, their crews sleeping. A single hot air balloon rises over the desert, silent and absurdly beautiful. A dog crosses the road without looking.

This is the Luxor we want our guests to know. Not the Luxor of guidebooks and schedules, but the Luxor of 5:47 AM, when the ancient world is still waking up and the modern one has not yet begun.`,
    image: c,
    featured: false,
    date: "2025-02-10",
    readTime: "4 min read",
  },
  {
    slug: "oasis-in-conversation",
    eyebrow: "People",
    title: "An Oasis in Conversation",
    excerpt: "Inside the slow conversations of Siwa — and what they teach about hosting. Hospitality begins with listening.",
    body: `In Siwa, nobody rushes. The palm groves grow slowly. The salt pools fill slowly. Even the sun seems to cross the sky with more patience than it does in Cairo.

I spent three days there last autumn, staying with a family who have lived in the oasis for six generations. The first day, we barely spoke. The second day, we spoke a little — about the dates, the water, the tourists who come and go. The third day, we spoke for hours. The conversation moved like the irrigation channels in the grove: slow, deliberate, always finding its level.

What struck me most was the way they received guests. There was no performance, no script. The tea was made because tea is always made. The stories were told because that is what happens when people sit together. There was no hurry to fill the silence.

That is the REMAL standard. Not to simulate hospitality, but to create the conditions in which it can happen naturally. To build spaces that slow people down, and then to let the conversation find its own level.`,
    image: d,
    featured: false,
    date: "2025-01-22",
    readTime: "7 min read",
  },
  {
    slug: "architecture-that-disappears",
    eyebrow: "Design",
    title: "Architecture That Disappears",
    excerpt: "On building so the landscape, not the structure, is the protagonist. The best hotels are invisible.",
    body: `The most beautiful building I have ever seen in Egypt was not a building at all. It was a mudbrick house in Siwa that had been abandoned for thirty years. The walls had softened. The roof had partially collapsed. A palm tree had grown through what was once a window.

It was perfect.

That house taught me something that now sits at the centre of REMAL's design philosophy: the best architecture does not announce itself. It recedes. It gives the landscape the stage. It makes the guest feel that they have discovered something, not arrived somewhere.

Our architects are not asked to create signature buildings. They are asked to create buildings that feel inevitable — as if they grew out of the ground. We use local stone, local earth, local palm. We orient rooms toward the view, not the entrance. We hide the service corridors and the HVAC and the machinery of hospitality so that what remains is only the guest, the room, and the world outside.

Luxury is not what you see. It is what you don't.`,
    image: e,
    featured: false,
    date: "2025-01-08",
    readTime: "5 min read",
  },
  {
    slug: "quiet-of-the-stars",
    eyebrow: "Philosophy",
    title: "The Quiet of the Stars",
    excerpt: "On designing for stillness in a hyper-connected world. A meditation on space and silence.",
    body: `The first thing most guests say when they arrive at a REMAL property is not about the view, or the room, or the food. It is about the quiet.

We have become so accustomed to noise — the hum of the refrigerator, the ping of a notification, the distant traffic that never quite stops — that silence has become a luxury commodity. It is rarer than marble, more expensive than silk.

At every REMAL property, we design for silence deliberately. Thick walls. Double-glazed windows. Courtyards that absorb sound. Corridors carpeted to muffle footsteps. No televisions in the bedrooms — only books, and the view, and the permission to do nothing.

The result is that guests sleep differently. They wake differently. They have conversations they did not know they needed to have. They remember things they had forgotten. They look at the stars.

This is not wellness tourism. It is deeper than that. It is the reclamation of something human beings have had for most of history and are only now beginning to understand they have lost.`,
    image: f,
    featured: false,
    date: "2024-12-15",
    readTime: "6 min read",
  },
];

export const getStory = (slug: string) => stories.find((s) => s.slug === slug);
