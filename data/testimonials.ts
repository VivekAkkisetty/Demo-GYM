export interface Testimonial {
  name: string;
  goal: string;
  rating: number;
  quote: string;
  avatar: string;
}

export const testimonialsData: Testimonial[] = [
  {
    name: "Rohan Mehta",
    goal: "Muscle Building",
    rating: 5,
    quote:
      "I'd been going to generic gyms for years and getting nowhere. Three months at VOLT with a proper programme changed my physique more than the previous three years combined. The coaching quality is on another level.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Divya Krishnan",
    goal: "Fat Loss",
    rating: 5,
    quote:
      "What I didn't expect was how much I'd actually enjoy training. The environment is electric and the coaches genuinely care. Lost 11 kg in 4 months and I've never felt stronger.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Aryan Sharma",
    goal: "Strength & Conditioning",
    rating: 5,
    quote:
      "The programming is intelligent, the equipment is world-class and the trainers hold you accountable without being pushy. My squat went from 80 kg to 140 kg in six months. VOLT is the real deal.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Sneha Patel",
    goal: "Performance & Lifestyle",
    rating: 5,
    quote:
      "I travel for work and I've trained in premium gyms across Mumbai, Bangalore and Dubai. VOLT Chennai matches all of them in equipment and beats most of them in coaching expertise.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80",
  },
];

