export interface Program {
  category: string;
  title: string;
  description: string;
  image: string;
}

export const programsData: Program[] = [
  {
    category: "Strength",
    title: "Strength & Conditioning",
    description:
      "Build raw power and athletic durability through evidence-based periodisation. Designed for athletes who demand more from every lift.",
    image:
      "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "Hypertrophy",
    title: "Muscle Building",
    description:
      "Precision volume training to maximise muscle growth. Progressive overload, targeted exercise selection and recovery built in.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "Fat Loss",
    title: "Fat Loss",
    description:
      "Metabolic conditioning meets resistance training for sustainable body composition change — without losing strength.",
    image:
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "Personal",
    title: "Personal Training",
    description:
      "One coach. One athlete. Every session built entirely around you — your goals, your body, your timeline.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=85",
  },
];

