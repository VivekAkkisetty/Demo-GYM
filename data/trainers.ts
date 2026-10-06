export interface Trainer {
  name: string;
  role: string;
  exp: string;
  certs: string;
  bio: string;
  img: string;
}

export const trainersData: Trainer[] = [
  {
    name: "Alex Carter",
    role: "Strength Coach",
    exp: "11 years",
    certs: "CSCS · NSCA",
    bio: "Specialist in compound strength and powerlifting methodology. Worked with professional athletes across 3 sports.",
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Maya Wilson",
    role: "Performance Coach",
    exp: "9 years",
    certs: "ACSM · USA-W",
    bio: "Athletic performance and sprint conditioning specialist. Coaches collegiate and competitive athletes.",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Daniel Reed",
    role: "Personal Trainer",
    exp: "7 years",
    certs: "NASM-CPT · FMS",
    bio: "Functional movement and physique transformation coach. Passionate about long-term client progress.",
    img: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sarah Mitchell",
    role: "Nutrition & Conditioning",
    exp: "8 years",
    certs: "CISSN · ACSM",
    bio: "Bridges high-performance nutrition with smart conditioning protocols. Data-driven, results-focused.",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80",
  },
];

