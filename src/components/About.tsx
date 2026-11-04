import { ArrowRight, Award, Check, Clapperboard, MapPin, Sparkles } from "lucide-react";
import { IMAGES, SITE } from "@/data/site";
import { useParallax } from "@/hooks/useBrowser";
import { Monogram } from "./Logo";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";

const PILLARS = [
  {
    num: "01",
    tag: "Cultural Truth",
    title: "Authentic Ethiopian Stories",
    text: "Deeply honoring our cultural heritage while executing with world-class cinematic standards.",
  },
  {
    num: "02",
    tag: "Creative Talent",
    title: "Homegrown Storytellers",
    text: "Nurturing and commissioning Ethiopian screenwriters, visionary directors, and magnetic actors.",
  },
  {
    num: "03",
    tag: "Craft & Technology",
    title: "Uncompromising Execution",
    text: "Meticulous cinematography, sculpted lighting, DaVinci color grading, and theatrical sound.",
  },
];

export function About() {
  const parallaxRef = useParallax<HTMLDivElement>(0.1);

  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-mist py-16 sm:py-24 lg:py-28">
      {/* Monogram watermark */}
      <Monogram className="pointer-events-none absolute -top-10 -right-32 w-[44rem] max-w-none opacity-[0.045]" />

      <div className="container-x relative grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        {/* Text & Pillars Column */}
        <div className="min-w-0 max-w-full lg:col-span-5">
          <SectionHeading
            index="04"
            eyebrow="Who We Are"
            titleId="about-title"
            title="About Tiharqa Film Production"
          />

          <Reveal delay={160}>
            <p className="mt-5 text-sm text-navy/85 sm:mt-6 sm:text-base lg:text-lg">
              {SITE.legalName} is an Ethiopian film production company committed to bringing powerful
              Amharic stories, rich cultural narratives, and cinematic excellence to the screen.
            </p>
            <p className="mt-3 text-sm text-navy/85 sm:mt-4 sm:text-base lg:text-lg">
              One principle guides everything we create:{" "}
              <strong className="font-bold text-navy">Stories That Move. Cinema That Connects</strong>.
            </p>
          </Reveal>

          {/* CREATIVE MOBILE BENTO PILLARS (< lg) */}
          <div className="mt-6 block space-y-3 lg:hidden">
            <div className="grid gap-2.5 sm:grid-cols-3">
              {PILLARS.map((p) => (
                <div
                  key={p.num}
                  className="cut-tr relative border border-navy/15 bg-white p-4 shadow-xs [--cut:18px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-extrabold text-signal">
                      {p.num}
                    </span>
                    <span className="border border-navy/10 bg-mist px-1.5 py-0.5 font-display text-[0.6rem] font-bold text-navy/70 uppercase">
                      {p.tag}
                    </span>
                  </div>
                  <h4 className="mt-2 font-display text-sm font-extrabold text-navy">
                    {p.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-navy/70">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Studio Identity Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 border border-navy/15 bg-white px-2.5 py-1 font-display text-[0.65rem] font-bold text-navy uppercase">
                <MapPin className="size-3 text-signal" /> Addis Ababa Studio
              </span>
              <span className="inline-flex items-center gap-1.5 border border-navy/15 bg-white px-2.5 py-1 font-display text-[0.65rem] font-bold text-navy uppercase">
                <Clapperboard className="size-3 text-signal" /> 4K Native Master
              </span>
              <span className="inline-flex items-center gap-1.5 border border-navy/15 bg-white px-2.5 py-1 font-display text-[0.65rem] font-bold text-navy uppercase">
                <Award className="size-3 text-signal" /> Festival Acclaimed
              </span>
            </div>
          </div>

          {/* DESKTOP PILLARS LIST (lg:block) */}
          <ul className="mt-7 hidden space-y-3 lg:block">
            {PILLARS.map((p, i) => (
              <Reveal as="li" key={p.num} delay={220 + i * 70} className="flex items-start gap-3 text-[0.95rem] font-medium text-navy">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center bg-signal text-white">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                <span>
                  <strong className="font-extrabold text-navy">{p.title}:</strong> {p.text}
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={380} className="mt-8 sm:mt-10">
            <a href="#process" className="btn btn-outline-dark w-full justify-center sm:w-auto">
              Explore Our Process
              <ArrowRight className="arrow size-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        {/* Studio Image Column */}
        <Reveal variant="right" className="min-w-0 max-w-full lg:col-span-7">
          <div className="relative">
            <div aria-hidden="true" className="absolute -top-3 -right-3 h-1/2 w-1/2 border-2 border-navy/20 sm:-top-4 sm:-right-4" />
            <div className="cut-bl relative aspect-4/3 overflow-hidden bg-navy [--cut:54px] sm:aspect-16/11 sm:[--cut:84px]">
              <div ref={parallaxRef} className="absolute inset-x-0 -top-8 -bottom-8 will-change-transform sm:-top-10 sm:-bottom-10">
                <img
                  src={IMAGES.about.src}
                  srcSet={IMAGES.about.srcSet}
                  sizes="(min-width: 1024px) 55vw, 95vw"
                  width={IMAGES.about.width}
                  height={IMAGES.about.height}
                  alt={IMAGES.about.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-navy via-navy/55 to-navy/25" />
              <div className="on-dark absolute right-0 bottom-0 left-0 p-5 sm:p-10">
                <div className="flex gap-3 sm:gap-4">
                  <span aria-hidden="true" className="w-1.5 shrink-0 bg-signal" />
                  <p className="font-display text-xl leading-[1.05] font-extrabold tracking-tight text-white uppercase sm:text-4xl lg:text-5xl">
                    Cinema
                    <span className="block text-signal">with</span>
                    Soul
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
