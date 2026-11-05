import { useEffect, useId, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  ChevronLeft,
  ChevronRight,
  Clock,
  Play,
  Volume2,
  X,
} from "lucide-react";
import { cn } from "@/utils/cn";
import { PRODUCED_FILMS, type FilmItem, type MovieCategory } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";

const FILTER_TABS: { id: MovieCategory; label: string }[] = [
  { id: "all", label: "All Works" },
  { id: "trending", label: "Trending & Acclaimed" },
  { id: "features", label: "Amharic Features" },
  { id: "biographies", label: "Biographical Cinema" },
  { id: "documentaries", label: "Cultural Docs" },
];

type Props = {
  onSelectFilm: (title: string) => void;
};

export function ProducedFilms({ onSelectFilm }: Props) {
  const [activeTab, setActiveTab] = useState<MovieCategory>("all");
  const [selectedFilm, setSelectedFilm] = useState<FilmItem | null>(null);
  const [isPlayingTeaser, setIsPlayingTeaser] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const modalId = useId();

  const filteredFilms =
    activeTab === "all"
      ? PRODUCED_FILMS
      : PRODUCED_FILMS.filter((film) => film.categories.includes(activeTab));

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    const cardEl = el.firstElementChild as HTMLElement | null;
    const cardStep = cardEl ? cardEl.offsetWidth + 24 : 350;
    const idx = Math.min(
      Math.max(0, Math.round(scrollLeft / cardStep)),
      Math.max(0, filteredFilms.length - 1)
    );
    setActiveCardIndex(idx);
  };

  useEffect(() => {
    checkScroll();
    const handleResize = () => checkScroll();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [filteredFilms]);

  // Close modal on Escape key
  useEffect(() => {
    if (!selectedFilm) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedFilm(null);
        setIsPlayingTeaser(false);
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedFilm]);

  const scrollToCard = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardEl = el.children[index] as HTMLElement | undefined;
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    } else {
      const cardStep = 350;
      el.scrollTo({ left: index * cardStep, behavior: "smooth" });
    }
    setActiveCardIndex(index);
  };

  const scrollPrev = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardEl = el.firstElementChild as HTMLElement | null;
    const step = cardEl ? cardEl.offsetWidth + 24 : 350;
    el.scrollBy({ left: -step, behavior: "smooth" });
  };

  const scrollNext = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardEl = el.firstElementChild as HTMLElement | null;
    const step = cardEl ? cardEl.offsetWidth + 24 : 350;
    el.scrollBy({ left: step, behavior: "smooth" });
  };

  const handleInquire = (film: FilmItem) => {
    onSelectFilm(`${film.title} (${film.amharicTitle}) — Screening / Distribution`);
    setSelectedFilm(null);
    setIsPlayingTeaser(false);
  };

  return (
    <section id="films" aria-labelledby="films-title" className="relative w-full max-w-full overflow-hidden bg-mist py-16 sm:py-24 lg:py-28">
      <div className="container-x lg:max-w-[86rem] xl:max-w-[90rem]">
        {/* Header with Title & Intro */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="01"
            eyebrow="Produced Cinema & Filmography"
            titleId="films-title"
            title="Stories Brought to the Screen"
            intro="Explore Tiharqa Film Production's repertoire of Amharic theatrical feature films, biographical dramas, and auteur cultural documentaries."
          />
        </div>

        {/* Responsive Category Navigation Bar */}
        <div className="mt-10 border-b border-navy/15 pb-4">
          <div className="flex w-full items-center gap-2 overflow-x-auto pb-1 no-scrollbar sm:gap-2.5 sm:flex-wrap">
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              const count =
                tab.id === "all"
                  ? PRODUCED_FILMS.length
                  : PRODUCED_FILMS.filter((f) => f.categories.includes(tab.id)).length;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id);
                    setActiveCardIndex(0);
                    if (scrollRef.current) {
                      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                    }
                  }}
                  aria-pressed={isActive}
                  className={cn(
                    "relative inline-flex min-h-11 shrink-0 whitespace-nowrap items-center gap-2.5 px-4 sm:px-5 py-2 font-display text-xs font-extrabold tracking-wider uppercase transition-all duration-300",
                    isActive
                      ? "bg-navy text-white shadow-md"
                      : "border border-navy/10 bg-white text-navy/75 hover:bg-navy/5 hover:text-navy",
                  )}
                >
                  <span>{tab.label}</span>
                  <span
                    className={cn(
                      "grid size-5 shrink-0 place-items-center rounded-full text-[0.65rem] font-bold",
                      isActive ? "bg-signal text-white" : "bg-navy/10 text-navy/70",
                    )}
                  >
                    {count}
                  </span>
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-[17px] h-0.5 bg-signal"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pagination, Count, & Sideways Motion Controls */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          {/* Left: Film count & Page indicator */}
          <div className="flex items-center gap-3">
            <span className="font-display text-xs font-extrabold tracking-wider text-navy uppercase">
              Film <span className="text-signal">{String(activeCardIndex + 1).padStart(2, "0")}</span> / {String(filteredFilms.length).padStart(2, "0")}
            </span>
            <span className="hidden h-4 w-px bg-navy/20 sm:inline-block" aria-hidden="true" />
            <span className="hidden text-xs text-navy/60 sm:inline-block">
              Horizontal Film Reel · {filteredFilms.length} {filteredFilms.length === 1 ? "film" : "films"}
            </span>
          </div>

          {/* Right: Motion Cue Indicator, Dots & Arrow Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Motion Cue Indicator with animated sideways bounce */}
            {canScrollRight && (
              <button
                type="button"
                onClick={scrollNext}
                className="group inline-flex items-center gap-2 border border-signal/40 bg-signal/10 px-3 py-1.5 font-display text-[0.68rem] font-extrabold tracking-wider text-navy uppercase transition-all hover:bg-signal hover:text-white"
                aria-label="Scroll across to discover more films"
              >
                <span>Slide sideways</span>
                <ArrowRight className="size-3.5 text-signal transition-transform duration-300 group-hover:text-white group-hover:translate-x-1 animate-bounce-x" aria-hidden="true" />
              </button>
            )}

            {/* Clickable Pagination Dots */}
            <div className="hidden sm:flex items-center gap-1.5" role="tablist" aria-label="Film carousel pagination">
              {filteredFilms.map((film, i) => (
                <button
                  key={film.id}
                  type="button"
                  role="tab"
                  aria-selected={i === activeCardIndex}
                  aria-label={`Jump to film ${i + 1}: ${film.title}`}
                  onClick={() => scrollToCard(i)}
                  className={cn(
                    "h-2 transition-all duration-300 rounded-full",
                    i === activeCardIndex
                      ? "w-8 bg-signal"
                      : "w-2 bg-navy/20 hover:bg-navy/40"
                  )}
                />
              ))}
            </div>

            {/* Previous / Next Arrow Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                disabled={!canScrollLeft}
                aria-label="Previous film"
                className="grid size-10 place-items-center border border-navy/20 bg-white text-navy transition-all hover:border-signal hover:bg-navy hover:text-white disabled:pointer-events-none disabled:opacity-30 shadow-xs"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                disabled={!canScrollRight}
                aria-label="Next film"
                className="grid size-10 place-items-center border border-navy/20 bg-white text-navy transition-all hover:border-signal hover:bg-navy hover:text-white disabled:pointer-events-none disabled:opacity-30 shadow-xs"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Film Reel Viewport */}
        <div className="relative mt-6">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pt-2 pb-6 px-1 focus:outline-none"
            tabIndex={0}
            aria-label="Produced Amharic Films list"
          >
            {filteredFilms.map((film, idx) => (
              <div
                key={film.id}
                className="w-[84vw] min-w-[280px] max-w-[320px] sm:w-[330px] sm:min-w-[330px] md:w-[350px] md:min-w-[350px] lg:w-[365px] lg:min-w-[365px] xl:w-[380px] xl:min-w-[380px] shrink-0 snap-start"
              >
                <div
                  className="group cut-tr relative flex h-full flex-col overflow-hidden border border-navy/15 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-signal hover:shadow-[0_20px_35px_-10px_rgba(6,6,48,0.22)] [--cut:32px]"
                  tabIndex={0}
                  role="button"
                  aria-haspopup="dialog"
                  aria-label={`View details for ${film.title}`}
                  onClick={() => {
                    setSelectedFilm(film);
                    setIsPlayingTeaser(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedFilm(film);
                      setIsPlayingTeaser(false);
                    }
                  }}
                >
                  {/* 3:4 Cinematic Poster Container (Proportionately compact) */}
                  <div className="relative aspect-3/4 w-full overflow-hidden bg-navy">
                    <img
                      src={film.poster}
                      alt={`${film.title} (${film.amharicTitle}) movie poster`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Subtle cinema vignette gradient */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-linear-to-t from-navy via-navy/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75"
                    />

                    {/* Top badges */}
                    <div className="absolute top-2.5 right-2.5 left-2.5 flex items-center justify-between gap-2 sm:top-3 sm:right-3 sm:left-3">
                      <span className="bg-signal px-2 py-0.5 font-display text-[0.62rem] font-bold tracking-widest text-white uppercase shadow-xs sm:px-2.5 sm:py-1 sm:text-[0.65rem]">
                        {film.genre.split("/")[0].trim()}
                      </span>
                      <span className="border border-white/30 bg-navy/70 px-2 py-0.5 font-display text-[0.65rem] font-semibold text-white/90 backdrop-blur-xs sm:text-[0.68rem]">
                        {film.year}
                      </span>
                    </div>

                    {/* Center hover play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="grid size-12 sm:size-14 place-items-center rounded-full border-2 border-white/80 bg-navy/80 text-white shadow-xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                        <Play className="ml-0.5 size-5 sm:size-6 fill-white text-white" aria-hidden="true" />
                      </span>
                    </div>

                    {/* Bottom poster overlay info */}
                    <div className="absolute right-0 bottom-0 left-0 p-4 sm:p-4.5 text-white">
                      <p className="font-display text-[0.68rem] font-bold tracking-widest text-signal uppercase sm:text-xs">
                        {film.amharicTitle}
                      </p>
                      <h3 className="mt-0.5 font-display text-lg font-extrabold tracking-tight text-white drop-shadow-sm sm:mt-1 sm:text-xl lg:text-2xl">
                        {film.title}
                      </h3>
                      <div className="mt-1.5 flex items-center gap-2.5 text-xs text-white/80 sm:mt-2">
                        <span className="inline-flex items-center gap-1 text-[0.7rem] sm:text-xs">
                          <Clock className="size-3 text-signal" aria-hidden="true" />
                          {film.runtime}
                        </span>
                        <span>•</span>
                        <span className="truncate text-[0.7rem] sm:text-xs">{film.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom card action strip */}
                  <div className="flex flex-1 flex-col justify-between border-t border-navy/10 bg-white p-4 sm:p-4.5">
                    <p className="line-clamp-2 text-xs leading-relaxed text-navy/75">
                      {film.synopsis}
                    </p>

                    <div className="mt-3 flex items-center justify-between border-t border-navy/10 pt-2.5 sm:mt-3.5">
                      <span className="inline-flex items-center gap-1 text-[0.7rem] font-semibold text-navy/60 sm:text-[0.72rem]">
                        <Award className="size-3.5 text-signal" aria-hidden="true" />
                        Acclaimed
                      </span>
                      <span className="inline-flex items-center gap-1 font-display text-[0.68rem] font-bold tracking-wider text-signal uppercase transition-transform duration-300 group-hover:translate-x-1 sm:text-xs">
                        Explore film
                        <ArrowRight className="size-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Cinematic Movie Detail Modal */}
      {selectedFilm && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${modalId}-title`}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-navy/90 p-4 backdrop-blur-md sm:p-6 lg:p-8"
        >
          {/* Modal Window */}
          <div className="cut-tr relative max-h-[92vh] w-full max-w-4xl overflow-hidden border border-white/20 bg-navy text-white shadow-2xl [--cut:44px]">
            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => {
                setSelectedFilm(null);
                setIsPlayingTeaser(false);
              }}
              aria-label="Close details"
              className="absolute top-4 right-4 z-20 grid size-10 place-items-center border border-white/20 bg-navy/80 text-white transition-colors hover:border-signal hover:bg-signal"
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            <div className="grid overflow-y-auto lg:grid-cols-12 max-h-[90vh]">
              {/* Left Column: Big Poster & Trailer Player Simulation */}
              <div className="relative bg-navy lg:col-span-5">
                {!isPlayingTeaser ? (
                  <div className="relative aspect-2/3 w-full overflow-hidden">
                    <img
                      src={selectedFilm.poster}
                      alt={selectedFilm.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy via-transparent to-transparent" />
                    <button
                      type="button"
                      onClick={() => setIsPlayingTeaser(true)}
                      className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-navy/40 transition-colors hover:bg-navy/60"
                    >
                      <span className="grid size-16 place-items-center rounded-full border-2 border-white bg-signal text-white shadow-xl transition-transform hover:scale-110">
                        <Play className="ml-1 size-7 fill-white text-white" aria-hidden="true" />
                      </span>
                      <span className="font-display text-xs font-bold tracking-widest text-white uppercase">
                        Play Cinema Teaser
                      </span>
                    </button>
                  </div>
                ) : (
                  /* Simulated Cinema Trailer Preview */
                  <div className="flex h-full min-h-[380px] flex-col justify-between border-r border-white/10 bg-black p-5">
                    <div className="flex items-center justify-between text-xs text-white/70">
                      <span className="flex items-center gap-2">
                        <span className="pulse-dot" />
                        PREVIEW PLAYBACK
                      </span>
                      <span>24 FPS · 4K MASTER</span>
                    </div>

                    <div className="my-auto text-center">
                      <p className="font-display text-xs font-bold text-signal uppercase tracking-widest">
                        {selectedFilm.amharicTitle}
                      </p>
                      <h4 className="mt-1 font-display text-2xl font-extrabold text-white">
                        {selectedFilm.title}
                      </h4>
                      <p className="mt-2 text-xs text-white/60 italic">
                        "{selectedFilm.tagline}"
                      </p>
                      <div className="mt-6 flex items-center justify-center gap-1.5">
                        {[18, 32, 22, 40, 28, 16, 35, 20].map((h, i) => (
                          <span
                            key={i}
                            className="signal-bar w-1.5 bg-signal"
                            style={{ height: h, ["--d" as string]: `${i * 120}ms` }}
                          />
                        ))}
                      </div>
                      <p className="mt-3 font-display text-[0.65rem] tracking-widest text-white/50 uppercase">
                        Amharic Stereo Dialogue · Original Score
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-3 text-xs">
                      <button
                        type="button"
                        onClick={() => setIsPlayingTeaser(false)}
                        className="font-display font-bold text-signal uppercase hover:underline"
                      >
                        Return to poster
                      </button>
                      <span className="flex items-center gap-1 text-white/60">
                        <Volume2 className="size-3.5 text-signal" />
                        Surround Audio
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: In-depth Film Synopsis & Inquiries */}
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-signal px-2.5 py-1 font-display text-[0.65rem] font-bold tracking-widest text-white uppercase">
                      {selectedFilm.genre}
                    </span>
                    <span className="border border-white/20 bg-white/5 px-2.5 py-1 font-display text-[0.68rem] font-semibold text-white/80">
                      {selectedFilm.year}
                    </span>
                    <span className="border border-white/20 bg-white/5 px-2.5 py-1 font-display text-[0.68rem] font-semibold text-white/80">
                      {selectedFilm.runtime}
                    </span>
                  </div>

                  <p className="mt-4 font-display text-sm font-bold tracking-widest text-signal uppercase">
                    {selectedFilm.amharicTitle}
                  </p>
                  <h3 id={`${modalId}-title`} className="mt-1 font-display text-2xl font-extrabold text-white sm:text-3xl">
                    {selectedFilm.title}
                  </h3>

                  <p className="mt-2 text-xs font-semibold text-white/60 italic">
                    "{selectedFilm.tagline}"
                  </p>

                  <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/80">
                    <p>{selectedFilm.synopsis}</p>
                  </div>

                  {/* Credits & Specifications */}
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-4 text-xs">
                    <div>
                      <dt className="font-display font-bold text-white/50 uppercase tracking-wider">
                        Director & Unit
                      </dt>
                      <dd className="mt-1 font-semibold text-white">{selectedFilm.director}</dd>
                    </div>
                    <div>
                      <dt className="font-display font-bold text-white/50 uppercase tracking-wider">
                        Language
                      </dt>
                      <dd className="mt-1 font-semibold text-white">Amharic (English Subtitles)</dd>
                    </div>
                    <div>
                      <dt className="font-display font-bold text-white/50 uppercase tracking-wider">
                        Featured Cast
                      </dt>
                      <dd className="mt-1 text-white/80">{selectedFilm.cast}</dd>
                    </div>
                    <div>
                      <dt className="font-display font-bold text-white/50 uppercase tracking-wider">
                        Status
                      </dt>
                      <dd className="mt-1 font-semibold text-signal">{selectedFilm.status}</dd>
                    </div>
                  </div>

                  {/* Awards / Laurels strip */}
                  {selectedFilm.awards && (
                    <div className="mt-5 flex items-center gap-3 border border-white/10 bg-white/5 p-3 text-xs text-white/90">
                      <Award className="size-5 shrink-0 text-signal" aria-hidden="true" />
                      <span>{selectedFilm.awards}</span>
                    </div>
                  )}
                </div>

                {/* Modal CTA footer */}
                <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row">
                  <a
                    href="#contact"
                    onClick={() => handleInquire(selectedFilm)}
                    className="btn btn-red-dark flex-1"
                  >
                    Inquire on Screening / Rights
                    <ArrowRight className="arrow size-4" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedFilm(null);
                      setIsPlayingTeaser(false);
                    }}
                    className="btn btn-outline-light sm:w-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
