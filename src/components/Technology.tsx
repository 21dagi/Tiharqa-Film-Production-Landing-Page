import { ArrowRight } from "lucide-react";
import { IMAGES, TECH_ITEMS } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";

function Bracket({ className }: { className: string }) {
  return <span aria-hidden="true" className={`absolute size-5 sm:size-6 border-white/70 ${className}`} />;
}

function Tag({ className, children }: { className: string; children: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute flex items-center gap-1.5 sm:gap-2 border border-white/25 bg-navy/80 px-2 sm:px-2.5 py-1 sm:py-1.5 font-display text-[0.55rem] sm:text-[0.62rem] font-bold tracking-[0.16em] sm:tracking-[0.18em] text-white uppercase backdrop-blur-sm ${className}`}
    >
      <span className="pulse-dot size-1.5" />
      {children}
    </span>
  );
}

export function Technology() {
  return (
    <section
      id="technology"
      aria-labelledby="tech-title"
      className="on-dark relative overflow-hidden bg-navy py-16 text-white sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="sec-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_85%_30%,#000,transparent_70%)]"
      />

      <div className="container-x relative grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
        {/* Left Column: Heading & Gear Deck */}
        <div className="min-w-0 max-w-full lg:col-span-6">
          <SectionHeading
            tone="dark"
            index="06"
            eyebrow="Cinema Technology & Studio"
            titleId="tech-title"
            title="Artistry Powered by Modern Cinema Technology"
            intro="Visionary directors and cinematographers remain at the heart of our craft. Advanced 4K/6K cinema sensors, prime optics, sculpted lighting, and a dedicated DaVinci Resolve color suite empower them to create breathtaking visuals."
          />

          {/* CREATIVE MOBILE BENTO GEAR DECK (< sm) */}
          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:hidden">
            {TECH_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="cut-tr group border border-white/15 bg-white/5 p-3.5 transition-all hover:border-signal hover:bg-white/10 [--cut:14px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid size-8 place-items-center border border-white/20 bg-navy text-white transition-colors group-hover:border-signal group-hover:bg-signal">
                      <Icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="font-display text-[0.6rem] font-extrabold text-signal">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-2.5 font-display text-xs font-extrabold tracking-wide text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[0.68rem] leading-relaxed text-white/70">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* TABLET & DESKTOP 2-COLUMN GRID (sm:grid) */}
          <ul className="mt-10 hidden grid-cols-2 gap-x-8 gap-y-7 sm:grid">
            {TECH_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal as="li" key={item.title} delay={i * 70} className="group flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center border border-white/25 text-white transition-colors duration-300 group-hover:border-signal group-hover:bg-signal">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-[0.95rem] font-bold tracking-wide text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/75">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>

          <Reveal delay={200} className="mt-8 sm:mt-10">
            <a href="#contact" className="btn btn-red-dark w-full justify-center sm:w-auto">
              Discuss Your Film Project
              <ArrowRight className="arrow size-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        {/* Right Column: Viewfinder & Studio Interface Visual */}
        <Reveal variant="right" className="min-w-0 max-w-full lg:col-span-6">
          <div className="relative">
            <div className="cut-tr relative aspect-4/3 overflow-hidden bg-navy [--cut:48px] sm:aspect-5/4 sm:[--cut:64px] lg:aspect-4/4">
              <img
                src={IMAGES.technology.src}
                srcSet={IMAGES.technology.srcSet}
                sizes="(min-width: 1024px) 45vw, 95vw"
                width={IMAGES.technology.width}
                height={IMAGES.technology.height}
                alt={IMAGES.technology.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-navy/55" />
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-navy via-transparent to-navy/50" />

              {/* Interface overlay */}
              <div
                aria-hidden="true"
                className="sec-grid absolute inset-0 opacity-60"
              />
              <div aria-hidden="true" className="absolute inset-3 sm:inset-6">
                <Bracket className="top-0 left-0 border-t-2 border-l-2" />
                <Bracket className="top-0 right-0 border-t-2 border-r-2" />
                <Bracket className="bottom-0 left-0 border-b-2 border-l-2" />
                <Bracket className="right-0 bottom-0 border-r-2 border-b-2" />
                <span className="sweep-line absolute right-0 left-0 h-0.5 bg-signal/80 shadow-[0_0_18px_rgba(245,4,6,0.6)]" />
              </div>

              <Tag className="top-6 left-6 sm:top-12 sm:left-12">4K RAW</Tag>
              <Tag className="top-1/2 right-6 sm:right-12">Anamorphic</Tag>
              <Tag className="bottom-16 left-6 sm:bottom-24 sm:left-12">DaVinci Color</Tag>

              <div aria-hidden="true" className="absolute right-4 bottom-4 flex items-end gap-1.5 sm:right-10 sm:bottom-10">
                <span className="mr-2 font-display text-[0.55rem] sm:text-[0.62rem] font-bold tracking-[0.18em] text-white/80 uppercase">
                  Studio Pipeline
                </span>
                {[14, 22, 30, 20, 26].map((h, i) => (
                  <span
                    key={i}
                    className="signal-bar w-1 sm:w-1.5 bg-signal"
                    style={{ height: h, ["--d" as string]: `${i * 180}ms` }}
                  />
                ))}
              </div>
            </div>
            <div aria-hidden="true" className="absolute -bottom-2.5 -left-2.5 h-1/3 w-1/3 border-b-2 border-l-2 border-signal sm:-bottom-3 sm:-left-3" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
