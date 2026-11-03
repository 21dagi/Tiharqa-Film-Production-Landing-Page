import { TRUST_ITEMS } from "@/data/site";
import { Reveal } from "./Reveal";

export function TrustStrip() {
  return (
    <section id="trust" aria-label="What Tiharqa Film Production stands for" className="w-full border-b border-navy/10 bg-white">
      <div className="container-x">
        {/* 1 row of 4 logos on mobile; full details on tablet & desktop */}
        <ul className="grid grid-cols-4 divide-x divide-navy/10">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal
                as="li"
                key={item.label}
                delay={i * 60}
                className="group flex flex-col items-center justify-center py-3.5 sm:flex-row sm:items-start sm:justify-start sm:gap-4 sm:py-7 lg:px-6 xl:px-8"
              >
                <span className="relative grid size-10 shrink-0 place-items-center border border-navy/15 text-navy transition-colors duration-300 group-hover:border-signal group-hover:text-signal sm:size-12">
                  <Icon className="size-4.5 sm:size-5" strokeWidth={1.75} aria-hidden="true" />
                  <span aria-hidden="true" className="absolute -top-px -right-px size-1.5 bg-signal sm:size-2" />
                </span>

                {/* Texts hidden on mobile (only logos in 1 row); displayed on tablet & desktop */}
                <div className="hidden min-w-0 sm:block">
                  <p className="font-display text-[0.75rem] font-extrabold tracking-[0.1em] text-navy uppercase sm:text-[0.8rem]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-navy/70 lg:text-sm">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
