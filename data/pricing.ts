export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  tagline: string;
  features: string[];
  cta: string;
  featured: boolean;
  badge?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹1,999",
    tagline: "The foundations for a stronger everyday.",
    features: [
      "Full gym access (24/7)",
      "Locker access",
      "Group classes",
      "Basic progress tracking",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    id: "performance",
    name: "Performance",
    price: "₹3,999",
    tagline: "The complete VOLT training experience.",
    features: [
      "Everything in Starter",
      "Personalised workout plan",
      "Advanced progress tracking",
      "Priority equipment access",
      "Monthly check-in session",
    ],
    cta: "Choose Performance",
    featured: true,
    badge: "Most Popular",
  },
  {
    id: "elite",
    name: "Elite",
    price: "₹7,999",
    tagline: "Your personal coaching partnership.",
    features: [
      "Everything in Performance",
      "Dedicated personal trainer",
      "Nutrition guidance",
      "Monthly body assessment",
      "Recovery zone priority",
      "Guest passes (2/month)",
    ],
    cta: "Go Elite",
    featured: false,
  },
];

