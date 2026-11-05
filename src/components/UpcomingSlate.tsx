import { useState } from "react";
import { ArrowRight, CheckCircle2, Clapperboard, Film, Sparkles, Timer } from "lucide-react";
import { UPCOMING_SLATE } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";
import { cn } from "@/utils/cn";

type Props = {
  onSelectUpcoming: (title: string) => void;
};

type MobileTab = "overview" | "pipeline" | "director";

export function UpcomingSlate({ onSelectUpcoming }: Props) {
  const featured = UPCOMING_SLATE[0];
  const [activeMobileTab, setActiveMobileTab] = useState<MobileTab>("overview");

  return (
    <section id="upcoming" aria-labelledby="upcoming-title" className="relative w-full max-w-full overflow-hidden bg-white pt-12 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10">
      <div className="container-x">
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-6 sm:gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="02"
            eyebrow="In Production & Future Releases"
            titleId="upcoming-title"
            title="The Next Wave of Amharic Cinema"
          />
          <Reveal delay={200} className="shrink-0">
            <span className="inline-flex items-center gap-2 border border-signal bg-signal/5 px-3.5 py-1.5 font-display text-xs font-bold tracking-wider text-navy uppercase sm:px-4 sm:py-2">
              <Timer className="size-3.5 text-signal sm:size-4" aria-hidden="true" />
              Active Slate · 2026 / 2027
            </span>
          </Reveal>
        </div>

        {/* Featured Production Spotlight: KEDAMIT */}
        <Reveal variant="fade" className="mt-10 sm:mt-14">
          <div className="cut-tr relative overflow-hidden border border-navy/20 bg-navy text-white shadow-xl [--cut:36px] sm:[--cut:48px]">
            {/* Grid background texture */}
            <div
              aria-hidden="true"
              className="sec-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_right,#000,transparent_80%)]"
            />
            {/* Corner diagonal highlight */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 h-2 w-24 bg-signal sm:w-32"
            />

            {/* DESKTOP LAYOUT (lg:grid) */}
            <div className="relative hidden lg:grid lg:grid-cols-12">
              {/* Poster Column */}
              <div className="relative aspect-auto overflow-hidden bg-navy lg:col-span-5">
                <img
                  src={featured.poster}
                  alt={`${featured.title} (${featured.amharicTitle}) teaser artwork`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-r from-transparent via-navy/30 to-navy"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 border border-white/20 bg-navy/80 px-3 py-1 font-display text-[0.68rem] font-bold tracking-widest text-white uppercase backdrop-blur-xs">
                  <span className="pulse-dot" />
                  Spotlight Production
                </div>
              </div>

              {/* Information Column */}
              <div className="flex flex-col justify-between p-8 lg:col-span-7 lg:p-12">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-signal px-2.5 py-1 font-display text-[0.65rem] font-bold tracking-widest text-white uppercase">
                      {featured.type}
                    </span>
                    <span className="font-display text-xs font-bold text-white/70 uppercase tracking-wider">
                      Expected: {featured.expectedDate}
                    </span>
                  </div>

                  <p className="mt-4 font-display text-sm font-bold tracking-widest text-signal uppercase">
                    {featured.amharicTitle}
                  </p>
                  <h3 className="mt-1 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {featured.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-white/85">
                    {featured.synopsis}
                  </p>

                  {/* Production Pipeline Progress Tracker */}
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <div className="flex items-center justify-between text-xs font-display">
                      <span className="font-bold uppercase tracking-wider text-white">
                        Production Pipeline: <span className="text-signal">{featured.stage}</span>
                      </span>
                      <span className="font-extrabold text-signal">{featured.progressPercent}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/15">
                      <div
                        className="h-full bg-signal transition-all duration-1000 ease-out"
                        style={{ width: `${featured.progressPercent}%` }}
                      />
                    </div>

                    {/* Milestone steps */}
                    <div className="mt-3 flex justify-between text-[0.68rem] text-white/60 font-display uppercase tracking-wider">
                      <span className="flex items-center gap-1 text-white">
                        <CheckCircle2 className="size-3 text-signal" /> Script
                      </span>
                      <span className="flex items-center gap-1 text-white">
                        <CheckCircle2 className="size-3 text-signal" /> Principal
                      </span>
                      <span className="font-bold text-signal">Post-Production</span>
                      <span>Premiere</span>
                    </div>
                  </div>

                  {/* Director's Note */}
                  <div className="mt-6 border-l-2 border-signal bg-white/5 py-3 pr-4 pl-4 text-xs italic leading-relaxed text-white/80">
                    <p>{featured.directorNote}</p>
                    <p className="mt-1 font-display text-[0.68rem] font-bold tracking-wider text-signal uppercase not-italic">
                      — {featured.director}
                    </p>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
                  <a
                    href="#contact"
                    onClick={() =>
                      onSelectUpcoming(`${featured.title} (${featured.amharicTitle}) — Advance Rights`)
                    }
                    className="btn btn-red-dark w-full sm:w-auto"
                  >
                    Inquire on Advance Rights
                    <ArrowRight className="arrow size-4" aria-hidden="true" />
                  </a>
                  <span className="text-xs text-white/60">
                    Private screener & treatment packages available for festival curators.
                  </span>
                </div>
              </div>
            </div>

            {/* CREATIVE MOBILE LAYOUT (< lg) */}
            <div className="block lg:hidden">
              {/* Immersive Cinema Card Header with Overlay */}
              <div className="relative aspect-16/10 overflow-hidden bg-navy sm:aspect-16/9">
                <img
                  src={featured.poster}
                  alt={`${featured.title} (${featured.amharicTitle}) teaser artwork`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-navy via-navy/60 to-transparent"
                />

                <div className="absolute top-3 left-3 flex items-center gap-2 border border-white/20 bg-navy/85 px-2.5 py-1 font-display text-[0.62rem] font-bold tracking-widest text-white uppercase backdrop-blur-xs">
                  <span className="pulse-dot" />
                  Spotlight Production
                </div>

                <div className="absolute right-3 bottom-3 left-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-signal px-2 py-0.5 font-display text-[0.62rem] font-bold tracking-wider text-white uppercase">
                      {featured.type}
                    </span>
                    <span className="font-display text-[0.68rem] font-bold text-white/80 uppercase">
                      Timeline: {featured.expectedDate}
                    </span>
                  </div>
                  <p className="mt-1 font-display text-xs font-bold tracking-wider text-signal uppercase">
                    {featured.amharicTitle}
                  </p>
                  <h3 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                    {featured.title}
                  </h3>
                </div>
              </div>

              {/* Mobile Interactive Tab Switcher */}
              <div className="border-t border-b border-white/10 bg-white/5 p-3 sm:p-4">
                <div className="grid grid-cols-3 gap-1.5 rounded-sm bg-navy/60 p-1">
                  <button
                    type="button"
                    onClick={() => setActiveMobileTab("overview")}
                    className={cn(
                      "min-h-9 px-2 py-1.5 font-display text-[0.68rem] font-extrabold tracking-wider uppercase transition-all rounded-xs",
                      activeMobileTab === "overview"
                        ? "bg-signal text-white shadow-xs"
                        : "text-white/70 hover:text-white"
                    )}
                  >
                    Overview
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveMobileTab("pipeline")}
                    className={cn(
                      "min-h-9 px-2 py-1.5 font-display text-[0.68rem] font-extrabold tracking-wider uppercase transition-all rounded-xs",
                      activeMobileTab === "pipeline"
                        ? "bg-signal text-white shadow-xs"
                        : "text-white/70 hover:text-white"
                    )}
                  >
                    Pipeline ({featured.progressPercent}%)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveMobileTab("director")}
                    className={cn(
                      "min-h-9 px-2 py-1.5 font-display text-[0.68rem] font-extrabold tracking-wider uppercase transition-all rounded-xs",
                      activeMobileTab === "director"
                        ? "bg-signal text-white shadow-xs"
                        : "text-white/70 hover:text-white"
                    )}
                  >
                    Vision
                  </button>
                </div>
              </div>

              {/* Mobile Tab Content View */}
              <div className="p-5 sm:p-7">
                {activeMobileTab === "overview" && (
                  <div className="space-y-4">
                    <p className="text-sm leading-relaxed text-white/85">
                      {featured.synopsis}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {featured.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/15 bg-white/5 px-2.5 py-1 font-display text-[0.65rem] font-semibold text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeMobileTab === "pipeline" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-display">
                      <span className="font-bold uppercase tracking-wider text-white">
                        Active Stage: <span className="text-signal">{featured.stage}</span>
                      </span>
                      <span className="font-extrabold text-signal">{featured.progressPercent}%</span>
                    </div>

                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/15">
                      <div
                        className="h-full bg-signal transition-all duration-700"
                        style={{ width: `${featured.progressPercent}%` }}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                      <div className="flex items-center gap-2 border border-white/10 bg-white/5 p-2.5">
                        <CheckCircle2 className="size-4 shrink-0 text-signal" />
                        <span className="font-display text-[0.7rem] uppercase text-white/90">01. Screenplay Locked</span>
                      </div>
                      <div className="flex items-center gap-2 border border-white/10 bg-white/5 p-2.5">
                        <CheckCircle2 className="size-4 shrink-0 text-signal" />
                        <span className="font-display text-[0.7rem] uppercase text-white/90">02. Principal Filmed</span>
                      </div>
                      <div className="flex items-center gap-2 border border-signal/40 bg-signal/15 p-2.5">
                        <span className="pulse-dot size-2" />
                        <span className="font-display text-[0.7rem] font-bold uppercase text-white">03. Post-Production</span>
                      </div>
                      <div className="flex items-center gap-2 border border-white/10 bg-white/5 p-2.5 opacity-60">
                        <Timer className="size-4 shrink-0 text-white/50" />
                        <span className="font-display text-[0.7rem] uppercase text-white/70">04. Theatrical Premiere</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeMobileTab === "director" && (
                  <div className="border-l-2 border-signal bg-white/5 p-4 text-xs italic leading-relaxed text-white/90">
                    <p className="text-[0.82rem]">"{featured.directorNote}"</p>
                    <p className="mt-2 font-display text-[0.7rem] font-bold tracking-wider text-signal uppercase not-italic">
                      — {featured.director}
                    </p>
                  </div>
                )}

                {/* Mobile CTA */}
                <div className="mt-6 border-t border-white/10 pt-5">
                  <a
                    href="#contact"
                    onClick={() =>
                      onSelectUpcoming(`${featured.title} (${featured.amharicTitle}) — Advance Rights`)
                    }
                    className="btn btn-red-dark w-full justify-center text-center"
                  >
                    Inquire on Advance Rights
                    <ArrowRight className="arrow size-4" aria-hidden="true" />
                  </a>
                  <p className="mt-2.5 text-center text-[0.68rem] text-white/60">
                    Private screener & treatment packages available for festival curators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Global Pitch Deck Banner */}
        <Reveal className="mt-10 sm:mt-14">
          <div className="flex flex-col items-start justify-between gap-5 border-t border-navy/15 pt-8 md:flex-row md:items-center">
            <p className="max-w-xl font-display text-base font-bold text-navy sm:text-xl">
              Are you a distributor, streaming commissioner, or co-producer?{" "}
              <span className="text-navy/70">
                Request our complete Amharic theatrical pitch deck.
              </span>
            </p>
            <a
              href="#contact"
              onClick={() => onSelectUpcoming("Complete Feature & Documentary Slate Pitch Deck")}
              className="btn btn-red w-full justify-center sm:w-auto"
            >
              Request Slate Pitch Deck
              <ArrowRight className="arrow size-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
