export interface SiteConfig {
  name: string;
  tagline: string;
  established: string;
  phone: string;
  displayPhone: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
    mapsUrl: string;
  };
  openingHours: {
    weekdays: string;
    sunday: string;
  };
  socials: {
    instagram: string;
    twitter: string;
    youtube: string;
    facebook: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "VOLT FITNESS",
  tagline: "Forge your strongest self.",
  established: "2014",
  phone: "+919876543210",
  displayPhone: "+91 98765 43210",
  whatsapp: "https://wa.me/919876543210",
  email: "hello@voltfitness.demo",
  address: {
    street: "123 Fitness Avenue",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600001",
    full: "123 Fitness Avenue, Chennai, Tamil Nadu — 600001",
    mapsUrl: "https://maps.google.com/?q=123+Fitness+Avenue+Chennai",
  },
  openingHours: {
    weekdays: "5:00 AM – 11:00 PM",
    sunday: "6:00 AM – 10:00 PM",
  },
  socials: {
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
  },
};

