const stats = [
  ["10+", "Years experience"],
  ["2,500+", "Members strong"],
  ["25+", "Expert trainers"],
  ["98%", "Member satisfaction"]
];

export function StatsStrip() {
  return (
    <section aria-label="VOLT Fitness statistics" className="border-b border-white/10 bg-charcoal">
      <div className="container-wide grid grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-4 sm:divide-y-0">
        {stats.map(([value, label]) => (
          <div key={label} className="flex items-center gap-4 px-4 py-7 first:pl-0 sm:px-6 sm:py-8 lg:gap-5">
            <span className="font-display text-3xl font-bold tracking-[-0.06em] text-white sm:text-4xl">{value}</span>
            <span className="max-w-[75px] text-[9px] font-semibold uppercase leading-4 tracking-[0.15em] text-white/45">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
