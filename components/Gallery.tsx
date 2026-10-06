"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

type Category = "All" | "Training" | "Equipment" | "Community" | "Lifestyle";

const galleryItems: {
  src: string;
  category: Exclude<Category, "All">;
  title: string;
  span?: "tall" | "wide";
}[] = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    category: "Training",
    title: "Strength Floor",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    category: "Equipment",
    title: "Cardio Zone",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    category: "Training",
    title: "Personal Training",
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    category: "Community",
    title: "Group Sessions",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    category: "Training",
    title: "Olympic Lifting",
  },
  {
    src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80",
    category: "Lifestyle",
    title: "Morning Sessions",
  },
  {
    src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
    category: "Equipment",
    title: "Functional Rig",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    category: "Lifestyle",
    title: "Recovery Zone",
  },
  {
    src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80",
    category: "Community",
    title: "Coach Led Warm Up",
  },
];

const categories: Category[] = ["All", "Training", "Equipment", "Community", "Lifestyle"];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function GalleryItem({
  item,
  index,
  inView,
}: {
  item: (typeof galleryItems)[number];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={`group relative overflow-hidden ${
        item.span === "tall" ? "row-span-2" : item.span === "wide" ? "sm:col-span-2" : ""
      }`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          item.span === "tall" ? "h-full min-h-[500px]" : "aspect-[4/3]"
        }`}
      >
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark overlay always */}
        <div className="absolute inset-0 bg-ink/20 transition-opacity duration-400 group-hover:bg-ink/50" />

        {/* Content — slides up on hover */}
        <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-volt">
            {item.category}
          </p>
          <h3 className="mt-1 font-display text-base font-bold uppercase tracking-[-0.02em] text-white">
            {item.title}
          </h3>
        </div>

        {/* Category tag always visible */}
        <div className="absolute left-4 top-4 border border-white/15 bg-ink/60 px-2.5 py-1 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/60">
            {item.category}
          </span>
        </div>

        {/* Border reveal */}
        <span className="absolute inset-0 border border-white/0 transition-all duration-400 group-hover:border-volt/25" />
      </div>
    </motion.div>
  );
}

export function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <section id="gallery" className="border-b border-white/10 bg-ink py-28 sm:py-36">
      <div ref={ref} className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="eyebrow">Photo Gallery</span>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.9] tracking-[-0.055em] text-white sm:text-5xl">
              Inside
              <br />
              <span className="text-volt">Volt.</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] transition-all duration-200 ${
                  active === cat
                    ? "bg-volt text-ink"
                    : "border border-white/15 text-white/50 hover:border-white/35 hover:text-white/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item, i) => (
            <GalleryItem key={`${item.title}-${active}`} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

