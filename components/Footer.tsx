"use client";

import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Facilities", href: "#facilities" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact-section" },
];

const programLinks = [
  "Strength & Conditioning",
  "Muscle Building",
  "Fat Loss",
  "Personal Training",
  "Nutrition Coaching",
  "Recovery",
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: siteConfig.socials.instagram },
  { icon: Twitter, label: "Twitter / X", href: siteConfig.socials.twitter },
  { icon: Youtube, label: "YouTube", href: siteConfig.socials.youtube },
  { icon: Facebook, label: "Facebook", href: siteConfig.socials.facebook },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      {/* Main footer grid */}
      <div className="container-wide grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        {/* ── Brand column ── */}
        <div>
          <a href="#home" className="inline-flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
            <span className="flex h-8 w-8 items-center justify-center bg-volt font-display text-lg font-bold text-ink">
              V
            </span>
            <span className="font-display text-xl font-bold tracking-[0.1em] text-white">
              VOLT<span className="text-volt">.</span>
            </span>
          </a>

          <p className="mt-5 max-w-xs text-sm leading-7 text-white/50">
            {siteConfig.name} is Chennai&apos;s premier training facility — built for people who refuse to
            settle. World-class equipment. Expert coaching. Real results.
          </p>

          {/* Social icons */}
          <div className="mt-7 flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/50 transition duration-200 hover:border-volt hover:text-volt"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* ── Navigation ── */}
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
            Navigate
          </p>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-volt"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Programs ── */}
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
            Programs
          </p>
          <ul className="space-y-3">
            {programLinks.map((p) => (
              <li key={p}>
                <a
                  href="#programs"
                  className="text-sm text-white/60 transition-colors hover:text-volt"
                >
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact ── */}
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
            Contact
          </p>
          <ul className="space-y-4 text-sm text-white/60">
            <li>
              <a
                href={siteConfig.address.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="leading-6 transition-colors hover:text-white"
              >
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state} — {siteConfig.address.pincode}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-volt">
                {siteConfig.displayPhone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-volt">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <span className="text-xs text-white/40">
                Mon–Sat: {siteConfig.openingHours.weekdays}
                <br />
                Sun: {siteConfig.openingHours.sunday}
              </span>
            </li>
          </ul>

          {/* CTA */}
          <a
            href="#contact-section"
            className="mt-6 inline-flex items-center gap-2 border border-white/20 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 transition hover:border-volt hover:text-volt"
          >
            Free Consultation
          </a>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
            © {new Date().getFullYear()} {siteConfig.name} · All rights reserved
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#home"
              className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30 transition hover:text-white/70"
            >
              Privacy Policy
            </a>
            <span className="h-3 w-px bg-white/10" />
            <a
              href="#home"
              className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30 transition hover:text-white/70"
            >
              Terms of Service
            </a>
            <span className="h-3 w-px bg-white/10" />
            <a
              href="#home"
              className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30 transition hover:text-white/70"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
