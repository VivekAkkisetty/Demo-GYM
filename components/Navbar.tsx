"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact-section" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0.2, 0.96]);

  // Track scroll for border
  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 40));
    return unsub;
  }, [scrollY]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function closeMenu() { setOpen(false); }

  return (
    <>
      <motion.header
        style={{ backgroundColor: `rgba(8,9,9,${bgOpacity.get()})` }}
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-lg transition-shadow duration-300 ${
          scrolled ? "border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]" : "border-b border-transparent"
        }`}
      >
        <div className="container-wide flex h-20 items-center justify-between sm:h-24">
          {/* Logo */}
          <a
            href="#home"
            className="group relative flex items-center gap-3"
            aria-label="VOLT FITNESS home"
          >
            <motion.span
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="flex h-8 w-8 items-center justify-center bg-volt font-display text-lg font-bold text-ink"
            >
              V
            </motion.span>
            <span className="font-display text-lg font-bold tracking-[0.11em] text-white">
              VOLT<span className="text-volt">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 transition-colors duration-200 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-volt transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <a
              href="#contact-section"
              className="button-primary hidden sm:inline-flex"
            >
              Start Today <ArrowUpRight size={13} strokeWidth={2.5} />
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center border border-white/15 text-white transition hover:border-volt hover:text-volt lg:hidden"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
              aria-hidden
            />

            {/* Drawer */}
            <motion.nav
              id="mobile-nav"
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 32 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(320px,85vw)] flex-col border-l border-white/10 bg-ink pt-24 lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex-1 overflow-y-auto px-6 py-6">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1, duration: 0.3 }}
                    onClick={closeMenu}
                    className="flex items-center border-b border-white/8 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-volt last:border-0"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div className="border-t border-white/10 p-6">
                <a
                  href="#contact-section"
                  onClick={closeMenu}
                  className="button-primary w-full justify-center"
                >
                  Start Today <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
