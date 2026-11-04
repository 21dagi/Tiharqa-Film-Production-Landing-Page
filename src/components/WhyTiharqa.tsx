import { useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { IMAGES, SITE, WHY_ITEMS } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";
import { cn } from "@/utils/cn";

export function WhyTiharqa() {
  const [activeMobilePillar, setActiveMobilePillar] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollPillar = (direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardStep = 290;
    el.scrollBy({ left: direction === "next" ? cardStep : -cardStep, behavior: "smooth" });
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const cardStep = 290;
    const idx = Math.min(
      Math.max(0, Math.round(el.scrollLeft / cardStep)),
      WHY_ITEMS.length - 1
    );
    setActiveMobilePillar(idx);
  };

  return (
    <section
      id="why-tiharqa"
      aria-labelledby="why-title"
      className="relative w-full max-w-full overflow-hidden bg-white pt-4 pb-14 sm:pt-8 sm:pb-20 lg:pt-12 lg:pb-24"
    >
      <div className="container-x grid gap-8 lg:grid-cols-12 lg:gap-14 xl:gap-20">
        {/* Content Column: Order 1 on mobile (so heading is immediately visible without white gap), Order 2 on desktop */}
        <div className="order-1 min-w-0 max-w-full lg:order-2 lg:col-span-7">
          <SectionHeading
            index="03"
            eyebrow="Why Choose Tiharqa"
            titleId="why-title"
            title="Cinema Is More Than Pictures. It's Culture."
            intro="Anyone can point a camera. Tiharqa Film Production focuses on the craft behind the lens: cultural truth, narrative depth, visual poetry, and authentic Ethiopian storytelling."
          />

          {/* CREATIVE MOBILE CARDS REEL (< lg) */}
          <div className="mt-6 block min-w-0 max-w-full lg:hidden">
            <div className="flex items-center justify-between pb-2.5 text-xs font-display font-bold text-navy/70 uppercase">
              <span>
                Pillars <span className="text-signal">{activeMobilePillar + 1}</span> of {WHY_ITEMS.length}
              </span>
              {/* Mobile Arrows to scroll cards */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scrollPillar("prev")}
                  disabled={activeMobilePillar === 0}
                  aria-label="Previous pillar"
                  className="grid size-8 place-items-center border border-navy/20 bg-white text-navy transition-colors hover:border-signal hover:text-signal disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollPillar("next")}
                  disabled={activeMobilePillar === WHY_ITEMS.length - 1}
                  aria-label="Next pillar"
                  className="grid size-8 place-items-center border border-navy/20 bg-white text-navy transition-colors hover:border-signal hover:text-signal disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>

            {/* Touch-Pan-X Horizontal Swipeable Track */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pt-1 pb-3 touch-pan-x overscroll-x-contain"
            >
              {WHY_ITEMS.map((item, i) => (
                <div
                  key={item.title}
                  className="w-[80vw] min-w-[260px] max-w-[310px] shrink-0 snap-start cut-tr border border-navy/15 bg-mist p-5 shadow-xs transition-all [--cut:22px]"
                >
                  <div className="flex items-center justify-between border-b border-navy/10 pb-2.5">
                    <span className="font-display text-xl font-extrabold text-signal">
                      0{i + 1}
                    </span>
                    <span className="border border-navy/15 bg-white px-2 py-0.5 font-display text-[0.6rem] font-bold tracking-wider text-navy/70 uppercase">
                      Pillar 0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-2.5 font-display text-sm font-extrabold text-navy sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-navy/75">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Clickable Dot Indicator */}
            <div className="mt-2 flex items-center justify-center gap-1.5" aria-hidden="true">
              {WHY_ITEMS.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => {
                    const el = scrollRef.current;
                    if (el) el.scrollTo({ left: i * 290, behavior: "smooth" });
                  }}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === activeMobilePillar ? "w-6 bg-signal" : "w-1.5 bg-navy/20"
                  )}
                  aria-label={`Jump to pillar ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* DESKTOP ANIMATED LIST (lg:block) */}
          <ol className="mt-10 hidden border-b border-navy/12 lg:block">
            {WHY_ITEMS.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 45} className="group relative">
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-px w-0 bg-signal transition-[width] duration-500 group-hover:w-full"
                />
                <div className="grid grid-cols-[3.25rem_1fr] items-start gap-x-3 border-t border-navy/12 py-5 transition-transform duration-300 group-hover:translate-x-1.5">
                  <span aria-hidden="true" className="pt-0.5 font-display text-xl font-extrabold text-signal">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy">{item.title}</h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-navy/70">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          {/* Actions */}
          <Reveal className="mt-6 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center sm:gap-6 lg:mt-10">
            <a href="#contact" className="btn btn-red justify-center">
              Start a Production Dialogue
              <ArrowRight className="arrow size-4" aria-hidden="true" />
            </a>
            <a
              href={SITE.phoneHref}
              className="inline-flex min-h-11 items-center justify-center gap-3 font-display text-sm font-bold tracking-wide text-navy hover:text-signal sm:justify-start"
            >
              <Phone className="size-4 text-signal" aria-hidden="true" />
              Call {SITE.phone}
            </a>
          </Reveal>
        </div>

        {/* Visual Column: Order 2 on mobile, Order 1 on desktop */}
        <Reveal variant="left" className="order-2 min-w-0 max-w-full lg:order-1 lg:col-span-5 lg:self-start lg:sticky lg:top-28">
          <div className="relative mx-auto max-w-md pb-4 pl-4 sm:pb-5 sm:pl-5 lg:max-w-none">
            <div aria-hidden="true" className="absolute bottom-0 left-0 h-3/4 w-3/4 border-2 border-signal" />
            <div className="cut-tr relative aspect-4/5 bg-navy [--cut:48px] sm:[--cut:72px]">
              <img
                src={IMAGES.why.src}
                srcSet={IMAGES.why.srcSet}
                sizes="(min-width: 1024px) 40vw, 90vw"
                width={IMAGES.why.width}
                height={IMAGES.why.height}
                alt={IMAGES.why.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-navy/80 via-navy/10 to-navy/25" />
              <div className="absolute bottom-0 left-0 max-w-[88%] border-l-4 border-signal bg-white py-3 pr-5 pl-3.5 sm:py-4 sm:pr-8 sm:pl-5">
                <p className="font-display text-[0.62rem] font-bold tracking-[0.22em] text-navy/70 uppercase sm:text-[0.65rem]">
                  Our Promise
                </p>
                <p className="mt-1 font-display text-base leading-tight font-extrabold text-navy sm:text-xl">
                  Stories That Move. Cinema That Connects.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
