"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const heroFacility = {
  label: "Strength Zone",
  description:
    "Our flagship 6,000 sq ft strength floor is stocked with Olympic platforms, Eleiko barbells, Hammer Strength racks and every free weight you need to build serious athletic power.",
  image:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=85",
};

const facilities = [
  {
    label: "Cardio Zone",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    description: "Commercial-grade treadmills, bikes, rowers and ski ergs.",
  },
  {
    label: "Functional Training",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
    description: "Turf lanes, sleds, battle ropes and full rig systems.",
  },
  {
    label: "Recovery Area",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    description: "Foam rollers, massage guns, stretching mats and ice baths.",
  },
  {
    label: "Locker Rooms",
    image:
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=800&q=80",
    description: "Spa-grade showers, steam rooms and premium amenities.",
  },
  {
    label: "PT Studio",
    image:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80",
    description: "Private, distraction-free studio for 1-on-1 coaching sessions.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export function Facilities() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      id="facilities"
      className="border-b border-white/10 bg-charcoal py-24 sm:py-32 lg:py-36"
    >
      <div ref={ref} className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="eyebrow">World-Class Facilities</span>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.92] tracking-[-0.055em] text-white sm:text-5xl">
            Your environment
            <br />
            <span className="text-volt">shapes your results.</span>
          </h2>
        </motion.div>

        {/* Main hero facility */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="group relative mb-5 overflow-hidden border border-white/10 bg-ink"
        >
          <div className="aspect-[16/8] sm:aspect-[16/7] overflow-hidden">
            <img
              src={heroFacility.image}
              alt={heroFacility.label}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-12">
            <span className="eyebrow mb-2 block">{heroFacility.label}</span>
            <p className="max-w-xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
              {heroFacility.description}
            </p>
          </div>

          {/* Hover border */}
          <span className="absolute inset-0 border border-white/0 transition-all duration-500 group-hover:border-volt/30" />
        </motion.div>

        {/* Supporting grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.label}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="group relative overflow-hidden border border-white/10 bg-ink"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <h3 className="font-display text-sm font-bold uppercase tracking-[-0.02em] text-white transition duration-300 group-hover:text-volt">
                  {facility.label}
                </h3>
                <p className="mt-1 text-[11px] leading-5 text-white/50">{facility.description}</p>
              </div>

              {/* Bottom accent */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-volt transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
