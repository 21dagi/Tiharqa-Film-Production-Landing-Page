import { ArrowRight, ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/data/site";
import { LogoStacked } from "./Logo";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Films", href: "#films" },
  { label: "Upcoming", href: "#upcoming" },
  { label: "Vision", href: "#why-tiharqa" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Studio", href: "#technology" },
  { label: "Contact", href: "#contact" },
] as const;

export function Footer() {
  return (
    <footer className="on-dark relative w-full max-w-full overflow-hidden bg-navy pb-24 text-white md:pb-0">
      <div aria-hidden="true" className="h-1.5 bg-signal" />
      <div
        aria-hidden="true"
        className="sec-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,transparent,#000_30%,transparent)]"
      />

      <div className="container-x relative py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand Info Column */}
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="cut-tr inline-block bg-white p-3.5 [--cut:18px] sm:p-5 sm:[--cut:22px]">
              <LogoStacked className="w-44 sm:w-56" />
            </div>
            <p className="mt-5 font-display text-base font-extrabold tracking-[0.04em] uppercase sm:text-lg">
              {SITE.legalName}
            </p>
            <p className="mt-1.5 font-display text-[0.68rem] font-bold tracking-[0.2em] text-signal uppercase sm:text-xs">
              Stories That Move. Cinema That Connects.
            </p>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/75 sm:text-sm">
              Ethiopian Amharic film production company specializing in theatrical storytelling,
              feature film development, and high-end cinematic productions in Addis Ababa.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
              <MapPin className="size-3.5 text-signal shrink-0" />
              <span>Bole Sub-City, Addis Ababa, Ethiopia</span>
            </div>
          </div>

          {/* Navigation Links Column: 2-column grid on mobile & tablet */}
          <nav aria-label="Footer Navigation" className="lg:col-span-3 lg:col-start-7">
            <h2 className="font-display text-xs font-bold tracking-[0.2em] text-white/70 uppercase">
              Navigate
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-1 sm:space-y-1">
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex min-h-10 items-center gap-2 text-sm font-medium text-white transition-colors hover:text-white/75 sm:min-h-11 sm:gap-3 sm:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="block h-0.5 w-2 bg-signal transition-all duration-300 group-hover:w-5 sm:w-3 sm:group-hover:w-6"
                    />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & Studio Office Column */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h2 className="font-display text-xs font-bold tracking-[0.2em] text-white/70 uppercase">
              Studio Contact
            </h2>
            <ul className="mt-4 space-y-2.5 sm:space-y-2">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex min-h-10 items-center gap-3 font-display text-base font-bold transition-colors hover:text-white/75 sm:min-h-11 sm:text-lg"
                >
                  <span className="grid size-8 shrink-0 place-items-center border border-white/20 bg-white/5 text-signal">
                    <Phone className="size-3.5" aria-hidden="true" />
                  </span>
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="inline-flex min-h-10 items-center gap-3 text-xs font-medium break-all transition-colors hover:text-white/75 sm:min-h-11 sm:text-sm"
                >
                  <span className="grid size-8 shrink-0 place-items-center border border-white/20 bg-white/5 text-signal">
                    <Mail className="size-3.5" aria-hidden="true" />
                  </span>
                  {SITE.email}
                </a>
              </li>
            </ul>

            <div className="mt-5 sm:mt-6">
              <a href="#contact" className="btn btn-red-dark w-full justify-center text-center sm:w-auto">
                Inquire About Production
                <ArrowRight className="arrow size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer Copyright Bar */}
      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-center text-xs text-white/70 sm:flex-row sm:text-left sm:text-sm">
          <p>© 2026 Tiharqa Film Production. All Rights Reserved. Addis Ababa, Ethiopia.</p>
          <a
            href="#home"
            className="inline-flex min-h-10 items-center gap-2 font-display text-xs font-bold tracking-[0.16em] text-white uppercase hover:text-white/75 sm:min-h-11"
          >
            Back to top
            <ArrowUp className="size-3.5 text-signal" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
